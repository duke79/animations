import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ASSETS } from '../../assets/assets';

const RaceTrack = () => {      
    const gltf = useLoader(GLTFLoader, ASSETS.raceTrack);

    return <primitive object={gltf.scene} />;
};

export default RaceTrack;
