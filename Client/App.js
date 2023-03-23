import React, { createContext, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import OnBoardingNavigation from "./routes/OnBoardingNavigation";
import * as SplashScreen from 'expo-splash-screen';


const Stack = createNativeStackNavigator();

export const AtlasContext = createContext(undefined);

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);
  const [atlasToken, setAtlasToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  const getToken = async () => {
    try {
      const response = await fetch(
        "https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/app/elc-makeup-app-kerwc/auth/providers/anon-user/login"
      );
      const json = await response.json();
      console.log(json);
      setAtlasToken(json.access_token);
      setRefreshToken(json.refresh_token);
    } catch (error) {
      console.error(error);
    }
  };

  const reauthToken = async () => {
    try {
      const response = await fetch(
        "https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/auth/session",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setAtlasToken(json.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function prepareApp() {
      try {
        if (!fontsLoaded) {
          throw new Error("Fonts not loaded");
        }
        await getToken();
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    SplashScreen.preventAutoHideAsync()
      .then(() => prepareApp())
      .catch((error) => console.error(error));
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <AtlasContext.Provider value={atlasToken}>
        <OnBoardingNavigation />
      </AtlasContext.Provider>
    </NavigationContainer>
  );
};

export default App;

export const getAtlasToken = () => {
  const [atlasToken, setAtlasToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const getToken = async () => {
    try {
      const response = await fetch(
        "https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/app/elc-makeup-app-kerwc/auth/providers/anon-user/login"
      );
      const json = await response.json();

      setAtlasToken(json.access_token);
      setRefreshToken(json.refresh_token);
    } catch (error) {
      console.error(error);
    }
  };

  const reauthToken = async () => {
    try {
      const response = await fetch(
        "https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/auth/session",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setAtlasToken(json.access_token);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    getToken();
  }, []);
  
  return atlasToken;
  };

  