import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositoryQuery = (first, orderBy, orderDirection, searchKeyword) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
          variables: { first, orderBy, orderDirection, searchKeyword }
       });

  const handleFetchMore = () => {
      const canFetchMore =
        !loading && data && data.repositories.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }
      console.log('fetching');

      fetchMore({
        query: GET_REPOSITORIES,
        variables: {
          after: data.repositories.pageInfo.endCursor,
          first,
          orderBy,
          orderDirection,
          searchKeyword,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const nextResult = {
            repositories: {
              ...fetchMoreResult.repositories,
              edges: [
                ...previousResult.repositories.edges,
                ...fetchMoreResult.repositories.edges,
              ],
            },
          };
          return nextResult;
        },
      });
    };

  return {
             repositories: data ? data.repositories : undefined,
             fetchMore: handleFetchMore,
             loading,
             ...result,
           };
};

export default useRepositoryQuery;