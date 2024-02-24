import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import ChatOptions from "./ChatOptions/ChatOptions";
import LinkList from "./LinkList/LinkList";

const config = {
    botName: "LuxareBot",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want?", {
            widget: "learningOptions",
        }),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#165141",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <ChatOptions {...props} />,
        },
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Crate Task",
                        url: "/create-task",
                        id: 1,
                    },
                    {
                        text: "Crate List",
                        url: "/crate-customer",
                        id: 2,
                    },
                ],
            },
        },
        {
            widgetName: "taskLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Logout",
                        url: "/",
                        id: 1,
                    },
                ],
            },
        },
    ],
};

export default config;