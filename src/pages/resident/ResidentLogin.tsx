import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"

function ResidentLogin() {
    const navigate = useNavigate()
    const[unitNumber , setUnitNumber]=useState("")
    const[password , setPassword]=useState("")
    const [error, setError] = useState("")
    const login = (unitNumber :string, password :string) => {
      if(unitNumber === "702" && password === "1234"){
        console.log("ورود با موفقیت انجام شد")
        console.log(unitNumber)
        console.log(password)
        setError("")
        navigate("/resident/dashboard")

      }else{
        console.log("شماره واحد یا رمز عبور صحیح نیست")
        setError("شماره واحد یا رمز عبور صحیح نیست")
      }


    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(unitNumber===""){
            setError("شماره واحد خود را وارد کنید")
            return
        }
        if(password===""){
            setError("رمز خود را وارد کنید")
            return
        }
      setError("")
      login(unitNumber, password)

}
  return (
    <div className=" min-h-screen flex justify-center items-center">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg text-center">
      <h1 className="text-zinc-900 text-3xl mb-8 font-bold">مدیریت ساختمان</h1>
      <p className="text-zinc-800 text-xl mb-5">به پنل مدیریت ساختمان خوش آمدید</p>
<form
onSubmit={handleSubmit}
className="space-y-5">
  <div>
    <label htmlFor="unitNumber" className="block mb-2 text-zinc-700">
      شماره واحد
    </label>

    <input
      value={unitNumber}
      onChange={(event)=>{
        setUnitNumber(event.target.value)
        setError("")
      }}
      id="unitNumber"
      type="text"
      className="w-full border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-zinc-500"
    />
  </div>

  <div>
    <label htmlFor="password" className="block mb-2 text-zinc-700">
      رمز عبور
    </label>

    <input
      value={password}
      onChange={(event)=>{
        setPassword(event.target.value)
        setError("")
      }

      }
      id="password"
      type="password"
      className="w-full border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-zinc-500"
    />
  </div>
{error && (

  <p className="text-red-500 my-3 text-sm">
    {error}
  </p>

)}
  <button
  type="submit"
  className="w-full border rounded-lg px-4 py-3 bg-zinc-900 text-white active:bg-zinc-700 active:scale-105 transition duration-175 hover:scale-105 transition duration-175 ">ورود</button>
  <button
  type="button"
  className="text-sm text-zinc-600 active:text-zinc-800 ">رمز عبور را فراموش کردم</button>
</form>

    </div>
    </div>
  )
}

export default ResidentLogin