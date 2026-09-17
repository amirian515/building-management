function AdminLogin (){
    return(
        <div className=" min-h-screen flex justify-center items-center">
            <div className="bg-surface rounded-xl shadow-lg m-10 p-8 text-center">
                <h1 className="text-text font-bold text-xl mb-15"> پنل مدیریت ساختمان</h1>
                <form 
                className="space-y-6"
                action="">
                    <div>
                        <label htmlFor="userName"
                        className="text-zinc-600 block mb-2">نام کاربری</label>
                        <input
                         type="text"
                         id="userName"
                         className=" border border-zinc-300 rounded-lg px-4 py-3 focus:border-zinc-500" />
                    </div>
                    <div>
                        <label
                        className="text-zinc-600 block mb-2"
                        htmlFor="password">رمز عبور</label>
                        <input
                        className="px-4 py-3 border border-zinc-300 rounded-lg focus:border-zinc-500"
                        id="password"
                        type="password" />
                    </div>
                    <button
                    type="submit"
                    className=" bg-primary rounded-xl w-full px-4 py-3 text-white active:bg-zinc-700 active:scale-105 transition duration-175 hover:scale-105 transition duration-175 "> ورود</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin