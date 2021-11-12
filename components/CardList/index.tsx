import Text from "components/Text";
import { tailwind } from "lib/tailwind";
import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

const CardList = ({ title, images, animated, onPressImage, ...props }: any) => {
  const wiggleAnimation = useRef(new Animated.Value(0)).current;

  const handleImagePress = () => {
    onPressImage();
  };
  useEffect(() => {
    Animated.loop(
      Animated.sequence(
        [1, -1, 0].map((value) =>
          Animated.spring(wiggleAnimation, {
            toValue: value,
            // speed: 200,
            friction: 2,
            useNativeDriver: true,
          })
        )
      )
    ).start();
  }, []);
  return (
    <View style={tailwind(`my-2`)}>
      <View style={tailwind("px-4 flex-row justify-between items-end")}>
        {title && (
          <Text style={tailwind("py-2 text-xl font-bold")}>{title}</Text>
        )}
        <TouchableOpacity
          style={{ ...tailwind("flex-row"), transform: [{ translateY: 10 }] }}
          onPress={handleImagePress}
        >
          {images &&
            images.map((image: any, i: number) => (
              <Animated.View
                key={i}
                style={{
                  transform: [
                    {
                      rotateZ: wiggleAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "5deg"],
                      }),
                    },
                  ],
                  ...tailwind("ml-2"),
                }}
              >
                <View style={tailwind("rounded-t-full overflow-hidden")}>
                  {image}
                </View>
              </Animated.View>
            ))}
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          ...tailwind("border-primary-400"),
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default CardList;
