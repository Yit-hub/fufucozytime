import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text: string;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ text, to }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => navigate(to)}
        className="bg-green-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
