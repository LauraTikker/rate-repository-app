import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, ratingNumber, text }) => {
      const { data } = await mutate({ variables: { repositoryName, ownerName, ratingNumber, text } });
      return data;
    };

  return [createReview, result];
};

export default useCreateReview;