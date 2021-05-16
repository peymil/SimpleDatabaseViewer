import React from 'react';

interface TextFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  style?: React.CSSProperties;
  className?: string;
}

const TextForm = ({
  value,
  onChange,
  style,
  placeHolder,
  className,
}: TextFormProps) => {
  return (
    <input
      style={{
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        outline: 0,
        borderWidth: 0,
        ...style,
      }}
      className={className}
      type="text"
      value={value}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};
export default TextForm;
