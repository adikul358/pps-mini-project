import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from "axios";

function SignIn() {
  const [accno, setAccno] = useState("")
  const [accnoErr, setAccnoErr] = useState(false)
  
  const [cookie, setCookie] = useCookies(["accno"])
  const navigate = useNavigate()
  useEffect(_ => {
    if (!!cookie.accno) { navigate("/dashboard") }
  }, [])

  function auth() {
    axios.post(`${process.env.REACT_APP_API_HOST}/signin`, { accno })
      .then(function (res) {
        if (res.data === "Account does not exist") {
          setAccnoErr(true)
        } else {
          setCookie("accno", accno)
          navigate("/dashboard")
        }
      })
  }

  return (
		<div className="h-screen flex justify-center items-center -mt-[56px]">
        <div className="p-20 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 grid grid-cols-2 gap-x-12">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Login with your account number</span>
          </div>
          <div className="flex flex-col justify-center ">
            <input placeholder="Account No." value={accno} onChange={(e) => setAccno(e.target.value)} className={`${accnoErr ? "hover:outline-red-500 focus:outline-red-500 outline-red-300 " : "hover:outline-slate-500 focus:outline-slate-500 outline-slate-300 " } p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer outline-1 outline `} />
            {accnoErr && <span className="text-red-600 mt-2">Account does not exist</span>}
            <button onClick={auth} className="mt-6 ml-auto py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Login <FaArrowRight /></button>
          </div>     
        </div>     
      </div>
  );
}

export default SignIn;
