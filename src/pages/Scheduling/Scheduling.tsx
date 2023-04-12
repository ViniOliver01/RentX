import React, { useState } from "react";
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
import { addDays, format } from "date-fns";
import BackIcon from "../../assets/Back-white.svg";
import ArrowRight from "../../assets/arrow-right.svg";
import { Calendar, DayProps, MarkedDateProps } from "../../components/Calendar/Calendar";
import { generateInterval } from "../../components/Calendar/generateInterval";

import { useCarData } from "../../context/CarContext";
import { Button } from "./../../components/Form/Button/Button";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  const { handleSetScheduling, unavailableDates } = useCarData();

  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    unavailableDates as MarkedDateProps
  );
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleConfirmDate() {
    navigation.navigate("SchedulingDetails");
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleChangeDate(day: DayProps) {
    let start = !lastSelectedDate.timestamp ? day : lastSelectedDate;
    let end = day;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    const startDay = addDays(start.timestamp, 1);
    const endDay = addDays(end.timestamp, 1);

    setStartDate(format(startDay, "dd/MM/yyyy"));
    setEndDate(format(endDay, "dd/MM/yyyy"));

    handleSetScheduling(new Date(start.timestamp), new Date(end.timestamp));

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    const newMarkedDates = Object.assign(unavailableDates, interval);

    setMarkedDates(newMarkedDates);
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
            <DateValue isEmpty={!startDate}>
              {!!startDate ? startDate : "____________"}
            </DateValue>
          </DateBox>

          <ArrowRight />

          <DateBox>
            <DateTitle>ATÉ</DateTitle>
            <DateValue isEmpty={!endDate}>
              {!!endDate ? endDate : "____________"}
            </DateValue>
          </DateBox>
        </SelectedDate>
      </Header>

      <Body>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Body>

      <ButtonArea>
        <Button
          title="Confirmar"
          isDisable={startDate === endDate}
          onPress={handleConfirmDate}
        />
      </ButtonArea>
    </Container>
  );
}
