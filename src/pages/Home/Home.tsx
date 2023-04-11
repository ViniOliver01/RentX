import React from "react";
import { Body, Container, Header, TotalCars } from "./styles";

import { FlatList, StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar/CardCar";

const carList = [
  {
    id: "1",
    manufacturer: "Toyota",
    model: "Corolla",
    fuelType: "Gas",
    daily: 50,
    carImage: "https://www.toyotaaruba.com/readBlob.do?id=14860&width=190&height=",
  },
  {
    id: "2",
    manufacturer: "Honda",
    model: "Civic",
    fuelType: "Gas",
    daily: 60,
    carImage: "https://www.toyotaaruba.com/readBlob.do?id=14860&width=190&height=",
  },
  {
    id: "3",
    manufacturer: "Tesla",
    model: "Model S",
    fuelType: "Electric",
    daily: 100,
    carImage: "",
  },
  {
    id: "4",
    manufacturer: "Ford",
    model: "Mustang",
    fuelType: "Gas",
    daily: 80,
    carImage: "",
  },
  {
    id: "5",
    manufacturer: "Chevrolet",
    model: "Camaro",
    fuelType: "Gas",
    daily: 75,
    carImage: "",
  },
  {
    id: "6",
    manufacturer: "BMW",
    model: "X5",
    fuelType: "Gas",
    daily: 120,
    carImage: "",
  },
  {
    id: "7",
    manufacturer: "Mercedes-Benz",
    model: "C-Class",
    fuelType: "Gas",
    daily: 90,
    carImage: "",
  },
  {
    id: "8",
    manufacturer: "Audi",
    model: "A4",
    fuelType: "Gas",
    daily: 85,
    carImage: "",
  },
  {
    id: "9",
    manufacturer: "Porsche",
    model: "911",
    fuelType: "Gas",
    daily: 250,
    carImage: "",
  },
  {
    id: "10",
    manufacturer: "Lamborghini",
    model: "Aventador",
    fuelType: "Gas",
    daily: 1500,
    carImage: "",
  },
];

export function Home() {
  const availableCars = carList.length;
  const theme = useTheme();

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
          ItemSeparatorComponent={() => {
            return <View style={{ height: 16 }}></View>;
          }}
          renderItem={({ item }) => (
            <CardCar
              manufactor={item.manufacturer}
              fuelType={item.fuelType}
              model={item.model}
              diary={item.daily}
              carImage={item.carImage}
            />
          )}
        />
      </Body>
    </Container>
  );
}
