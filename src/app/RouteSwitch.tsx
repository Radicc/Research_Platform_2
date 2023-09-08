import { HashRouter as Router, Routes, Route } from "react-router-dom"

import HomeSection from "../features/home/layout/HomeSection"
import Navbar from "../layout_components/Navbar"
import Calculator from "../features/calculator/layout/Calculator"

const RouteSwitch = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </Router>
  )
}

export default RouteSwitch
