import {useMutation} from "@apollo/client";
import {SEND_MESSAGE} from "gql/sendMessage";
import {useRef, FormEventHandler} from "react";

import styles from "./ChatBox.module.css";

const from = "Me";

export const ChatInput = () => {
  const input = useRef<HTMLInputElement>(null);

  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onError: (error: any) => {
      console.error(error);
    },
    onCompleted: () => {
      input.current!.value = "";
    }
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const message = input.current?.value;
    if (message) {
      sendMessage({variables: {from, message}});
    }
  };

  return (
    <form className={styles.chatInput} onSubmit={handleSubmit}>
      <input ref={input} placeholder="Type your message" />
      <button type="submit">Send</button>
    </form>
  );
};
