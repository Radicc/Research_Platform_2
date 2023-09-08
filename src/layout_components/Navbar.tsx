import { NavLink } from "react-router-dom"
import homeSVG from "../_assets/homeSVG.png"

import css from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={css.container}>
      <NavLink to={"/"}>
        <img className={css.navIcon} src={homeSVG} />
      </NavLink>
    </div>
  )
}
export default Navbar
