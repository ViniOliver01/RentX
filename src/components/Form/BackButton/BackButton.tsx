import React from "react";
import { IconButton } from "../IconButton/IconButton";
import { Container } from "./styles";

import { useNavigation } from "@react-navigation/native";
import BackIconWhite from "../../../assets/Back-white.svg";
import BackIconBlack from "../../../assets/Back.svg";

interface BackButtonProps {
  color: "Black" | "White";
}

export function BackButton({ color = "Black" }: BackButtonProps) {
  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <IconButton
        icon={
          color === "Black" ? (
            <BackIconBlack width={32} height={32} />
          ) : (
            <BackIconWhite width={32} height={32} />
          )
        }
        onPress={handleGoBack}
      />
    </Container>
  );
}
