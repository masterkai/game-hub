import React from "react";
import useGenre from "../hooks/useGenre";

interface Props {
  // Define your component's props here
}

const GenreList: React.FC<Props> = () => {
  // Implement your component logic here
  const { DATA: genres, error, isLoading } = useGenre();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
