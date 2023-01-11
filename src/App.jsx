import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import Scene from "./components/Scene"
import Lights from "./components/Lights"
import Colors from "./components/Colors"
import Scale from "./components/Scale"
import Shadows from "./components/Shadows"
function App() {
  
  return (
    <>
    <div
      className="Container"
      style={{width:"100%", height:"100vh"}}
      >
      <Canvas>
        <Scene/>
        <OrbitControls/>
        <Lights/>
        <Colors/>
        <Scale/>
      </Canvas>
    </div>
    </>
  )
}

export default App;
