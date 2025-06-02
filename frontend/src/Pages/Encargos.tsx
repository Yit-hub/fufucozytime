import OrderForm from "../components/OrderForm";

export const Encargos = () => {
  return (
    <>
      <section className="min-h-screen bg-white text-black flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-start">
          {/* Texto informativo */}
          <div className="space-y-6 text-sm leading-relaxed">
            <hr className="border-gray-400" />
            <p>
              Fufu Cozy Time no realiza deliveries de los encargos, una vez 
              realizado un encargo nos pondremos en contacto con usted, y
              dependiendo del tipo de encargo y se acordará la fecha junto al
              cliente
            </p>
            <p>
              Para más información de sobre responsabilidades, términos legales, condiciones
              del encargo o políticas de privacidad lea nuestra página de política y privacidad
            </p>
            <p>
               Nuestros servicios se enfocan en proporcionar el mejor producto a nuestros clientes
               para más información pongase en contacto con nostros.
            </p>
            <hr className="border-gray-400" />
          </div>

          {/* Formulario */}
          <div>
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
};
