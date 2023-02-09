import React from 'react';

const InputRange = ({ getBackgroundSize, setInputValue }) => {
  return (
    <input
      type="range"
      min={1}
      max={5}
      step={1}
      defaultValue={3}
      onChange={(e) => setInputValue(e.target.value)}
      className="w-full h-2 bg-neutralAGrayishBlue bg-no-repeat bg-gradient-to-r from-primarySoftCyan to-primarySoftCyan  rounded-lg appearance-none cursor-pointer slider"
      style={getBackgroundSize()}
    />
  );
};

export default InputRange;
