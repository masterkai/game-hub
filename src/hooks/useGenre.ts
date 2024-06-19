import useDATA from "./useDATA";

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => useDATA<Genre>("/genres");
export default useGenre;
