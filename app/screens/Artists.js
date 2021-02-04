import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import { PRIMARY_COLOR } from "../utils/styleConstants";
import ListArtists from "../components/artists/ListArtists";
import { getArtistApi } from "../api/artists";

// Inicio
export default function Artists() {
  // state
  const [artists, setArtists] = useState(null);
  // effect
  useEffect(() => {
    (async () => {
      const response = await getArtistApi();
      setArtists(response || []);
    })();
  }, []);
  if (!artists) {
    return (
      <View style={styles.contentActivityIndicator}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      </View>
    );
  }
  return (
    <View style={styles.listArtistContentent}>
      <Text h3 style={styles.title}>
        List Artists Top
      </Text>
      <ListArtists artists={artists} />
    </View>
  );
}
const styles = StyleSheet.create({
  contentActivityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listArtistContentent: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    paddingVertical: 10,
    fontWeight: "bold",
  },
});
