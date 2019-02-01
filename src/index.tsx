// app entry
import { AppRegistry } from "react-native";
import Config from "./commons/Config";
import App from "./containers/App";

// register the app
AppRegistry.registerComponent(Config.app.name, () => App);
