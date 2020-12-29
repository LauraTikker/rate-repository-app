import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

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
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(1, 'Username needs to me longer!')
        .max(30, 'Username needs to be shorter!')
        .required('Username is required'),
    password: Yup
        .string()
        .min(5, 'Password needs to me longer!')
        .max(50, 'Password needs to be shorter!')
        .required('Password is required'),
    passwordConfirmation: Yup
         .string()
         .oneOf([Yup.ref('password'), null], "Passwords don't match")
         .required('Password confirmation is required'),
});

const SignUpContainer = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
            {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const SignUpForm = ({ onSubmit }) => {
   return (
        <View style={styles.container}>
              <FormikTextInput style={styles.input} fontSize="subheading" name="username" placeholder="Username"/>
              <FormikTextInput style={styles.input} secureTextEntry fontSize="subheading" name="password" placeholder="Password"/>
              <FormikTextInput style={styles.input} secureTextEntry fontSize="subheading" name="passwordConfirmation" placeholder="Password confirmation"/>
              <View style={styles.button}>
              <TouchableWithoutFeedback onPress={onSubmit}>
                 <Text fontWeight="bold" fontSize="subheading" color="white">Sign up</Text>
              </TouchableWithoutFeedback>
              </View>
         </View>
   );
};

export default SignUpContainer;