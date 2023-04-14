import React from "react";
import { FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { CardCar } from "../../components/CardCar/CardCar";
import { BackButton } from "../../components/Form/BackButton/BackButton";
import { SchedulesPeriod } from "../../components/SchedulesPeriod/SchedulesPeriod";
import { useCarData } from "../../context/CarContext";
import {
  Body,
  Container,
  Header,
  HeaderSubTitle,
  HeaderTitle,
  SchedulesCount,
  SchedulesCounter,
  SchedulesInfo,
  SchedulesItens,
} from "./styles";

export function Schedules() {
  const theme = useTheme();
  const { userSchedules } = useCarData();

  const formattedSchedulesNumber = new Intl.NumberFormat("pt-BR", {
    minimumIntegerDigits: 2,
  }).format(userSchedules.length);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />
      <Header>
        <BackButton color="White" />
        <HeaderTitle>Seus agendamentos, estão aqui.</HeaderTitle>
        <HeaderSubTitle>Conforto, segurança e praticidade.</HeaderSubTitle>
      </Header>

      <Body>
        <SchedulesInfo>
          <SchedulesCount>Agendamentos feitos</SchedulesCount>
          <SchedulesCounter>{formattedSchedulesNumber}</SchedulesCounter>
        </SchedulesInfo>

        <FlatList
          data={userSchedules}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <SchedulesItens>
              <CardCar
                carImage={item.car.thumbnail}
                diary={item.car.rent.price}
                fuelType={item.car.fuel_type}
                manufactor={item.car.brand}
                model={item.car.name}
                onPress={() => {}}
              />
              <SchedulesPeriod start_date={item.startDate} end_date={item.endDate} />
            </SchedulesItens>
          )}
        />
      </Body>
    </Container>
  );
}
