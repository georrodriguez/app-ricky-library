import React from 'react';
import Button from 'react-bootstrap/Button';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <Button onClick={onClick} variant="primary">
    {label}
  </Button>
);

export default PrimaryButton;
