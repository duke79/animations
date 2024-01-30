// Sphere.js
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

interface SphereProps {
    position: [number, number, number];
    }


const Sphere = ({ position }: SphereProps) => {
  const sphereRef: any = useRef();

  useFrame(() => {
    if (!sphereRef.current) return;
    // Update sphere position or perform any other animations here
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Sphere;
