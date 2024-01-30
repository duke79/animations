import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';

const HoverCar = () => {
    const gltf = useLoader(GLTFLoader, 'src/assets/3d/free_cyberpunk_hovercar/scene.gltf');

    return <primitive object={gltf.scene} />;
};

export default HoverCar;