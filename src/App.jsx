import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home"
import Giaovien from "./giaovien/Giaovien"
import GiaoVienPage from "./pages/GiaoVienPage"
import GiaoVienDetail from "./pages/GiaoVienDetail"
import KhoahocPage from "./pages/KhocHocPage"

function App() {
  return (
    <>
      <Router>
        <main className="w-full bg-neutral-50 flex min-h-screen flex-col text-neutral-500">
          {/* Navbar section */}
          <Navbar />
          {/* Routes */}
          {<Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* Khai bao lớp Giaovien */}
            <Route path="/giaovien" element={<GiaoVienPage />} />

            {/* Khai bao lớp GiaoVienDetail */}
            <Route path="/GiaoVienDetail/:id" element={<GiaoVienDetail />} />
            <Route path="/khoahoc" element={<KhoahocPage />} />
          </Routes>}
          {/* Footer Section */}
          <Footer />
        </main>
      </Router>
    </>
  )
}

export default App
