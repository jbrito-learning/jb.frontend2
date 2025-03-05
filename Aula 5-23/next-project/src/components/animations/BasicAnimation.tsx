"use client";

import { motion } from "framer-motion";

export default function BasicAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Estado inicial
      animate={{ opacity: 1, x: 0 }} // Animação final
      transition={{ duration: 1 }} // Duração da transição
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}
