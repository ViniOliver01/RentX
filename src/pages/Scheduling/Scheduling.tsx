import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { IconButton } from "./../../components/Form/IconButton/IconButton";
import {
  BackButton,
  Body,
  ButtonArea,
  Container,
  DateBox,
  DateTitle,
  DateValue,
  Header,
  SelectedDate,
  Title,
  TitleBox,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../assets/Back-white.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import { Calendar } from "../../components/Calendar/Calendar";
import { Button } from "./../../components/Form/Button/Button";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const from = "16/06/2021";
  const to = "";

  function handleConfirmDate() {
    navigation.navigate("SchedulingDetails");
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />

      <Header>
        <BackButton>
          <IconButton icon={<BackIcon width={32} height={32} />} onPress={handleGoBack} />
        </BackButton>
        <TitleBox>
          <Title>Escolha uma</Title>
          <Title>data de início e</Title>
          <Title>fim do aluguel</Title>
        </TitleBox>

        <SelectedDate>
          <DateBox>
            <DateTitle>DE</DateTitle>
            <DateValue isEmpty={false}>{from}</DateValue>
          </DateBox>

          <ArrowRight />

          <DateBox>
            <DateTitle>ATÉ</DateTitle>
            <DateValue isEmpty={!to}>{!!to ? to : "____________"}</DateValue>
          </DateBox>
        </SelectedDate>
      </Header>

      <Body>
        <Calendar />
      </Body>

      <ButtonArea>
        <Button title="Confirmar" onPress={handleConfirmDate} />
      </ButtonArea>
    </Container>
  );
}
