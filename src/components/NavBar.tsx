import { HStack, Image, Text } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <HStack>
      <Image src="/img/Logo/logo.webp" alt="Logo" boxSize={"60px"} />
      <Text>NavBar</Text>
    </HStack>
  );
};
