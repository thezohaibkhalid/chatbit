import { IoMdDownload } from "react-icons/io";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";

const SharedPhotos = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>

        <div className="flex py-4 px-4 justify-between">
            <p>Shared Photos</p>
            <div onClick={()=> setOpen((prev) => !prev)} className="flex p-2 rounded-full bg-black/20 items-center justify-center">
                {open ? (
                    <FaAngleUp  className="text-2xl "/> )
                    : (<FaAngleDown  className="text-2xl "/> )
                }
                   
                </div>
        </div>
 {/* Collapsable section */}
        <div
        className={`transition-all duration-300 ease-in-out overflow-hidden space-y-4 ${
          open
            ? "max-h-[290px] opacity-100 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black/20"
            : "max-h-0 opacity-0"
        }`}
      >
            <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        <div className="flex gap-6 items-center px-4 ">
            <img 
            className="h-16 w-16 rounded-md "
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-1170x780.jpg" alt="" />
            <div className="flex flex-1  ">
                <p className="flex-1 text-base font-medium">A VLC media player
                </p>

                <div className="flex p-2 rounded-full bg-black/40 items-center justify-center">
                <IoMdDownload className="text-2xl "/>    
                </div>  
            </div>
        </div>

        
        
        </div>
        
    </div>
  )
}

export default SharedPhotos