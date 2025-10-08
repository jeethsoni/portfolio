"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Color, Fog, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

export function Globe({ globeConfig = {}, data = [] }) {
  const globeRef = useRef(null);
  const groupRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = {
    pointSize: 4,
    globeColor: "#2563EB",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#0b3ea7",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 1.0,
    ...globeConfig,
  };

  // Initialize globe once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;
    const mat = globeRef.current.globeMaterial();
    mat.color = new Color(defaultProps.globeColor || "#1e3a8a");
    mat.emissive = new Color(defaultProps.emissive || "#0a1a33");
    mat.emissiveIntensity = defaultProps.emissiveIntensity ?? 0.05;
    mat.shininess = defaultProps.shininess ?? 0.2;
  }, [
    isInitialized,
    defaultProps.globeColor,
    defaultProps.emissive,
    defaultProps.emissiveIntensity,
    defaultProps.shininess,
  ]);

  const filteredPoints = useMemo(() => {
    if (!data?.length) return [];
    const pts = [];
    for (let i = 0; i < data.length; i++) {
      const arc = data[i];
      pts.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      pts.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: arc.color,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }
    return pts.filter(
      (v, i, a) => a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );
  }, [data, defaultProps.pointSize]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    let cancelled = false;
    (async () => {
      const mod = await import("@/data/globe.json"); // lazy import
      if (cancelled) return;
      const countries = mod.default;

      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => defaultProps.polygonColor);

      globeRef.current
        .arcsData(data)
        .arcStartLat((d) => d.startLat * 1)
        .arcStartLng((d) => d.startLng * 1)
        .arcEndLat((d) => d.endLat * 1)
        .arcEndLng((d) => d.endLng * 1)
        .arcColor((e) => e.color)
        .arcAltitude((e) => e.arcAlt * 1)
        .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
        .arcDashLength(defaultProps.arcLength)
        .arcDashInitialGap((e) => e.order * 1)
        .arcDashGap(15)
        .arcDashAnimateTime(() => defaultProps.arcTime);

      globeRef.current
        .pointsData(filteredPoints)
        .pointColor((e) => e.color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(2);

      globeRef.current
        .ringsData([])
        .ringColor(() => defaultProps.polygonColor)
        .ringMaxRadius(defaultProps.maxRings)
        .ringPropagationSpeed(RING_PROPAGATION_SPEED)
        .ringRepeatPeriod(
          (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
        );
    })();

    return () => {
      cancelled = true;
    };
  }, [
    isInitialized,
    data,
    filteredPoints,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data?.length) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      const idxs = genRandomNumbers(
        0,
        data.length,
        Math.max(1, Math.floor((data.length * 4) / 5))
      );

      const ringsData = data
        .filter((_, i) => idxs.includes(i))
        .map((d) => ({ lat: d.startLat, lng: d.startLng, color: d.color }));

      globeRef.current.ringsData(ringsData);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0); // transparent bg
  }, [gl, size]);

  return null;
}

export function World(props) {
  const { globeConfig = {} } = props;
  const cfg = {
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    ...globeConfig,
  };

  return (
    <Canvas
      dpr={[1, 1.5]} // cap DPR to keep GPU cost reasonable
      gl={{ antialias: true, powerPreference: "low-power" }}
      camera={{ fov: 50, near: 180, far: 1800, position: [0, 0, 0] }}
      onCreated={({ scene }) => {
        scene.fog = new Fog(0xffffff, 400, 2000);
      }}
    >
      <WebGLRendererConfig />
      <ambientLight color={cfg.ambientLight} intensity={0.6} />
      <directionalLight color={cfg.directionalLeftLight} position={new Vector3(-400, 100, 400)} />
      <directionalLight color={cfg.directionalTopLight} position={new Vector3(-200, 500, 200)} />
      <pointLight color={cfg.pointLight} position={new Vector3(-200, 500, 200)} intensity={0.8} />
      <Globe {...props} />
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex) {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthand, (_, r, g, b) => r + r + g + g + b + b);
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count && count > 0) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}
