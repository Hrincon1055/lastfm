import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Icon, Button } from "react-native-elements";
import { PRIMARY_COLOR } from "../utils/styleConstants";
import ListArtists from "../components/artists/ListArtists";
import { getArtistApi } from "../api/artists";

// Inicio
export default function Artists(props) {
  // props
  const { navigation } = props;
  // state
  const [artists, setArtists] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtnMore, setShowBtnMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // effect
  useEffect(() => {
    (async () => {
      const response = await getArtistApi(page);
      const totalPages = response.topartists["@attr"].totalPages;
      if (page < totalPages) {
        if (!artists) {
          setArtists(response.topartists.artist);
        } else {
          setIsLoading(true);
          setArtists([...artists, ...response.topartists.artist]);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      } else {
        setShowBtnMore(false);
      }
    })();
  }, [page]);
  if (!artists) {
    return (
      <View style={styles.contentActivityIndicator}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      </View>
    );
  }
  return (
    <View style={styles.listArtistContentent}>
      <View style={styles.searchContent}>
        <Text h3 style={styles.title}>
          List Artists Top
        </Text>
        <Icon
          name="search-circle-outline"
          type="ionicon"
          color={PRIMARY_COLOR}
          size={40}
          iconStyle={styles.icon}
          onPress={() => navigation.navigate("searchArtists")}
        />
      </View>
      <ListArtists
        artists={artists}
        page={page}
        setPage={setPage}
        showBtnMore={showBtnMore}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
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
  searchContent: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
