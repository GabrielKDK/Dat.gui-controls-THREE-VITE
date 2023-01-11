import React from 'react'
import * as dat from 'dat.gui'
import { useEffect, useRef } from 'react'
const Scale = ()=>{
    const scale = useRef()
    useEffect(()=>{
        const gui = new dat.GUI({width:400})
        const debugObject = {
            scale: 1,
        }
        gui.add(debugObject, 'scale', {
            'small': 1,
            'medium': 2,
            'big': 3,

        })
            .onChange(()=>{
                scale.current.scale.set( 
                    debugObject.scale,
                    debugObject.scale,
                    debugObject.scale
                    )
        })
        .name('Scale')
        return()=>{
            gui.destroy()
        }
    }, [])
    return(
        <mesh ref={scale}>
            <boxBufferGeometry args={[1,1,1]} position={[3,0,0]}/>
            <meshStandardMaterial/>
        </mesh>
    )
}
export default Scale
