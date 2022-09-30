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

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      pic {
        url
      }
      slug
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
  query GetAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      filed
      name
      pic {
        url
      }
      posts {
        id
        slug
        title
        coverPhoto {
          url
        }
      }
      about {
        html
      }
    }
  }
`;

export const GET_POST_INFO = gql`
  query getPostInfo($slug: String!) {
    post(where: { slug: $slug }) {
      slug
      title
      content {
        html
      }
      coverPhoto {
        url
      }
      author {
        ... on Author {
          name
          slug
          pic {
            url
          }
          filed
        }
      }
    }
  }
`;
