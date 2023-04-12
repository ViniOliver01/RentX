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
import ElectricIcon from "../../assets/TechnicalFeatures/Electric.svg";
import GasIcon from "../../assets/TechnicalFeatures/Gas.svg";
import GearBoxIcon from "../../assets/TechnicalFeatures/GearBox.svg";
import PeopleIcon from "../../assets/TechnicalFeatures/People.svg";
import SpeedIcon from "../../assets/TechnicalFeatures/Speed.svg";
import SteeringIcon from "../../assets/TechnicalFeatures/Steering.svg";

interface TechnicalFeaturesProps {
  data: {
    type: string;
    name: string;
  }[];
}

export function TechnicalFeatures({ data }: TechnicalFeaturesProps) {
  return (
    <Container>
      <Line>
        <MaxSpeed>
          <SpeedIcon />
          <Info>{data[0].name}</Info>
        </MaxSpeed>

        <Acceleration>
          <AccelerationIcon />
          <Info>{data[1].name}</Info>
        </Acceleration>

        <HorsePower>
          <SteeringIcon />
          <Info>{data[2].name}</Info>
        </HorsePower>
      </Line>
      <Line>
        <FuelType>
          {data[3].name === "Gasoline" ? <GasIcon /> : <ElectricIcon />}

          <Info>{data[3].name}</Info>
        </FuelType>

        <GearBox>
          <GearBoxIcon />
          <Info>{data[4].name}</Info>
        </GearBox>

        <Seats>
          <PeopleIcon />
          <Info>{data[5].name}</Info>
        </Seats>
      </Line>
    </Container>
  );
}
