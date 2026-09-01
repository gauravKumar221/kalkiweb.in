"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
const CursorContext = React.createContext(null);
function useCursor() {
    const context = React.useContext(CursorContext);
    if (!context) {
        throw new Error("useCursor must be used within a CursorProvider.");
    }
    return context;
}
function CursorProvider({ children, className, }) {
    const [position, setPosition] = React.useState({ x: -100, y: -100 });
    const containerRef = React.useRef(null);
    const handleMouseMove = (event) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
        }
    };
    const handleMouseLeave = () => {
        setPosition({ x: -100, y: -100 });
    };
    const contextValue = React.useMemo(() => position, [position]);
    return (<CursorContext.Provider value={contextValue}>
      <div ref={containerRef} className={cn("relative h-full w-full", className)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </CursorContext.Provider>);
}
function Cursor({ children, className }) {
    const { x, y } = useCursor();
    return (<div className={cn("pointer-events-none absolute left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2", className)} style={{
            transform: `translate3d(${x}px, ${y}px, 0)`,
        }}>
      {children}
    </div>);
}
function CursorFollow({ children, className, ease = 0.1, }) {
    const { x, y } = useCursor();
    const ref = React.useRef(null);
    React.useEffect(() => {
        if (ref.current) {
            const transform = (newX, newY) => {
                if (!ref.current)
                    return;
                ref.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
            };
            const lerp = (start, end, t) => {
                return start * (1 - t) + end * t;
            };
            let animationFrame;
            const animate = () => {
                if (!ref.current)
                    return;
                const rect = ref.current.getBoundingClientRect();
                const parentRect = ref.current.parentElement?.getBoundingClientRect();
                if (parentRect) {
                    // Target is the mouse position relative to the parent.
                    // Current position is the element's top/left relative to the parent.
                    const currentX = ref.current.offsetLeft + rect.width / 2;
                    const currentY = ref.current.offsetTop + rect.height / 2;
                    const newX = lerp(currentX, x, ease);
                    const newY = lerp(currentY, y, ease);
                    transform(newX - rect.width / 2, newY - rect.height / 2);
                }
                animationFrame = requestAnimationFrame(animate);
            };
            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [x, y, ease]);
    return (<div ref={ref} className={cn("pointer-events-none absolute left-0 top-0", className)}>
      {children}
    </div>);
}
export { Cursor, CursorFollow, CursorProvider };
