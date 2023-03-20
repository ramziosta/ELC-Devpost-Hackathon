import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import DropdownSearchBar from "../Components/DropdownSearchBar";
import { highlyRated, features } from "../Constants/BeautyData";
import ProductAccessibilityTags from "../Components/ProductAccessibilityTags";
import { FetchSearchData } from "../Components/FetchSearchData";
import ProductsArray from "./ProductsArray";
import SearchBar from "../Components/SearchBar";

const SearchTermScreen = (props) => {
  const nav = useNavigation();
  const { term } = props.route.params;
  return (
    <SafeAreaView style={styles.body}>
      <SearchBar />
      <View style={styles.scroll}>
        <View style={styles.horizontal}>
          <Text style={styles.text2}>Search results for "{term}":</Text>
          <FetchSearchData RenderComponent={ProductsArray} term={term} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchTermScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#111111",
  },
  scroll: {
    height: "100%",
  },
  horizontal: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  text2: {
    color: "white",
    // textDecorationLine: "underline",
    marginRight: 10,
    marginBottom: 10
  },
  image: {
    width: 180,
    height: 190,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  brand: {
    color: "white",
  },
  brandNameText: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    paddingBottom: 3,
  },
  accessibility: {
    color: "black",
    backgroundColor: "#FFF3C3",
    alignSelf: "flex-start",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 3,
  },
  buyItAgain: {
    color: "white",
  },
  textContainer: {
    width: 180,
    marginLeft: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#434343",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heartIconContainer: {
    position: "absolute",
    top: 160,
    zIndex: 10,
    left: 20,
  },
  ratingIconContainer: {
    position: "absolute",
    top: 150,
    left: 140,
  },
});
