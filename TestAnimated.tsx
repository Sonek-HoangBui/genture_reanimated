import React, {Component} from 'react';
import {Animated, Button, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ReanimatedTest from './src/ReanimatedTest';

const TestAnimated = (props) => {
  return (
    <View>
      <Text>Oke</Text>
      <ReanimatedTest />
      <Button
        title={'FirstTab'}
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'tabs.FirstTabScreen',
            },
          })
        }
      />
    </View>
  );
};

export default TestAnimated;
