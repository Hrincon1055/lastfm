import React, { useState } from "react";
import { Linking, StyleSheet, ScrollView } from "react-native";
import { ListItem, Avatar, Button } from "react-native-elements";
// Inicio
export default function ListArtists(props) {
  // props
  const { artists } = props;
  // state
  const [showBtnMore, setShowBtnMore] = useState(true);
  // Funciones
  const openUrl = (urlArtist) => {
    Linking.openURL(urlArtist);
  };

  return (
    <ScrollView style={styles.listArtistsContent}>
      {artists.topartists.artist.map((l, i) => (
        <ListItem key={i} bottomDivider onPress={() => openUrl(l.url)}>
          <Avatar source={{ uri: l.image[0]["#text"] }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>listened {l.listeners}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      {/* {showBtnMore && (
        <Button title="Cargar mas..." type="outline" loading={true} />
      )} */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  listArtistsContent: {
    width: "100%",
  },
});
