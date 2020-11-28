import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/react-hooks';
import Text from './Text';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

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
    const { data, error, loading } = useQuery(GET_AUTHORIZED_USER);
    let showLogOutSign = false;
    if (data && data.authorizedUser) {
       showLogOutSign = true;
    }

  return (
     <ScrollView horizontal style={styles.container}>
         <AppBarTab tabName="Repositories" link="/"/>
         {showLogOutSign ?
         (<AppBarTab tabName="Sign out" link="/signOut"/>) :
         (<AppBarTab tabName="Sign in" link="/signIn"/>)
         }
     </ScrollView>
  )
};

export default AppBar;