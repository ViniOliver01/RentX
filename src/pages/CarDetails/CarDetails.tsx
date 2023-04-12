import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Form/Button/Button";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { TechnicalFeatures } from "../../components/TechnicalFeatures/TechnicalFeatures";
import {
  ButtonArea,
  CarDailyRate,
  CarDescription,
  CarName,
  Container,
  Daily,
  DailyTitle,
  Details,
  Header,
  Manufacturer,
  Model,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import BackButton from "../../assets/Back.svg";
import { generateUnavailableInterval } from "../../components/Calendar/generateUnavailableInterval";
import { IconButton } from "../../components/Form/IconButton/IconButton";
import { useCarData } from "../../context/CarContext";
import api from "../../services/api";

export function CarDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const { car, handleUnavailableDates } = useCarData();

  async function handleOpenCalendar() {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailableDates = generateUnavailableInterval(
      schedulesByCar.data.unavailable_dates
    );

    handleUnavailableDates(unavailableDates);

    navigation.navigate("Scheduling");
  }

  function handleGoBack() {
    navigation.goBack();
  }

  const carDaily = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(car.rent.price);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background_secondary}
      />

      <Header>
        <IconButton icon={<BackButton width={32} height={32} />} onPress={handleGoBack} />
      </Header>

      <ImageSlider imagesUrl={car.photos} />

      <Details>
        <CarName>
          <Manufacturer>{car.brand.toUpperCase()}</Manufacturer>
          <Model>{car.name}</Model>
        </CarName>

        <CarDailyRate>
          <DailyTitle>AO DIA</DailyTitle>
          <Daily>{carDaily}</Daily>
        </CarDailyRate>
      </Details>

      <TechnicalFeatures data={car.accessories} />

      <CarDescription>{car.about}</CarDescription>

      <ButtonArea>
        <Button title="Escolher período do aluguel" onPress={handleOpenCalendar} />
      </ButtonArea>
    </Container>
  );
}
