import { useState,useContext } from 'react';
import "./App.css"
import { Navbar } from './components/Navbar'
import { ThemeContext } from './context/ThemeContext'
import { Form } from './components/Form'
import { Heading } from '@chakra-ui/react'
import { Footer } from './components/Footer';

function App() {
 
  const [name,toggletheme]= useContext(ThemeContext)
//  console.log(name)
  return (
    <div className="App" style={name} >
     <Heading > Toggle Theme</Heading>
     <Navbar />
     <hr />
     <Form/>
     <br />
     <Footer/>
    </div>
  )
}


export default App;