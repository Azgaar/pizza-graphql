import {gql} from "@apollo/client";

export const MESSAGE_SENT = gql`
  subscription MessageSent {
    messageSent {
      id
      from
      message
    }
  }
`;
