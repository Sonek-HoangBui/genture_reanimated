import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

interface ContentProps {}

export default ({}: ContentProps) => {
  const renderDrawer = () => {
    return (
      <View>
        <Text>I am in the drawer!</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerLayout
        drawerWidth={200}
        drawerPosition={'right'}
        drawerType="front"
        drawerBackgroundColor="#ddd"
        renderNavigationView={renderDrawer}>
        <View>
          <Text>Hello, it's me</Text>
        </View>
      </DrawerLayout>
    </View>
  );
};

const styles = StyleSheet.create({});
