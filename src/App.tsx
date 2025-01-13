import Chats from "./components/chats/Chats"
const App = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-xl ">
        <div className="col-span-1 ">
          <Chats/>
        </div>

        <div className="col-span-2">
          chatting
        </div>

        <div className="col-span-1">
          details
        </div>
      </div>
    </div>
  );
}

export default App;
