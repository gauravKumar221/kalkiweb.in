"use client";

import { useEffect, useRef, useState } from "react";

export default function LottiePlayer({
  src = "/lotefile/samsung-mockup.json",
  loop = true,
  autoplay = true,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);
  const animInstanceRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Helper to ensure lottie script is loaded
    const ensureLottieLoaded = () => {
      return new Promise((resolve, reject) => {
        if (typeof window !== "undefined" && window.lottie) {
          return resolve(window.lottie);
        }

        const scriptId = "lottie-web-script";
        let script = document.getElementById(scriptId);

        if (script) {
          if (window.lottie) {
            return resolve(window.lottie);
          }
          script.addEventListener("load", () => resolve(window.lottie));
          script.addEventListener("error", reject);
          return;
        }

        script = document.createElement("script");
        script.id = scriptId;
        script.src = "/js/lottie.min.js";
        script.async = true;

        script.onload = () => {
          if (window.lottie) {
            resolve(window.lottie);
          } else {
            // Fallback to CDN if local didn't register window.lottie
            loadFallbackCdn().then(resolve).catch(reject);
          }
        };

        script.onerror = () => {
          // Fallback to CDN
          loadFallbackCdn().then(resolve).catch(reject);
        };

        document.body.appendChild(script);
      });
    };

    const loadFallbackCdn = () => {
      return new Promise((resolve, reject) => {
        const cdnScript = document.createElement("script");
        cdnScript.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
        cdnScript.async = true;
        cdnScript.onload = () => resolve(window.lottie);
        cdnScript.onerror = reject;
        document.body.appendChild(cdnScript);
      });
    };

    const startAnimation = async () => {
      try {
        const lottie = await ensureLottieLoaded();
        if (!isMounted || !containerRef.current || !lottie) return;

        // Fetch animation data
        const res = await fetch(src);
        if (!res.ok) {
          throw new Error(`Failed to fetch Lottie JSON: ${res.statusText}`);
        }
        const animationData = await res.json();

        if (!isMounted || !containerRef.current) return;

        // Clean up previous instance if any
        if (animInstanceRef.current) {
          animInstanceRef.current.destroy();
        }

        animInstanceRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: loop,
          autoplay: autoplay,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid meet",
            clearCanvas: true,
            progressiveLoad: true,
            hideOnTransparent: true,
          },
        });

        animInstanceRef.current.addEventListener("DOMLoaded", () => {
          if (isMounted) {
            setIsReady(true);
          }
        });

        animInstanceRef.current.addEventListener("data_failed", () => {
          if (isMounted) {
            setHasError(true);
          }
        });
      } catch (err) {
        console.error("Lottie animation error:", err);
        if (isMounted) {
          setHasError(true);
        }
      }
    };

    startAnimation();

    return () => {
      isMounted = false;
      if (animInstanceRef.current) {
        animInstanceRef.current.destroy();
        animInstanceRef.current = null;
      }
    };
  }, [src, loop, autoplay]);

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={style}
    >
      {!isReady && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <div
        ref={containerRef}
        className={`w-full h-full transition-opacity duration-500 flex items-center justify-center ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
