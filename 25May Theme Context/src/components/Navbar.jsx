import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Heading,Flex,Text,Button,Box } from '@chakra-ui/react'

export const Navbar = () => {
    const [name,toggletheme]= useContext(ThemeContext);
    
  return (
    <Flex  style={{display:"flex",justifyContent:"space-around"}} >
        <Box>
            <Heading>Navbar</Heading>          
        </Box>
   <Button onClick={toggletheme} style={{cursor:"pointer"}} colorScheme="blue" >Toggle</Button> 
    </Flex>
  )
}