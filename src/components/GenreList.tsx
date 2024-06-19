import React from "react";
import useGenre from "../hooks/useGenre";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface Props {
  // Define your component's props here
}

const GenreList: React.FC<Props> = () => {
  // Implement your component logic here
  const { DATA: genres, error, isLoading } = useGenre();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="34px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
