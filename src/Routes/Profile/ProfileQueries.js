import { gql } from "apollo-boost";

export const SEE_USER = gql`
  query seeUser($id: String!) {
    seeUser(id: $id) {
      id
      avatar
      username
      email
      firstName
      lastName
      fullName
      isFriend
      isSelf
      bio
      friends {
        id
        avatar
        username
      }
      friendsCount
      posts {
        id
        location
        caption
        user {
          id
          avatar
          username
        }
        files {
          id
          url
        }
        isLiked
        likeCount
        comments {
          id
          text
          user {
            id
            avatar
            username
          }
          createdAt
        }
        commentCount
        createdAt
      }
      postsCount
    }
  }
`;
