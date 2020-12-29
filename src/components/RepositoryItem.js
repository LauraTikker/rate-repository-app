import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryLogo from './RepositoryLogo';
import RepositoryDescription from './RepositoryDescription';
import RepositoryDetails from './RepositoryDetails';
import RepositoryInfo from './RepositoryInfo';

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

const RepositoryItem = ({item, showRepositoryInfo}) => {
  return (
    <View style={repositoryItemStyles.container}>
        <View style={repositoryItemStyles.repositoryInformationRow}>
            <RepositoryLogo item={item} />
            <RepositoryDescription item={item} />
        </View>
       <RepositoryDetails item={item} />
       {showRepositoryInfo ? <RepositoryInfo id={item.id} url={item.url}/> : null}
     </View>
  );
};

export default RepositoryItem;