import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


const chatSettings = () => {
  return (
    <div>
     <div className="flex pt-8 px-4 justify-between">
                  <p> Chat Settings</p>
                  <div className="flex p-2 rounded-full bg-black/20 items-center justify-center">
                          <FaAngleUp  className="text-2xl "/> 
                           
                         
                      </div>
              </div>
    </div> 
  )
}

export default chatSettings