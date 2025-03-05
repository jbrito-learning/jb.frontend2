import BasicAnimation from "@/components/animations/BasicAnimation";
import SpringAnimation from "@/components/animations/SpringAnimation";
import ClickTapAnimation from "@/components/animations/ClickTapAnimation";
import SequenceAnimation from "@/components/animations/SequenceAnimation";
import ScrollAnimation from "@/components/animations/ScrollAnimation";
import { motion } from "framer-motion";
const AnimationsPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10">
        <motion.div>
          <BasicAnimation />
        </motion.div>
        <SpringAnimation />
        <ClickTapAnimation />
        <SequenceAnimation />
      </div>
      <ScrollAnimation />
    </>
  );
};

export default AnimationsPage;
