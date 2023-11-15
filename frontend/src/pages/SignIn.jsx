import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignIn() {
  const [accno, setAccno] = useState("")

  return (
		<div className="h-screen flex justify-center items-center -mt-[56px]">
        <div className="p-20 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 grid grid-cols-2 gap-x-12">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Login with your account number</span>
          </div>
          <div className="flex flex-col justify-center items-end gap-y-6">
            <input placeholder="Account No." value={accno} onChange={(e) => setAccno(e.target.value)} className="p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer hover:outline-slate-500 focus:outline-slate-500 outline-1 outline outline-slate-300" />
            <Link to="/dashboard" state={{accno}}>
              <button className="py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Login <FaArrowRight /></button>
            </Link>
          </div>     
        </div>     
      </div>
  );
}

export default SignIn;
