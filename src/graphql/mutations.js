import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
    mutation authorize($username: String!, $password: String!) {
      authorize(credentials: { username: $username, password: $password }) {
        accessToken,
        expiresAt
      }
    }
`;

export const CREATE_REVIEW = gql`
    mutation createReview($repositoryName: String!, $ownerName: String!, $ratingNumber: Int!, $text: String) {
      createReview(review: { repositoryName: $repositoryName, ownerName: $ownerName, rating: $ratingNumber, text: $text }) {
        id,
        userId,
        repositoryId,
        rating,
        createdAt,
        text
      }
    }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!){
    createUser(user: { username: $username, password: $password }) {
      id
      username
      createdAt
    }
  }
`;

export const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!){
    deleteReview(id: $id)
  }
`;

export default { SIGN_IN, CREATE_REVIEW, CREATE_USER, DELETE_REVIEW };