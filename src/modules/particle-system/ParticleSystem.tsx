import { createRef, useEffect, useRef, useState } from 'react';
import Particle from './Particle';

const POSITION_RANGE = 5;
const GRAVITY = 0.0000001; // Gravitational constant
const ParticleSystem = () => {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        for (let i = 0; i < 200; i++) {
            setParticles((particles) => [...particles, createRef()]);
        }
    }, []);

    return (
        <>
            {particles.map((particle, index) => (
                <Particle key={index}
                    GRAVITY={GRAVITY}
                    particles={particles}
                    meshRef={particle}
                    initialPosition={[Math.random()*POSITION_RANGE, Math.random()*POSITION_RANGE, Math.random()*POSITION_RANGE]}/>
            ))}
        </>
    );
};

export default ParticleSystem;
