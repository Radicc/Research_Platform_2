import { DataObject } from "../_layout/Study"
import css from "./websites.module.css"

interface Props {
  data: DataObject | undefined
}

const Websites = (props: Props) => {
  return <div className={css.container}>Websites</div>
}

export default Websites
