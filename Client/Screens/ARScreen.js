import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, SafeAreaView, Button, StyleSheet,  } from "react-native";

export default function AR(props) {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.text} >We're still building and improving our technology to bring you the best experience possible. Thank you for your interest in <Text style={{color:"#e3c3ff"}} >Virtual Vanity </Text>
      </Text>
      <Text style={styles.text2}>Please check back later or contact us if you have any questions or concerns. </Text>
      
      <Button title="Back" onPress={()=>{nav.goBack()}}
      color="#ffffff" />

      </View>

    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  container :{
    display: "flex",
    justifyContent: "center",
    height: "100%",
  backgroundColor: "#111111",
  },
text: {
  color: "#ffffff",
  alignSelf: "center",
  marginBottom: 100,
  fontWeight: 600,
  marginHorizontal: 45,
  lighHeight: 30,
  
},
text2: {
  color: "#ffffff",
  alignSelf: "center",
  marginBottom: 100,
  marginHorizontal: 45,

  
}
});