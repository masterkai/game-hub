import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageURL from "../services/image-url";
import CriticScore from "../components/CriticScore";
import { Emoji } from "./Emoji";
interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} variant='elevated' overflow={"hidden"}>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          fontSize={"2xl"}
          fontWeight={"bold"}
        >
          {game.name}
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
