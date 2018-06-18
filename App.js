import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Scene from "./src/components/Scene";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Scene />
      </View>
    );
  }
}
