import './App.css';
import  { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { Physics } from '@react-three/cannon';
import { Model } from './models/Scene';
import { Universe } from './components/universe';
import { Token } from './components/token'

const Loading = () => {
  return(
        <Html as='div'center>
          <div className='loader'>
          <p className="bottom-space" />
            <div className="planet"></div>
            <h3 style={{'fontSize':'20px'}}>loading...🤖
            <br /> approx 60s
            </h3>
            <h3 style={{'fontSize':'14px'}}>
              <br /> ◀ swipe ►
            </h3>
          </div>
      </Html>
  );
};


function App() {

  return (
    <div className="screen">
      <div className='main'>
          <Token />
      </div>
      <div className='canvas dark'>
          <Canvas camera={{position: [0, 100, 150], zoom: 1, fov:80}}>
          <OrbitControls />
          <Universe />
          <ambientLight intensity={0.75} />
          <directionalLight intensity={0.5} position={[10, 20, 50]} angle={0.75} />
          <directionalLight intensity={0.5} position={[-10, 20, 30]} angle={0.75} />
          <spotLight position={[10, 20, 30]} angle={0.75} penumbra={1} intensity={2} castShadow />
          <Physics>
            <Suspense fallback={<Loading />}>
                <Model />
            </Suspense>
          </Physics>
          </Canvas>
      </div>
    </div>
  );
}
export default App;