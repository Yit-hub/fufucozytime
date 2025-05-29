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
              Para más información de nuestros servicios lea nuestra página de 
              política y privacidad
            </p>
            <p>
              More recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum. Aquí podrías incluir
              información sobre responsabilidades, términos legales, condiciones
              del encargo o políticas de privacidad.
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
