import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProtectedRoute({ children }) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/me', {
      credentials: 'include'
    })
      .then((r) => r.json())
      .then((data) => {
        setAuthorized(data.authorized);
      })
      .catch(() => {
        setAuthorized(false);
      });
  }, []);

  if (authorized === null) {
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

  if (!authorized) {
    return <Navigate to="/" replace />;
  }

  return children;
}