import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Home from "./screens/home";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";

const getFonts = () => {
  Font.loadAsync({
    "nutito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nutito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }
}

// import { useEffect, useCallback } from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { useFonts } from "expo-font";
// import Home from "./screens/home";

// import * as SplashScreen from "expo-splash-screen";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "nutito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nutito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });

//   useEffect(() => {
//     async function prepare() {
//       await SplashScreen.preventAutoHideAsync();
//     }
//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View onLayout={onLayoutRootView}>
//       <Home />
//     </View>
//   );
// }
