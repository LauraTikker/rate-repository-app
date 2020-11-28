import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import numberFormatter from '../utils'

const repositoryDetailsStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
    marginBottom: '5%',
    flexGrow: 0,
  },
});

const RepositoryDetails = ({item}) => {
  return (
      <View style={repositoryDetailsStyles.container}>
            <View>
                <Text fontWeight='bold'>{numberFormatter(item.stargazersCount)}</Text>
                <Text fontSize='subheading' color='textSecondary'>Stars</Text>
            </View>
            <View>
                <Text fontWeight='bold'>{numberFormatter(item.forksCount)}</Text>
                <Text fontSize='subheading' color='textSecondary'>Forks</Text>
            </View>
            <View>
                <Text fontWeight='bold'>{numberFormatter(item.reviewCount)}</Text>
                <Text fontSize='subheading' color='textSecondary'>Reviews</Text>
             </View>
             <View>
                <Text fontWeight='bold'>{numberFormatter(item.ratingAverage)}</Text>
                <Text fontSize='subheading' color='textSecondary'>Rating</Text>
             </View>
       </View>
  );
};

export default RepositoryDetails;