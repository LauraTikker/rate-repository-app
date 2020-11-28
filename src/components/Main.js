import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View, Text } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignOut from './SignOut';
import SignIn from './SignIn';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D3D3D3',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
        <Switch>
            <Route path="/signIn" exact>
                <SignIn />
            </Route>
            <Route path="/signOut" exact>
                   <SignOut/>
            </Route>
            <Route path="/" exact>
                <RepositoryList />
            </Route>
            <Redirect to="/" />
         </Switch>
    </View>
  );
};

export default Main;