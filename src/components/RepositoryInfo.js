import React from 'react';
import { StyleSheet, View, Linking, FlatList } from 'react-native';
import RepositoryUrlButton from './RepositoryUrlButton';
import RepositoryReview from './RepositoryReview';
import useReviewQuery from '../hooks/useReviewQuery';

const styles = StyleSheet.create({
   button: {
      backgroundColor: '#0366d6',
      padding: '5%',
      alignItems: 'center',
      borderRadius: 10,
      margin: '5%',
   },
   separator: {
        height: 10,
        backgroundColor: '#C0C0C0'
   },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ id, url }) => {
    const { reviews, loading, fetchMore } = useReviewQuery(1, { id});

    const loadRepositoryUrl = () => {
        if (!loading) {
           Linking.openURL(url);
        }
    };

    const onEndReach = () => {
        fetchMore();
    };

    if (!loading) {
        const reviewList = reviews ? reviews.edges : [];
        return (
            <View>
                  <FlatList
                        data={reviewList}
                        ItemSeparatorComponent={ItemSeparator}
                        onEndReached={onEndReach()}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item }) => <RepositoryReview review={item.node} />}
                        keyExtractor={(edge) => edge.node.id}
                        ListHeaderComponent={() => <RepositoryUrlButton style={styles.button} url={() => loadRepositoryUrl()} />}
                      />
            </View>
       );
    } else {
        return null;
    }
};

export default RepositoryInfo;