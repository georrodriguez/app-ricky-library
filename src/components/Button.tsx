import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
    {label}
  </button>
);

export default Button;
