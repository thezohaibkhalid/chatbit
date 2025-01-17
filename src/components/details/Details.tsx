 import UserDetails from "./UserDetails"
 import SharedPhotos from "./SharedPhotos"
const Details = () => {
  return (
    <div className='w-full'>
        <div className='border-b-[1px]'>
            <UserDetails/>
        </div>
        <SharedPhotos/>
    </div>
  )
}

export default Details