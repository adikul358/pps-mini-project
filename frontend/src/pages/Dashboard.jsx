import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import LoanApplication from "../components/LoanApplication";
import Savings from "../components/Savings";
import Loan from "../components/Loan";

function Dashboard() {
  const { state } = useLocation()
  const accno = state ? state.accno : ""
  
  const [ superState, setSuperState ] = useState(false)

  return (
    <>
    <div className="py-2 bg-blue-200 text-blue-600">
      <div className="w-full max-w-5xl mx-auto flex flex-row gap-x-3 justify-end">
        <span>Acc. No. {accno}</span> <span>|</span> <Link to="/"><span className="underline hover:no-underline">Sign out</span></Link>
      </div>
    </div>

		<div className="flex flex-col pt-32 pb-20 items-center -mt-[56px]">
      <Savings />

      

      <LoanApplication />

    </div>
    </>
  );
}

export default Dashboard;
