import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = ({ 
  amount = 0.1, 
  once = true,
  animationConfig = { 
    animate: { opacity: 1 },
    initial: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  }
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });

  const animationProps = {
    ref,
    animate: isInView ? animationConfig.animate : animationConfig.initial,
    initial: animationConfig.initial,
    transition: animationConfig.transition
  };

  return animationProps;
};