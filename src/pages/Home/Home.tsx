import React from "react";
import { Body, Container, Header, TotalCars } from "./styles";

import { FlatList, StatusBar } from "react-native";
import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar/CardCar";
import theme from "../../styles/theme";

const carList = [
  {
    id: "123",
    manufactor: "Audi",
    model: "RS 5 Coupé",
    fuelType: "Gas",
    diary: 120,
    carImage:
      "https://purepng.com/public/uploads/large/purepng.com-audi-rs7audicars-961524670527euybp.png",
  },
];

export function Home() {
  const availableCars = 12;
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />
      <Header>
        <Logo />
        <TotalCars>Total de {availableCars} carros</TotalCars>
      </Header>

      <Body>
        <FlatList
          data={carList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardCar
              manufactor={item.manufactor}
              fuelType={item.fuelType}
              model={item.model}
              diary={item.diary}
              carImage={item.carImage}
            />
          )}
        />
      </Body>
    </Container>
  );
}
