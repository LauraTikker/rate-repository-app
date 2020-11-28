import React from 'react';
import { useHistory } from 'react-router-native';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik, useField } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      padding: '5%',
   },
   input: {
      padding: '5%',
      borderRadius: 5,
      borderWidth : 2,
      borderColor: '#b3b3b3',
      marginTop: '5%',
   },
   button: {
      backgroundColor: '#0366d6',
      padding: '5%',
      alignItems: 'center',
      borderRadius: 10,
      marginTop: '5%',
   }
});

const initialValues = {
  userName: '',
  password: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .mixed()
        .required('Username is required'),
    password: yup
        .mixed()
        .required('Password is required'),
});

const SignIn = () => {
   const [signIn] = useSignIn();
   const history = useHistory();

  const onSubmit = async (values) => {

      const { username, password } = values;
      try {
            await signIn({ username, password });
            history.push("/");
      } catch (e) {
            console.log(e);
      }
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );
};

const SignInForm = ({onSubmit}) => {
   return (
        <View style={styles.container}>
              <FormikTextInput style={styles.input} fontSize="subheading" name="username" placeholder="Username" />
              <FormikTextInput style={styles.input} secureTextEntry fontSize="subheading" name="password" placeholder="Password" />
              <View style={styles.button}>
              <TouchableWithoutFeedback onPress={onSubmit}>
                 <Text fontWeight="bold" fontSize="subheading" color="white">Sign in</Text>
              </TouchableWithoutFeedback>
              </View>
         </View>
   )
}

export default SignIn;