import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import RepositoryLogo from './RepositoryLogo';
import RepositoryDescription from './RepositoryDescription';
import RepositoryDetails from './RepositoryDetails';
import numberFormatter from '../utils'

const repositoryItemStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
  },
  repositoryInformationRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
     marginBottom: '5%',
     flexGrow: 0,
    },
});

const RepositoryItem = ({item}) => {
  return (
    <View style={repositoryItemStyles.container}>
        <View style={repositoryItemStyles.repositoryInformationRow}>
            <RepositoryLogo item={item} />
            <RepositoryDescription item={item} />
        </View>
       <RepositoryDetails item={item} />
     </View>
  );
};

export default RepositoryItem;