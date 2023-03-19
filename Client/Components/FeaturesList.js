import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FeaturesList = ({ data, handlePress }) => {
const nav = useNavigation();


  const renderItem = ({ item, id }) => (
    
    <TouchableOpacity key={item.id} onPress={handlePress}>
      <View style={styles.item}>
        {/* //< Data Here ICON can be saved in app */}
        <Image source={item.accessibilityIcon} />
      </View>
      <Text style={styles.iconsText} numberOfLines={2}>
        {/* //< Suplimentary data tag list */}
        {item.tag_list}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View >
       <View style={styles.horizontal}>
        <Text style={styles.title}>Features</Text>
        {/* //< SEE ALL navigates to Category screen */}
        <TouchableOpacity style={styles.navContainer} onPress={() => nav.navigate("Features")}>
          <Text style={styles.text}>See All </Text>
          <Image style={styles.rightArrow} source={require("../assets/png/rightArrow.png")} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FeaturesList;

const styles = StyleSheet.create({
  rightArrow: {
    marginRight: 10,
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

  },
  body: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#111111",
  },
  scroll: {
    height: "100%",
    marginTop: 70,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF3C3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 50,
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  title: {
    display: "flex",
    flexDirection: "column",
    fontSize: 24,
    fontWeight: 700,
    color: "white",
  },
  text: {
    color: "white",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  iconsText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  items: {},

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
  }
 
});