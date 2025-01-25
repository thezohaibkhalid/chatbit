import ChatsList from "./components/chats/ChatsList";
import Chat from "./components/chat/Chat"
import Details from "./components/details/Details"
import Login from "./components/login/Login"
import Noticification from "./components/noticificatation/Noticification"
const App = () => {
  const user = true
  const style = {
    backgroundImage:
      "url('https://media.istockphoto.com/id/1162167657/photo/hand-painted-background-with-mixed-liquid-blue-and-golden-paints-abstract-fluid-acrylic.webp?a=1&b=1&s=612x612&w=0&k=20&c=lnpN1MmAuPG9yB3r5Y9EKrzRIF3siGSK7GZJmipXT14=')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div
      style={style}
      className="flex justify-center items-center h-screen  text-gray-100"
    >
          <div>

{
    user ? (
   <div className="w-[90vw] h-[90vh] backdrop-blur-lg bg-black/50 rounded-lg shadow-xl overflow-hidden">
   <div className="grid grid-cols-4 h-full">
     <div className="col-span-1 border-r border-gray-700">
      <ChatsList />
    </div>

     <div className="col-span-2">
      <Chat/>
    </div>

     <div className="col-span-1 ">
      <Details/>
    </div>

  </div>
</div>
    ) : (
        <Login/>
    )
}
    
    <Noticification/>
</div>
    </div>
  );
};

export default App;
