import React from 'react';

const Button = ({ label, onClick, type = 'default' }) => {
  const buttonStyles = {
    default: 'bg-gray-200 hover:bg-gray-300 text-black',
    operator: 'bg-orange-500 text-white hover:bg-orange-600',
    clear: 'bg-red-500 text-white hover:bg-red-600',
    equal: 'bg-blue-500 text-white hover:bg-blue-600'
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${buttonStyles[type]} 
        py-4 rounded-lg 
        text-xl font-bold 
        transition-all duration-200 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-300
      `}
    >
      {label}
    </button>
  );
};

export default Button;