import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/react-hooks';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { Provider as PaperProvider } from 'react-native-paper';

import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {

  return (
    <PaperProvider>
        <NativeRouter>
            <ApolloProvider client={apolloClient}>
                <AuthStorageContext.Provider value={authStorage}>
                    <Main />
                </AuthStorageContext.Provider>
            </ApolloProvider>
        </NativeRouter>
    </PaperProvider>
  );
};

export default App;
