import { useState, useEffect } from "react";
import { pinkBlobOne, pinkBlobTwo } from "./paths";
import { motion, useMotionValue, animate } from "framer-motion";
import { useFlubber } from "./flubber";

const paths = [pinkBlobOne, pinkBlobTwo];

export const DecorativeBlob = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <svg width="400" height="400">
      <g>
        <motion.path fill={"#f1a1e7"} d={path} />
      </g>
    </svg>
  );
};
