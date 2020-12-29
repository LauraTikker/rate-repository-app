import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/react-hooks';
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
    const { data } = useQuery(GET_AUTHORIZED_USER);
    let showLogOutSign = false;
    if (data && data.authorizedUser) {
       showLogOutSign = true;
    }

  return (
     <ScrollView horizontal style={styles.container}>
         <AppBarTab tabName="Repositories" link="/"/>
         {showLogOutSign ?
         (
         <>
            <AppBarTab tabName="Create a review" link="/createReview"/>
            <AppBarTab tabName="My reviews" link="/myReviews"/>
            <AppBarTab tabName="Sign out" link="/signOut"/>
         </>
         ) :
         (
         <>
            <AppBarTab tabName="Sign in" link="/signIn"/>
            <AppBarTab tabName="Sign up" link="/signUp"/>
         </>
         )
         }
     </ScrollView>
  );
};

export default AppBar;