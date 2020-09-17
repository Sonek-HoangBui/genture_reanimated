/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {AppRegistry, Text, View} from 'react-native';
import App from './App';
import TestAnimated from './TestAnimated';
import {name as appName} from './app.json';
import './routes/registerComponents';
import Spring from './Animation/spring'
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('com.myApp.TestAnimated', () => Spring);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.TestAnimated',
              options: {
                topBar: {
                  // visible: false,
                  // backButton: {title: 'Back btn', showTitle: true},
                },
              },
            },
          },
        ],
      },
    },
  });
});
AppRegistry.registerComponent(appName, () => Spring);
