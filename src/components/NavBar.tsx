import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={"10px"}>
      <Image src="/img/Logo/logo.webp" alt="Logo" boxSize={"60px"} />
      <Text>NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};
