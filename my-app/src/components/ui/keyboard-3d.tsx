// "use client";

import { useState, useLayoutEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import {
  Decal,
  useTexture,
  OrbitControls,
  RoundedBox,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import * as THREE from "three";

// useWindowSize hook tetap sama
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

interface Skill {
  name: string;
  logoUrl: string;
  color: string;
}
interface KeyProps {
  skill: Skill;
  position: [number, number, number];
  logoTexture: THREE.Texture;
}
interface TechKeyboard3DProps {
  skills: Skill[];
}

// Komponen Key tidak perlu diubah
function Key({ skill, position, logoTexture }: KeyProps) {
  const [spring, api] = useSpring(() => ({
    y: position[1],
    config: { mass: 1, tension: 200, friction: 20 },
  }));

  const handlePointerOver = () => api.start({ y: position[1] - 0.15 });
  const handlePointerOut = () => api.start({ y: position[1] });

  return (
    <a.group position={position} position-y={spring.y}>
      <RoundedBox
        args={[1.3, 1, 1.3]}
        radius={0.3}
        smoothness={4}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={0.05}
          roughness={0.1}
          metalness={0.1}
        />
        <Decal
          position={[0, 0.36, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.7, 0.7, 0.7]}
        >
          <meshStandardMaterial
            map={logoTexture}
            polygonOffset
            polygonOffsetFactor={-10}
            transparent
            emissive={"#000000"}
          />
        </Decal>
      </RoundedBox>
    </a.group>
  );
}

// Hapus semua logika mobile dari KeyboardScene
function KeyboardScene({ skills }: TechKeyboard3DProps) {
  const { theme } = useTheme();

  // Menghapus logika mobile, karena scene ini hanya akan tampil di desktop
  const keysPerRow = 5;
  const keySpacing = 1.5;
  const rowSpacing = 1.5;

  const logoUrls = skills.map((skill) => skill.logoUrl);
  const textures = useTexture(logoUrls);

  return (
    <>
      <directionalLight position={[0, 0, 15]} intensity={2} />
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />

      {skills.map((skill, index) => {
        const row = Math.floor(index / keysPerRow);
        const col = index % keysPerRow;
        const x = (col - (keysPerRow - 1) / 2) * keySpacing;
        const z = row * -rowSpacing;

        return (
          <Key
            key={skill.name}
            skill={skill}
            position={[x, 0, z]}
            logoTexture={textures[index]}
          />
        );
      })}

      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.6}
        scale={10}
        blur={1}
        far={1}
        resolution={512}
        color={theme === "dark" ? "#fff" : "#000000"}
      />

      {/* Menghapus logika mobile dari OrbitControls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        target={[-0.55, 1, 0]}
        enableRotate={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 3}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 0}
      />
    </>
  );
}

export function TechKeyboard3D({ skills }: TechKeyboard3DProps) {
  const [width] = useWindowSize();
  const isMobile = width < 768;

  // ✨ Jika mobile, jangan render apapun (return null)
  if (isMobile) {
    return null;
  }

  // Menghapus logika mobile untuk cameraPosition
  const cameraPosition: [number, number, number] = [-4, 12, 8];

  // Kode ini hanya akan berjalan di desktop
  return (
    <div className="w-full h-[500px] lg:h-[600px] cursor-grab">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: cameraPosition, fov: 30 }}
      >
        <Suspense fallback={null}>
          <KeyboardScene skills={skills} />
        </Suspense>
      </Canvas>
    </div>
  );
}
