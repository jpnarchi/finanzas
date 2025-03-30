import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState('');
  const [lastOperation, setLastOperation] = useState(null);

  const handleNumber = (number) => {
    setDisplay(
      display === '0' ? number : display + number
    );
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (operator) => {
    setHistory(`${display} ${operator}`);
    setLastOperation(operator);
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const result = eval(`${history.replace(/[^0-9+\-*/. ]/g, '')} ${display}`);
      setHistory(`${history} ${display} =`);
      setDisplay(String(result));
      setLastOperation(null);
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setHistory('');
    setLastOperation(null);
  };

  const percentageCalculation = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const toggleSign = () => {
    setDisplay(String(-1 * parseFloat(display)));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl w-96">
      <Display value={display} history={history} />
      <div className="grid grid-cols-4 gap-3">
        <Button label="C" onClick={clearDisplay} type="clear" />
        <Button label="+/-" onClick={toggleSign} />
        <Button label="%" onClick={percentageCalculation} />
        <Button label="÷" onClick={() => handleOperator('/')} type="operator" />

        <Button label="7" onClick={() => handleNumber('7')} />
        <Button label="8" onClick={() => handleNumber('8')} />
        <Button label="9" onClick={() => handleNumber('9')} />
        <Button label="×" onClick={() => handleOperator('*')} type="operator" />

        <Button label="4" onClick={() => handleNumber('4')} />
        <Button label="5" onClick={() => handleNumber('5')} />
        <Button label="6" onClick={() => handleNumber('6')} />
        <Button label="-" onClick={() => handleOperator('-')} type="operator" />

        <Button label="1" onClick={() => handleNumber('1')} />
        <Button label="2" onClick={() => handleNumber('2')} />
        <Button label="3" onClick={() => handleNumber('3')} />
        <Button label="+" onClick={() => handleOperator('+')} type="operator" />

        <Button label="0" onClick={() => handleNumber('0')} className="col-span-2" />
        <Button label="." onClick={handleDecimal} />
        <Button label="=" onClick={calculate} type="equal" />
      </div>
    </div>
  );
};

export default Calculator;