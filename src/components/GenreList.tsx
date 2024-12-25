import React from "react";
import useGenre, { Genre } from "../hooks/useGenre";
import {
  Button, Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text
} from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";

interface Props {
  // Define your component's props here
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList: React.FC<Props> = ({ onSelectedGenre, selectedGenre }) => {
  // Implement your component logic here
  const { DATA: genres, error, isLoading } = useGenre();
  if (error) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Heading as="h2" size="lg" marginBottom={5}>
        Genres
      </Heading>
      <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="34px"
              objectFit="cover"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              fontSize={"lg"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List></>
  );
};

export default GenreList;
