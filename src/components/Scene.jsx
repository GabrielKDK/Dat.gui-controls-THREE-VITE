import React from 'react'
import * as dat from 'dat.gui'
import { useEffect, useRef } from 'react'
const Scene = ()=>{
    const mesh = useRef(null)
    useEffect(()=>{
        const gui = new dat.GUI({width:400})
        const debugObject = { position:{
            x:0,
            y:0,
            z:0,
        },
        }
        gui.add(debugObject.position,'x')
            .min(-4)
            .max(4)
            .step(0.5)
            .onChange(()=>{
                mesh.current.position.x = debugObject.position.x
            })
            .name("Pos y")
        gui.add(debugObject.position,'y')
            .min(-4)
            .max(4)
            .step(0.5)
            .onChange(()=>{
                mesh.current.position.y = debugObject.position.y
            })
            .name("Pos z")
        gui.add(debugObject.position,'z')
            .min(-4)
            .max(4)
            .step(0.5)
            .onChange(()=>{
                mesh.current.position.z = debugObject.position.z
            })
            .name("Pos x")
        return()=>{
            gui.destroy()
        }
    }, [])
    return(
        <mesh ref={mesh}>
            <boxBufferGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={'#0000ff'}/>
        </mesh>
        
    )
}
export default Scene
