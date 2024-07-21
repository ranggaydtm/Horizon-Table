import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Flex>
        <Text fontSize="22px" fontWeight="700">
          Profile
        </Text>
      </Flex>
    </Box>
  );
}

export default Profile;
