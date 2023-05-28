import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import {
  BsGlobe,
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
  MdPhoneIphone,
  SiNintendo,
} from "react-icons/all";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

enum PlatformIcons {
  web = "web",
  ios = "ios",
  playstation = "playstation",
  pc = "pc",
  xbox = "xbox",
  linux = "linux",
  nintendo = "nintendo",
  mac = "mac",
  android = "android",
}

function PlatformIconList(props: Props) {
  const iconMaps: Map<string, IconType> = new Map([
    [PlatformIcons.ios, MdPhoneIphone],
    [PlatformIcons.pc, FaWindows],
    [PlatformIcons.playstation, FaPlaystation],
    [PlatformIcons.xbox, FaXbox],
    [PlatformIcons.nintendo, SiNintendo],
    [PlatformIcons.mac, FaApple],
    [PlatformIcons.linux, FaLinux],
    [PlatformIcons.web, BsGlobe],
    [PlatformIcons.android, FaAndroid],
  ]);

  const { platforms } = props;
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMaps.get(platform.slug)}
          key={platform.id}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
