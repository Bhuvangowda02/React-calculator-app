import { useState } from 'react';
import { evaluate } from 'mathjs'; 
import './Calculator.css';

const buttons = [
  'C', '⌫', '/', '*',
  '7', '8', '9', '-',
  '4', '5', '6', '+',
  '1', '2', '3', '=',
  '0', '.',
];

const Calculator = () => {
  const [input, setInput] = useState<string>('');

  const handleClick = (value: string) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '⌫') {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = evaluate(input); 
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <input className="display" type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button key={i} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;