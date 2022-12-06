import logo from './logo.svg';
import  { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon';
import './App.css';
import { Model } from './models/Scene';

function Box(){
  const [ref, api] = useBox(() => ({mass: 1, position: [0, 1, 0]}))
  return(
    <mesh 
    onClick={() => {
      api.velocity.set(0,2,0);
    }}
    ref={ref} position={[0,1,0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function Plane(){
  const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0]}))
  return(
    <mesh position={[0,-75,0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000,1000]} />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  )
}

function App() {
  return (
    <Canvas camera={{position: [0, 75, 250], zoom: 1}}>
      <OrbitControls />
      <Stars radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.75} />
      <directionalLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[10, 20, 30]} angle={0.75} />
      <spotLight position={[10, 20, 30]} angle={0.75} penumbra={1} intensity={2} castShadow />
      <Physics>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Physics>
      
    </Canvas>
  );
}

export default App;
