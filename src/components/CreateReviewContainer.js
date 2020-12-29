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
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',

};

const validationSchema = yup.object().shape({
    ownerName: yup
        .mixed()
        .required('Repository owner name is required'),
    repositoryName: yup
        .mixed()
        .required('Repository name is required'),
    rating: yup
         .number()
         .required('Rating is required'),
});

const CreateReviewContainer = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
            {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const CreateReviewForm = ({ onSubmit }) => {
   return (
        <View style={styles.container}>
              <FormikTextInput style={styles.input} fontSize="subheading" name="ownerName" placeholder="Repository owner name"/>
              <FormikTextInput style={styles.input} fontSize="subheading" name="repositoryName" placeholder="Repository name"/>
              <FormikTextInput style={styles.input} fontSize="subheading" name="rating" placeholder="Rating between 0 and 100"/>
              <FormikTextInput style={styles.input} fontSize="subheading" name="text" multiline={true} placeholder="Review"/>
              <View style={styles.button}>
              <TouchableWithoutFeedback onPress={onSubmit}>
                 <Text fontWeight="bold" fontSize="subheading" color="white">Create review</Text>
              </TouchableWithoutFeedback>
              </View>
         </View>
   );
};

export default CreateReviewContainer;