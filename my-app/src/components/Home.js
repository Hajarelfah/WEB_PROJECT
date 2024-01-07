import React from 'react'
import {useEffect} from 'react'
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring,Resize,Center} from '@react-three/drei'

import baffle from 'baffle'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import { Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import '../index.css';
import { Color } from 'three';
import { Robot } from './Robot';
import Footer from './Footer'








function Home() {
  return (
    <>
    
   
    
    <color attach="background" args={['#000000']}/>
    <ambientLight intensity={0.2} />
    <spotLight position={[0,25,0]} angle={1.3}penumbra={1} castShadow intensity={2}shadow-bias={-0.0001}/>
   
  
    
    <ScrollControls pages={5} damping={0.1} >
   
    
    <Robot scale={50} />
  
    
  {/* Canvas contents in here will *not* scroll, but receive useScroll!*/ }
  
 /** <Scroll>
    
   
   <Sparkles size={3} color={"#ed0e8a"} scale={[10,10,10]}></Sparkles>
   


  </Scroll>
/**<Scroll html style={{width: '100%'}}>

<nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-centre">
  <div className="w-full md:w-880 bg-navBar "> </div>
</nav>

<div className='App'>


<Router>
    
    
    <Routes>
    
  
    
    <Route path="" element={<Footer/>} />
    
    </Routes>
     
    </Router>
    
   </div>
  
      
 
      
          <h1 className='title2' style={{ color: '#cdcbca',position: 'absolute', top: `40vh`,left: '28%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>FLO </h1>
          <h1   className='title1' style={{ color: '#cdcbca',position: 'absolute', top: `40vh`,left: '65%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>WERA</h1>
          
          <div className='row' style={{ position: 'absolute', top: `135vh`}}>
            <h2>"Élégance Florale "</h2>
            <p style={{ maxWidth: '400px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
             
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Exprimez vos Émotions à Chaque Pétale</h2>
              <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>                
              
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)`, }}>Floral Mastery: Where Blooms Take Center Stage</h2>              
          
          <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
          

    

  </Scroll>
</ScrollControls>
    
   </>
    
   
  
  )
}

export default Home