import React, {Component} from "react";
import {View, Text, PanResponder, Dimensions} from "react-native";
import Expo from "expo";

import * as THREE from "three";
const THREEView = Expo.createTHREEViewClass(THREE);

import GestureType from "../controllers/GestureType";

const {width, height} = Dimensions.get("window");

const worldSize = 200;

let sky, sunSphere;

class Scene extends Component {
  world;
  state = {};

  setupScene = (fogColor = 0x7394a0, fogFalloff = 0.00015) => {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(fogColor, fogFalloff);
  };

  setupLights = () => {};

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

  tick = () => {
    this.controls.update(dt, this.moveID);
  };

  render() {
    if (!this.state.ready) {
      return <Expo.Apploading />;
    }

    const dPad = {};

    return (
      <View style={{flex: 1}}>
        <THREEView
          {...this.PanResponder.panHandlers}
          style={{flex: 1}}
          scene={this.scene}
          camera={this.camera}
          tick={this.tick}
        />
        {dPad}
      </View>
    );
  }
}

export default Scene;
