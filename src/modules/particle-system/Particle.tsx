import { Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from 'three';
import { ParticleRef } from "./ParticleSystem";

type ParticleProps = {
    particles: ParticleRef[];
    currentParticle: ParticleRef;
    GRAVITY: number;
};

const Particle = ({ particles, currentParticle, GRAVITY }: ParticleProps) => {
    const [speedVector, setSpeedVector] = useState(new THREE.Vector3(0, 0, 0));

    useEffect(() => {
        // set random color
        currentParticle.ref.current.material.color = new THREE.Color(Math.random(), Math.random(), Math.random());
    }, []);

    useFrame(() => {
        const gravityVector = new THREE.Vector3(0, 0, 0);
        particles?.forEach((otherParticleRef) => {
            const otherParticleMass = otherParticleRef.mass;
            const currentParticleMass = currentParticle.mass;
            const otherParticle = otherParticleRef.ref.current as THREE.Mesh;
            if (otherParticle !== currentParticle.ref.current && otherParticle) {
                const dx = otherParticle.position.x - currentParticle.ref.current.position.x;
                const dy = otherParticle.position.y - currentParticle.ref.current.position.y;
                const dz = otherParticle.position.z - currentParticle.ref.current.position.z;

                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                const force = GRAVITY * otherParticleMass * currentParticleMass / (distance * distance);

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
                currentParticle.ref.current.position.x += newSpeedVector.x;
                currentParticle.ref.current.position.y += newSpeedVector.y;
                currentParticle.ref.current.position.z += newSpeedVector.z;
                return newSpeedVector;
            });
        });
    });

    return (
        <Sphere args={[0.05, 16, 16]} ref={currentParticle.ref} position={currentParticle.initialPosition} />
    );
};

export default Particle;
