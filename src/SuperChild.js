import React, { useContext } from 'react';
import { GlobalInfo } from './App';

function SuperChild() {
  const { appColor, getDay } = useContext(GlobalInfo);
  const day = "Sunday";

  const handleClick = () => {
    getDay(day);
  };

  return (
    <div>
      <h1>SuperChild component</h1>
      <button onClick={handleClick}>Get Day</button>
    </div>
  );
}

export default SuperChild;
