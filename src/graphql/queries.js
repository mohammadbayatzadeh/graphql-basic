import { gql } from "@apollo/client";

export const GET_BLOG_INFO = gql`
  query {
    posts {
      id
      slug
      title
      coverPhoto {
        url
      }
      author {
        ... on Author {
          id
          name
          pic {
            url
          }
        }
      }
    }
  }
`;
