import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Importar nustras paginas de navegacion
import Artists from "../screens/Artists";
// Crear la constante de navegacion
const Stack = createStackNavigator();
// Inicio
export default function ArtistsStack() {
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
        name="artists"
        component={Artists}
        options={{ title: "Artists", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
