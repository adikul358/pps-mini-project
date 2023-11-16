import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie"
import axios from "axios";

function SignUp() {
  const [cookie] = useCookies(["accno"])
  const navigate = useNavigate()

	const [accno, setAccno] = useState("")


  useEffect(_ => {
    if (!!cookie.accno) { navigate("/dashboard") }
		axios.post("http://localhost:3001/signup", { accno })
				.then(function (res) {
					setAccno(res.data)
				})
  }, [])

  return (
		<div className="h-screen flex justify-center items-center -mt-[56px]">
			<div className="p-20 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 grid grid-cols-2 gap-x-12">
				<div className="flex flex-col">
					<span className="text-xl font-semibold">Thanks for joining us, your new account is</span>
					<span className="text-3xl font-semibold mt-8">{accno}</span>
				</div>
				<div className="flex flex-col justify-center items-end">
					<Link to="/signin">
						<button className="py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Login <FaArrowRight /></button>
					</Link>
				</div>     
			</div>     
		</div>
  );
}

export default SignUp;
