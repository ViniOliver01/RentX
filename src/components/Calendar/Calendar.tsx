import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Calendar as CustomCalendar,
  DateData,
  LocaleConfig,
} from "react-native-calendars";
import { useTheme } from "styled-components";

LocaleConfig.defaultLocale = "pt-br";
LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"],
  today: "Hoje",
};

export function Calendar() {
  const theme = useTheme();
  const [startDay, setStartDay] = useState<DateData>();
  const [endDay, setEndDay] = useState<DateData>();

  function handleSelectDay(day: DateData) {
    if (!startDay) {
      setStartDay(day);
      console.log(day.dateString);
    }
    if (startDay && !endDay) {
      setEndDay(day);
    }
  }

  return (
    <CustomCalendar
      onDayPress={handleSelectDay}
      firstDay={1}
      minDate={String(new Date())}
      markingType={"period"}
      markedDates={{
        "2023-04-13": {
          color: theme.colors.main,
          textColor: theme.colors.background_secondary,
        },
        "2023-04-14": { color: theme.colors.main_light, textColor: theme.colors.main },
        "2023-04-15": { color: theme.colors.main_light, textColor: theme.colors.main },
        "2023-04-16": { color: theme.colors.main_light, textColor: theme.colors.main },
        "2023-04-17": {
          color: theme.colors.main,
          textColor: theme.colors.background_secondary,
        },
      }}
      renderArrow={(direction) => (
        <Feather
          name={direction === "left" ? "chevron-left" : "chevron-right"}
          size={24}
          color={theme.colors.text}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_500,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
    />
  );
}
