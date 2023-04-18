import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "styled-components";

import Brand from "../../assets/Splash-icon.svg";
import Logo from "../../assets/logo.svg";
import { Container } from "./styles";

export function Splash() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50, 75, 100],
        [1, 0.3, 0, 0, 0, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50, 75, 100],
        [0, 0, 0.4, 0.7, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  function startApp() {
    navigation.navigate("Home");
  }

  async function hideSplash() {
    await SplashScreen.hideAsync();
  }

  useEffect(() => {
    hideSplash();
    splashAnimation.value = withTiming(100, { duration: 1000 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />

      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <Brand width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <Logo width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
