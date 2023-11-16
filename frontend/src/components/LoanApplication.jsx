import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { FaPlus, FaArrowRight, FaHome, FaCar, FaGraduationCap, FaSuitcase } from "react-icons/fa";
import Modal from 'react-modal';

const RATES = {
  home: 8.45,
  car: 8.65,
  education: 9.10,
  business: 15
}

function calculateEMI(p, r, n) {
  if (!p || !r || !n) { return [null,"--.--"]}
  r /= 1200
  let emi = p * r * (1+r)**n / ((1+r)**n - 1)
  return [(Math.round(emi*100) / 100).toFixed(2), Number((Math.round(emi*100) / 100)).toLocaleString('en-in', {minimumFractionDigits: 2})]
}

function LoanApplication(props) {
  let { setData } = props

  const [ openMod, setOpenMod ] = useState(false)
  const [ val, setVal ] = useState("")
  const [ cat, setCat ] = useState("")
  const [ mon, setMon ] = useState("")

  const [ cookie ] = useCookies(["accno"])
  function loanModal(cat) {
    setVal("")
    setMon("")
    setCat(cat)
    setOpenMod(true)
  }

  function submitAction() {
    axios.post(`http://localhost:3001/loan`, { 
      accno: cookie.accno, 
      type: cat,
      value: val, 
      emi: calculateEMI(val, RATES[cat], mon)[0]
    })
      .then(function (res) {
        setData(res.data)
        setOpenMod(false)
      })
  }

  return (
    <>

    <div className="grid grid-cols-4 gap-x-8 mt-12 w-full max-w-5xl">
      <div onClick={_ => loanModal("home")} className="flex flex-col items-center justify-between p-6 pt-8 bg-blue-500 text-white text-4xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
        <span className="flex flex-row items-center"><FaHome /> <FaPlus className="text-2xl text-green-300 -mt-6 -mr-6" /></span>
        <span className="font-light text-lg mt-4 text-center">Apply for <br/> <span className="font-semibold">House Loan</span></span>
      </div>
      <div onClick={_ => loanModal("car")} className="flex flex-col items-center justify-between p-6 pt-8 bg-blue-500 text-white text-4xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
        <span className="flex flex-row items-center"><FaCar /> <FaPlus className="text-2xl text-green-300 -mt-6 -mr-6" /></span>
        <span className="font-light text-lg mt-4 text-center">Apply for <br/> <span className="font-semibold">Car Loan</span></span>
      </div>
      <div onClick={_ => loanModal("education")} className="flex flex-col items-center justify-between p-6 pt-8 bg-blue-500 text-white text-4xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
        <span className="flex flex-row items-center"><FaGraduationCap /> <FaPlus className="text-2xl text-green-300 -mt-6 -mr-6" /></span>
        <span className="font-light text-lg mt-4 text-center">Apply for <br/> <span className="font-semibold">Education Loan</span></span>
      </div>
      <div onClick={_ => loanModal("business")} className="flex flex-col items-center justify-between p-6 pt-8 bg-blue-500 text-white text-3xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
        <span className="flex flex-row items-center"><FaSuitcase /> <FaPlus className="text-2xl text-green-300 -mt-6 -mr-6" /></span>
        <span className="font-light text-lg mt-4 text-center">Apply for <br/> <span className="font-semibold">Business Loan</span></span>
      </div>
    </div>

    <Modal
      isOpen={openMod}
      onRequestClose={_ => setOpenMod(false)}
      overlayClassName="backdrop-blur bg-black/40 flex justify-center items-center fixed top-0 left-0 w-full h-full"
      className="flex flex-col p-12 w-full max-w-xl rounded-lg shadow-lg bg-slate-100 overflow-hidden"
    >
        <span className="text-xl font-semibold">Apply for {cat.charAt(0).toUpperCase() + cat.slice(1)} Loan</span>
        <span className="text-lg font-light">Current interest rate: <span className="font-semibold text-blue-600">{RATES[cat]}% p.a.</span></span>
        <input placeholder="Amount" value={val} onChange={(e) => setVal(e.target.value)} className="mt-3 p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer hover:outline-slate-500 focus:outline-slate-500 outline-1 outline outline-slate-300" />
        <input placeholder="Months" value={mon} onChange={(e) => setMon(e.target.value)} className="mt-3 p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer hover:outline-slate-500 focus:outline-slate-500 outline-1 outline outline-slate-300" />
        <div className="flex flex-row justify-between items-center mt-8">
          <span className="text-xl font-semibold">EMI: <span className="text-blue-600">₹{calculateEMI(val, RATES[cat], mon)[1]}</span></span>
          <button onClick={submitAction} className="ml-auto py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Apply <FaArrowRight /></button>
        </div>
    </Modal>

    </>
  );
}

export default LoanApplication;
