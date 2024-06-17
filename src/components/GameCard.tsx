import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card width={300} borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"} fontWeight={"bold"} color={"gray.100"}>
          {game.name}
        </Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;