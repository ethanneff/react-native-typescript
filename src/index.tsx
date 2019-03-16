// app entry
import { AppRegistry } from "react-native";
import { App } from "./screens";
import { Config } from "./utils";

// register the app
AppRegistry.registerComponent(Config.app.name, () => App);
