
function BillCard(){
    const bills =[
        {id:1,
        title:" آب",
        amount:20000000,
        status:"پرداخت شده"
        },
        {id:2,
        title:" برق موتور خانه",
        amount:9152000,
        status:"پرداخت شده"
},
        {id:3,
        title:" گاز موتور خانه",
        amount:5600000,
        status:"پرداخت شده"
},
    ]
    const totalBills = bills.reduce((acc ,item)=>{
        return( acc+item.amount)
    },0)
    return(
        <div className="bg-surface mx-5 px-5 pb-5 rounded-xl shadow-md text-right">
             <h1 className="font-semibold py-5 border-b border-border text-text  text-base"> قبض های جاری</h1>
             <div className="flex flex-col justify-between gap-1 text-sm py-2">
                {bills.map((bill)=>{
                    return(
                        <div
                        key={bill.id}
                        className=" border-b border-border py-3 text-right last:border-b-0 flex justify-between">
                            <span className="flex gap-1">
                                <p>تومان</p>
                                <p className="text-danger">{bill.amount.toLocaleString()}</p>
                            </span>
                            <p className="">{bill.status}</p>
                            <p className="w-32">{bill.title}</p>
                        </div>
                    )
                })}
             </div>
             <div className="border-t border-border flex justify-between items-center pt-4 mt+2">
                <span className="flex gap-1 font-semibold">
                    <p> تومان</p>
                    <p className="text-danger">{totalBills.toLocaleString()}</p>
                </span>
                <h1 className="font-semibold text-text">جمع قبض ها</h1>
             </div>
        </div>
    )
}
export default BillCard