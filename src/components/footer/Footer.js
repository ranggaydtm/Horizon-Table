/*eslint-disable*/
import { Flex, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Footer() {
  const textColor = useColorModeValue("#A0AEC0", "#FFFFFF");
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      <Text as="span" fontWeight="500" ms="4px">
        <Flex flexDirection="row">
          <IconBrandGithub />
          <Link fontSize="20px" mx="3px" my="-4px" color={textColor} href="https://github.com/ranggaydtm" target="_blank" fontWeight="700">
            ranggaydtm
          </Link>
        </Flex>
      </Text>
    </Flex>
  );
}
