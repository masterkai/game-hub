import useDATA from "./useDATA";
interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatform = () => useDATA<Platform>("/platforms/lists/parents");
export default usePlatform;
