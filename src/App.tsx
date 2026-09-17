import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResidentLogin from "./pages/resident/ResidentLogin"
import ResidentDashboard from "./pages/resident/ResidentDashboard"
import AdminLogin from "./pages/resident/AdminLogin"

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
      </Routes>
      <Routes>
        <Route
          path="/Admin/login"
          element={<AdminLogin/>}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App