import React, { useState } from "react";
import { Linking, StyleSheet, ScrollView } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
// Inicio
export default function ListArtists(props) {
  // props
  const {
    artists,
    page,
    setPage,
    showBtnMore,
    isLoading,
    setIsLoading,
  } = props;
  // state

  // Funciones
  const openUrl = (urlArtist) => {
    Linking.openURL(urlArtist);
  };
  const loadMoreArtists = () => {
    setIsLoading(true);
    setPage(page + 1);
  };
  return (
    <ScrollView style={styles.listArtistsContent}>
      {artists.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={() => openUrl(l.url)}>
          <Avatar source={{ uri: l.image[0]["#text"] }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>listened {l.listeners}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      {showBtnMore && (
        <Button
          title="CARGAR MAS..."
          type="outline"
          loading={isLoading}
          onPress={loadMoreArtists}
        />
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  listArtistsContent: {
    width: "100%",
  },
});
