// This page contain use of Stack Navigation only. We have 2 stacks
// 1. Main Stack 2. Product Stack 
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ARScreen,
  HomeScreen,
  ProductDetailsScreen,
  ThreeDScreen,
} from "../Screens/index";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="ThreeD" component={ThreeDScreen} />
      <Stack.Screen name="AR" component={ARScreen} />
    </Stack.Navigator>
  );
};



export { ProductStack, };