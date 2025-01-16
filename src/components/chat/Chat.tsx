import User from "./User"
import Send from "./Send"
import Messages from "./Messages"
const Chat = () => {
  return (
    <div className="flex flex-col h-[90vh]">
      <User/>
      <Messages />
      <Send/>
       
    </div>
  )
}

export default Chat