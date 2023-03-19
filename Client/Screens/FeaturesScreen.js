import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { features } from "../Constants/BeautyData";
import DropdownSearchBar from "../Components/DropdownSearchBar";

const FeaturesList = ({ data, handlePress }) => {
  const nav = useNavigation();

  const renderItem = ({ item, id }) => (
    <TouchableOpacity key={item.id} onPress={handlePress}>
      <View style={styles.item}>
        <Image source={item.accessibilityIcon} />
      </View>
      <Text style={styles.iconsText} numberOfLines={2}>
        {item.tag_list}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.header}>
         
          <TouchableOpacity style={styles.back} onPress={()=>nav.goBack()}>
            <Image style={styles.icon} source={require("../assets/png/chevron-left.png")} />
            <Text style={{ color: "white", alignSelf: "center", }}>Back</Text>
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../assets/png/BrandLogo/NameLogo.png")}
          />
        </View>

        <View style={styles.searchBar}>
          <DropdownSearchBar />
        </View>
        <View style={styles.horizontal}>
          <Text style={styles.title}>Browse Features</Text>
        </View>

        <FlatList
          data={features}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
        <View style={{ height: 300 }}></View>
    </SafeAreaView>
  );
};

export default FeaturesList;

const styles = StyleSheet.create({
  container: {
    fontFamily:"Poppins",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#111111",
    width: "100%",
  },

  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF3C3",
    padding: 20,
    marginVertical: 11,
    marginHorizontal: 12,
    borderRadius: 50,
  },

  title: {
    marginTop: 30,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    fontSize: 24,
    fontWeight: 700,
    color: "white",
    marginLeft: 20,
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
  logo: {
    alignSelf: "center",
    width: 90,
    height: 100,
    resizeMode: "contain",
    marginHorizontal: 85,
  },
  searchBar: {
    top: -55,
  },
  back: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
  header: {
    top: -30,
    display: "flex",
    flexDirection: "row",
    position: "sticky",
  },
  icon :{
    marginLeft: 10,
    alignSelf: "center",
  },
});
