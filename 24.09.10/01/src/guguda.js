import React, { useState } from "react";

const guguda = () => {

  const[firstNumber, setfirstNumber] = 
  useState Math.floor((Math.random()*9)+1);

  return (
    <div>
      <p>
        {firstNumber} * {secondNumber}?
      </p>
      <input
        type="number"
        value={userawnser}
        onChange={(e) => {
          setUserawnser(e.target.value);
        }}
        placeholder="정답을입력하세요"
      />
      <p>{resutl}</p>
    </div>
  );
};

export default guguda;
