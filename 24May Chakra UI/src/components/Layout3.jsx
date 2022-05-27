import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Square,
  Text,
} from "@chakra-ui/react";

const Layout3 = () => {
  return (

    <Box border={"1px solid gray"} p="2" m="auto" width="80%">
      <Text fontWeight="bold">Layout - 3</Text>
      <Flex p="4">

        <Box flex="1" margin="0px 32px 0px 0px" boxShadow= "rgba(3, 3, 3, 0.35) 0px 5px 15px" p="14px">
          <Text textAlign="center" fontWeight="bold">Mobile Layout</Text>
          <Flex alignItems="center" gap="12px" direction="column" justifyContent="center" color="white">
          <Square bg='#FFC83C' size='130px' height='50px'>CONTENT</Square>
          <Square bg='#FFC83C' size='130px' height='50px'>CONTENT</Square>

          <Square bg='#FF3C69' size='130px' margin='20px 20px' height='160px'>WIDGET</Square>
          <Square bg='#6E7DFF' size='130px' height='70px'>NAV</Square>
          <Square bg='#6E7DFF' size='130px' height='70px'>NAV</Square>
          </Flex>
          <Text textAlign="center" fontSize='20px' color="gray">320px</Text>
          
        </Box>



        <Box flex="1" boxShadow= "rgba(3, 3, 3, 0.35) 0px 5px 15px" p="14px">
          <Text textAlign="center" fontWeight="bold">Desktop Layout</Text>
          
          <Box justifyContent="center" color="white" gap="7px">
          
          <Flex gap="2" >
          <Square bg='#FFC83C' size='130px' height='110px'>CONTENT</Square>
          <Square bg='#FFC83C' size='130px' height='110px'>CONTENT</Square>
          </Flex>

          <Flex direction="column" >
          <Square bg='#FF3C69' size='cover' marginTop="34px" height='160px'>WIDGET</Square>
          </Flex>

          <Flex direction="column" gap="10px" marginTop="32px">
          <Square bg='#6E7DFF' size='cover'  height='70px'>NAV</Square>
          <Square bg='#6E7DFF' size='cover' height='70px'>NAV</Square>
          </Flex>
          <Text textAlign="center" fontSize='20px' color="gray">768px</Text>


          </Box>
        </Box>



        <Box flex="2" boxShadow= "rgba(3, 3, 3, 0.35) 0px 5px 15px" p="12px" margin="0px 0px 0px 32px">
          <Text textAlign="center" fontWeight="bold">Desktop Layout</Text>
          
          <Box justifyContent="center" color="white" gap="7px">
          
          <Flex gap="2" >
          <Square bg='#FFC83C' size='230px' height='110px'>CONTENT</Square>
          <Square bg='#FFC83C' size='230px' height='110px'>CONTENT</Square>
          </Flex>

          <Flex direction="column" >
          <Square bg='#FF3C69' size='470px' marginTop="34px" height='160px'>WIDGET</Square>
          </Flex>

          <Flex gap="10px" marginTop="32px">
          <Square bg='#6E7DFF' size='150px' height='150px'>NAV</Square>
          <Square bg='#6E7DFF' size='150px' height='150px'>NAV</Square>
          <Square bg='#6E7DFF' size='150px' height='150px'>NAV</Square>
          </Flex>
          <Text textAlign="center" fontSize='20px' color="gray">1024px</Text>


          </Box>
        </Box>

        </Flex>
    </Box>
  );
};

export default Layout3;
