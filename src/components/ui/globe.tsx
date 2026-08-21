
"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  forwardRef,
} from "react";
import GlobeGl from "react-globe.gl";

// Augment the type definitions for react-globe.gl
declare module "react-globe.gl" {
  interface GlobeMethods {
    pointOfView: (pov: { lat: number; lng: number; altitude: number }, transitionMs?: number) => void;
    scene: () => THREE.Scene;
    camera: () => THREE.Camera;
    controls: () => any;
  }
}

const World = forwardRef(function World(
  {
    globeConfig,
    data,
  }: {
    globeConfig: any;
    data: any;
  },
  ref
) {
  const globeRef = useRef<any | undefined>();
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (globeRef.current) {
      const globe = globeRef.current;
      globe.pointOfView(globeConfig.initialPosition, 500);
      const scene = globe.scene();
      const ambientLight = scene.children.find(
        (obj: any) => obj.type === "AmbientLight"
      );
      if (ambientLight) {
        ambientLight.color = new (require("three").Color)(
          globeConfig.ambientLight
        );
      }
    }
  }, [globeReady, globeConfig]);

  const globeMaterial = useMemo(() => {
    if (typeof window === "undefined") return undefined;
    const material = new (require("three").MeshPhongMaterial)();
    material.bumpScale = 10;
    const tl = new (require("three").TextureLoader)();
    tl.load("/img/earth-water.png", (texture: any) => {
      material.specularMap = texture;
    });
    material.specular = new (require("three").Color)("grey");
    material.shininess = globeConfig.shininess;
    return material;
  }, [globeConfig]);

  return (
    <GlobeGl
      ref={globeRef}
      onGlobeReady={() => setGlobeReady(true)}
      globeMaterial={globeMaterial}
      atmosphereColor={globeConfig.atmosphereColor}
      atmosphereAltitude={globeConfig.atmosphereAltitude}
      hexPolygonsData={[]}
      arcsData={data}
      arcColor={"color"}
      arcAltitude={"arcAlt"}
      arcDashLength={globeConfig.arcLength}
      arcDashGap={4}
      arcDashAnimateTime={globeConfig.arcTime}
      arcsTransitionDuration={globeConfig.arcTime}
      arcDashInitialGap={(e: any) => e.order * 1}
      {...globeConfig}
    />
  );
});

export { World };
