import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../graphql/queries';

const useReviewQuery = (first, { id }) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
          variables: {
            first,
            id
          }
       });

  const handleFetchMore = () => {
      const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }
      console.log('fetching');
      fetchMore({
        query: GET_REPOSITORY,
        variables: {
          after: data.repository.reviews.pageInfo.endCursor,
          first,
          id,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const nextResult = {
            repository: {
                ...fetchMoreResult.repository,
                reviews: {
                    ...fetchMoreResult.repository.reviews,
                    edges: [
                        ...previousResult.repository.reviews.edges,
                        ...fetchMoreResult.repository.reviews.edges,
                    ],
                },
            }
          };
          return nextResult;
        },
      });
    };

  return {
             reviews: data ? data.repository.reviews : undefined,
             fetchMore: handleFetchMore,
             loading,
             ...result,
           };
};

export default useReviewQuery;