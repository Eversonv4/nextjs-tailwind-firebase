import { ReactNode } from "react"

interface ButtonProps {
  bgColor?: "green" | "blue" | "gray"
  className?: string
  children: ReactNode
  handleClick?: (param: any) => void
}

export default function Button(props: ButtonProps) {
  const color = props.bgColor ?? "gray"
  return (
    <button
      onClick={props.handleClick}
      className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700 
      text-white px-4 py-2 rounded-md ${props.className}
    `}>
      {props.children}
    </button>
  )
}