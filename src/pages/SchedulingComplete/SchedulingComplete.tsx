import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { Container, SubTitle, Title } from "./styles";

import { useNavigation } from "@react-navigation/native";
import Done from "../../assets/Done.svg";
import XLogo from "../../assets/X-logo.svg";
import { Button } from "../../components/Form/Button/Button";

export function SchedulingComplete() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleOk() {
    navigation.navigate("Home");
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />
      <XLogo width={"100%"} />
      <Done />

      <Title>Carro alugado!</Title>
      <SubTitle>
        Agora você só precisa ir até a concessionária da RENTX pegar o seu automóvel.
      </SubTitle>

      <Button title="Ok" color="Dark" onPress={handleOk} />
    </Container>
  );
}
