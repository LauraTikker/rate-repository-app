import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query repositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          ownerAvatarUrl
          language
          description
          url
        }
        cursor
      }
      pageInfo {
            endCursor
            startCursor
            totalCount
            hasNextPage
          }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query authorizedUser($includeReviews: Boolean = false){
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
          edges {
            node {
                id
                text
                rating
                createdAt
                repository {
                    id
                   }
                user {
                     id
                     username
                  }
                }
            cursor
          }
          pageInfo {
             endCursor
             startCursor
             totalCount
             hasNextPage
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($first: Int, $after: String, $id: ID!){
    repository(id: $id) {
      id
      fullName
      url
      reviews(first: $first, after: $after) {
            edges {
              node {
                id
                text
                rating
                createdAt
                user {
                  id
                  username
                }
              }
              cursor
            }
            pageInfo {
                endCursor
                startCursor
                totalCount
                hasNextPage
            }
      }
    }
  }
`;

export default { GET_REPOSITORIES, GET_AUTHORIZED_USER, GET_REPOSITORY };