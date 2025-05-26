import React from "react";

const Contact = () => {
    return (
        <section className="bg-white py-16 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Contact Info */}
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
                    <div className="space-y-4 text-lg text-gray-700">
                        <p>
                            📍 <strong>Dirección:</strong><br />
                            Fufu Cozy Time<br />
                            C. Comercio, 6, 41007 Sevilla
                        </p>
                        <p>
                            📅 <strong>Horario:</strong><br />
                            <strong>lunes:</strong> 12:00–22:00<br />
                            <strong>martes:</strong> 12:00–22:00<br />
                            <strong>miércoles:</strong> Cerrado<br />
                            <strong>jueves:</strong> 12:00–22:00<br />
                            <strong>viernes:</strong> 12:00–22:00<br />
                            <strong>sábado:</strong> 12:00–22:00<br />
                            <strong>domingo:</strong> 13:00–22:00
                        </p>
                        <p>
                            ☎️ <strong>Teléfono:</strong> <br />
                            <a href="tel:+34624400608" className="text-blue-600 hover:underline">624 40 06 08</a>
                        </p>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        title="Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7691044331723!2d-5.949468992158072!3d37.39017929217734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f148c9ce69b%3A0x65adfebeb8c8a5c0!2sFufu%20Cozy%20Time!5e0!3m2!1ses!2ses!4v1748250235043!5m2!1ses!2ses"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
