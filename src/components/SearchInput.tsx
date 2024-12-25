import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/all";
interface Props {
  placeholder?: string;
  borderRadius?: string;
  variant?: 'filled' | 'outline' | 'unstyled' | 'flushed';
}
function SearchInput(props: Props) {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input {...props} />
    </InputGroup>
  );
}

export default SearchInput;