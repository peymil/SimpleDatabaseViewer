import React from 'react';

interface TextFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const TextForm = ({ value, onChange, style }: TextFormProps) => {
  return (
    <>
      <input
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          outline: 0,
          borderWidth: 0,
          ...style,
        }}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default TextForm;
