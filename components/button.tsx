import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    disabled?: true | false
    children: React.ReactNode
    link?: string
    className?: string
    type?: "button" | "reset" | "submit";
    onClick: (e: any) => void
}

const button = (props: Props) => {
  return (
    <a href={props.link}>
        <button disabled={props.disabled} onClick={props.onClick} type={props.type || 'button'} className={twMerge("text-white cursor-pointer flex items-center justify-center w-full py-2 px-4 font-bold bg-blue-500 rounded-md", props.disabled && "bg-slate-700", props.className)}>
            {props.children}
        </button>
    </a>
  )
}

export default button