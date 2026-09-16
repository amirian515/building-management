
function ExpensesCard (){
   const expenses = [
    {
        id:1,
        title:"سرویس آسانسور",
        amount:750000,
        date:"1405/07/30"
   },
      {
        id:2,
        title:"سرویس موتور خانه",
        amount:700000,
        date:"1405/07/30"
   }

]
    return(
        <div className="mx-5 px-5 pt-5 text-right border-border bg-surface shadow-md rounded-xl">
            <h1 className="text-text font-semibold text-base py-5 border-b border-border">تاریخچه پرداخت ها</h1>
            <div className="flex flex-col justify-between gap-1 text-sm py-2">
                {expenses.map((payment)=>{
                return(
                    <div
                    key={payment.id}
                    className="flex justify-between items-center border-b border-border py-3 text-right last:border-b-0">
                        <span className=" flex gap-1">
                            <p>تومان</p>
                            <p className="text-danger">{payment.amount.toLocaleString()}</p>
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