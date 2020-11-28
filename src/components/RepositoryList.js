import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '45%',
   },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
      const { data, error, loading } = useQuery(GET_REPOSITORIES, {
              fetchPolicy: 'cache-and-network',
            });

      const repositoryNodes = data
           ? data.repositories.edges.map(edge => edge.node)
           : [];

  return (
    <View style={styles.container}>
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => {
      return (
      <RepositoryItem
            key={item.id}
            item={item}
            />
      )}}
    />
    </View>
  );
};

export default RepositoryList;