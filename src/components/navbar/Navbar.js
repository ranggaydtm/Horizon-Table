/* eslint-disable no-unused-vars */
import { Box, Flex, useColorModeValue, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const navbarBg = useColorModeValue("rgba(244, 247, 254, 0.2)", "rgba(11,20,55,0.5)");
  const navbarBackdrop = "blur(20px)";
  const secondaryText = useColorModeValue("#4A5568");
  return (
    <Box
      position="fixed"
      boxShadow="none"
      bg={navbarBg}
      borderColor="transparent"
      filter="none"
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt="0px"
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{
        sm: "15px",
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top={{ base: "12px", md: "16px", lg: "20px", xl: "20px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 350px)",
        "2xl": "calc(100vw - 365px)",
      }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
        mb="0px"
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb>
            <BreadcrumbItem color={secondaryText} fontSize="sm" mb="5px">
              <BreadcrumbLink href="" color={secondaryText}>
                Pages / {path === "dashboard" && "Dashboard"}
                {path === "data-table" && "Data Table"}
                {path === "profile" && "Profile"}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Text
            borderRadius="inherit"
            fontWeight="bold"
            fontSize="34px"
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            {path === "dashboard" && "Dashboard"}
            {path === "data-table" && "Data Table"}
            {path === "profile" && "Profile"}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
