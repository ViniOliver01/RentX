import React from "react";
import { Container, Date, DateBox, Period } from "./styles";

import Arrow from "../../assets/DateArrow.svg";

interface SchedulesPeriodProps {
  start_date: string;
  end_date: string;
}

export function SchedulesPeriod({ start_date, end_date }: SchedulesPeriodProps) {
  return (
    <Container>
      <Period>PERÍODO</Period>
      <DateBox>
        <Date>{start_date}</Date>
        <Arrow />
        <Date>{end_date}</Date>
      </DateBox>
    </Container>
  );
}
