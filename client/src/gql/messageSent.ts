import {gql} from "@apollo/client";

export const MESSAGE_SENT = gql`
  subscription MessageSentSubscription {
    messageSent {
      id
      from
      message
    }
  }
`;
