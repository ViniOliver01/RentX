import React from "react";
import {
  Acceleration,
  Container,
  FuelType,
  GearBox,
  HorsePower,
  Info,
  Line,
  MaxSpeed,
  Seats,
} from "./styles";

import AccelerationIcon from "../../assets/TechnicalFeatures/Acceleration.svg";
import GasIcon from "../../assets/TechnicalFeatures/Gas.svg";
import GearBoxIcon from "../../assets/TechnicalFeatures/GearBox.svg";
import PeopleIcon from "../../assets/TechnicalFeatures/People.svg";
import SpeedIcon from "../../assets/TechnicalFeatures/Speed.svg";
import SteeringIcon from "../../assets/TechnicalFeatures/Steering.svg";

export function TechnicalFeatures() {
  return (
    <Container>
      <Line>
        <MaxSpeed>
          <SpeedIcon />
          <Info>380km/h</Info>
        </MaxSpeed>

        <Acceleration>
          <AccelerationIcon />
          <Info>3.2s</Info>
        </Acceleration>

        <HorsePower>
          <SteeringIcon />
          <Info>800 HP</Info>
        </HorsePower>
      </Line>
      <Line>
        <FuelType>
          <GasIcon />
          <Info>Gasolina</Info>
        </FuelType>

        <GearBox>
          <GearBoxIcon />
          <Info>Auto</Info>
        </GearBox>

        <Seats>
          <PeopleIcon />
          <Info>2 pessoas</Info>
        </Seats>
      </Line>
    </Container>
  );
}
