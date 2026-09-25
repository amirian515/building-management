import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResidentLogin from "./pages/resident/ResidentLogin"
import ResidentDashboard from "./pages/resident/ResidentDashboard"
import AdminLogin from "./pages/Admin/AdminLogin"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminLayout from "./pages/Admin/AdminLayout"
import AdminUnits from "./pages/Admin/AdminUnits"
import AdminExpenses from "./pages/Admin/AdminExpenses"
import AdminCharges from "./pages/Admin/AdminCharges"
import AdminReports from "./pages/Admin/AdminReports"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/resident/login"
          element={<ResidentLogin/>}
        />
        <Route
        path="/resident/dashboard"
        element={<ResidentDashboard/>}/>
        <Route path="admin/login" element ={<AdminLogin />}/>
        <Route path="/admin" element={<AdminLayout />} >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="units" element={<AdminUnits />} />
        <Route path="charges" element={<AdminCharges />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="expenses" element={<AdminExpenses />} />
        <Route path="dashboard" element={<AdminDashboard />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App