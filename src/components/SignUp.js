import React from 'react';
import { useHistory } from 'react-router-native';

import SignUpContainer from './SignUpContainer';
import useCreateUser from '../hooks/useCreateUser';
import useSignIn from '../hooks/useSignIn';

const SignUp = () => {
   const [createUser] = useCreateUser();
   const [signIn] = useSignIn();
   const history = useHistory();

  const onSubmit = async (values) => {

      const { username, password } = values;
      try {
            await createUser({ username, password });
            await signIn({ username, password });
            history.push('/');
      } catch (e) {
            console.log(e);
      }
    };

    return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;