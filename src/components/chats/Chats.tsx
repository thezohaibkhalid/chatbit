import { BsThreeDots } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Chats = () => {
  return (
    <>
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
    </>
  )
}

export default Chats