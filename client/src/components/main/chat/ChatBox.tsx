import {useRef, FormEventHandler} from "react";

import styles from "./ChatBox.module.css";

const messages = [
  "Hello, how can we help you?",
  "Please explain how I can buy a pizza",
  "Just select the size and toppings you want",
  "Thank you for your help"
];

export const ChatBox = () => {
  const input = useRef<HTMLInputElement>(null);

  const sendMessage: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const message = input.current?.value;
    if (message) {
      input.current.value = "";
      console.log(message);
    }
  };

  return (
    <section className={styles.chatBox}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form className={styles.chatInput} onSubmit={sendMessage}>
        <input ref={input} placeholder="Type your message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
