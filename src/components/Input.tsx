interface InputProps {
  label: string
  type: "text" | "number"
  value?: any
  readOnly?: boolean
  onChangeValue?: (value: any) => void
  name?: string
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={props.label} className="mb-1">{props.label}</label>
      <input
        id={props.label}
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        onChange={props.onChangeValue}
        name={props.name}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${props.readOnly ? "" : "focus:bg-white"}
        `}
      />
    </div>
  )
}