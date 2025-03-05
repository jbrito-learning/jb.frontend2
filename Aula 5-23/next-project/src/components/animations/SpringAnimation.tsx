"use client";

import { motion } from "framer-motion";

const SpringAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      className="w-32 h-32 bg-red-500 rounded-lg"
    />
  );
};

export default SpringAnimation;
