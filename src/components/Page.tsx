import React from 'react';

export function Page ({ children, container }: Props) {
  return (
    <div 
      className={`flex justify-center items-center text-white overflow-auto custom-bg h-fit min-h-screen w-full ${container && 'container'}`}
    >
      {children}
    </div>
  );
};

type Props = {
  children: any,
  container?: boolean
}