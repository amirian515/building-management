 import { units } from "../data/residentData"
 import { payments } from "../data/residentData"
 import { useState } from "react"
 import type { unitType } from "../types/resident"
import { debts } from "../data/residentData"
import PaymentHistoryModal from "./PaymentHistoryModal"
import DebtRegisterModal from "./DebtRegisterModal"
import EditFormModel from "./EditFormModel"
function UnitCard(){

    const [showPayment ,setShowPayment]=useState(false)
    const [showEditForm , setEditForm] =useState(false)
    const [showDebtReg ,setDebtReg]=useState(false)

    const [selectedUnit, setSelectedUnit] = useState <unitType | null >(null)
    const filteredPayments = payments.filter((payment)=> {
        return payment.unitId === selectedUnit?.unitNumber})



    return(
        <div>
            {units.map((unit)=>{
                    const filteredDebts =debts.filter((debt)=>{
                        return debt.unitId === unit.unitNumber
                })
                return(
                    <div
                    key={unit.id}
                    className="bg-surface w-full my-5 p-5 rounded-lg shadow-md  border border-border  flex flex-col">
                        <div className="flex justify-between items-start border-b border-border pb-5" >
                            <div className="flex flex-col gap-0.5 ">

                            <button onClick={() => {
    console.log(unit)
    setSelectedUnit(unit)
    setEditForm(true)
}}>✏️</button>
                            <button onClick={()=>{
                                setSelectedUnit(unit)
                                setShowPayment(!showPayment)}}>📜</button>

                            </div>

                            <div className="text-right font-semibold">
                                <h2>{unit.unitNumber}</h2>
                                <h2>{unit.name}</h2>
                            </div>
                        </div>
                         <div className="flex gap-1 justify-end pt-5">
                            <p className="text-danger text-md">{unit.status}</p>
                            <h3 className="text-text text-md font-semibold">: وضعیت مالی</h3>
                        </div>
                         <div className="flex gap-1 justify-end pb-5 ">
                            <p className="text-danger text-md">{unit.debt.toLocaleString()}</p>
                            <h3 className="text-text text-md font-semibold">: جمع بدهی</h3>
                        </div>
                        <div>
                            {filteredDebts.map((debt)=>{
                                return(
                                    <div
                                    className="flex justify-between text-xs py-5 border-t border-border text-right"
                                    key={debt.id}>
                                        <p>{debt.date}</p>
                                        <span className="flex gap-1">
                                            <p>تومان</p>
                                            <p className=" text-danger">{debt.amount.toLocaleString()}</p>

                                        </span>
                                        <p className="w-20">{debt.title}</p>
                                     </div>
                                )
                            })}
                        </div>
                        <div className="flex  justify-center items-center gap-2  mt-2">
                            <button
                            className=" bg-success px-3 py-1 rounded-md w-1/2"> ثبت پرداخت</button>
                            <button
                            onClick={()=>{setDebtReg(!showDebtReg)
                                setSelectedUnit(unit)}
                            }
                            className=" bg-danger px-3 py-1 rounded-md w-1/2">ثبت بدهی</button>
                        </div>
                    </div>

                )
            })}
                <PaymentHistoryModal
                    showPayment={showPayment}
                    filteredPayments={filteredPayments}
                    setShowPayment={setShowPayment}
            />
                <DebtRegisterModal
                    showDebtReg={showDebtReg}
                    selectedUnit={selectedUnit}
                    setDebtReg={setDebtReg}
            />
            <EditFormModel
            showEditForm={showEditForm}
            setEditForm={setEditForm}
            selectedUnit={selectedUnit} />
        </div>

    )
}
export default UnitCard
