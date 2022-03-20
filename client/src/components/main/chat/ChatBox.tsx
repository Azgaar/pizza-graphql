import {useEffect} from "react";
import {useQuery} from "@apollo/client";

import {ChatInput} from "./ChatInput";
import styles from "./ChatBox.module.css";
import {GET_MESSAGES} from "gql/getMessages";
import {MESSAGE_SENT} from "gql/messageSent";
import {IMessage} from "./types";

export const ChatBox = () => {
  const {data, loading, subscribeToMore} = useQuery(GET_MESSAGES);
  const messages = (data?.messages || []) as IMessage[];

  useEffect(() => {
    subscribeToMore({
      document: MESSAGE_SENT,
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData || !subscriptionData.data) return prev;
        const messageSent = subscriptionData.data.messageSent;
        const updatedMessages = Object.assign({}, prev, {messages: [...prev.messages, messageSent]});
        return updatedMessages;
      }
    });
  }, [subscribeToMore]);

  return (
    <section className={styles.chatBox}>
      <div className={styles.messages}>
        {loading && <p>Loading...</p>}
        {messages.map(({id, from, message}) => (
          <div key={id}>
            {from}: {message}
          </div>
        ))}
      </div>
      <ChatInput />
    </section>
  );
};
