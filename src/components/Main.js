import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect} from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignOut from './SignOut';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './AppBar';
import CreateReview from './CreateReview';
import ReviewsList from './ReviewsList';

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
            <Route path="/signUp" exact>
                   <SignUp/>
            </Route>
            <Route path="/createReview" exact>
                   <CreateReview/>
            </Route>
            <Route path="/myReviews" exact>
                   <ReviewsList/>
            </Route>
            <Route path="/repository/:id" exact>
                  <RepositoryList />
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