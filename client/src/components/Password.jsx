import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Password.css';

const Password = ({ setLoading, setErrorMessage }) => {

  const [error, setError] = useState(false);

  const length = 6;
  const [values, setValues] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const focusAt = (i) => {
    const el = inputsRef.current[i];
    if (el) {
      el.focus();
      el.select();
    }
  };

  const [checking, setChecking] = useState(false);

  useEffect(() => {

    const checkPassword = async () => {
      if (checking) return;
      if (!values.every((v) => v !== '')) return;

      setChecking(true);

      const userPass = values.join('');

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/login`,
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              password: userPass
            })
          }
        );

        const data = await response.json();


        if (response.status === 429) {

          setError(true);

          setErrorMessage(
            "Слишком много попыток. Попробуйте позже."
          );

          setChecking(false);

          return;
        }


        if (response.status === 401) {

          setError(true);

          setErrorMessage(
            `Неверный код. Осталось попыток: ${data.remaining}`
          );


          setTimeout(() => {

            setValues(Array(length).fill(""));

            setError(false);

            setChecking(false);

            focusAt(0);

          }, 1500);


          return;
        }

        if (data.success) {

          setLoading(true);

          setTimeout(() => {
            navigate('/docs');
          }, 2000);

          return;
        }

      } catch (err) {
        console.error(err);
        setChecking(false);
      }
    };

    checkPassword();

  }, [values, checking, navigate, setLoading, setErrorMessage]);

  const handleChange = (e, index) => {
    let val = e.target.value.replace(/\D/g, ''); // только цифры
    if (val.length > 1) val = val.slice(-1); // берем последнюю, если вдруг вводят быстро

    // обновляем state
    setValues((prev) => {
      const next = [...prev];
      next[index] = val;
      return next;
    });

    // фокусируем следующий после рендера
    if (val && index < length - 1) {
      requestAnimationFrame(() => focusAt(index + 1));
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key.length === 1 &&
      !/[0-9]/.test(e.key)
    ) {
      e.preventDefault();
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();

      // если текущая пустая — просто идём влево
      if (!values[index] && index > 0) {
        requestAnimationFrame(() => focusAt(index - 1));
        return;
      }

      // если есть символ — удаляем и сдвигаем
      if (values[index]) {
        setValues((prev) => {
          const next = [...prev];
          next.splice(index, 1);
          next.push('');
          return next;
        });

        requestAnimationFrame(() => {
          focusAt(index === 0 ? 0 : index - 1);
        });

        return;
      }
    }

    // стрелки
    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      focusAt(index - 1);
    }
    if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      focusAt(index + 1);
    }
  };

  const handlePaste = (e, index) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('Text').replace(/\D/g, '');
    if (!paste) return;

    const chunk = paste.split('').slice(0, length - index);
    setValues((prev) => {
      const next = [...prev];
      for (let i = 0; i < chunk.length; i++) next[index + i] = chunk[i];
      return next;
    });

    // фокусируем следующую ячейку после вставки (или последнюю)
    requestAnimationFrame(() => focusAt(Math.min(length - 1, index + chunk.length)));
  };

  const Div = ({ index }) => (
    <li
      // className="w-30 h-30 rounded-xl border-2 border-[#2D77D6]"
      className={`w-30 h-30 rounded-xl border-2 border-[#2D77D6] ${error ? 'border-red-700' : ''}`}
    >
      <input
        ref={(el) => (inputsRef.current[index] = el)}
        value={values[index]}
        onChange={(e) => handleChange(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        onPaste={(e) => handlePaste(e, index)}
        onFocus={(e) => e.target.select()}
        // className="w-full h-full outline-none text-center text-6xl font-bold text-[#2D77D6]"
        className={`w-full h-full outline-none text-center text-6xl font-bold text-[#2D77D6] ${error ? 'text-red-700' : ''}`}
        maxLength={1}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
      />
    </li>
  );

  return (
    <>
      <div className={error ? 'shake' : ''}>
        <ul className="flex justify-between gap-13">
          {Array.from({ length }).map((_, i) => (
            <Div key={i} index={i} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Password;
