 import { units } from "../data/residentData"
 import { payments } from "../data/residentData"
 import { useState } from "react"
function UnitCard(){

    const [showPayment ,setShowPayment]=useState(false)

    return(
        <div>
            {units.map((unit)=>{
                return(
                    <div
                    key={unit.id}
                    className="bg-surface w-full my-5 p-5 rounded-lg shadow-md  border border-border  flex flex-col">
                        <div className="flex justify-between items-start border-b border-border pb-5" >
                            <div className="flex flex-col gap-0.5 ">

                            <button>✏️</button>
                            <button onClick={()=>setShowPayment(!showPayment)}>📜</button>

                            </div>

                            <div className="text-right font-semibold">
                                <h2>{unit.unitNumber}</h2>
                                <h2>{unit.name}</h2>
                            </div>
                        </div>
                         <div className="flex gap-1 justify-end pt-5 text-text">
                            <p>{unit.status}</p>
                            <h3>: وضعیت مالی</h3>
                        </div>
                         <div className="flex gap-1 justify-end  text-text pb-5">
                            <p>{unit.debt.toLocaleString()}</p>
                            <h3>:جمع بدهی</h3>
                        </div>
                        <div>
                            {payments.map((payment)=>{
                                return(
                                    <div
                                    className="flex justify-between text-xs py-5 border-t border-border text-right"
                                    key={payment.id}>
                                        <p>{payment.date}</p>
                                        <span className="flex gap-1">
                                            <p>تومان</p>
                                            <p className=" text-danger">{payment.amount.toLocaleString()}</p>

                                        </span>
                                        <p className="w-20">{payment.title}</p>
                                     </div>
                                )
                            })}
                        </div>
                        <div className="flex  justify-center items-center gap-3 mt-2">
                            <button className=" bg-success px-3 py-1 rounded-xl"> ثبت پرداخت</button>
                            <button className=" bg-danger px-3 py-1 rounded-xl">ثبت بدهی</button>
                        </div>
                    </div>

                )
            })}
            {showPayment && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-center items-center">
                    <div className="w-2/3 space-y-3">
                        <div className="flex justify-between items-center">
                            <button  className="text-3xl active: text-red-600" onClick={()=>setShowPayment(!showPayment)}>×</button>
                           <h2 className="font-semibold">تاریخچه پرداخت</h2>
                        </div>
                        <div className="bg-surface rounded-md p-5">
                            {payments.map((payment)=>{
                                return(
                                    <div className="flex justify-between items-center py-2 border-b border-border last:border-0">
                                        <p className="text-xs">{payment.date}</p>
                                        <p>{payment.amount.toLocaleString()}</p>
                                        <h2 className="w-22 text-right">{payment.title}</h2>
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                </div>
            )}
        </div>

    )
}
export default UnitCard
