import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
const ThreeDScreen2 = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
       {/* <Text style={{ textAlign: "center",fontSize: 20, fontWeight: 700}}>Slim Matte Longwear Lipstick</Text> */}
      <WebView
        style={styles.iframe}
        source={{ uri: "https://app.vectary.com/p/7QzjYM09Su4mNhvSTzX0bv"  }}
      />


<View style={styles.button} >
<Button

    title="X Cancel"
    onPress={() => {
      nav.navigate("ProductDetails2");
    }}
    color="#111111"
  />
  </View>

</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#434343",
height: 100,
},
iframe: {
marginTop: 20,
marginBottom: 0,
width: "100%",
},
slideButtons: {
top: 100,
left: 120,
position: "absolute",
flexDirection: "row",
justifyContent: "center",
alignItems: "center",
borderRadius: 7,
borderColor: "#111111",
borderWidth:1,

},
threeDButton: {
backgroundColor: "#e3c3ff",

},
openItem: {
  alignSelf: "center",
  backgroundColor: "#e3c3ff",
  paddingHorizontal:20,
  paddingVertical:10,
  borderRadius: 50,
  marginVertical: 10,
  marginHorizontal: 10,
},
button: {
  position: "absolute",
  top: 100,
  left: 20,
},

});

export default ThreeDScreen2;
