import { createRef, useEffect, useState } from 'react';
import { Vector3 } from 'three';
import Particle from './Particle';

export type ParticleRef = {
    ref: React.RefObject<any>;
    mass: number;
    initialPosition: Vector3;
};

export type HyperParams = {
    GRAVITY: number;
    BASE_MASS: number;
    MASS_RANGE: number;
    POSITION_RANGE: number;
};

const ParticleSystem = ({ hyperParams }: {
    hyperParams: HyperParams;
}) => {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 200 }, (_, index) => {
            return {
                ref: createRef(),
                mass: hyperParams.BASE_MASS + Math.random() * hyperParams.MASS_RANGE,
                initialPosition: new Vector3(
                    Math.random() * hyperParams.POSITION_RANGE - hyperParams.POSITION_RANGE / 2,
                    Math.random() * hyperParams.POSITION_RANGE - hyperParams.POSITION_RANGE / 2,
                    Math.random() * hyperParams.POSITION_RANGE - hyperParams.POSITION_RANGE / 2
                ),
            };
        });

        setParticles(newParticles);
    }, [hyperParams]);

    return (
        <>
            {particles.map((particle, index) => (
                <Particle key={index}
                    GRAVITY={hyperParams.GRAVITY}
                    particles={particles}
                    currentParticle={particle} />
            ))}
        </>
    );
};

export default ParticleSystem;
