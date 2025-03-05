import BasicAnimation from "@/components/animations/BasicAnimation";
import SpringAnimation from "@/components/animations/SpringAnimation";
import ClickTapAnimation from "@/components/animations/ClickTapAnimation";
import SequenceAnimation from "@/components/animations/SequenceAnimation";
const AnimationsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <BasicAnimation />
      <SpringAnimation />
      <ClickTapAnimation />
      <SequenceAnimation />
    </div>
  );
};

export default AnimationsPage;
