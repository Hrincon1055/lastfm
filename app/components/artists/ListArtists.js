import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
// Inicio
export default function ListArtists(props) {
  // props
  const { artists } = props;
  console.log("ListArtists.js Line 7 -->", artists.topartists.artist);

  return (
    <ScrollView style={styles.listArtistsContent}>
      {artists.topartists.artist.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{ uri: l.image[0]["#text"] }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>listened {l.listeners}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  listArtistsContent: {
    width: "100%",
  },
});
