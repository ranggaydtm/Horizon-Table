/* eslint-disable no-unused-vars */
import { Box, VStack, Text, useColorModeValue, Flex, Stack, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { IoMdHome, IoMdPerson } from "react-icons/io";
import { MdOutlineBarChart } from "react-icons/md";

const Sidebar = () => {
  const variantChange = "0.2s linear";
  const shadow = useColorModeValue("14px 17px 40px 4px rgba(112, 144, 176, 0.08)", "unset");
  const sidebarBg = useColorModeValue("white", "navy.800");
  const sidebarMargins = "0px";
  const textColor = useColorModeValue("navy.700", "white");
  const iconSize = "20px";
  return (
    <Box display={{ sm: "none", xl: "block" }} w="100%" position="fixed" minH="100%">
      <Box bg={sidebarBg} transition={variantChange} w="300px" h="100vh" m={sidebarMargins} minH="100%" overflowX="hidden" boxShadow={shadow}>
        <VStack align="center">
          <Text color={textColor} h="50px" my="32px" fontSize="32px" fontWeight="700" lineHeight="100%">
            Test Case
          </Text>
          <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)" />

          <Stack direction="column" mb="auto" mt="8px">
            <Box pe={{ md: "16px", "2xl": "1px" }}>
              <Link to="/dashboard">
                <Flex direction="row" gap={4} align="center">
                  <Icon as={IoMdHome} boxSize={iconSize} display="inline-block" />
                  <Text fontSize="16px">Main Dashboard</Text>
                </Flex>
              </Link>
              <Link to="/data-table">
                <Flex direction="row" gap={4} align="center" pt={3}>
                  <Icon as={MdOutlineBarChart} boxSize={iconSize} display="inline-block" />
                  <Text fontSize="16px">Data Table</Text>
                </Flex>
              </Link>
              <Link to="/profile">
                <Flex direction="row" gap={4} align="center" pt={3}>
                  <Icon as={IoMdPerson} boxSize={iconSize} display="inline-block" />
                  <Text fontSize="16px">Profile</Text>
                </Flex>
              </Link>
            </Box>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
