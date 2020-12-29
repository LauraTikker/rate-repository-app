import React from 'react';
import { render } from '@testing-library/react-native';
import { NativeRouter } from 'react-router-native';
import RepositoryListContainer from '../../components/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const onEndReach = jest.fn();
      jest.mock('react-router-native', () => ({
        ...jest.requireActual('react-router-native'),
        useParams: () => ({
          id: '',
        }),
      }));

      const { getAllByTestId} = render(<NativeRouter><RepositoryListContainer repositories={repositories} onEndReach={onEndReach} /></NativeRouter>);

      expect(getAllByTestId('itemFullName')[0]).toHaveTextContent('jaredpalmer/formik');
      expect(getAllByTestId('itemFullName')[1]).toHaveTextContent('async-library/react-async');

      expect(getAllByTestId('itemDescription')[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(getAllByTestId('itemDescription')[1]).toHaveTextContent('Flexible promise-based React data loader');

      expect(getAllByTestId('itemLanguage')[0]).toHaveTextContent('TypeScript');
      expect(getAllByTestId('itemLanguage')[1]).toHaveTextContent('JavaScript');

      expect(getAllByTestId('itemStargazeCount')[0]).toHaveTextContent('21.9k');
      expect(getAllByTestId('itemStargazeCount')[1]).toHaveTextContent('1.8k');

      expect(getAllByTestId('itemForksCount')[0]).toHaveTextContent('1.6k');
      expect(getAllByTestId('itemForksCount')[1]).toHaveTextContent('69');

      expect(getAllByTestId('itemReviewCount')[0]).toHaveTextContent('3');
      expect(getAllByTestId('itemReviewCount')[1]).toHaveTextContent('3');

      expect(getAllByTestId('itemRatingAverage')[0]).toHaveTextContent('88');
      expect(getAllByTestId('itemRatingAverage')[1]).toHaveTextContent('72');

    });
  });
});