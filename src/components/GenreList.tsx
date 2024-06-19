import React from "react";
import useGenre, { Genre } from "../hooks/useGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface Props {
  // Define your component's props here
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList: React.FC<Props> = ({ onSelectedGenre }) => {
  // Implement your component logic here
  const { DATA: genres, error, isLoading } = useGenre();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
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
            <Button
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
