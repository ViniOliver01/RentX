import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { CarDetails } from "../pages/CarDetails/CarDetails";
import { Home } from "../pages/Home/Home";
import { Schedules } from "../pages/Schedules/Schedules";
import { Scheduling } from "../pages/Scheduling/Scheduling";
import { SchedulingComplete } from "../pages/SchedulingComplete/SchedulingComplete";
import { SchedulingDetails } from "../pages/SchedulingDetails/SchedulingDetails";
import { Splash } from "../pages/Splash/Splash";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Schedules" component={Schedules} />
    </Navigator>
  );
}
