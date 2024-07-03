import { GameQuery } from "../App";
import useDATA from "./useDATA";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface PlatformObj {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObj[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useDATA<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
export default useGames;
