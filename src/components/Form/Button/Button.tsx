import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  isDisable?: boolean;
  isLoading?: boolean;
  color?: "Red" | "Green" | "Dark";
  onPress: () => void;
}

export function Button({
  title,
  onPress,
  isDisable = false,
  isLoading = false,
  color = "Red",
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      onPress={onPress}
      color={color}
      isDisable={isDisable}
      enabled={!isDisable}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size={"large"} color={theme.colors.background_secondary} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
