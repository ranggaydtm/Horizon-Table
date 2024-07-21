import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex py={20} justifyContent="center" alignItems="center">
        <Text fontSize="22px" fontWeight="700" border="solid 1px" borderRadius="20px" p="5">
          Main Dashboard
        </Text>
      </Flex>
    </Box>
  );
}

export default Dashboard;
