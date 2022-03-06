import gql from "graphql-tag";

export const GET_MESSAGES = gql`
  query ChatsQuery {
    chats {
      id
      from
      message
    }
  }
`;
