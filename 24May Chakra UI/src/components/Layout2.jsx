import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Square,
  Text,
} from "@chakra-ui/react";

const Layout2 = () => {
  return (

    <Box border={"1px solid gray"} p="2" m="auto" width="80%">
      <Text fontWeight="bold">Layout - 2</Text>
      <Flex p="4">

        <Box flex="1" boxShadow= "rgba(3, 3, 3, 0.35) 0px 5px 15px" p="12px">
          <Text textAlign="center" fontWeight="bold">Mobile Layout</Text>
          <Flex alignItems="center" gap="6px" direction="column" justifyContent="center" color="white">
          <Square bg='#A086BD' size='150px' height='100px'>NAV</Square>
          <Square bg='#F36C4F' size='150px' height='100px'>CONTENT</Square>
          <Square bg='#6DCFF6' size='150px' height='100px'>WIDGET</Square>
          </Flex>
        </Box>

        <Box flex="4" boxShadow= "rgba(3, 3, 3, 0.35) 0px 5px 15px" p="12px">
          <Text textAlign="center" fontWeight="bold">Desktop Layout</Text>
          <Flex justifyContent="center" color="white" gap="7px">
          <Flex direction="column" flex="4" gap="2" >
          <Square bg='#A086BD' size='590px' height='200px'>NAV</Square>
          <Square bg='#6DCFF6' size='590px' height='100px'>CONTENT</Square>
          </Flex>
          <Square flex="2" bg='#EE1B24' height='310px'>WIDGET</Square>
          </Flex>
        </Box>
        </Flex>
    </Box>
  );
};

export default Layout2;
