import Expo from "expo";
import React, {Component} from "react";
import {View, Dimensions} from "react-native";
import * as THREE from "three";

import ImprovedNoise from "./ImprovedNoise";

const THREEView = Expo.createTHREEViewClass(THREE);

class World extends Component {
  width;
  height;
  data;
  hash;

  constructor(width, depth) {
    this.width = width;
    this.depth = depth;
    this.data = this.generateHeight(width, depth);
  }

  getGeometry = async () => {};

  generateHeight = (width, height) => {
    let data = [],
      perlin = new ImprovedNoise(),
      size = width * height,
      quality = 2,
      z = Math.random() * 100;
    for (let j = 0; j < 4; j++) {}
  };

  state = {};
  render() {
    return {};
  }
}

export default World;
