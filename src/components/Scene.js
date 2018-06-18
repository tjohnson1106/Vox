import React, {Component} from "react";
import {View, Text, PanResponder, Dimensions} from "react-native";
import * as THREE from "three";

import GestureType from "../controllers/GestureType";

const {width, height} = Dimensions.get("window");

const worldSize = 200;

let sky, sunSphere;

class Scene extends Component {
  world;
  state = {};

  async componentWillMount() {
    this.world = new World(worldSize, worldSize);

    this.mesh = await this.world.getGeometry();

    this.setupWorld();

    this.scene.add(this.mesh);

    this.setState({ready: true});
  }

  setupWorld = () => {
    this.setupCamera();
    this.setupControls();
    this.setupScene();

    this.setupLights();
    this.setupSky();
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <THREEView
          {...this.PanResponder.panHandlers}
          style={{flex: 1}}
          scene={this.scene}
          camera={this.camera}
          tick={this.tick}
        />
        {dpad}
      </View>
    );
  }
}

export default Scene;
