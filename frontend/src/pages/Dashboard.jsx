import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';

import LoanApplication from "../components/LoanApplication";
import Savings from "../components/Savings";
import Loan from "../components/Loan";

function Dashboard() {
  const [ cookie,, removeCookie ] = useCookies(["accno"])
  const navigate = useNavigate()
  const [ data, setData ] = useState("")

  useEffect(_ => {
    if (!cookie.accno) { navigate("/") }
    axios.post('http://localhost:3001/signin', {
      accno: cookie.accno,
    })
    .then(function (res) {
      setData(res.data)
    })
    .catch(function (err) {
      console.log(err);
    });
  }, [])

  function signout() {
    removeCookie("accno")
    navigate("/")
  }


  return (
    <>

    <div className="py-2 bg-blue-200 text-blue-600">
      <div className="w-full max-w-5xl mx-auto flex flex-row gap-x-3 justify-end">
        <span>Acc. No. {cookie.accno}</span> <span>|</span> <span onClick={signout} className="underline hover:no-underline cursor-pointer">Sign out</span>
      </div>
    </div>

    {/* {JSON.stringify(data)} */}
		<div className="flex flex-col pt-32 pb-20 items-center -mt-[56px]">
      
      <Savings {...{data, setData}}/>

      {data.loans?.map((v,i) => <Loan {...{data, setData}} index={i} />)}

      <LoanApplication {...{data, setData}}/>

    </div>
    </>
  );
}

export default Dashboard;
