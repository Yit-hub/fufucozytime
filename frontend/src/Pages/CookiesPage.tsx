const CookiesPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Política de Cookies</h1>

      <p className="mb-4 text-gray-700">
        En nuestra cafetería, utilizamos cookies con el objetivo de mejorar la experiencia del usuario,
        ofrecer contenidos personalizados y analizar el tráfico de nuestro sitio web.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">¿Qué son las cookies?</h2>
      <p className="mb-4 text-gray-700">
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
        una página web. Sirven para recordar tus preferencias y facilitar futuras visitas.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Tipos de cookies que usamos</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2">
        <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento del sitio web.</li>
        <li><strong>Cookies de análisis:</strong> nos ayudan a entender cómo interactúan los usuarios con la web.</li>
        <li><strong>Cookies de personalización:</strong> permiten recordar tus preferencias (como idioma o ubicación).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Gestión de cookies</h2>
      <p className="mb-4 text-gray-700">
        Puedes configurar tu navegador para aceptar o rechazar cookies, así como eliminar las ya
        almacenadas. Ten en cuenta que bloquear algunas cookies puede afectar al correcto funcionamiento del sitio.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Consentimiento</h2>
      <p className="mb-4 text-gray-700">
        Al continuar navegando por este sitio web, aceptas el uso de cookies de acuerdo con esta política.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Cambios en esta política</h2>
      <p className="mb-4 text-gray-700">
        Nos reservamos el derecho a modificar esta política de cookies en cualquier momento.
        Te recomendamos revisarla periódicamente para estar informado de cualquier cambio.
      </p>

      <p className="text-sm text-gray-500 mt-10">
        Última actualización: 6 de junio de 2025
      </p>
    </div>
  );
};

export default CookiesPolicy;
