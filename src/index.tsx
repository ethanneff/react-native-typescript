// app entry
import { AppRegistry } from "react-native";
import { Config } from "./commons";
import { App } from "./containers";

// register the app
AppRegistry.registerComponent(Config.app.name, () => App);
