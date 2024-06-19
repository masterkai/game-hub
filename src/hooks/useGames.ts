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
}

const useGames = (selectedGenre: null | Genre) =>
  useDATA<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
export default useGames;
