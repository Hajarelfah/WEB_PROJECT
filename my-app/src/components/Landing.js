import React from 'react'
import { Canvas } from '@react-three/fiber';
import Home from './Home';
import '../index.css'


function Landing() {
  return (
    
   
    <Canvas  style={{ height: '100vh' }}  >
   
   <Home />
    </Canvas>
  
  )
}

export default Landing