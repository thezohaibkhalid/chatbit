import { TbPhotoSquareRounded } from "react-icons/tb";
import { FaCamera } from "react-icons/fa";
import { AiFillAudio } from "react-icons/ai";

const Send = () => {
  return (
    <div className="flex px-3 py-4 gap-5">
        <div className="flex gap-4 text-xl items-center">
            <TbPhotoSquareRounded className='hover:text-gray-400 cursor-pointer'/>
            <FaCamera className='hover:text-gray-400 cursor-pointer'/>
            <AiFillAudio className='hover:text-gray-400 cursor-pointer'/>
        </div>
        <div>
            <input type="text" placeholder="Type a message" className="bg-black/30 p-3   rounded-lg "  />
        </div>
    </div>
  )
}

export default Send