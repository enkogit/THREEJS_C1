import React, { useRef } from "react";
import {  useFrame } from "@react-three/fiber";
import { Stars } from '@react-three/drei';

export function Universe(props){
    const starRef = useRef();
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        starRef.current.rotation.y = elapsedTime / -20;
      });
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight color="#f6f3ea" position={[10, 0, 10]} intensity={5} />
            <Stars ref={starRef} radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
        </>
    );
}