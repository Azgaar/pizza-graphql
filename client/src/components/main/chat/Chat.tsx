import {useState} from "react";

import {ChatBox} from "./ChatBox";
import {ChatButton} from "./ChatButton";

export const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => setShowChat(isShown => !isShown);

  return (
    <>
      {showChat && <ChatBox />}
      <ChatButton handleClick={toggleChat} />
    </>
  );
};
