import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screen/Home";
import { Notice } from "./screen/notice";
export const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{title:"학교에서 롤 하지 맙시다."}} component={Home} />
        <Stack.Screen name="Notice" options={{title:"한국인은 안읽는 이용 가이드"}} component={Notice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
