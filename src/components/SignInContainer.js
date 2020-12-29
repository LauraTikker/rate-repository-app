import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

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
};

const validationSchema = yup.object().shape({
    username: yup
        .mixed()
        .required('Username is required'),
    password: yup
        .mixed()
        .required('Password is required'),
});

const SignInContainer = ({ onSubmit }) => {
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

const SignInForm = ({ onSubmit }) => {
   return (
        <View style={styles.container}>
              <FormikTextInput style={styles.input} fontSize="subheading" name="username" placeholder="Username" testID="usernameField"/>
              <FormikTextInput style={styles.input} secureTextEntry fontSize="subheading" name="password" placeholder="Password" testID="passwordField"/>
              <View style={styles.button}>
              <TouchableWithoutFeedback onPress={onSubmit}>
                 <Text fontWeight="bold" fontSize="subheading" color="white" testID="submitButton">Sign in</Text>
              </TouchableWithoutFeedback>
              </View>
         </View>
   );
};

export default SignInContainer;