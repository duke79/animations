import { Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from 'three';

type ParticleProps = {
    initialPosition: [number, number, number];
    particles: any[];
    meshRef: any;
    GRAVITY: number;
};

const Particle = ({ initialPosition: position, particles, meshRef, GRAVITY }: ParticleProps) => {
    const [speedVector, setSpeedVector] = useState(new THREE.Vector3(0, 0, 0));

    useEffect(() => {
        // set random color
        meshRef.current.material.color = new THREE.Color(Math.random(), Math.random(), Math.random());
    }, []);

    useFrame(() => {
        const gravityVector = new THREE.Vector3(0, 0, 0);
        particles?.forEach((otherParticleRef) => {
            const otherParticle = otherParticleRef.current;
            if (otherParticle !== meshRef.current && otherParticle) {
                const dx = otherParticle.position.x - meshRef.current.position.x;
                const dy = otherParticle.position.y - meshRef.current.position.y;
                const dz = otherParticle.position.z - meshRef.current.position.z;

                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                const force = GRAVITY / (distance * distance);

                // meshRef.current.position.x += force * dx;
                // meshRef.current.position.y += force * dy;
                // meshRef.current.position.z += force * dz;

                // update gravity vector
                gravityVector.x += force * dx;
                gravityVector.y += force * dy;
                gravityVector.z += force * dz;
            }
            // update speed
            setSpeedVector((speedVector) => {
                const newSpeedVector = speedVector.clone().add(gravityVector);
                // update position
                meshRef.current.position.x += newSpeedVector.x;
                meshRef.current.position.y += newSpeedVector.y;
                meshRef.current.position.z += newSpeedVector.z;
                return newSpeedVector;
            });
        });
    });

    return (
        <Sphere args={[0.5, 16, 16]} ref={meshRef} position={position} />
    );
};

export default Particle;
