import gql from "graphql-tag";

export const GET_MESSAGES = gql`
  query MessagesQuery {
    messages {
      id
      from
      message
    }
  }
`;
