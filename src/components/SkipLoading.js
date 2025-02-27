import React, { useState, useEffect } from 'react';
import './SkipLoading.css'; // Importamos el CSS

const SkipLoading = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Desaparecer después de 1.5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // 1.5 segundos

    return () => clearTimeout(timer); // Limpiar el timer al desmontar
  }, []);

  if (!isVisible) return null; // No renderizar nada si no está visible

  return (
    <div className="skip-loading">
      <div className="coffee-icon">
        {/* SVG simple de una taza de café */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8H19C20.1 8 21 8.9 21 10V11C21 12.1 20.1 13 19 13H18"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 6H18V16C18 17.1 17.1 18 16 18H6C4.9 18 4 17.1 4 16V6Z"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4V6"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4V6"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 4V6"
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p>Cargando...</p>
    </div>
  );
};

export default SkipLoading;