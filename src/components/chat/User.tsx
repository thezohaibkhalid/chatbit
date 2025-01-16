 import Avatar from 'react-avatar'
 import { FaPhoneAlt } from "react-icons/fa";
 import { IoVideocam } from "react-icons/io5";
 import { IoMdInformationCircle } from "react-icons/io";

const User = () => {
  return (
    <div className='flex p-3 border-b-[1px] border-gray-500 w-full justify-between'>
        <div className='flex gap-4 '>
           <Avatar size='45' name='Zohaib' round/> 
           <div className='space-y-0'>
            <h4 className='font-semibold text-base'>Zohaib Khalid</h4>
            <p className='text-sm text-gray-500'>I am Zohaib khalid</p>
           </div>
        </div>

        <div className='flex gap-4 text-xl items-center '>
            <FaPhoneAlt className='hover:text-gray-400 cursor-pointer'/>
            <IoVideocam className='hover:text-gray-400 cursor-pointer'/>
            <IoMdInformationCircle className='hover:text-gray-400 cursor-pointer'/>
        </div>
        

    </div>
  )
}

export default User