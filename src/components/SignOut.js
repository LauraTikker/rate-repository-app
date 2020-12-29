import { useContext } from 'react';
import { useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';

const SignOut = () => {
   const authStorage = useContext(AuthStorageContext);
   const client = useApolloClient();
   const history = useHistory();

   const SignOut = async () => {
        await authStorage.removeAccessToken();
         const token = await authStorage.getAccessToken();
         console.log(token);
         client.resetStore();
         history.push("/");
   };

   SignOut();

    return null;
};

export default SignOut;