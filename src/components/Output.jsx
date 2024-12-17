import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const Output = ({ output }) => {

  return (
    <Box w="95%" >
      <Text pb={"10px"} fontSize={"large"}>Output:</Text>
      <Box
        h="100%"
        p={2}
        opacity={"50%"}
        borderRadius={4}
        border="1px solid"
        borderColor={"#757575"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : <Text color={"gray"}>Click "Run" to see the output here</Text>}
      </Box>
    </Box>
  );
};
export default Output;
