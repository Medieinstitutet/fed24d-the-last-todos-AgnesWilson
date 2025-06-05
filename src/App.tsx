import { Todos } from "./components/Todos";

function App() {
  return <>
  <div className="bg-[#dc5c2a] font-sans min-h-screen w-full flex flex-col items-center">
  <h1 className="[font-family:'Caveat', ] font-extrabold text-8xl text-[#ffe762] py-10">To-do listan</h1>
  < Todos />
  </div>
  </>;
}

export default App;
