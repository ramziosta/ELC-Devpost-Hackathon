import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,

} from "react-native";

const ProductAccessibilityTags = ({ data }) => {
    const renderItem = ({ item }) => (
      <View style={styles.container}>
      <View style={styles.tagsBackgroundColor}>
        <Text style={styles.tags}>{item.tag_list}</Text>
      </View>
      </View>
    );
  
    return (
      <View  >
        <FlatList
          data={data}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          numColumns={3}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={3}
        />
      </View>
    );
  };

  export default ProductAccessibilityTags;


  const styles = StyleSheet.create({
    container:{
      display:"flex",
      flexDirection:"row",

      alignItems:"center",
      paddingHorizontal: 15,
      marginVertical: 5,
    },
      tagsBackgroundColor: {
      backgroundColor: "#FFF3C3",
      borderRadius: 50,
      marginTop: 10,
      marginBottom: 20,
    },
    tags: {
      width: 100,
      textAlign: "center",
      paddingHorizontal: 10,
      marginVertical: 5,
      paddingVertical: 5,
      fontSize: 16,
      fontWeight:500,
    },
   
  });