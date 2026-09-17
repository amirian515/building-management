import { payments } from "../data/residentData"
function PaymentHistoryCard (){


    return(


        <div className=" mx-5 px-5 pb-5 bg-surface text-right rounded-xl shadow-md ">
            <h1 className="text-text font-semibold text-base py-5 border-b border-border">تاریخچه پرداخت ها</h1>
            <div className="flex flex-col justify-between gap-1 text-sm py-2">
                {payments.map((payment)=>{
                return(
                    <div
                    key={payment.id}
                    className="flex justify-between items-center border-b border-border py-3 text-right last:border-b-0">
                        <p className="text-xs">{payment.date}</p>
                        <span className=" flex gap-1">
                            <p>تومان</p>
                            <p className="text-warning">{payment.amount.toLocaleString()}</p>
                        </span>
                        <p className="w-22">{payment.title}</p>
                    </div>
                )}
                )}
            </div>
        </div>




    )
}
export default PaymentHistoryCard