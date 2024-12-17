import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import { SideBar } from "./components/SideBar";

function App() {

  return (
    <Box h={"100vh"} bg={"#191424"} color={"gray-500"} px={6} py={8} m="10px">
      <Flex align={"center"} h={"100%"}>
        <SideBar/>
        <CodeEditor/>
      </Flex>
    </Box>
  )
}

export default App
