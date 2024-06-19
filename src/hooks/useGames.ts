import useDATA from "./useDATA";

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

const useGames = () => useDATA<Game>("/games");
export default useGames;
