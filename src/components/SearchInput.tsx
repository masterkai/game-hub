import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/all";
import React from "react";
interface Props {
  onSearch: (searchQuery: string) => void;
  placeholder?: string;
  borderRadius?: string;
  variant?: 'filled' | 'outline' | 'unstyled' | 'flushed';
}
function SearchInput(props: Props) {
  const ref = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      const searchQuery = ref.current.value;
      props.onSearch(searchQuery);
    }
  };
  return (
    <form style={{width:"100%"}} onSubmit={handleSubmit}><InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input ref={ref} {...props} />
    </InputGroup></form>
  );
}

export default SearchInput;