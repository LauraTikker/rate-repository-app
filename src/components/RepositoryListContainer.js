import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useHistory, useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import RepositoriesSortingMenu from './RepositoriesSortingMenu';

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
   },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, onEndReach, orderByHighestRated, orderByLowestRated, orderByLatestReview, onChangeSearch, searchQuery }) => {
    const history = useHistory();
    const { id } = useParams();

    let repositoryNodes = repositories
           ? repositories.edges.map(edge => edge.node)
           : [];

    if(id) {
    repositoryNodes = repositoryNodes.filter(repository => repository.id === id);
    }

    const onPress = (item) => {
    history.push(`/repository/${item.id}`);
    };

  return (
    <View style={styles.container}>
    <FlatList
      data={repositoryNodes}

      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<RepositoriesSortingMenu
            orderByHighestRated={orderByHighestRated}
            orderByLowestRated={orderByLowestRated}
            orderByLatestReview={orderByLatestReview}
            onChangeSearch={onChangeSearch}
            searchQuery={searchQuery}
            />}
      onEndReached={onEndReach()}
      onEndReachedThreshold={0.5}
      refreshing={true}
      renderItem={({item}) => {
        return (
            <TouchableOpacity onPress={() => onPress(item)}>
            <View>
            <RepositoryItem
                key={item.id}
                item={item}
                showRepositoryInfo={item.id === id ? true: false}
                />
            </View>
            </TouchableOpacity>
        );
      }}
    />
    </View>
  );
};

export default RepositoryListContainer;