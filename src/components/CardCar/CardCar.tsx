import React from "react";
import {
  CarDetails,
  CarImage,
  Container,
  Diary,
  FuelDetails,
  Manufactor,
  Model,
  Price,
  PriceDetails,
} from "./styles";

import DefaultCar from "../../assets/defaultCar.svg";
import Electric from "../../assets/electric.svg";
import Gas from "../../assets/gas.svg";

interface CardCarProps {
  manufactor: string;
  model: string;
  fuelType: string;
  diary: number;
  carImage: string;
}

export function CardCar({ manufactor, model, fuelType, diary, carImage }: CardCarProps) {
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  }).format(diary);

  return (
    <Container>
      <CarDetails>
        <Manufactor>{manufactor.toUpperCase()}</Manufactor>
        <Model>{model}</Model>

        <FuelDetails>
          <PriceDetails>
            <Diary>AO DIA</Diary>
            <Price>{price}</Price>
          </PriceDetails>
          {fuelType === "Gas" ? (
            <Gas width={24} height={24} />
          ) : (
            <Electric width={24} height={24} />
          )}
        </FuelDetails>
      </CarDetails>
      {carImage ? (
        <CarImage source={{ uri: carImage }} resizeMode="contain" />
      ) : (
        <DefaultCar width={160} height={100} />
      )}
    </Container>
  );
}
