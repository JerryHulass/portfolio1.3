import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const BackgroundCellAnimation = () => {
return (
  <div className="relative h-screen bg-slate-950  overflow-hidden">
    <BackgroundCellCore />
    <div className="relative z-50 mt-40 flex flex-col items-center font-anton">
      <h1 className="md:text-7xl lg:text-8xl md:pl-10 xl:pl-12 xl:pt-10 font-medium text-center  text-[#B22222]">
        JAVASCRIPT
      </h1>
      <h1 className="md:text-7xl lg:text-8xl text-6xl md:pl-36 pl-14 pt-10 font-medium text-center text-white">
        DEVELOPER
      </h1>
      <h1 className="md:text-7xl lg:text-8xl text-6xl md:pl-32 pl-12 pt-10  font-medium text-center text-[#B22222]">
        Hi! I'm Jeremy Hulass.
      </h1>
      <p className="md:text-2xl text-xl w-1/2 h-20 font-sans text-center text-white">
        A detail-oriented JavaScript developer with a strong focus on building scalable and maintainable web applications that deliver responsive, interactive, and visually refined user experiences.
      </p>

    </div>
  </div>
);
};

const BackgroundCellCore = () => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const ref = useRef(null);

const handleMouseMove = (event) => {
  const rect = ref.current && ref.current.getBoundingClientRect();
  setMousePosition({
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  });
};

const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 h-full"
    >
      <div className="absolute h-[80rem] w-full pointer-events-none -bottom-2 z-40 bg-gray-700 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

      <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
    </div>
  );
};

const Pattern = ({
  className,
  cellClassName,
}) => {
  const x = new Array(55).fill(0);
  const y = new Array(35).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={`flex flex-row absolute inset-0 h-full w-full z-30 ${className || ''}`}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={`bg-transparent border-l border-b border-neutral-600 ${cellClassName || ''}`}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                 className="bg-[rgba(14,164,233,0.89)] h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};


