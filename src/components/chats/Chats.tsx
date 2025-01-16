import { BsThreeDots } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Chats = () => {
  return (
    <div className="p-3" >
    <div className="pt-2 px-2 flex items-center gap-3">
      <img src="https://media.istockphoto.com/id/1162167657/photo/hand-painted-background-with-mixed-liquid-blue-and-golden-paints-abstract-fluid-acrylic.webp?a=1&b=1&s=612x612&w=0&k=20&c=lnpN1MmAuPG9yB3r5Y9EKrzRIF3siGSK7GZJmipXT14=" alt="user image"
      className="w-16 h-16 rounded-full"
      />
      <p
      className="text-xl font-semibold text-gray-100"
      >Zohaib Khalid</p>
      <div className="flex gap-5  ms-auto">
        <BsThreeDots
      className="text-2xl text-white cursor-pointer" 
      />
      <MdVideoCall 
      className="text-2xl text-white cursor-pointer" />
      <FaRegEdit 
      className="text-2xl text-white cursor-pointer"/>
      </div>
    </div>

        <div className="flex mt-4 px-2 items-center gap-2">
          <div className="flex items-center flex-1 bg-black/40 py-2 rounded-md px-2 gap-3">
            <FaSearch className="text-2xl text-white"/>
        <input className="flex-1 bg-transparent outline-none text-white font-semibold"   type="text" placeholder="Enter Username" />
          </div>
        
        <FaPlus className="text-2xl text-white"/>
      </div>


      {/* Showing all the chats */}
      <div>

      </div>
    </div>
  )
}

export default Chats