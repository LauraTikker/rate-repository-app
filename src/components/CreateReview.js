import React from 'react';
import { useHistory } from 'react-router-native';

import CreateReviewContainer from './CreateReviewContainer';
import useCreateReview from '../hooks/useCreateReview';

const CreateReview = () => {
   const [createReview] = useCreateReview();
   const history = useHistory();

  const onSubmit = async (values) => {

      const { repositoryName, ownerName, rating, text } = values;
      const ratingNumber = parseInt(rating, 10);
      try {
            const result = await createReview({ repositoryName, ownerName, ratingNumber, text });
            history.push(`/repository/${result.createReview.repositoryId}`);
      } catch (e) {
            console.log(e);
      }
    };

    return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;