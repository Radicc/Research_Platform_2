import { NavLink } from "react-router-dom"
import css from "./homeSection.module.css"

const FirstSection = () => {
  return (
    <div className={css.container}>
      <div className={css.linkWrapper}>
        <NavLink
          to="/Stocks"
          className={`${css.linkButton} pointer-events-none opacity-40`}
        >
          <h2>Stock News</h2>
        </NavLink>

        <NavLink to="/Study" className={css.linkButton}>
          <h2>Study Section</h2>
        </NavLink>

        <NavLink
          to="/Analyzer"
          className={`${css.linkButton} pointer-events-none opacity-40`}
        >
          <h2>Stocks Analyzer</h2>
        </NavLink>

        <NavLink to="/Calculator" className={css.linkButton}>
          <h2>Retirement Calculator</h2>
        </NavLink>
      </div>
    </div>
  )
}
export default FirstSection

/*<div className={css.topContent}>
        <h1 className={css.slogan}>
          SUCCESS IN ANY FIELD OF LIFE IS NOT DUE TO
          <br /> INBORN TRAITS
        </h1>
      </div>*/
