import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  value: string
  onChange: (e:any) => void
};

const input = (props: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        className={twMerge(
          props.disabled && "text-neutral-400 cursor-not-allowed"
        )}
        htmlFor={props.title}
      >
        {props.title}
      </label>
      <input
        id={props.title}
        className={twMerge(
          "w-full px-3 py-2 outline-none rounded-md bg-slate-800",
          props.disabled &&
            "bg-slate-600  cursor-not-allowed"
        )}
        placeholder={props.placeholder || props.title}
        type={props.type || "text"}
        disabled={props.disabled || false}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default input;
