import { Canvas } from 'react-three-fiber';
import './App.css';
import Sphere from './modules/sphere/Sphere';

function App() {

  return (
    <div>
      <Canvas>
        <Sphere position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default App
