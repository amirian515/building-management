
import UnitCard from "../../components/UnitCard"
function AdminUnits() {
    return (
        <div className="space-y-4 p-5">
            <h1 className="text-text text-center font-semibold text-xl">واحدهای ساختمان</h1>
                <input className="p-3 border border-black rounded-xl text-right w-full"
                placeholder=" ... جستجوی واحد "
                type="text" />
            <div className=" flex justify-center items-center gap-5">
            <button className="bg-sky-600 p-2 rounded-xl text-sm" >افزودن واحد </button>
            <button className="bg-red-600 p-2 rounded-xl text-sm" >نمایش بدهکاران</button>
            </div>
             <UnitCard/>
        </div>
    )
}

export default AdminUnits