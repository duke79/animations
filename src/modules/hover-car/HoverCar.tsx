// import React, { useRef } from 'react';
// import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const HoverCar = (props: any) => {
    const groupRef: any = useRef();
    const gltf = useLoader(GLTFLoader, 'src/assets/3d/free_cyberpunk_hovercar/scene.gltf');
    // const { nodes, materials } = useGLTF('src/assets/3d/free_cyberpunk_hovercar/scene.gltf');
    // console.log({ nodes, materials });

    // // // return a sphere mesh
    // return (
    //     <mesh castShadow receiveShadow />
    //     // <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    // );

    return <primitive object={gltf.scene} />;

    // return (
    //     // <primitive object={gltf.scene} />
    //     <group ref={groupRef} {...props} dispose={null} scale={[0.1, 0.1, 0.1]}>
    //         <mesh castShadow receiveShadow geometry={(nodes.car as any).geometry} material={materials['cdp_body']} />
    //         {/* <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials['Material.002']} /> */}
    //     </group>
    // );
};

export default HoverCar;