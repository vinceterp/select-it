import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import App from "./App";
import appInfo from './app.json';
const appName = appInfo.expo.name;

if (Platform.OS) {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}