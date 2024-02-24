import React from "react";

import "./ChatOptions.scss";

const ChatOptions = (props) => {
  const options = [
    {
      text: "Create",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Task", handler: () => {}, id: 2 },
    { text: "Logout", handler: props.actionProvider.handleTask, id: 3 },
    { text: "Customers", handler: () => {}, id: 4 },
    { text: "Dashboard", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default ChatOptions;
