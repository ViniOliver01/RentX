import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { Button } from "../../components/Form/Button/Button";
import { TechnicalFeatures } from "../../components/TechnicalFeatures/TechnicalFeatures";
import {
  ButtonArea,
  CarDailyRate,
  CarDescription,
  CarImage,
  CarName,
  Container,
  Daily,
  DailyTitle,
  Details,
  Manufacturer,
  Model,
} from "./styles";

export function CarDetails() {
  const theme = useTheme();
  const car = {
    id: "1",
    manufacturer: "Toyota",
    model: "Corolla",
    fuelType: "Gas",
    daily: 50,
    image: "https://www.toyotaaruba.com/readBlob.do?id=14860&width=190&height=",
    description:
      "Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.",
  };

  const carDaily = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(car.daily);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background_secondary}
      />

      <CarImage
        source={{
          uri: "https://www.toyotaaruba.com/readBlob.do?id=14860&width=190&height=",
        }}
        resizeMode="contain"
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

      <CarDescription>{car.description}</CarDescription>

      <ButtonArea>
        <Button
          title="Escolher período do aluguel"
          onPress={() => console.log("Press")}
        />
      </ButtonArea>
    </Container>
  );
}
