import React, { useState } from "react";
import "./MessageInput.css";

const NewMessage = ({ socket }) => {
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    socket.emit("message", value);
    setValue("");
  };

  return (
    <form onSubmit={submitForm}>
      <input
        className="input-message"
        autoFocus
        value={value}
        placeholder="Type your message"
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <button type="submit" className="send-button">
        send message
      </button>
    </form>
  );
};

export default NewMessage;