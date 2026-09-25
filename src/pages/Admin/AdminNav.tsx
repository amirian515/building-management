import { NavLink, type NavLinkRenderProps } from "react-router-dom"
function AdminNav (){
    const navLinkClass =({isActive}: NavLinkRenderProps)=>
        isActive
             ?"flex-1 text-center border-r border-border text-yellow-400 font-semibold"
             :"flex-1 text-center border-r border-border text-white"

    return(
        <nav className=" flex fixed bottom-0 right-0 left-0 bg-primary z-50  items-center py-5 px-3 text-white  ">
            <NavLink
            to="/admin/expenses"
             className={navLinkClass}>
                 هزینه ها
             </NavLink>
            <NavLink to="/admin/reports"
             className={navLinkClass}>
             گزارش ها
            </NavLink>
            <NavLink to="/admin/charges"
            className={navLinkClass}
            > شارژ ها</NavLink>
            <NavLink to="/admin/units"
            className={navLinkClass}
             > واحد ها</NavLink>
            <NavLink to="/admin/dashboard"
            className={({isActive})=>
            isActive
            ?"flex-1 text-center  border-border text-yellow-400 font-semibold"
            :"flex-1 text-center  border-border text-white"}             > داشبورد</NavLink>


        </nav>
    )
}
export default AdminNav