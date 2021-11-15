import avatar from "animal-avatar-generator";
import { getColor, tailwind } from "lib/tailwind";
import React from "react";
import { View } from "react-native";
import { SvgFromXml } from "react-native-svg";
import rgbaToHex from "util/rgbaToHex";

const Avatar = (props: { seed: string; size: number; round?: boolean }) => {
  const backgroundColors = [getColor("white")].map(rgbaToHex);
  const avatarColors = [
    getColor("gray-500"),
    getColor("red-500"),
    getColor("yellow-500"),
    getColor("green-500"),
    getColor("blue-500"),
    getColor("indigo-500"),
    getColor("purple-500"),
    getColor("pink-500"),
  ].map(rgbaToHex);
  const svgXml = avatar(props.seed, {
    backgroundColors,
    avatarColors,
    round: false,
  });
  return (
    <View
      style={tailwind(
        `w-${props.size} h-${props.size} ${
          props.round ? "rounded-full overflow-hidden" : ""
        }`
      )}
    >
      <SvgFromXml xml={svgXml} width="100%" height="100%" />
    </View>
  );
};

export default Avatar;
