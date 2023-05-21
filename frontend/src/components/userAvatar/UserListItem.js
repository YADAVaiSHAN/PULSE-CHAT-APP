import { Avatar } from "@chakra-ui/avatar";
import {  Text, Box } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider"; //comments

const UserListItem = ({ name, email, avatar,  handleFunction }) => {
  const { user } = ChatState(); // comments
 //const { name, email, avatar } = props;
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg" 
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={name}
        src={avatar}
      />
      <Box>
        <Text>{name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {email}
        </Text>
      </Box>
    </Box>
  );
//return <> <Text>{name}</Text> </>
};

export default UserListItem;