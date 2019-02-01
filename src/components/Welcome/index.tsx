import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// styles
const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 0
  },
  buttons: {
    flexDirection: "row"
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  },
  root: {
    alignItems: "center",
    alignSelf: "center"
  }
});

interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

export interface IState {
  enthusiasmLevel: number;
}

class Welcome extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1
    };
  }

  public onIncrement = () =>
    this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });

  public onDecrement = () =>
    this.setState({
      enthusiasmLevel:
        this.state.enthusiasmLevel - 1 > 0 ? this.state.enthusiasmLevel - 1 : 0
    });

  public getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join("!");

  public render() {
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

export default Welcome;
