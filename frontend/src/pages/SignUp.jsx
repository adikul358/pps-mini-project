import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  return (
		<div className="h-screen flex justify-center items-center -mt-[56px]">
			<div className="p-20 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 grid grid-cols-2 gap-x-12">
				<div className="flex flex-col">
					<span className="text-xl font-semibold">Thanks for joining us, your new account is</span>
					<span className="text-3xl font-semibold mt-8">5010025823243</span>
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
