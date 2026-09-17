import { useState  , type FormEvent} from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin (){
    const [userName , setUserName] =useState("")
    const [password , setPassword] =useState("")
    const [error , setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit =(event :FormEvent) =>{
        event.preventDefault()
        if(userName===""){
            setError("نام کاربری را وارد کنید")
            return
        }
        if(password===""){
            setError("رمز عبور را وارد کنید")
            return
        }
        setError("")
        login(userName ,password)

    }
    const login =(userName :string ,password :string)=>{
        if(userName==="admin" && password==="111111"){
            alert("ورود با موفقیت انجام شد")
            console.log("ورود با موفقیت انجام شد")
            setError("")
            navigate("/َAdmin/dashboard")
        }
        else{
        console.log("نام کاربری یا رمز عبور صحیح نیست")
        setError("شماره واحد یا رمز عبور صحیح نیست")
        }


    }
    return(
        <div className=" min-h-screen flex justify-center items-center">
            <div className="bg-surface rounded-xl shadow-lg m-10 p-8 text-center">
                <h1 className="text-text font-bold text-xl mb-15"> پنل مدیریت ساختمان</h1>
                <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="">
                    <div>
                        <label htmlFor="userName"
                        className="text-zinc-600 block mb-2">نام کاربری</label>
                        <input
                        onChange={(event)=>{
                            setUserName(event.target.value)
                            setError("")}
                        }
                        value={userName}
                         type="text"
                         id="userName"
                         className=" border border-zinc-300 rounded-lg px-4 py-3 focus:border-zinc-500" />
                    </div>
                    <div>
                        <label
                        className="text-zinc-600 block mb-2"
                        htmlFor="password">رمز عبور</label>
                        <input
                        onChange={(event)=>{
                            setPassword(event.target.value)
                            setError("")}
                        }
                        value={password}
                        className="px-4 py-3 border border-zinc-300 rounded-lg focus:border-zinc-500"
                        id="password"
                        type="password" />
                    </div>
                    {error &&(
                    <p className="text-red-500 my-3 text-sm">{error}</p>
                )
                }
                    <button
                    type="submit"
                    className=" bg-primary rounded-xl w-full px-4 py-3 text-white active:bg-zinc-700 active:scale-105 transition duration-175 hover:scale-105 transition duration-175 "> ورود</button>
                </form>

            </div>
        </div>
    )
}

export default AdminLogin