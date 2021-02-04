import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Importar nustras paginas de navegacion
import Tracks from "../screens/Tracks";
// Crear la constante de navegacion
const Stack = createStackNavigator();
// Inicio
export default function TracksStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#A4C83E",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="tracks"
        component={Tracks}
        options={{ title: "Tracks", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
