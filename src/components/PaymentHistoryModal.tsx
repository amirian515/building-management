import type { paymentsType } from "../types/resident"
    type PaymentHistoryModalProps ={
        showPayment:boolean
        filteredPayments :paymentsType[]
        setShowPayment : React.Dispatch<React.SetStateAction<boolean>>}
function PaymentHistoryModal ( props :PaymentHistoryModalProps ){
        return(
            <div>
                            {props.showPayment && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-center items-center">
                    <div className="w-2/3 space-y-3">
                        <div className="flex justify-between items-center">
                            <button  className="text-3xl active:text-red-600"
                            onClick={()=>{
                                props.setShowPayment(!props.showPayment)
                            }}>
                                ×</button>
                           <h2 className="font-semibold">تاریخچه پرداخت</h2>
                        </div>
                        <div className="bg-surface rounded-xl p-5 border border-border shadow-lg">
                            {props.filteredPayments.map((payment)=>{
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
                </div>)}
            </div>
    )


    }




export  default PaymentHistoryModal