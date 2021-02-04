import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { PRIMARY_COLOR } from "../utils/styleConstants";
// Importar nustro stack de navegacion
import ArtistsStack from "./ArtistsStack";
import TracksStack from "./TracksStack";

// Crear la constante de navegacion
const Tab = createBottomTabNavigator();
// Inicio
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="artists"
        tabBarOptions={{
          inactiveTintColor: "#b4b5b5",
          activeTintColor: "#fff",
          activeBackgroundColor: PRIMARY_COLOR,
          inactiveBackgroundColor: PRIMARY_COLOR,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="artists"
          component={ArtistsStack}
          options={{ title: "Artists" }}
        />
        <Tab.Screen
          name="tracks"
          component={TracksStack}
          options={{ title: "Tracks" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "artists":
      iconName = "account-music-outline";
      break;
    case "tracks":
      iconName = "music-circle-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={28} color={color} />
  );
}
