import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { FaPlus, FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import Modal from 'react-modal';

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function calculateNextDate(value, emi, start_date, total_paid) {
  if (total_paid >= value) { return false }
  let d = new Date(start_date)
  let m = Math.floor(total_paid / emi)
  let payment = emi * (m+1) - total_paid
  d.setMonth(d.getMonth() + m + 1)
  let next_date = `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
  return [next_date, payment]
}



function Loan(props) {
  let { index, data, setData } = props
  let { value, type, emi, start_date, payments } = data.loans[index]
  value = parseFloat(value)
  emi = parseFloat(emi)

  const [ cookie ] = useCookies(["accno"])

  const total_paid = payments.reduce((p,v) => p + v.value, 0)
  const [next_date, next_payment] = calculateNextDate(value, emi, start_date, total_paid)

  const [ openTra, setOpenTra ] = useState(false)
  const [ openMod, setOpenMod ] = useState(false)
  const [ val, setVal ] = useState("")

  function submitAction() {
    axios.post(`${process.env.REACT_APP_API_HOST}/loanpayment`, { accno: cookie.accno, value: val, index })
      .then(function (res) {
        setData(res.data)
        setOpenMod(false)
      })
  }

  function payModal() {
    setVal("")
    setOpenMod(true)
  }

  return (
    <>

    <div className="mt-12 w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 overflow-hidden">
      <div className="grid grid-cols-2 gap-x-12 p-20 pb-0">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{type.charAt(0).toUpperCase() + type.slice(1)} Loan</span>
          <span className="text-4xl font-semibold mt-4">₹{Number(value-total_paid).toLocaleString('en-in', {minimumFractionDigits: 2})}</span>
          <span className="text-lg font-medium mt-8">Next Payment on {next_date}</span>
          <span className="text-3xl font-semibold mt-1">₹{Number(next_payment).toLocaleString('en-in', {minimumFractionDigits: 2})}</span>
        </div>
        <div className="flex flex-col gap-y-2 justify-center">
          <button onClick={payModal} className="py-2 w-full bg-blue-200 border border-blue-600 text-blue-600 text-lg rounded-lg cursor-pointer hover:bg-blue-100 flex flex-row gap-x-3 items-center justify-center"><FaPlus /> Make Payment</button>
        </div>     
      </div>

      <div onClick={_ => setOpenTra(!openTra)} className={`${openTra && "bg-slate-200"} flex items-center justify-center text-slate-500 mt-16 py-3 hover:bg-slate-200 cursor-pointer gap-x-1`}>{openTra ? <>Hide Payments  <FaAngleUp /></> : <>View Payments  <FaAngleDown /></>}</div>
      {openTra && (
        <div className="bg-slate-200 flex flex-col w-full py-3">
          {payments.toReversed().map((v,i) => (
            <div className="flex flex-row py-2 px-20">
              <span className="w-12">{i+1}.</span>
              <span className="flex-grow pr-3">{v.datetime}</span>
              <span className="text-green-600 pl-6">₹{Number(v.value).toLocaleString('en-in', {minimumFractionDigits: 2})}</span>
            </div>
          ))}
        </div>
      )}
    </div>

    <Modal
      isOpen={openMod}
      onRequestClose={_ => setOpenMod(false)}
      overlayClassName="backdrop-blur bg-black/40 flex justify-center items-center fixed top-0 left-0 w-full h-full"
      className="flex flex-col p-12 w-full max-w-xl rounded-lg shadow-lg bg-slate-100 overflow-hidden"
    >
      <input placeholder="Amount" value={val} onChange={(e) => setVal(e.target.value)} className="mt-3 p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer hover:outline-slate-500 focus:outline-slate-500 outline-1 outline outline-slate-300" />
      <button onClick={submitAction} className="mt-8 ml-auto py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">Pay <FaArrowRight /></button>
    </Modal>

    </>
  );
}

export default Loan;
