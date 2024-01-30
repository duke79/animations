import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
// import { useGLTF } from '@react-three/drei';

const HoverCar = () => {
    const gltf = useLoader(GLTFLoader, 'src/assets/3d/free_cyberpunk_hovercar.glb');

    // Check if materials have textures and apply them
    gltf.scene.traverse((node: any) => {
        console.log(node.material);
        if (node.isMesh && node.material.map) {
            console.log(node.material.map);
            // You can customize the material properties here
            node.material.map.encoding = THREE.sRGBEncoding;
            node.material.map.anisotropy = 16;
            node.material.needsUpdate = true;
        }
    });

    gltf.scene.scale.set(0.04, 0.04, 0.04);
    gltf.scene.position.set(0, 0.031, 0);
    gltf.scene.rotation.set(0, 1.7, 0);

    return <primitive object={gltf.scene} />;
};

export default HoverCar;