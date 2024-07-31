import React, { useState, ChangeEvent } from 'react';

interface MyInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const MyInput = ({ placeholder = 'Enter text...', value: propValue, onChange }: MyInputProps) => {
  const [value, setValue] = useState<string>(propValue || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '16px',
      }}
    />
  );
};

export default MyInput;
