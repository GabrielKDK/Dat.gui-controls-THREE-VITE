import React from 'react'
import * as dat from 'dat.gui'
import { useEffect, useRef } from 'react'
const Shadows = ()=>{
    const shadow = useRef()
    useEffect(()=>{
        const gui = new dat.GUI({width:400})
        const debugObject = {
            castShadow: true,
        }
        gui.add(debugObject, 'castShadow')
            .onChange(()=>{
                shadow.current.castShadow=debugObject.castShadow
            })
        return()=>{
            gui.destroy()
        }
    }, [])
    return(
        <>
        <mesh position={[0,0.5,0]} castShadow={true}>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={'#ff0000'}/>
        </mesh>
        <mesh receiveShadow={true}>
            <PlaneBufferGeometry args={[5,5]}/>
            <meshStandardMaterial color={'#00ff00'}/>
        </mesh>
        <directionalLight ref={shadow}position={[10,10,10]} castShadow={true}/>
        </>

        )
    }
export default Shadows
