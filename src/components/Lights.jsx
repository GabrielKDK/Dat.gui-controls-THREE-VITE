import React from 'react'
import * as dat from 'dat.gui'
import { useEffect, useRef } from 'react'
const Lights = ()=>{
    const light = useRef()
    useEffect(()=>{
        const gui = new dat.GUI({width:400})
        const debugObject = {
            lightIntensity: 5,
        }
        gui.add(debugObject, 'lightIntensity')
            .min(0)
            .max(10)
            .step(.05)
            .name('Light intensity')
            .onChange(()=>{
                light.current.intensity = debugObject.lightIntensity
        })
        return()=>{
            gui.destroy()
        }
    }, [])
    return(
        <directionalLight ref={light}position={[10,10,10]} castShadow={true}/>
    )
}
export default Lights
