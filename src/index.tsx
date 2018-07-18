// app entry
import App from "./containers/App";
import Config from "./commons/Config";
import { AppRegistry } from "react-native";

// register the app
AppRegistry.registerComponent(Config.app.name, () => App);
