import { useState } from "react";
import { format } from "date-fns";  

const Messages = () => {
   const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user1",
      senderName: "John Doe",
      senderProfilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "Hello! How are you?",
      timestamp: new Date(),
    },
    {
      id: 2,
      sender: "user2",
      senderName: "Jane Smith",
      senderProfilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "I'm doing great, thanks for asking!",
      timestamp: new Date(new Date().getTime() - 60000), 
    },
    {
      id: 3,
      sender: "user1",
      senderName: "John Doe",
      senderProfilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "That's awesome! What are you up to?",
      timestamp: new Date(new Date().getTime() - 120000),  
    },
    {
      id: 4,
      sender: "user2",
      senderName: "Jane Smith",
      senderProfilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "I'm doing great, thanks for asking!",
      timestamp: new Date(new Date().getTime() - 60000), 
    },
    {
      id: 5,
      sender: "user1",
      senderName: "John Doe",
      senderProfilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "That's awesome! What are you up to?",
      timestamp: new Date(new Date().getTime() - 120000),  
    },,
    {
      id: 6,
      sender: "user2",
      senderName: "Jane Smith",
      senderProfilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "I'm doing great, thanks for asking!",
      timestamp: new Date(new Date().getTime() - 60000), 
    },
    {
      id: 7,
      sender: "user1",
      senderName: "John Doe",
      senderProfilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "That's awesome! What are you up to?",
      timestamp: new Date(new Date().getTime() - 120000),  
    },,
    {
      id: 8,
      sender: "user2",
      senderName: "Jane Smith",
      senderProfilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "I'm doing great, thanks for asking!",
      timestamp: new Date(new Date().getTime() - 60000), 
    },
    {
      id: 9,
      sender: "user1",
      senderName: "John Doe",
      senderProfilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "That's awesome! What are you up to?",
      timestamp: new Date(new Date().getTime() - 120000),  
    },
  ]);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin  scrollbar-thumb-gray-700 scrollbar-track-black/20 p-4">
      <div className="flex flex-col gap-4 ">
        {messages.map((message) => (
            //error not found
          <div
            key={message.id}
            className={` flex ${message.sender === "user1" ? "justify-start" : "justify-end"}`}
          >
            
            <div
              className={`flex items-start gap-3 ${message.sender === "user1" ? "flex-row" : "flex-row-reverse"}`}
            >
              <img
                src={message.senderProfilePic}
                alt={`${message.senderName}'s profile`}
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div
                className={`p-3 rounded-lg  ${
                  message.sender === "user1" ? "bg-gray-700 text-white" : "bg-blue-500 text-white"
                }`}
              >
                <div className="font-semibold">{message.senderName}</div>
                <div>{message.content}</div>
                <div className="text-xs text-gray-300 mt-1">
                  {format(message.timestamp, "hh:mm a")}  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
