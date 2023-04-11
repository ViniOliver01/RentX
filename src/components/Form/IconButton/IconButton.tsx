import React from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { Container } from "./styles";

interface IconButtonProps extends BorderlessButtonProps {
  icon: JSX.Element;
  onPress: () => void;
}

export function IconButton({ icon, onPress, ...rest }: IconButtonProps) {
  return (
    <Container onPress={onPress} {...rest}>
      {icon}
    </Container>
  );
}
