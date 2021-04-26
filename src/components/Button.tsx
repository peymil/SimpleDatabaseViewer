import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button type="button" style={{ flex: 1 }}>
      {children}
    </button>
  );
};
export default Button;
