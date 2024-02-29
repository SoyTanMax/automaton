import React, { ChangeEventHandler, useState } from "react";
import { AlertIcon } from "../icons/AlertIcon";

export function Input({
  label, 
  name,
  type, 
  onChange, 
  value = '', 
  autoFocus
}: Props) {
  const [isTouched, setIsTouched] = useState(false);

  const isValid = value.trim() !== '';
  const showInvalidFeedback = !isValid && isTouched;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange && onChange(event);
    if (!isTouched) setIsTouched(true);
  };

  const getClassNames = () => {
    switch (type) {
      case 'file': 
        return `bg-transparent px-0 py-4 rounded-none outline-none`
      default: 
        return `bg-transparent px-3 py-4 rounded-none border-b border-neutral-200 outline-none focus:border-cyan-300 focus:border-b-[2px] ${
          showInvalidFeedback ? 'border-b-[2px] border-red-700' : ''
        }`
    }
  }

  return (
    <div className="flex flex-col gap-2 min-w-[420px]">
      <label htmlFor={name} className='text-lg'>{label}</label>
      <input
        className={getClassNames()}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        autoFocus={autoFocus}
        placeholder="Type your answer here..."
        onBlur={() => setIsTouched(true)}
        required
      />
      {showInvalidFeedback && (
        <span className="flex gap-1 items-center px-2 py-1 bg-pink-200 text-red-700 text-sm mt-1 w-fit rounded-sm font-medium">
            <AlertIcon color="#b91c1c"/>
            This field is required
        </span>
      )}
    </div>
  );
};

type Props = {
  label?: string, 
  type?: string,  
  name?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  value?: string, 
  autoFocus?: boolean,
}
