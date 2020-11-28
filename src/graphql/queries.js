import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  {
    repositories {
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
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  {
    authorizedUser {
      id
      username
    }
  }
`;

export default { GET_AUTHORIZED_USER, GET_AUTHORIZED_USER }