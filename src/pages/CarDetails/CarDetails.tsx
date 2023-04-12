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

import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import BackButton from "../../assets/Back.svg";
import { IconButton } from "../../components/Form/IconButton/IconButton";

interface Car {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[];
  photos: string[];
}

interface RootStackParamList extends RouteProp<ParamListBase> {
  params: { car: Car };
}

export function CarDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute<RootStackParamList>();

  const { car } = route.params;
  console.log("🚀 / CarDetails / car:", car);

  function handleOpenCalendar() {
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
