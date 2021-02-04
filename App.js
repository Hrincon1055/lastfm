import { StatusBar } from "react-native";
import React from "react";
import Navigation from "./app/navigations/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PRIMARY_COLOR } from "./app/utils/styleConstants";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={PRIMARY_COLOR} />
        <Navigation />
      </SafeAreaProvider>
    </>
  );
}
