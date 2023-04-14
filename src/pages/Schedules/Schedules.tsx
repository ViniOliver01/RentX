import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { CardCar } from "../../components/CardCar/CardCar";
import { BackButton } from "../../components/Form/BackButton/BackButton";
import { SchedulesPeriod } from "../../components/SchedulesPeriod/SchedulesPeriod";
import { UserSchedules } from "../../context/CarContext";
import api from "../../services/api";
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
  const [userSchedules, setUserSchedules] = useState<UserSchedules[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const formattedSchedulesNumber = new Intl.NumberFormat("pt-BR", {
    minimumIntegerDigits: 2,
  }).format(userSchedules.length);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await api.get(`/schedules_byuser?user_id=${1}`);
      setUserSchedules(response.data.reverse());
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />
      <Header>
        <BackButton color="White" />
        <HeaderTitle>Seus agendamentos, estão aqui.</HeaderTitle>
        <HeaderSubTitle>Conforto, segurança e praticidade.</HeaderSubTitle>
      </Header>

      <Body>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={theme.colors.header} />
        ) : (
          <>
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
          </>
        )}
      </Body>
    </Container>
  );
}
