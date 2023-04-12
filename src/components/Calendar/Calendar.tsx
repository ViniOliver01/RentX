import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  CalendarProps,
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";
import { useTheme } from "styled-components";
import { ptBR } from "./localeConfig";

LocaleConfig.defaultLocale = "pt-br";
LocaleConfig.locales["pt-br"] = ptBR;

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      onDayPress={onDayPress}
      firstDay={1}
      minDate={String(new Date())}
      markingType={"period"}
      markedDates={markedDates}
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
