import { BsThreeDots } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoMdRemove } from "react-icons/io";
import { useState } from "react";
import Avatar from "react-avatar";
const ChatsList = () => {

  const [add, setAdd]  = useState(false)
  const chatData = [
    { id: 1, name: "Zohaib Khalid", message: "Hi, how are you doing?", avatarColor: "#FFD700" },
    { id: 2, name: "Sarah Ali", message: "Are you free this weekend?", avatarColor: "#FF4500" },
    { id: 3, name: "Ahmed Khan", message: "Don't forget the meeting tomorrow.", avatarColor: "#1E90FF" },
    { id: 4, name: "Maria Zafar", message: "Can you send me the files?", avatarColor: "#32CD32" },
    { id: 5, name: "Bilal Hussain", message: "Let's catch up later!", avatarColor: "#8A2BE2" },
    { id: 6, name: "Hina Farooq", message: "Good morning! What's the plan for today?", avatarColor: "#FFA07A" },
    { id: 7, name: "Ali Raza", message: "Did you complete the assignment?", avatarColor: "#DC143C" },
    { id: 8, name: "Ayesha Malik", message: "I loved your presentation yesterday.", avatarColor: "#4682B4" },
    { id: 9, name: "Usman Tariq", message: "Where are we meeting?", avatarColor: "#2E8B57" },
    { id: 10, name: "Zara Ahmed", message: "Let's have a call later today.", avatarColor: "#DA70D6" },
    { id: 11, name: "Hamza Aslam", message: "Can you review my code?", avatarColor: "#FFDAB9" },
    { id: 12, name: "Mariam Akhtar", message: "Don't forget to check the schedule.", avatarColor: "#7FFF00" },
    { id: 13, name: "Imran Sheikh", message: "I will be a bit late today. I will be a bit late today.I will be a bit late today.I will be a bit late today.", avatarColor: "#FF6347" },
    { id: 14, name: "Farhan Iqbal", message: "Can you help me with the design?", avatarColor: "#00CED1" },
    { id: 15, name: "Sana Javed", message: "Congratulations on the promotion!", avatarColor: "#BA55D3" },
    { id: 16, name: "Kashif Ali", message: "Are we still on for the meeting?", avatarColor: "#FFB6C1" },
    { id: 17, name: "Nida Khan", message: "I will share the details shortly.", avatarColor: "#6495ED" },
    { id: 18, name: "Asim Bashir", message: "Have you seen the latest update?", avatarColor: "#66CDAA" },
    { id: 19, name: "Arfa Fatima", message: "Let me know if you need anything.", avatarColor: "#DB7093" },
    { id: 20, name: "Omer Siddiqui", message: "Can we reschedule the call?", avatarColor: "#FFA500" },
  ];
  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="w-14 h-14 rounded-full object-cover" size="50" name="Zohaib Khalid" />
        <p className="text-lg font-semibold">Zohaib Khalid</p>
        <div className="flex gap-4 ml-auto">
          <BsThreeDots className="text-2xl cursor-pointer hover:text-gray-400" />
          <MdVideoCall className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaRegEdit className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Search Section */}
      <div className="flex items-center gap-3 bg-gray-800 p-2 rounded-md">
        <FaSearch className="text-xl text-gray-400" />
        {add ? (
          <input
          type="text"
          placeholder="Enter Username to Add..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500"
        />
        ) : (<input
          type="text"
          placeholder="Search by username..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-300 placeholder-gray-500"
        />)
        }
        <div
          onClick={() => setAdd((prev) => !prev)}
          className="cursor-pointer bg-gray-700 p-2 rounded-md hover:bg-gray-600"
        >
          {add ? <IoMdRemove className="text-lg text-gray-200" /> : <FaPlus className="text-lg text-gray-200" />}
        </div>
      </div>

      {/* Chats Section */}
      <div className="mt-6 space-y-4 max-h-screen  overflow-y-auto scrollbar-thin  scrollbar-thumb-gray-700 scrollbar-track-black/20">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-4 p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
          >
            <Avatar name={chat.name} color={chat.avatarColor} size="45" round />
            <div className="flex flex-col">
              <h4 className="font-medium text-sm">{chat.name}</h4>
              <p className="text-xs text-gray-400 truncate">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatsList;