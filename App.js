import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";

// Register Screens
Navigation.registerComponent("myapp.AuthScreen", () => AuthScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "myapp.AuthScreen",
    title: "Login"
  }
});