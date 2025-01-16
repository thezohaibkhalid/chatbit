import { TbPhotoSquareRounded } from "react-icons/tb";
import { FaCamera } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";
import { BsEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
const Send = () => {
    const [emoji, SetEmoji] = useState(false)
    const [text, setText] = useState("")
    console.log(text)
    const handleEmoji = (e: { emoji: string; }) =>{
        setText((prev)=>prev+e.emoji)
        SetEmoji(false)
    }
    return (
      <div className="flex items-center px-3 py-4 gap-5">
         <div className="flex gap-4 text-xl items-center text-white">
          <TbPhotoSquareRounded className="hover:text-gray-400 cursor-pointer" />
          <FaCamera className="hover:text-gray-400 cursor-pointer" />
          <AiFillAudio className="hover:text-gray-400 cursor-pointer" />
        </div>
  
         <div className="flex  items-center gap-4 flex-1">
          <input
          onChange={(e)=>setText(e.target.value)}
          value={text}
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-black/30 p-3 rounded-lg outline-none text-white placeholder-gray-400"
          />
          <div className="relative">
            <BsEmojiSmileFill onClick={()=>SetEmoji((prev) =>!prev)} className="hover:text-gray-400  cursor-pointer text-2xl text-white" />
            {emoji && ( <div className="absolute bottom-10 left-0">
                <EmojiPicker onEmojiClick={handleEmoji}/>
                </div>)}
            
          </div>
          
          <button className="py-2 px-5 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default Send;
  