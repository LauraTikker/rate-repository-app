import { useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useContext(AuthStorageContext);
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
      const { data } = await mutate({ variables: { username, password } });
      await authStorage.setAccessToken(data.authorize.accessToken);
      client.resetStore();
      return data;
    };

  return [signIn, result];
};

export default useSignIn;