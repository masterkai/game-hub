import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => {
  return (
    <HStack gap={3} padding={"10px"}>
      <Image src="/img/Logo/logo.webp" alt="Logo" boxSize={"60px"} />
      <SearchInput borderRadius={"20px"} placeholder={"Search Games..."} variant={'filled'} />
      <ColorModeSwitch />
    </HStack>
  );
};
