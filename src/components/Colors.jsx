import React from 'react'
import * as dat from 'dat.gui'
import { useEffect, useRef } from 'react'
const Colors = ()=>{
    const color = useRef()
    useEffect(()=>{
        const gui = new dat.GUI({width:400})
        const debugObject = {
            colorMaterial: '#00ff00',
        }
        gui.addColor(debugObject, 'colorMaterial')
    
            .onChange(()=>{
                color.current.material.color.set( debugObject.colorMaterial)
        })
        return()=>{
            gui.destroy()
        }
    }, [])
    return(
        <mesh ref={color}>
            <boxBufferGeometry args={[1,1,1]}position={[0,0,-3]}/>
            <meshStandardMaterial color={'#00ff00'}/>
        </mesh>
    )
}
export default Colors
