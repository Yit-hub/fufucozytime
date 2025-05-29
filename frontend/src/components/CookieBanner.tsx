import { useEffect, useState } from "react";

const COOKIE_KEY = "cookiesAccepted";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem(COOKIE_KEY);
        if (!accepted) setVisible(true);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem(COOKIE_KEY, "true");
        setVisible(false);
    };

    if (!visible) return null;

return (
  <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:right-4 sm:max-w-md bg-white shadow-lg rounded-2xl p-4 border border-gray-200 z-50 animate-fade-in">
    <div className="flex items-start justify-between gap-4">
      <div className="text-sm text-gray-700">
        <strong>FufuCozyTime</strong> utiliza cookies para mejorar tu experiencia.
        Al continuar navegando, aceptas nuestra política de cookies.
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-gray-400 hover:text-gray-600 transition hover:cursor-pointer"
        aria-label="Cerrar banner de cookies"
      >
        ✕
      </button>
    </div>

    <div className="mt-4 flex flex-col sm:flex-row justify-end gap-2">
      <button
        onClick={() => {
          localStorage.setItem("cookiesAccepted", "false");
          setVisible(false);
        }}
        className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition w-full sm:w-auto hover:cursor-pointer"
      >
        Rechazar cookies
      </button>

      <button
        onClick={acceptCookies}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-green-500 transition w-full sm:w-auto hover:cursor-pointer"
      >
        Aceptar cookies
      </button>
    </div>
  </div>
);

}
