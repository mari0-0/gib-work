import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 0,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: inViewMargin });

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
