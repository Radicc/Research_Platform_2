import { Path, useForm } from "react-hook-form"
import { Data, NewData } from "../calculator.interface"
import { inputs } from "../getInputsData"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import formSchema from "./formSchema"
import useMath from "../useMath"

import css from "./form.module.css"

interface Props {
  inputData: Data
  setInputData: (e: Data) => void
  setResultData: (e: NewData) => void
}

const Form = (props: Props) => {
  const schema = formSchema({ ...props })

  type ExpenseFormData = z.infer<typeof schema>

  const onSubmit = () => {
    props.setResultData(useMath(props.inputData))
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })

  return (
    <form className={css.calcForm} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input) => (
        <div key={input.id} className={css.inputWrapper}>
          <h2>{input.title}</h2>
          <input
            className={errors[input.schemaName] && "border-2 border-red-500"}
            {...register(input.schemaName as Path<ExpenseFormData>, {
              valueAsNumber: true,
            })}
            value={props.inputData[input.schemaName]}
            placeholder={input.placeholder}
            type="number"
            onChange={(e) => {
              props.setInputData({
                ...props.inputData,
                [input.schemaName]: Number(e.currentTarget.value) || null,
              })
            }}
          />
          {errors[input.schemaName] && !props.inputData[input.schemaName] && (
            <p className=" absolute text-red-500 top-10 right-8">
              {errors[input.schemaName].message}
            </p>
          )}
          {input.symbol && (
            <span className={css.inputSymbol}>{input.symbol}</span>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="text-gray-900 font-semibold px-6 py-2 bg-yellow-400"
      >
        Submit
      </button>
    </form>
  )
}

export default Form
