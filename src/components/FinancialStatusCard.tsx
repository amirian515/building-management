function FinancialStatusCard (){
     const debts =[{
        id:1,
        title:"شارژ شهریور",
        amount:150000
        ,date:"1405/07/12"},
        {
        id:2,
        title:"شارژ مرداد",
        amount:150000
        ,date:"1405/07/12"},
        {
        id:3,
        title:" هزینه آسانسور",
        amount:150000
        ,date:"1405/07/12"}
     ]
     const totalDebt = debts.reduce((acc ,item) =>{
        return(
            acc+item.amount
        )
     },0)
    return(
        <section className="bg-background min-h-screen space-y-6">
            <div className="mx-5 px-5 pb-5  border-border bg-surface rounded-xl shadow-md">
                <h1 className="text-right border-b border-border py-5 text-text font-semibold text-base">صورت وضعیت مالی </h1>
                <div className="flex flex-col justify-between gap-1 text-sm py-2" >
                    {debts.map((debt)=>{
                    return(
                    <div
                    key={debt.id}
                    className=" flex justify-between py-3 border-b border-border last:border-b-0  text-right  items-center">
                        <p className="text-xs">{debt.date}</p>
                        <span className="flex gap-1">
                            <p>تومان</p>
                            <p className="text-danger ">{debt.amount.toLocaleString()}</p>

                        </span>
                        <p className="w-22 ">{debt.title}</p>
                    </div>)
                    })}

                </div>
                    <div className=" flex justify-between border-t border-border pt-4 mt-2 ">
                        <span className="flex gap-1 font-semibold">
                          <p>تومان</p>
                          <p className="text-danger ">{totalDebt.toLocaleString()}</p>
                        </span>
                        <h1 className="text-text font-semibold">جمع بدهی</h1>
            </div>
            </div>





        </section>


    )

}
export default FinancialStatusCard