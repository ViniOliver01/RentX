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

interface TimestampProps {
  start_timestamp: number;
  end_timestamp: number;
}

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
  const [hasError, setHasError] = useState(false);
  const [dateTimestamp, setDateTimestamp] = useState<TimestampProps>(
    {} as TimestampProps
  );

  function handleConfirmDate() {
    handleSetScheduling(
      new Date(dateTimestamp.start_timestamp),
      new Date(dateTimestamp.end_timestamp)
    );
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

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);

    let markedDays: string[] = [];
    let unavailableDays: string[] = [];

    Object.keys(interval).forEach((key) => {
      markedDays.push(key);
    });

    Object.keys(unavailableDates).forEach((key) => {
      unavailableDays.push(key);
    });

    if (
      unavailableDays.includes(start.dateString) ||
      unavailableDays.includes(end.dateString)
    ) {
      return;
    }

    var error = false;

    for (var i = 0; i < unavailableDays.length; i++) {
      if (markedDays.includes(unavailableDays[i])) {
        error = true;
        break;
      }
    }
    if (error) {
      return;
    }

    const startDay = addDays(start.timestamp, 1);
    const endDay = addDays(end.timestamp, 1);
    setStartDate(format(startDay, "dd/MM/yyyy"));
    setEndDate(format(endDay, "dd/MM/yyyy"));
    setDateTimestamp({ start_timestamp: start.timestamp, end_timestamp: end.timestamp });
    setMarkedDates(interval);
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
        <Calendar
          markedDates={Object.assign(markedDates, unavailableDates)}
          onDayPress={handleChangeDate}
        />
      </Body>

      <ButtonArea>
        <Button
          title="Confirmar"
          isDisable={startDate === endDate || hasError}
          onPress={handleConfirmDate}
        />
      </ButtonArea>
    </Container>
  );
}
