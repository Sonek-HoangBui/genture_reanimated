import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

import FirstTabScreen from '../src/tabs/FirstTabScreen';
import SecondTabScreen from '../src/tabs/SecondTabScreen';
import PushedScreen from '../src/tabs/PushedScreen';

// register all screens of the app (including internal ones)
function registerScreens() {
  Navigation.registerComponent('tabs.FirstTabScreen', () =>
    // gestureHandlerRootHOC(FirstTabScreen),
    gestureHandlerRootHOC(FirstTabScreen),
  );
  Navigation.registerComponent('tabs.SecondTabScreen', () =>
    gestureHandlerRootHOC(SecondTabScreen),
  );
  Navigation.registerComponent('tabs.PushedScreen', () =>
    gestureHandlerRootHOC(PushedScreen),
  );
}

registerScreens();
