import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchQuery: string) => void;
}
export const NavBar = ({onSearch}: Props) => {
  return (
    <HStack gap={3} padding={"10px"}>
      <Image src="/img/Logo/logo.webp" alt="Logo" boxSize={"60px"} />
      <SearchInput onSearch={onSearch} borderRadius={"20px"} placeholder={"Search Games..."} variant={'filled'} />
      <ColorModeSwitch />
    </HStack>
  );
};
