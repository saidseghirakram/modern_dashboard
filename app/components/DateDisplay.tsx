'use client';

const DateDisplay = () => {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const year = date.getFullYear().toString().slice(-2);
  
  return (
    <div className="font-mono text-[#333333]">
      <span>{month}</span>
      <span className="ml-1">'{year}</span>
    </div>
  );
};

export default DateDisplay; 