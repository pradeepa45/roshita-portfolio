'use client'

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined
  className?: string
  children: React.ReactNode
  onClick?: VoidFunction
}

export default function Button({children, className, onClick, type='button'}:ButtonProps) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}