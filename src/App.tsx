import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import { NavBar } from "./components/NavBar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchQuery: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleGenreSelection = (genre: Genre) => {
    setGameQuery((prevState) => ({ ...prevState, genre }));
  };
  const handlePlatformSelection = (platform: Platform) => {
    setGameQuery((prevState) => ({ ...prevState, platform }));
  };

  const handleSortOrderSelection = (sortOrder: string) => {
    setGameQuery((prevState) => ({ ...prevState, sortOrder }));
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchQuery) =>
            setGameQuery({ ...gameQuery, searchQuery })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={handleGenreSelection}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={3} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={handlePlatformSelection}
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={handleSortOrderSelection}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
