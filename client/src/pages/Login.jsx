import React, { useState } from 'react';
import Password from '../components/Password';
import './Login.css';
import Typewriter from '../components/Typewriter';

function Login() {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <div className="w-20 h-20 border-8 border-[#2D77D6]/20 border-t-[#2D77D6] rounded-full animate-spin"></div>

        <h2 className="mt-8 text-5xl font-black text-[#2D77D6] animate-pulse">
          ИНИЦИАЛИЗАЦИЯ ОПЕРАТОРА
        </h2>

        <p className="mt-2 text-xl text-gray-500">
          Подключение к базе знаний...
        </p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col font-inter max-w-[1480px] m-auto">
      <div className="w-2/3">
        <div className="font-bold text-7xl mb-20">
          <h1 className="mb-4">ПРИВЕТСТВУЮ,</h1>
          <div className="w-max">
            {/* <h1 className="text-[#2D77D6] typewriter-init animate-typewriter">ОПЕРАТОР🧑‍💻💫</h1> */}
            <h1 className="text-[#2D77D6]">
              <Typewriter text="ОПЕРАТОР👋💫" speed={150} />
            </h1>
          </div>
        </div>
        {/* <p className="font-bold mb-4">введи код доступа</p> */}
        {errorMessage ?
          <p className="text-red-700 font-bold mb-4">
            {errorMessage}
          </p>
          :
          <p className="font-bold mb-4">введи код доступа</p>
        }
        <ul className="flex justify-between">
          <Password setLoading={setLoading} setErrorMessage={setErrorMessage} />
        </ul>
      </div>

      <div class="waves">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0" x2="1">
              <stop offset="0%" stop-color="#0B6E8E" stop-opacity="0.55" />
              <stop offset="50%" stop-color="#168AAD" stop-opacity="0.45" />
              <stop offset="100%" stop-color="#34B3D8" stop-opacity="0.25" />
            </linearGradient>

            <linearGradient id="waveGradient2" x1="0" x2="1">
              <stop offset="0%" stop-color="#063970" stop-opacity="0.45" />
              <stop offset="50%" stop-color="#0E7490" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.2" />
            </linearGradient>
          </defs>

          <path class="wave wave1"
            fill="url(#waveGradient1)"
            d="M0,160 C360,260 720,60 1440,160 V500 H0 Z">
          </path>

          <path class="wave wave2"
            fill="url(#waveGradient2)"
            d="M0,220 C360,120 720,300 1440,200 V500 H0 Z">
          </path>

          <path class="wave wave3"
            fill="#075985"
            opacity="0.25"
            d="M0,180 C400,320 900,40 1440,180 V500 H0 Z">
          </path>
        </svg>
      </div>
    </div>
  );
}

export default Login;
