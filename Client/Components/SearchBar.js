import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const nav = useNavigation();
  return (
    <TextInput
      style={styles.searchBar}
      placeholder="🔍 Search"
      onChangeText={newText => setSearchTerm(newText)}
      value={searchTerm}
      onSubmitEditing={() => nav.navigate("SearchTermScreen", { term: searchTerm })}
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    paddingLeft: 10,
    backgroundColor: "lightgrey",
    marginTop: 10,
    height: 40,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    borderRadius: 50,
  },
});

export default SearchBar;
