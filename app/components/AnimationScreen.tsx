import React from 'react';
import Lottie from 'lottie-react-native';

export type IAnimationScreenProps = {};

export default function AnimationScreen() {
  return <Lottie source={require('../utils/sp.json')} autoPlay loop />;
}
