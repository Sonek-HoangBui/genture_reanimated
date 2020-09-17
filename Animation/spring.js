/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
  Animated,
} from 'react-native-reanimated';

const  Spring = () => {
  const offset = useSharedValue(0);

  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 255) }],
    };
  });

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return (
    <>
      <Animated.View style={[{width: 20,heigh:20,color :'pink'}, defaultSpringStyles]} />
      <Animated.View style={[{width: 20,heigh:20,color :'pink'}, customSpringStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title="Move" />
    </>
  );
}

export default Spring;