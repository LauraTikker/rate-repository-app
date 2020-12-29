import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import RepositoryReview from './RepositoryReview';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#0366d6',
      padding: '5%',
      alignItems: 'center',
      margin: '5%',
   },
   separator: {
        height: '10px',
        backgroundColor: '#C0C0C0'
   },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewsList = () => {
  const { data, refetch } = useQuery(GET_AUTHORIZED_USER, {
       variables: { includeReviews: true }
  });

  const reviews = data ? data.authorizedUser.reviews.edges.map(edges => edges.node) : [];

  if (!data) {
    return null;
  } else {
        return (
            <View>
                <FlatList
                    data={reviews}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => <RepositoryReview review={item} showButtons={true} refetch={refetch} />}
                        keyExtractor={(item) => item.id}
                />
            </View>
    );
  }
};

export default ReviewsList;