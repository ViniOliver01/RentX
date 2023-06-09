import React, { useState } from "react";
import { Alert, StatusBar } from "react-native";
import uuid from "react-native-uuid";
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

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import BackButton from "../../assets/Back.svg";
import CalendarIcon from "../../assets/Calendar.svg";
import { TechnicalFeatures } from "../../components/TechnicalFeatures/TechnicalFeatures";
import { useCarData } from "../../context/CarContext";
import api from "../../services/api";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const { car, scheduling } = useCarData();

  const [isLoading, setIsLoading] = useState(false);

  const startDate = format(scheduling.start_Date, "dd/MM/yyyy");
  const endDate = format(scheduling.end_Date, "dd/MM/yyyy");

  const carDaily = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(car.rent.price);

  const totalValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(car.rent.price * scheduling.days);

  async function handleConfirmRent() {
    setIsLoading(true);
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...scheduling.interval,
    ];

    const newScheduling = {
      user_id: 1,
      car,
      startDate: format(scheduling.start_Date, "dd/MM/yyyy"),
      endDate: format(scheduling.end_Date, "dd/MM/yyyy"),
      id: uuid.v4(),
    };

    await api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .catch((err) => {
        Alert.alert("Não foi possível confirmar o agendamento");
        setIsLoading(false);
      });

    await api.post(`/schedules_byuser`, newScheduling).catch((err) => {
      Alert.alert("Não foi possível confirmar o agendamento");
      setIsLoading(false);
    });

    if (!isLoading) {
      setIsLoading(false);
      navigation.navigate("SchedulingComplete");
    }
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

      <ImageSlider imagesUrl={car.photos} />

      <Details>
        <CarName>
          <Manufacturer>{car.brand.toUpperCase()}</Manufacturer>
          <Model>{car.name}</Model>
        </CarName>

        <CarDailyRate>
          <DailyTitle>{car.rent.period.toUpperCase()}</DailyTitle>
          <Daily>{carDaily}</Daily>
        </CarDailyRate>
      </Details>

      <TechnicalFeatures data={car.accessories} />

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
              {carDaily} x {scheduling.days} diárias
            </ValueDetailsExplain>
          </ValueDetails>
          <TotalValue>{totalValue}</TotalValue>
        </ValueBox>
      </SchedulingContent>

      <ButtonArea>
        <Button
          title="Alugar agora"
          color="Green"
          onPress={handleConfirmRent}
          isLoading={isLoading}
        />
      </ButtonArea>
    </Container>
  );
}
