import React, { useEffect } from 'react';
import { Container, Box , Text , Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom';

const Homepage = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxWidth="xl" centreContent>
      <Box
      display="flex"
      justifyContent = "center"
      p = {'5'}
      bg = {'white'}
      w="100%"
      m="40 px  0  15 px 0"
      borderRadius="1g"
      borderWidth = "1px"
      >
        <Text fontSize= "5xl" fontFamily="work sans" color="black" fontWeight={"bold"}>
          PULSE
        </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px">
          <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel> <Login /> </TabPanel>
    <TabPanel> <Signup /></TabPanel> 
  </TabPanels>
</Tabs>
        </Box>
    </Container>
  );
}  // remove ;

export default Homepage;