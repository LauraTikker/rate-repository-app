import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: theme.colors.appBarBackgroundColor,
  },
});

const AppBar = () => {
  return (
     <ScrollView horizontal style={styles.container}>
         <AppBarTab tabName="Repositories" link="/"/>
         <AppBarTab tabName="Sign in" link="/singIn"/>
     </ScrollView>
  )
};

export default AppBar;