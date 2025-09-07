import { useRef } from "react";
import './App.css';

function App() {
  // массив рефов для 6 инпутов
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // разрешаем только одну цифру
    if (/^\d$/.test(value)) {
      e.target.value = value;

      // фокус на следующий инпут
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    } else {
      e.target.value = ""; // не цифра — очищаем
    }
  };

  const handleKeyDown = (e, index) => {
    // если Backspace и инпут пустой — переходим на предыдущий
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const Div = ({ index }) => {
    return (
      <li className="w-30 h-30 rounded-xl border-2 border-[#2D77D6]">
        <input
          ref={(el) => (inputsRef.current[index] = el)}
          className='w-full h-full outline-none text-center text-6xl font-bold text-[#2D77D6]'
          maxLength={1}
          type="text"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      </li>
    );
  };

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
          {[...new Array(6)].map((_, index) => <Div key={index} index={index} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
