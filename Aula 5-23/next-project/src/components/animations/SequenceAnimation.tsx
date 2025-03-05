"use client";

import { motion } from "framer-motion";

const itemVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const SequenceAnimation = () => {
  return (
    <motion.ul initial="hidden" animate="visible">
      {[1, 2, 3].map((item) => (
        <motion.li
          key={item}
          variants={itemVariant}
          transition={{ duration: 0.5, delay: item * 0.2 }}
          className="p-2 bg-blue-400 my-2 text-white rounded-lg"
        >
          Item {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SequenceAnimation;
