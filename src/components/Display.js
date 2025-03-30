import React from 'react';

const Display = ({ value, history }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      <div className="text-right text-gray-500 text-sm h-6 overflow-hidden">
        {history}
      </div>
      <div className="text-right text-4xl font-bold">
        {value}
      </div>
    </div>
  );
};

export default Display;