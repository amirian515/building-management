
import { expenses } from "../data/residentData"
function ExpensesCard (){

    return(
        <div className="mx-5 px-5 text-right border-border bg-surface shadow-md rounded-xl">
            <h1 className="text-text font-semibold text-base py-5 border-b border-border"> هزینه های جاری </h1>
            <div className="flex flex-col justify-between gap-1 text-sm py-2">
                {expenses.map((payment)=>{
                return(
                    <div
                    key={payment.id}
                    className="flex justify-between items-center border-b border-border py-3 text-right last:border-b-0">
                        <span className=" flex gap-1">
                            <p>تومان</p>
                            <p className="text-warning">{payment.amount.toLocaleString()}</p>
                        </span>
                        <span>
                             <p className="mb-1">{payment.title}</p>
                             <p className="text-xs text-zinc-600">{payment.date}</p>

                        </span>
                    </div>
                )}
                )}
            </div>
        </div>
    )
}
export default ExpensesCard