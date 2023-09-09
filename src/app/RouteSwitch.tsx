import { HashRouter as Router, Routes, Route } from "react-router-dom"

import HomeSection from "../features/home/layout/HomeSection"
import Navbar from "../layout_components/Navbar"
import Calculator from "../features/calculator_section/layout/Calculator"
import Study from "../features/study_section/_layout/Study"

const RouteSwitch = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/Study" element={<Study />} />
        <Route path="/Calculator" element={<Calculator />} />
      </Routes>
    </Router>
  )
}

export default RouteSwitch
