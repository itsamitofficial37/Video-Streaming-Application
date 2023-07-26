import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessages(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-full h-[480px] ml-2 p-2 border border-black bg-gray-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full p-2" 
      onSubmit={(e) => {
        e.preventDefault();;
        dispatch(
          addMessage({
            name : "Amit singh",
            message : liveChat,
          })
        )
        setLiveChat("");
      }}>
        <input
          className="w-72 p-1"
          placeholder="say something"
          value={liveChat}
          onChange={(e) => {
            setLiveChat(e.target.value);
          }}
        ></input>
        <button className="m-2 p-1 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
