 import UserDetails from "./UserDetails"
 import SharedPhotos from "./SharedPhotos"
 import ChatSettings from "./ChatSettings"
 import Block from "./Block"
 import Logout from "./Logout"
const Details = () => {
  return (
    <div className='w-full'>
        <div className='border-b-[1px]'>
            <UserDetails/>
        </div>
        <ChatSettings/>
        <SharedPhotos/>
        <div className="mt-auto">
        <Block/>
        <Logout/>
        </div>
    </div>
  )
}

export default Details