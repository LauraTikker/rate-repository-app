import React, { useState } from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositoryQuery from '../hooks/useRepositoryQuery';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchQuery, setSearchQuery] = useState('');
  const { repositories, fetchMore } = useRepositoryQuery(4, orderBy, orderDirection, searchQuery);

  const orderByHighestRated = () => {
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('DESC');
  };

  const orderByLowestRated = () => {
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('ASC');
   };

  const orderByLatestReview = () => {
        setOrderBy('CREATED_AT');
        setOrderDirection('DESC');
  };

  const onChangeSearch = (query) => {
        setSearchQuery(query);
  };

  const onEndReach = () => {
      fetchMore();
  };

  return <RepositoryListContainer
        repositories={repositories}
        orderByHighestRated={orderByHighestRated}
        orderByLowestRated={orderByLowestRated}
        orderByLatestReview={orderByLatestReview}
        onChangeSearch={onChangeSearch}
        searchQuery={searchQuery}
        onEndReach={onEndReach}
        />;
};

export default RepositoryList;