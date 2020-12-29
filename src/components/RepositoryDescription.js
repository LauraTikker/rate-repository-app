import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const repositoryDescriptionStyles =  StyleSheet.create({
   container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexGrow: 0,
   },
    descriptionView: {
         margin: '2%',
         display: 'flex',
         flexDirection: 'row',
    },
    text: {
        width: 0,
        flexGrow: 1,
    },
});

const languageStyles =  StyleSheet.create({
   container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexGrow: 0,
   },
    languageText: {
         padding: '2%',
         backgroundColor: '#0366d6',
         flexGrow: 0,
         borderRadius: 10
    },
});

const RepositoryDescription = ({item}) => {
  return (
        <View style={repositoryDescriptionStyles.container}>
            <Text fontWeight='bold' color='black' fontSize='heading' testID="itemFullName">{item.fullName}</Text>
            <View style={repositoryDescriptionStyles.descriptionView}>
            <Text fontSize='subheading' color='textSecondary' style={repositoryDescriptionStyles.text} testID="itemDescription">{item.description}</Text>
            </View>
              <View style={languageStyles.container}>
                   <Text style={languageStyles.languageText} fontSize='subheading' color='white' testID="itemLanguage">{item.language}</Text>
               </View>
        </View>
  );
};

export default RepositoryDescription;