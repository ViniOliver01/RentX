import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  isDisable?: boolean;
  color?: "Red" | "Green" | "Dark";
  onPress: () => void;
}

export function Button({
  title,
  onPress,
  isDisable = false,
  color = "Red",
  ...rest
}: ButtonProps) {
  return (
    <Container
      onPress={onPress}
      color={color}
      isDisable={isDisable}
      enabled={!isDisable}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  );
}
