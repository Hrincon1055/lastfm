import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";
import { SearchBar, Image } from "react-native-elements";
import { getArtistNameApi } from "../../api/artists";
// Constantes
const { width } = Dimensions.get("window");
// Inicio
export default function SearchArtists() {
  // state
  const [search, setSearch] = useState("");
  const [artistsSearch, setArtistsSearch] = useState(null);
  // effect
  useEffect(() => {
    (async () => {
      if (search.length > 2) {
        const response = await getArtistNameApi(search);
        setArtistsSearch(response);
      }
    })();
  }, [search]);
  // Funciones
  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View style={styles.searchContent}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        lightTheme={true}
        value={search}
      />
      <ScrollView>
        <View style={styles.container}>
          {artistsSearch &&
            artistsSearch.map((atist, index) => (
              <Artis key={index} atist={atist} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
function Artis(props) {
  const { atist } = props;
  // Funciones
  const openUrl = (urlArtist) => {
    Linking.openURL(urlArtist);
  };

  return (
    <TouchableWithoutFeedback onPress={() => openUrl(atist.url)}>
      <View style={styles.artis}>
        <Image
          style={styles.imagen}
          source={{ uri: atist.image[0]["#text"] }}
        />
        <Text>{atist.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  searchContent: {
    width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  artis: {
    backgroundColor: "grey",
    width: "47%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  imagen: {
    width: 100,
    height: 100,
  },
});
