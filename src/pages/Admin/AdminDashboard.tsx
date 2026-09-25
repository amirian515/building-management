function AdminDashboard (){
    return(
        <section className="space-y-5 px-5">
            <h1 className=" text-right font-semibold m-5 ">سلام مدیر ساختمان</h1>
            <h2 className="text-center font-semibold m-5">خلاصه وضعیت مالی ساختمان</h2>
            <div className="flex gap-3">
                <div className="bg-surface border-border shadow-md w-1/2 text-center rounded-lg py-4 flex flex-col gap-2">
                    <h2> بدهکاران</h2>
                    <p>5</p>
                </div>
                <div className="bg-surface border-border shadow-md w-1/2 text-center rounded-lg py-4  flex flex-col gap-2">
                    <h2>تعداد واحد ها</h2>
                    <p>34</p>
                </div>
            </div>
                        <div className="flex gap-3">
                <div className="bg-surface border-border shadow-md w-1/2 text-center rounded-lg py-4 flex flex-col gap-2">
                    <h2> هزینه‌ها</h2>
                    <p>3.400.000</p>
                </div>
                <div className="bg-surface border-border shadow-md w-1/2 text-center rounded-lg py-4  flex flex-col gap-2">
                    <h2>دریافتی</h2>
                    <p>5.100.000</p>
                </div>
            </div>
             <h2 className="text-center font-semibold">موجودی ساختمان</h2>
            <div className="bg-surface border-border shadow-md w-full text-center rounded-lg p-4 flex flex-col gap-2">
               <div className="flex justify-between items-center">
                <p>1,500,000 تومان</p>
                <p></p>
               </div>

            </div>
            <h2 className="text-center font-semibold">آخرین پرداخت‌ها</h2>
            <div className="bg-surface border-border shadow-md w-full text-center rounded-lg p-4 flex flex-col gap-2">

               <div className="flex justify-between items-center">
                <p>1,500,000 تومان</p>
                <p>واحد 3 </p>
               </div>
               <div className="flex justify-between items-center">
                <p>1,500,000 تومان</p>
                <p>واحد 4 </p>
               </div>


            </div>
            <h2 className="text-center font-semibold">آخرین هزینه ها</h2>
            <div className="bg-surface border-border shadow-md w-full text-center rounded-lg p-4 flex flex-col gap-2">

               <div className="flex justify-between items-center">
                <p>1,500,000 تومان</p>
                <p>تعمیر  کرکره</p>
               </div>
               <div className="flex justify-between items-center">
                <p>1,500,000 تومان</p>
                <p>تعمیر آسانسور</p>
               </div>

            </div>
        </section>

    )
}
export default AdminDashboard