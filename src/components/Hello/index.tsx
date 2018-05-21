import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export interface Iprops {
  name: string;
  enthusiasmLevel?: number;
}

interface Istate {
  enthusiasmLevel: number;
}

function greeter(person) {
  return "Hello, " + person;
}

export default class Hello extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1
    };
  }

  private onIncrement = () =>
    this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
  private onDecrement = () =>
    this.setState({
      enthusiasmLevel:
        this.state.enthusiasmLevel - 1 > 0 ? this.state.enthusiasmLevel - 1 : 0
    });
  private getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join("!");

  private render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello{" "}
          {this.props.name +
            this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
            />
          </View>
        </View>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  }
});
