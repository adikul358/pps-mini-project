import { FaUserPlus, FaUser, FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="top-0 sticky py-3 backdrop-blur bg-white/75">
        <div className="w-full max-w-5xl mx-auto flex flex-rol items-center justify-between">
          <span className="text-2xl font-semibold">Nexus Banking</span>
          <span className="text-lg font-light hover:text-blue-600 cursor-pointer">About</span>
        </div>
      </div>

      <div className="h-screen flex justify-center items-center -mt-[56px]">
        <div className="p-20 w-full max-w-5xl rounded-lg shadow-lg grid grid-cols-2 gap-x-12 bg-slate-100">
          <div className="flex flex-col items-center p-16 bg-blue-500 text-white text-3xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
            <FaUserPlus />
            <span className="font-light text-xl mt-6">New User</span>
          </div>
          <div className="flex flex-col items-center p-16 bg-blue-500 text-white text-3xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
            <FaUser />
            <span className="font-light text-xl mt-6">Existing User</span>
          </div>
        </div>     
      </div>

      <div className="h-screen flex justify-center items-center -mt-[56px]">
        <div className="p-20 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 grid grid-cols-2 gap-x-12">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Thanks for joining us, your new account is</span>
            <span className="text-3xl font-semibold mt-8">5010025823243</span>
          </div>
          <div className="flex flex-col justify-center items-end">
            <button className="py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Login <FaArrowRight /></button>
          </div>     
        </div>     
      </div>

      <div className="h-screen flex justify-center items-center -mt-[56px]">
        <div className="p-20 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 grid grid-cols-2 gap-x-12">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Login with your account number</span>
          </div>
          <div className="flex flex-col justify-center items-end gap-y-3">
            <input className="p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer hover:outline outline-1 outline-slate-400" />
            <button className="py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Login <FaArrowRight /></button>
          </div>     
        </div>     
      </div>

      


    </div>
  );
}

export default App;
