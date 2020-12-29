import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import Text from './Text';
import numberFormatter from '../utils/numberFormatter';
import { format } from 'date-fns';
import { useHistory } from 'react-router-native';
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  review: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  buttons: {
     display: 'flex',
     flexDirection: 'row',
     backgroundColor: '#FFFFFF',
     justifyContent: 'space-evenly',
     marginBottom: '5%',
  },
  repositoryInformationRow: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5%',
    flexShrink: 1,
    },
  reviewText: {
      flexShrink: 1,
  },
  reviewRating: {
       borderColor: '#0366d6',
       borderStyle: 'solid',
       borderWidth: 3,
       width: '50px',
       height: '50px',
  },
  reviewRatingOuterView: {
        margin: '5%',
  },
  reviewRatingText: {
         lineHeight: 40,
         textAlign: 'center',
         fontSize: 25,
  },
  deleteButton: {
        backgroundColor: '#DC143C',
        padding: '5%',
        alignItems: 'center',
        marginTop: '5%',
  },
  showButton: {
        backgroundColor: '#0366d6',
        padding: '5%',
        alignItems: 'center',
        marginTop: '5%',
  }
});

const RepositoryReview = ({ review, showButtons, refetch }) => {
    const [deleteReview] = useDeleteReview();
    const history = useHistory();

    const createTwoButtonAlert = () =>
        Alert.alert(
          "Delete review",
          "Are you sure you want to delete this review",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => onDeleteReview() }
          ],
          { cancelable: false }
    );

      const onDeleteReview = async () => {

          try {
                const result = await deleteReview(review.id);
                if (result) {
                    refetch();
                }
          } catch (e) {
                console.log(e);
          }
        };


  return (
     <View style={styles.container}>
            <View style={styles.review}>
                <View style={styles.reviewRatingOuterView}>
                    <View style={styles.reviewRating}>
                        <Text fontWeight='bold' color='primary' fontSize='heading' style={styles.reviewRatingText}>{numberFormatter(review.rating)}</Text>
                    </View>
                </View>
                <View style={styles.repositoryInformationRow}>
                    <Text fontWeight='bold' color='black' fontSize='heading'  >{review.user.username}</Text>
                    <Text fontWeight='bold' color='textSecondary' fontSize='heading' >{format(new Date(review.createdAt), 'dd.mm.yyyy')}</Text>
                    <View style={styles.reviewText}>
                    <Text fontWeight='subheading' color='black' fontSize='subheading' style={{flex: 1, flexWrap: 'wrap'}}>{review.text}</Text>
                </View>
           </View>
           </View >
           {showButtons && (
            <View style={styles.buttons}>
                <View style={styles.showButton}>
                    <TouchableWithoutFeedback onPress={ () => history.push(`/repository/${review.repository.id}`)}>
                        <Text fontWeight="bold" fontSize="subheading" color="white">View repository</Text>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.deleteButton}>
                    <TouchableWithoutFeedback onPress={() => createTwoButtonAlert()}>
                        <Text fontWeight="bold" fontSize="subheading" color="white">Delete review</Text>
                    </TouchableWithoutFeedback>
                </View>

            </View>
           )}
     </View>
  );
};

export default RepositoryReview;