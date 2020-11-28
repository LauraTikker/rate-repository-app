import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
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
            <Text fontWeight='bold' color='black' fontSize='heading'>{item.fullName}</Text>
            <View style={repositoryDescriptionStyles.descriptionView}>
            <Text fontSize='subheading' color='textSecondary' style={repositoryDescriptionStyles.text}>{item.description}</Text>
            </View>
              <View style={languageStyles.container}>
                   <Text style={languageStyles.languageText} fontSize='subheading' color='white'>{item.language}</Text>
               </View>
        </View>
  );
};

export default RepositoryDescription;