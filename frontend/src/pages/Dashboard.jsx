import { useState } from "react";
import { FaPlus, FaMinus, FaAngleDown, FaAngleUp, FaArrowRight, FaHome, FaCar, FaGraduationCap, FaSuitcase } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import Modal from 'react-modal';

function Dashboard() {
  const { state } = useLocation()
  const accno = state ? state.accno : ""
  
  const [ openTra, setOpenTra ] = useState(false)
  const [ openMod, setOpenMod ] = useState(false)
  const [ val, setVal ] = useState("")

  return (
    <>
    <div className="py-2 bg-blue-200 text-blue-600">
      <div className="w-full max-w-5xl mx-auto flex flex-row gap-x-3 justify-end">
        <span>Acc. No. {accno}</span> <span>|</span> <Link to="/"><span className="underline hover:no-underline">Sign out</span></Link>
      </div>
    </div>

		<div className="flex flex-col pt-32 pb-20 items-center -mt-[56px]">
      <div className="w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 overflow-hidden">
        <div className="grid grid-cols-2 gap-x-12 p-20 pb-0">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Savings Account</span>
            <span className="text-4xl font-semibold mt-4">₹13,523.00</span>
          </div>
          <div className="flex flex-col gap-y-2  justify-center">
            <button onClick={_ => setOpenMod(true)} className="py-2 w-full bg-blue-200 border border-blue-600 text-blue-600 text-lg rounded-lg cursor-pointer hover:bg-blue-100 flex flex-row gap-x-3 items-center justify-center"><FaPlus /> Deposit Money</button>
            <button className="py-2 w-full bg-blue-200 border border-blue-600 text-blue-600 text-lg rounded-lg cursor-pointer hover:bg-blue-100 flex flex-row gap-x-3 items-center justify-center"><FaMinus /> Withdraw Money</button>
          </div>     
        </div>

        <div onClick={_ => setOpenTra(!openTra)} className={`${openTra && "bg-slate-200"} flex items-center justify-center text-slate-500 mt-16 py-3 hover:bg-slate-200 cursor-pointer gap-x-1`}>{openTra ? <>Hide Transactions  <FaAngleUp /></> : <>View Transactions  <FaAngleDown /></>}</div>
        {openTra && (
          <div className="bg-slate-200 flex flex-col w-full py-3">
            <div className="flex flex-row py-2 px-20">
              <span className="pr-6">1</span>
              <span className="flex-grow pr-3">2023-11-16 00:19</span>
              <span className="pl-6 text-red-600">-₹20.00</span>
            </div>
            <div className="flex flex-row py-2 px-20">
              <span className="pr-6">2</span>
              <span className="flex-grow pr-3">2023-11-16 00:17</span>
              <span className="pl-6 text-red-600">-₹20.00</span>
            </div>
            <div className="flex flex-row py-2 px-20">
              <span className="pr-6">3</span>
              <span className="flex-grow pr-3">2023-11-13 11:20</span>
              <span className="pl-6 text-green-600">+₹13,563.00</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 overflow-hidden">
        <div className="grid grid-cols-2 gap-x-12 p-20 pb-0">
          <div className="flex flex-col">
            <span className="text-xl font-semibold">House Loan</span>
            <span className="text-4xl font-semibold mt-4">₹11,23,000.00</span>
            <span className="text-lg font-medium mt-8">Next Payment on 2023-11-23</span>
            <span className="text-3xl font-semibold mt-1">₹11,230.00</span>
          </div>
          <div className="flex flex-col gap-y-2 justify-center">
            <button className="py-2 w-full bg-blue-200 border border-blue-600 text-blue-600 text-lg rounded-lg cursor-pointer hover:bg-blue-100 flex flex-row gap-x-3 items-center justify-center"><FaPlus /> Make Payment</button>
          </div>     
        </div>

        <div onClick={_ => setOpenTra(!openTra)} className={`${openTra && "bg-slate-200"} flex items-center justify-center text-slate-500 mt-16 py-3 hover:bg-slate-200 cursor-pointer gap-x-1`}>{openTra ? <>Hide Payments  <FaAngleUp /></> : <>View Payments  <FaAngleDown /></>}</div>
        {openTra && (
          <div className="bg-slate-200 flex flex-col w-full py-3">
            <div className="flex flex-row py-2 px-20">
              <span className="pr-6">1</span>
              <span className="flex-grow pr-3">2023-11-13 11:20</span>
              <span className="pl-6 text-green-600">+₹11,230.00</span>
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={openMod}
        onRequestClose={_ => setOpenMod(false)}
        overlayClassName="backdrop-blur bg-black/40 flex justify-center items-center absolute inset-0"
        className="flex flex-col p-20 items-end gap-y-6 w-full max-w-xl rounded-lg shadow-lg bg-slate-100 overflow-hidden"
      >
          <input placeholder="Amount" value={val} onChange={(e) => setVal(e.target.value)} className="p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer hover:outline-slate-500 focus:outline-slate-500 outline-1 outline outline-slate-300" />
          <button onClick={_ => setOpenMod(false)} className="py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Deposit <FaArrowRight /></button>
      </Modal>


      <div className="grid grid-cols-4 gap-x-8 mt-12 w-full max-w-5xl">
        <div className="flex flex-col items-center p-6 bg-blue-500 text-white text-2xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
          <FaHome />
          <span className="font-light text-lg mt-3">House Loan</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-blue-500 text-white text-2xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
          <FaCar />
          <span className="font-light text-lg mt-3">Car Loan</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-blue-500 text-white text-2xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
          <FaGraduationCap />
          <span className="font-light text-lg mt-3">Educational Loan</span>
        </div>
        <div className="flex flex-col items-center p-6 bg-blue-500 text-white text-2xl rounded-lg w-full cursor-pointer hover:bg-blue-600">
          <FaSuitcase />
          <span className="font-light text-lg mt-3">Business Loan</span>
        </div>
      </div>


    </div>

    </>
  );
}

export default Dashboard;
