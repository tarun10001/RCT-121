import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Square,
  Text,
} from "@chakra-ui/react";

const Layout1 = () => {
  return (

    <Box border={"1px solid gray"} m="auto" width="80%">
      <Text fontWeight="bold">Layout - 1</Text>
      <Flex p="4">
        <Box flex="10" boxShadow= "rgba(3, 3, 3, 0.35) 0px 5px 15px" p="12px" m="0 2px 0 0">
          <Text textAlign="center" fontWeight="bold">Desktop Layout</Text>
          <Flex justifyContent="center" color="white">
          <Square flex="2" bg='blue.500' size='150px' height='300px'>NAV</Square>
          <Square flex="6" bg='#F9941B' size='150px' height='300px'>CONTENT</Square>
          <Square flex="2" bg='#EE1B24' size='150px' height='300px'>WIDGET</Square>
          </Flex>
        </Box>



        <Box flex="2" boxShadow= "rgba(3, 3, 3, 0.35) 0px 5px 15px" p="12px">
          <Text textAlign="center" fontWeight="bold">Mobile Layout</Text>
          <Flex alignItems="center" direction="column" justifyContent="center" color="white">
          <Square bg='blue.500' size='150px' height='68px'>NAV</Square>
          <Square bg='#F9941B' size='150px' height='88px'>CONTENT</Square>
          <Square bg='#EE1B24' size='150px' height='144px'>WIDGET</Square>
          </Flex>
        </Box>
        </Flex>
    </Box>
  );
};

export default Layout1;
