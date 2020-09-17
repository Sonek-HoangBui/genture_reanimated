import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

const {
  block,
  Clock,
  clockRunning,
  cond,
  debug,
  set,
  startClock,
  stopClock,
  timing,
  Value,
} = Animated;

interface ContentProps {}

function runTiming(clock, value: number, dest: number) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    // amount of time running in duration
    time: new Value(0),
    // frame time for 'timing' function
    frameTime: new Value(0),
  };

  const config = {
    duration: 5000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(
      clockRunning(clock),
      [
        // if the clock is already running we update the toValue, in case a new dest has been passed in
        set(config.toValue, dest),
        debug('to Value', state.position),
        debug('time: ', state.time),
        debug('frame time: ', state.frameTime),
      ],
      [
        // if the clock isn't running we reset all the animation params and start the clock
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ],
    ),
    // we run the step here tha is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, debug('stop clock', stopClock(clock))),
    // we made the block return the updated position
    state.position,
  ]);
}

export default ({}: ContentProps) => {
  // we create a clock node
  let clock = new Clock();
  // and use runTiming method defined above to create a node that is going to be mapped
  // to the translateX transform
  let transY = runTiming(clock, -120, 240);
  

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'green'},
          {transform: [{translateY: transY}]},
        ]}
      />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
