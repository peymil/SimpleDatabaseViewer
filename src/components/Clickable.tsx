import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}

const Button = ({ children, style, onClick, className, id }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      id={id}
      style={{
        ...style,
      }}
    >
      {children}
    </button>
  );
};
export default Button;
