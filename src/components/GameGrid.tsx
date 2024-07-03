import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: null | Genre;
  selectedPlatform: null | Platform;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    DATA: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
  const skeletons = Array.from({ length: 6 }).map((_, i) => (
    <GameCardContainer key={i}>
      <GameCardSkeleton />
    </GameCardContainer>
  ));

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading && skeletons}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
