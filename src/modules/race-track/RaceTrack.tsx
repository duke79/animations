import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useFrame } from 'react-three-fiber';

const RaceTrack = () => {
    useFrame(({ camera }) => {
        console.log('Camera properties:', camera);
    });
      
    const gltf = useLoader(GLTFLoader, 'src/assets/3d/race_trackkarting_track_based_on_south_garda.glb');

    return <primitive object={gltf.scene} />;
};

export default RaceTrack;
