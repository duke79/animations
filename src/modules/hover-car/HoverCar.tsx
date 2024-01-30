import React, { useRef, useEffect, useState, useCallback } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface HoverCarProps { }

const HoverCar = (props: HoverCarProps) => {
    const gltf = useLoader(GLTFLoader, 'src/assets/3d/free_cyberpunk_hovercar.glb');
    const carRef = useRef<THREE.Object3D>(null);
    const [direction, setDirection] = useState(new THREE.Vector3(1, 0, 0));
    const [speed, setSpeed] = useState(0.004);
    const [position, setPosition] = useState<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
    const updateCar = useCallback((direction: THREE.Vector3) => {
        setPosition((position) => {
            const newPosition = position.clone().add(direction.clone().multiplyScalar(speed));
            gltf.scene.position.copy(newPosition);
            gltf.scene.rotation.y = Math.atan2(direction.z, direction.x) - Math.PI / 2;
            return newPosition;
        });
    }, [speed]);
    const turnCar = useCallback((side: 'LEFT' | 'RIGHT') => {
        setDirection((direction) => {
            // set direction
            const newDirection = direction.clone();
            if (side === 'LEFT') {
                newDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 50);
            } else {
                newDirection.applyAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 50);
            }
            return newDirection;
        });
    }, [direction]);
    const updateCamera = useCallback((camera: THREE.Camera) => {
        camera.position.copy(position.clone().add(new THREE.Vector3(0, 1.5, 0)));
        camera.lookAt(position);
    }, [position]);

    useEffect(() => {
        if (carRef.current) {
            // scale to 0.04
            carRef.current.scale.set(0.04, 0.04, 0.04);
        }
    }, [carRef.current]);

    // Check if materials have textures and apply them
    useEffect(() => {
        gltf.scene.traverse((node: any) => {
            if (node.isMesh && node.material.map) {
                node.material.map.encoding = THREE.sRGBEncoding;
                node.material.map.anisotropy = 16;
                node.material.needsUpdate = true;
            }
        });
    }, [gltf.scene]);

    useFrame(({ camera }) => {
        if (carRef.current) {
            updateCar(direction);
            updateCamera(camera);
        }
    });

    const speedUpDown = (delta: number) => {
        setSpeed((speed) => speed + delta);
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowUp':
                speedUpDown(0.001);
                break;
            case 'ArrowDown':
                speedUpDown(-0.001);
                break;
            case 'ArrowLeft':
                turnCar('LEFT');
                break;
            case 'ArrowRight':
                turnCar('RIGHT');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return <primitive ref={carRef} object={gltf.scene} />;
};

export default HoverCar;
