import React,{useState} from 'react'
import {FormControl,Input,FormLabel,FormHelperText,FormErrorMessage,Button} from "@chakra-ui/react"

export const Form = () => {
    const [input, setInput] = useState({
        firstname:"",
        email:""
    })

    const handleInputChange = (e) => {setInput(e.target.value)}
  
    const isError = input.email === '';
  return (
    <FormControl isInvalid={isError} w="500px" margin={"auto"} marginTop="50">
        <FormLabel htmlFor='firstname'>Name</FormLabel>
    <Input
      id='firstName'
      type='firstName'
      value={input.firstname}
      onChange={handleInputChange}
    />
    <FormLabel htmlFor='email'>Email</FormLabel>
    <Input
      id='email'
      type='email'
      value={input.email}
      onChange={handleInputChange}
    />
    {!isError ? (
      <FormHelperText>
        Enter the email you'd like to receive the newsletter on.
      </FormHelperText>
    ) : (
      <FormErrorMessage>Email is required.</FormErrorMessage>
    )}
    <Button  style={{cursor:"pointer"}} colorScheme="blue" >Submit</Button>
  </FormControl>
  )
}