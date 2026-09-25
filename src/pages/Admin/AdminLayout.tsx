import { Outlet } from "react-router-dom"
import AdminNav from "./AdminNav"


function AdminLayout (){
    return(
        <div>
            <main className="flex flex-col w-full pb-34">
                <Outlet />
            </main>
                <AdminNav />
        </div>
    )
}
export default AdminLayout