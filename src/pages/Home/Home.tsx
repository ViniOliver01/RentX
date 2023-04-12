import React, { useEffect, useState } from "react";
import { Body, Container, Header, TotalCars } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, FlatList, StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar/CardCar";
import api from "../../services/api";

interface Cars {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: string;
  thumbnail: string;
  accessories: {
    type: string;
    name: string;
  }[];
  photos: string[];
}

export function Home() {
  const [carList, setCarList] = useState<Cars[]>();
  const [isLoading, setIsLoading] = useState(true);

  const availableCars = 10;
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleSelectCar(id: string) {
    navigation.navigate("CarDetails", {
      car: carList.filter((car) => car.id === id)[0],
    });
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get("/cars");
      setCarList(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />
      <Header>
        <Logo />
        <TotalCars>Total de {availableCars} carros</TotalCars>
      </Header>

      <Body>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={theme.colors.header} />
        ) : (
          <FlatList
            data={carList}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 16 }}></View>;
            }}
            renderItem={({ item }) => (
              <CardCar
                manufactor={item.brand}
                fuelType={item.fuel_type}
                model={item.name}
                diary={item.rent.price}
                carImage={item.thumbnail}
                onPress={() => handleSelectCar(item.id)}
              />
            )}
          />
        )}
      </Body>
    </Container>
  );
}
