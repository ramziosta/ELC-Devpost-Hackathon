import React from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, TouchableOpacity,  } from "react-native";

function AccountScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require("../assets/png/BrandLogo/NameLogo.png")} />
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity>
      <View style={styles.settingsContainer}>
        <Image style={styles.image} source={require("../assets/icons/email.png")} />
        <Text style={styles.settingsText}>Change Email</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.settingsContainer}>
        <Image style={styles.image} source={require("../assets/icons/key.png")} />
        <Text style={styles.settingsText}>Update Password</Text>
      </View>
      </TouchableOpacity>

      <Text style={styles.header}>Help</Text>
  
      <TouchableOpacity>
      <View style={styles.settingsContainer} >
        <Image style={styles.image} source={require("../assets/icons/info.png")} />
        <Text style={styles.settingsText} >How Virtual Vanity Works</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.settingsContainer}>
        <Image style={styles.image} source={require("../assets/icons/questionMark.png")} />
        <Text style={styles.settingsText}>Frequently Asked Questions</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.settingsContainer} >
        <Image style={styles.image} source={require("../assets/icons/shield.png")} />
        <Text style={styles.settingsText}>Terms & Privacy Policy</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.settingsContainer} >
        <Image style={styles.image} source={require("../assets/icons/logout.png")} />
        <Text style={styles.settingsText}>Log out</Text>
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    height: "100%",
  },
  header: {
    color: "#ffffff",
    marginTop: 0,
    marginBottom: 10,
    marginHorizontal: 20,
    fontWeight: 700,
  },
  settingsContainer: {
    marginVertical: 10,
    backgroundColor: "#434343",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    maxWidth: 360,
   left: 15,
   borderRadius: 12,
   paddingVertical: 15,



  },
  settingsText: {
    color: "#ffffff",
    alignSelf: "center",
    marginLeft: 10,
    fontWeight: 700,
  },
  image:{
    alignSelf: "center",
    marginLeft: 40,

  },
  logo:{
    alignSelf: "center",
    width: 90, 
    height: 100, 
    resizeMode: 'contain',
    top: -30,
  },
});
