import { Box, Text} from "@chakra-ui/react";



export function SideBar() {


    return (
        <Box w={"30%"} 
             h={"100%"} 
             alignSelf={"flex-start"} 
             borderRadius={4} 
             p="20px 10px" 
             overflowY={"scroll"} 
             border="1px solid"
             borderColor={"#757575"}
        >
            <Text fontSize={"4xl"} fontWeight={"medium"} mb={12} color="blue.400">1. Two sum</Text>
            <Text>
                Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.<br/><br/>
                You may assume that each input would have exactly one solution, and you may not use the same element twice.<br/><br/>
                You can return the answer in any order.
            </Text>
            <Text fontWeight={"bold"} mt={"10"}>Examples</Text>
            <Box  mt={"5"}>
                <Text fontWeight={"medium"}>example 1</Text>
                <Text>
                    Input: nums = [2,7,11,15], target = 9<br/>
                    Output: [0,1]<br/>
                    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                </Text>
                <Text fontWeight={"medium"} mt={"3"}>example 2</Text>
                <Text>
                    Input: nums = [3,2,4], target = 6<br/>
                    Output: [1,2]<br/>
                </Text>
                <Text fontWeight={"medium"} mt={"3"}>example 3</Text>
                <Text>
                    Input: nums = [3,3], target = 6<br/>
                    Output: [0,1]
                </Text>
            </Box>
        </Box>
    )
}