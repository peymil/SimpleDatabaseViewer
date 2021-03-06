import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Button = ({ children, style, onClick, className }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={{
        width: '100%',
        height: '10%',
        ...style,
      }}
    >
      {children}
    </button>
  );
};
export default Button;
