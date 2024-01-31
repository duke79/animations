import { OrbitControls } from "@react-three/drei";
import HoverCar from "../modules/hover-car/HoverCar";
import { Canvas } from "react-three-fiber";
import { useRef } from "react";
import RaceTrack from "../modules/race-track/RaceTrack";

const HoverCarPage = () => {
    const canvasRef: any = useRef();

    return <Canvas
        ref={canvasRef}
        style={{ width: '100vw', height: '100vh' }}
        camera={{
            fov: 55, position: [
                -1.6708526988139725,
                0.8120617796947767,
                0.17087966575176392
            ],
            rotation: [
                -1.8202957936930064,
                -0.9333711685908157,
                -1.8778409980573376
            ]
        }} // Adjust the camera position as needed
    >
        <ambientLight intensity={0.5} />
        {/* <directionalLight position={[10, 10, 5]} /> */}
        <directionalLight
            position={[3.3, 1.0, 4.4]}
            castShadow
            intensity={Math.PI * 2}
        />
        <OrbitControls />

        {/* <Sphere position={[0, 0, 0]} /> */}
        <HoverCar scale={0.02}/>
        <RaceTrack />
    </Canvas>;
};

export default HoverCarPage;
