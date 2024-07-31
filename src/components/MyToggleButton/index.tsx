import React, { useState } from 'react';

interface ToggleButtonProps {
  onChange?: (value: boolean) => void;
  initialState?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onChange, initialState = false }) => {
  const [isOn, setIsOn] = useState<boolean>(initialState);

  const handleClick = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: isOn ? '#28a745' : '#dc3545',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
      }}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default ToggleButton;
