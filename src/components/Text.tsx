import React from 'react';

/**
 * @param {Object} props - The props passed to the component.
 * @param {React.ReactNode} props.children - The content of the text.
 * @param {string} [props.size="base"] - The initial font size, which can be adjusted but won't exceed 24px.
 * @param {string} [props.className] - Additional Tailwind CSS or custom classes for styling.
 */
export function Text ({ children, size = 'base', className = '' }) {
  const sizeClasses = {
    base: 'text-base', // 16px
    lg: 'text-lg', // 18px
    xl: 'text-xl', // 20px
    '2xl': 'text-2xl', // 24px
  };


  const fontSizeClass = sizeClasses[size] || sizeClasses['base'];

  const combinedClasses = `${fontSizeClass} ${className}`;

  return <p className={combinedClasses}>{children}</p>;
};