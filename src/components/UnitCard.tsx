 import { units } from "../data/residentData"
 import { payments } from "../data/residentData"
function UnitCard(){
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
                            <button>📜</button>

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
        </div>

    )
}
export default UnitCard
