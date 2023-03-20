import React from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView, Image,
} from "react-native";




const Favorite = () => {
 

  return (
    <SafeAreaView style={styles.body}>
  
      <Text style={styles.text}>
      You haven't added any items to your favorites yet. 
      </Text>
      <Text style={styles.text}>
    Why not try using our app to browse or search for some products you might like?
      </Text>
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  body: {
    backgroundColor:"#111111",
    height:"100%",
    display: "flex",
    justifyContent: "center",

  },
  text:{
    fontSize: 18,
    marginHorizontal: 30,
    color: "#FFFFFF",
    fontWeight: 700,
    lineHeight: 20,
    marginBottom:10,

  },

  
});
