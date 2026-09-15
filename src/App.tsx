import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResidentLogin from "./pages/resident/ResidentLogin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/resident/login"
          element={<ResidentLogin/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App