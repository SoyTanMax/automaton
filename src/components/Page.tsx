import React from 'react';

export function Page ({ children, container, itemsStart }: Props) {
  return (
    <div 
      className={`flex pt-[80px] justify-center ${itemsStart ? 'items-start' : 'items-center'} text-white overflow-auto custom-bg h-fit min-h-screen w-full ${container && 'container'}`}
    >
      {children}
    </div>
  );
};

type Props = {
  children: any,
  container?: boolean
  itemsStart?: boolean
}