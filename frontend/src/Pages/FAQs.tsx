// src/pages/FAQ.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "¿Cuál es el horario de apertura?",
    answer: "Abrimos todos los días menos el miércoles, incluidos fines de semana y festivos. De lunes a sábado de 12:00 a 22:00 y los domingos de 13:00 a 22:00",
  },
  {
    question: "¿Ofrecen opciones sin gluten o veganas?",
    answer: "Sí, contamos con varias opciones sin gluten y veganas. Pregunta a nuestro personal por la carta especial.",
  },
  {
    question: "¿Puedo reservar mesa?",
    answer: "Nuestras instalaciones son muy amplias, y hay mucho espacio. Puedes reservar un área privada en nuestra segunda planta si lo deseas",
  },
  {
    question: "¿Tienen servicio para llevar?",
    answer: "Sí, los productos de nuestra carta están disponibles para llevar mediante Ubereats y Glovo.",
  },  
  {
    question: "¿Puedo hacer un encargo personalizado?",
    answer: "Sí, puedes realizar un encargo personalizado en nuestra área de encargos.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-2xl shadow-md">
            <button
              className="w-full text-left p-4 font-semibold text-lg hover:bg-gray-100 transition"
              onClick={() => toggleIndex(index)}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  className="px-4 pb-4 text-gray-700"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
