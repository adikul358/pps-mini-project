import { FaUserPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Landing() {
  return (
		<div className="h-screen flex justify-center items-center -mt-[56px]">
			<div className="p-20 w-full max-w-5xl rounded-lg shadow-lg grid grid-cols-2 gap-x-12 bg-slate-100">
				<Link to="/signup">
				<div className="flex flex-col items-center p-16 bg-blue-500 text-white text-3xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
					<FaUserPlus />
					<span className="font-light text-xl mt-6">New User</span>
				</div>
				</Link>
				<Link to="/signin">
				<div className="flex flex-col items-center p-16 bg-blue-500 text-white text-3xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
					<FaUser />
					<span className="font-light text-xl mt-6">Existing User</span>
				</div>
				</Link>
			</div>     
		</div>
  );
}

export default Landing;
