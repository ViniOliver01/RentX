import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { IconButton } from "../../components/Form/IconButton/IconButton";
import {
  ButtonArea,
  CarDailyRate,
  CarName,
  Container,
  Daily,
  DailyTitle,
  DateArea,
  DateBox,
  Details,
  Header,
  IconWrapper,
  Manufacturer,
  Model,
  SchedulingContent,
  SelectedDate,
  SelectedDateDate,
  SelectedDateTitle,
  TotalValue,
  ValueBox,
  ValueDetails,
  ValueDetailsExplain,
  ValueDetailsTitle,
} from "./styles";

import { Button } from "../../components/Form/Button/Button";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { TechnicalFeatures } from "../../components/TechnicalFeatures/TechnicalFeatures";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../assets/Back.svg";
import CalendarIcon from "../../assets/Calendar.svg";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const car = {
    id: "1",
    manufacturer: "Toyota",
    model: "Corolla",
    fuelType: "Gas",
    daily: 580,
    image: "https://www.toyotaaruba.com/readBlob.do?id=14860&width=190&height=",
    description:
      "Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.",
  };
  const startDate = "18/06/2021";
  const endDate = "20/06/2021";

  const days = 3;

  const carDaily = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(car.daily);

  const totalValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(car.daily * 3);

  function handleConfirmRent() {
    navigation.navigate("SchedulingComplete");
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background_secondary}
      />

      <Header>
        <IconButton icon={<BackButton width={32} height={32} />} onPress={handleGoBack} />
      </Header>

      <ImageSlider
        imagesUrl={["https://www.toyotaaruba.com/readBlob.do?id=14860&width=190&height="]}
      />

      <Details>
        <CarName>
          <Manufacturer>{car.manufacturer.toUpperCase()}</Manufacturer>
          <Model>{car.model}</Model>
        </CarName>

        <CarDailyRate>
          <DailyTitle>AO DIA</DailyTitle>
          <Daily>{carDaily}</Daily>
        </CarDailyRate>
      </Details>
      <TechnicalFeatures />

      <SchedulingContent>
        <DateBox>
          <IconWrapper>
            <CalendarIcon width={24} height={24} />
          </IconWrapper>

          <DateArea>
            <SelectedDate>
              <SelectedDateTitle>DE</SelectedDateTitle>
              <SelectedDateDate>{startDate}</SelectedDateDate>
            </SelectedDate>

            <Feather name="chevron-right" color={theme.colors.text_detail} size={24} />

            <SelectedDate>
              <SelectedDateTitle>ATÉ</SelectedDateTitle>
              <SelectedDateDate>{endDate}</SelectedDateDate>
            </SelectedDate>
          </DateArea>
        </DateBox>

        <ValueBox>
          <ValueDetails>
            <ValueDetailsTitle>TOTAL</ValueDetailsTitle>

            <ValueDetailsExplain>
              {carDaily} x {days} diárias
            </ValueDetailsExplain>
          </ValueDetails>
          <TotalValue>{totalValue}</TotalValue>
        </ValueBox>
      </SchedulingContent>

      <ButtonArea>
        <Button title="Alugar agora" onPress={handleConfirmRent} />
      </ButtonArea>
    </Container>
  );
}
