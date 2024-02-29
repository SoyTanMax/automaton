import React from 'react';

export function Button({ children, variant, onClick, className, type }: Props) {
    const baseStyle = `inline-block text-sm px-5 py-2.5 text-center font-medium text-gray-900 rounded-lg bg-cyan-300 
      focus:outline-none focus:ring-4 focus:ring-blue-300 
      dark:focus:ring-blue-800 
      hover:bg-cyan-400 
      dark:bg-cyan-300 dark:hover:bg-cyan-400`;
    
    const iconStyle = `inline-block rounded-full hover:bg-gray-100/10 p-2 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300  `;

    const secondaryStyle = `inline-block text-sm px-5 py-2.5 text-center font-medium text-gray-900 rounded-lg bg-white 
      focus:outline-none focus:ring-4 focus:ring-blue-300 
      dark:focus:ring-blue-800 
      hover:bg-gray-100 
      dark:bg-gray-200 dark:hover:bg-gray-300`
    
    const textStyle = `inline-block text-sm px-0 py-0 text-center text-neutral-100 bg-transparent
      focus:outline-none focus:ring-4 focus:ring-blue-300 
      dark:focus:ring-blue-800 
      hover:transparent hover:decoration-solid
      dark:transparent dark:hover:transparent dark:hover:underline decoration-solid`

    const getClassNames = () => {
      switch(variant){
        case 'secondary':
          return secondaryStyle
        case 'icon': 
          return iconStyle
        case 'text': 
          return textStyle
        default:
          return baseStyle
      }
    }

    return (
      <button type={type ?? 'button'} onClick={onClick} className={`${className} ${getClassNames()}`}>
        {children}
      </button>
    );
};

type Props = {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'secondary' | 'text' | 'icon'
}