import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { CarDetails } from "../pages/CarDetails/CarDetails";
import { Scheduling } from "../pages/Scheduling/Scheduling";
import { SchedulingComplete } from "../pages/SchedulingComplete/SchedulingComplete";
import { SchedulingDetails } from "../pages/SchedulingDetails/SchedulingDetails";
import { Home } from "./../pages/Home/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  );
}
