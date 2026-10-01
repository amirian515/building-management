import { useState,useEffect} from "react"
import type { unitType } from "../types/resident"

type editFormModelProps ={
    selectedUnit:unitType | null
    showEditForm:boolean
    setEditForm:React.Dispatch<React.SetStateAction<boolean>>
}
function EditFormModel ( props :editFormModelProps){
    const [unitNumber ,setUnitNumber] = useState(props.selectedUnit?.unitNumber )
    const [unitName ,setUnitName] = useState(props.selectedUnit?.name )
    const [residentCount,setResidentCount]=useState(props.selectedUnit?.residentCount)
    useEffect(() => {
    if (props.selectedUnit) {
        setUnitNumber(props.selectedUnit.unitNumber)
        setUnitName(props.selectedUnit.name)
        setResidentCount(props.selectedUnit.residentCount)
    }
}, [props.selectedUnit])


    return(
        <div>
                        {props.showEditForm && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-center items-center">
                    <div className="w-2/3 space-y-3 ">

                        <div className="flex justify-between items-center gap- ">
                            <button className="text-3xl active:text-red-600" onClick={()=>props.setEditForm(!props.showEditForm)}>×</button>
                            <h2 className="font-semibold"> {props.selectedUnit?.unitNumber }   ویرایش واحد</h2>
                        </div>
                        <form action=""
                        className=" bg-surface rounded-lg shadow-md border-border flex flex-col space-y-3 p-5  text-sm">
                            <div className="flex justify-center gap-3">
                                <input type="number"
                                id="unitNumber"
                                className=" border border-bs-zinc-600 rounded-lg w-40 text-right p-1"
                                value={unitNumber}

                                onChange={(event)=>
                                    setUnitNumber(Number(event.target.value ))
                                }
                                />
                                <label htmlFor="unitNumber"
                                className="text-right w-20"> شماره واحد</label>

                            </div>
                            <div className="flex justify-center gap-3">
                                <input type="text"
                                id="unitName"
                                className=" border border-bs-zinc-600 rounded-lg w-40 text-right p-1"
                                value={unitName}
                                onChange={(event)=>{
                                    console.log(event.target.value)
                                    setUnitName(event.target.value)
                                }

                                }
                                />
                                <label htmlFor="unitName"
                                className="text-right w-20"> نام ساکن</label>

                            </div>
                            <div className="flex justify-center gap-3">
                                <input type="number"
                                id="unitCount"
                                className=" border border-bs-zinc-600 rounded-lg w-40 text-right p-1"
                                value={residentCount}
                                onChange={(event)=>
                                    setResidentCount(Number(event.target.value))
                                }
                                />
                                <label htmlFor="unitCount"
                                className="text-right w-20"> تعداد نفرات</label>

                            </div>
                            <div className="flex justify-center gap-2">
                                <button className="px-3 py-2 bg-success rounded-lg w-1/2">ذخیره</button>
                                <button
                                onClick={()=>props.setEditForm(false)}
                                className="px-3 py-2 bg-danger rounded-lg w-1/2">لغو</button>

                            </div>
                        </form>
                    </div>
                </div>
                            )}
        </div>
    )
}
export default EditFormModel