import React from "react";
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { genre, platform } = gameQuery;
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"} textAlign={"center"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
