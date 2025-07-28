import { useState, Suspense, useRef, useEffect } from "react";
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
import { useSpring as useReactSpring, a } from "@react-spring/three";
import * as THREE from "three";
import { useCursorFollow } from "@/hooks/use-cursor-follow";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { CursorFollow } from "../ui/cursor-follow";

interface Skill {
  name: string;
  logoUrl: string;
  color: string;
}
interface KeyProps {
  skill: Skill;
  position: [number, number, number];
  logoTexture: THREE.Texture;
  activeKey: string | null;
  setActiveKey: (name: string | null) => void;
}
interface TechKeyboard3DProps {
  skills: Skill[];
}

function Key({
  skill,
  position,
  logoTexture,
  activeKey,
  setActiveKey,
}: KeyProps) {
  const isActive = activeKey === skill.name;
  const positionY = position[1];

  const [spring, api] = useReactSpring(() => ({
    y: position[1],
    config: { mass: 1, tension: 200, friction: 20 },
  }));

  useEffect(() => {
    if (isActive) {
      api.start({ y: positionY - 0.2 });
    } else {
      api.start({ y: positionY });
    }
  }, [isActive, positionY, api]);

  return (
    <a.group
      position-x={position[0]}
      position-y={spring.y}
      position-z={position[2]}
      onPointerOver={() => setActiveKey(skill.name)}
      onPointerOut={() => setActiveKey(null)}
    >
      <RoundedBox args={[1.3, 1, 1.3]} radius={0.3} smoothness={4}>
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

function KeyboardScene({
  skills,
  activeKey,
  setActiveKey,
}: TechKeyboard3DProps & {
  activeKey: string | null;
  setActiveKey: (name: string | null) => void;
}) {
  const { theme } = useTheme();

  const keysPerRow = 4;
  const keySpacing = 1.5;
  const rowSpacing = 1.7;

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
            activeKey={activeKey}
            setActiveKey={setActiveKey}
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

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        target={[-0.85, 3, 0]}
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const { mouseX, mouseY } = useCursorFollow(containerRef);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
    mass: 0.8,
  });

  const cameraPosition: [number, number, number] = [-3, 12, 5];

  const handlePointerLeave = () => {
    setActiveKey(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] lg:h-[600px] cursor-grab"
      onPointerLeave={handlePointerLeave}
    >
      <AnimatePresence>
        {activeKey && (
          <motion.div
            className="absolute pointer-events-none z-10"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <CursorFollow text={activeKey} mouseX={mouseX} mouseY={mouseY} />
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: cameraPosition, fov: 30 }}
      >
        <Suspense fallback={null}>
          <KeyboardScene
            skills={skills}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
