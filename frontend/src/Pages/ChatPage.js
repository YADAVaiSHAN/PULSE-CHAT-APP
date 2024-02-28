import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";
//import { color } from "@chakra-ui/react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);     // changing useState() to useState(false)

  return (  
  <div style={{ width: "100%" }}>
    {user && <SideDrawer />}
      <Box
      display="flex"
      bg="green.800"
      
      justifyContent="space-between" w="100%" h="90%" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />} 
        {user && (
        <ChatBox  fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        )}
    </Box>
  </div>
  );
};

export default ChatPage;


