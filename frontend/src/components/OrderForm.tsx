import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validación con Zod
const orderSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  email: z.string().email({ message: "Correo inválido" }),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "El teléfono debe contener solo números" })
    .min(9, { message: "El teléfono debe tener al menos 9 dígitos" }),
  comments: z.string().min(1, { message: "Los comentarios son obligatorios" }),
  agreeContact: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar que se te contacte" }),
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar los términos y condiciones" }),
  }),
});

type OrderFormData = z.infer<typeof orderSchema>;

export default function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
    reset,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
    criteriaMode: "all",
  });

const onSubmit = async (data: OrderFormData) => {
  try {
    const response = await fetch("http://localhost:3001/api/encargos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        comments: data.comments,
      }),
    });

    if (!response.ok) throw new Error("Error al registrar encargo");

    console.log("Encargo registrado:", data);
    reset();
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    alert("Hubo un error al registrar el encargo.");
  }
};


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-4 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        Formulario de Encargos
      </h2>

      {isSubmitSuccessful && (
        <p className="text-green-600">Formulario enviado correctamente.</p>
      )}

      {/* Nombre */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre completo *
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Correo electrónico *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Número de teléfono *
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Comentarios */}
      <div>
        <label
          htmlFor="comments"
          className="block text-sm font-medium text-gray-700"
        >
          Comentarios *
        </label>
        <textarea
          id="comments"
          rows={4}
          {...register("comments")}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.comments && (
          <p className="text-red-500 text-sm">{errors.comments.message}</p>
        )}
      </div>

      {/* Checkbox de contacto */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="agreeContact"
          {...register("agreeContact")}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="agreeContact" className="ml-2 text-sm text-gray-700">
          Acepto que se me contacte antes del encargo *
        </label>
      </div>
      {errors.agreeContact && (
        <p className="text-red-500 text-sm">{errors.agreeContact.message}</p>
      )}

      {/* Checkbox de condiciones */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          {...register("terms")}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
          Acepto los términos y condiciones *
        </label>
      </div>
      {errors.terms && (
        <p className="text-red-500 text-sm">{errors.terms.message}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-2 px-4 font-semibold rounded-md shadow ${
          isValid
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Enviar encargo
      </button>
    </form>
  );
}
