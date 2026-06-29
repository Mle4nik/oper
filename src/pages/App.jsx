import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Password from '../components/Password';

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col font-inter">
      <div className="w-2/3">
        <div className="font-bold text-7xl mb-20">
          <h1 className="mb-4">ПРИВЕТСТВУЮ,</h1>
          <div className="w-max">
            <h1 className="text-[#2D77D6] typewriter-init animate-typewriter">ОПЕРАТОР👨‍💻</h1>
          </div>
        </div>
        <p className="font-bold mb-4">введи код доступа</p>
        <ul className="flex justify-between">
          <Password/>
        </ul>
      </div>
    </div>
  );
}

export default App;
