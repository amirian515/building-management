
import type { unitType } from "../types/resident"
type DebtRegisterModalProps ={
    showDebtReg:boolean
    setDebtReg:React.Dispatch<React.SetStateAction<boolean>>
    selectedUnit:unitType | null
}

function DebtRegisterModal(props: DebtRegisterModalProps) {
    return(
        <div>{props.showDebtReg && (
                            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-center items-center">
                                <div className="w-2/3 space-y-3">
                                    <div className="flex justify-between items-center ">
                                        <button className="text-3xl active:text-red-600" onClick={()=>props.setDebtReg(!props.showDebtReg)}>×</button>
                                        <h2 className="font-semibold"> ثبت بدهی</h2>
                                    </div>
                                    <form action="">
                                        <input type="text" />
                                        <input type="text" />
                                        <input type="text" />
                                        <button></button>
                                    </form>
                                </div>
                            </div>
                            )}</div>
    )
}
export default DebtRegisterModal