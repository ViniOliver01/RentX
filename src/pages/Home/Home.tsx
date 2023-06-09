import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { BackHandler, FlatList, StatusBar, View } from "react-native";
import { useTheme } from "styled-components";
import { Body, Container, Header, MyCarsButton, TotalCars } from "./styles";

import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar/CardCar";
import { Car, useCarData } from "../../context/CarContext";
import api from "../../services/api";
import { LoadAnimation } from "./../../components/LoadAnimation/LoadAnimation";

export function Home() {
  const [carList, setCarList] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleSetCar } = useCarData();

  const availableCars = carList.length;
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleSelectCar(id: string) {
    const car = carList.filter((car) => car.id === id)[0];
    handleSetCar(car);
    navigation.navigate("CarDetails");
  }

  function handleOpenMyCars() {
    navigation.navigate("Schedules");
  }

  useEffect(() => {
    async function getData() {
      const carResponse = await api.get("/cars");
      setCarList(carResponse.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => backHandler.remove();
  });

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.header} />
      <Header>
        <Logo />
        {carList.length !== 0 && <TotalCars>Total de {availableCars} carros</TotalCars>}
      </Header>

      <Body>
        {isLoading ? (
          <LoadAnimation />
        ) : (
          <FlatList
            data={carList}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
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

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.background_secondary}
        />
      </MyCarsButton>
    </Container>
  );
}
