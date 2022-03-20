import {gql} from "@apollo/client";

export const SEND_MESSAGE = gql`
  mutation SendMessage($from: String!, $message: String!) {
    sendMessage(from: $from, message: $message) {
      id
      from
      message
    }
  }
`;
