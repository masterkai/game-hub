import useDATA from "./useDATA";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useDATA<Genre>("/genres");
export default useGenre;
