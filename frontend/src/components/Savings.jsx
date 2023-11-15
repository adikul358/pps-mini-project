import { useState } from "react";
import { FaPlus, FaMinus, FaAngleDown, FaAngleUp, FaArrowRight } from "react-icons/fa";
import Modal from 'react-modal';

function calculateBalance(bal, val, cat) {
  if (!bal || !val) { return "--.--"}
  val = parseFloat(val)
  let ubal = bal
  if (cat === "deposit") { ubal += val }
  else { ubal -= val }
  return (Math.round(ubal*100) / 100).toFixed(2)
}

function Savings() {

  const [ openTra, setOpenTra ] = useState(false)
  const [ openMod, setOpenMod ] = useState(false)
  const [ cat, setCat ] = useState("")
  const [ val, setVal ] = useState("")

  function traModal(cat) {
    setVal("")
    setCat(cat)
    setOpenMod(true)
  }

  return (
    <>

    <div className="w-full max-w-5xl rounded-lg shadow-lg bg-slate-100 overflow-hidden">
      <div className="grid grid-cols-2 gap-x-12 p-20 pb-0">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Savings Account</span>
          <span className="text-4xl font-semibold mt-4">₹13,523.00</span>
        </div>
        <div className="flex flex-col gap-y-2  justify-center">
          <button onClick={_ => traModal("deposit")} className="py-2 w-full bg-blue-200 border border-blue-600 text-blue-600 text-lg rounded-lg cursor-pointer hover:bg-blue-100 flex flex-row gap-x-3 items-center justify-center"><FaPlus /> Deposit Money</button>
          <button onClick={_ => traModal("withdraw")} className="py-2 w-full bg-blue-200 border border-blue-600 text-blue-600 text-lg rounded-lg cursor-pointer hover:bg-blue-100 flex flex-row gap-x-3 items-center justify-center"><FaMinus /> Withdraw Money</button>
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

    <Modal
      isOpen={openMod}
      onRequestClose={_ => setOpenMod(false)}
      overlayClassName="backdrop-blur bg-black/40 flex justify-center items-center fixed top-0 left-0 w-full h-full"
      className="flex flex-col p-12 w-full max-w-xl rounded-lg shadow-lg bg-slate-100 overflow-hidden"
    >
        <input placeholder="Amount" value={val} onChange={(e) => setVal(e.target.value)} className="mt-3 p-3 w-full bg-white text-slate-800 text-lg rounded-lg cursor-pointer hover:outline-slate-500 focus:outline-slate-500 outline-1 outline outline-slate-300" />
        <span className="text-xl font-semibold mt-4">Updated Balance: <span className="text-blue-600">₹{calculateBalance(13523, val, cat)}</span></span>
        <button onClick={_ => setOpenMod(false)} className="mt-8 ml-auto py-3 px-16 bg-blue-500 text-white text-lg rounded-lg cursor-pointer hover:bg-blue-600 flex flex-row gap-x-3 items-center">{cat.charAt(0).toUpperCase() + cat.slice(1)} <FaArrowRight /></button>
    </Modal>

    </>
  );
}

export default Savings;
