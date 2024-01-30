import { Canvas } from 'react-three-fiber';
import './App.css';
import Sphere from './modules/sphere/Sphere';
import HoverCar from './modules/hover-car/HoverCar';

function App() {

  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        {/* <Sphere position={[0, 0, 0]} /> */}
        <HoverCar />
      </Canvas>
    </div>
  )
}

export default App
