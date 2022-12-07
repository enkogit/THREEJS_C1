import React, { useRef } from "react";
import MoonMap from '../assets/textures/moonmap4k.jpg';
import CloudsMap from '../assets/textures/dogecloud.png';
import { TextureLoader } from "three";
import { useLoader, useFrame } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// function Model({ url, ...props }) {
//     const gltf = useGLTF(url)
//     return <primitive object={gltf.scene} {...props} />
//   }

export function Moon(props){
    const [moonMap,  cloudMap] = useLoader(TextureLoader, [MoonMap, CloudsMap]);
    const moonRef = useRef();
    const cloudsRef = useRef();
    // const spaceshipRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        moonRef.current.rotation.y = elapsedTime / -10;
        cloudsRef.current.rotation.y = elapsedTime / 2;
        // spaceshipRef.current.rotation.y = elapsedTime / 2;
      });
    return (
    <>
        <ambientLight intensity={0.3} />
        <pointLight color="#f6f3ea" position={[100, 30, 70]} intensity={2.5} />
        <mesh ref={cloudsRef} position={[0, 0, 0]} >
            <sphereGeometry args={[19.25, 32, 32]} />
            <meshPhongMaterial
            map={cloudMap}
            opacity={0.5}
            depthWrite={true}
            transparent={true}
            />
        </mesh>
        <mesh ref={moonRef} rotation-z={-0.15} position={[0, 0, 0]}>
            <sphereGeometry args={[18, 64, 64]} />
            <meshStandardMaterial map={moonMap}  metalness={0.98} roughnes={0.25} />
        </mesh>
        <group>
            {/* <Model  rotation-z={1.75} position={[35.5,15,0]} scale={0.0010} url='/cybertruck.gltf' />  */}
        </group>
    </>
    );
}