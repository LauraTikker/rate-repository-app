import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#0366d6',
      padding: '5%',
      alignItems: 'center',
      borderRadius: 10,
      margin: '5%',
   }
});

const RepositoryUrlButton = ({ url }) => {

   return (
        <View style={styles.button}>
              <TouchableWithoutFeedback onPress={() => url()}>
                 <Text fontWeight="bold" fontSize="subheading" color="white" testID="submitButton">Open in Github</Text>
              </TouchableWithoutFeedback>
        </View>
   );
};

export default RepositoryUrlButton;