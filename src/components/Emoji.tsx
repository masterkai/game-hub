import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Box, Image, ImageProps } from "@chakra-ui/react";

type Props = {
  rating: number;
};
export const Emoji = ({ rating }: Props) => {
  const emojiMap = new Map<number, ImageProps>([[3, {src:meh, alt:"meh", boxSize:"25px"}], [4, {src:thumbsUp, alt:"recommended", boxSize:"25px" }], [5, {src:bullsEye, alt:"exceptional", boxSize:"25px"}]]);
  const emoji = emojiMap.get(rating);
  if (rating < 3 ) return null;
  return (
    <Image {...emoji}  marginTop={1}/>
  )
};
