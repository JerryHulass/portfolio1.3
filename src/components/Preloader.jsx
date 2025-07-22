'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const name = 'HULASS';


const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const textControls = useAnimation();
  const panelControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Animate text in
      await textControls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.05, duration: 0.2, ease: 'easeInOut' },
      }));

      // Animate panels down
      await panelControls.start((i) => ({
        y: '100%',
        transition: { delay: 1 + i * 0.1, duration: 0.5, ease: 'easeInOut' },
      }));

      // Fade out text
      await textControls.start({
        opacity: 0,
        transition: { duration: 0.5 },
      });

      // Fade out container
      await containerControls.start({
        opacity: 0,
        transition: { duration: 1 },
      });

      // Hide preloader after animation
      setVisible(false);
    };

    sequence();
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex"
      initial={{ opacity: 1 }}
      animate={containerControls}
    >
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ y: 0 }}
          animate={panelControls}
          className="preloader-item h-full w-[10%] bg-black"
        />
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="name-text flex text-[20vw] lg:text-[200px] font-anton text-center leading-none overflow-hidden text-white">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial={{ y: '100%', opacity: 0 }}
              animate={textControls}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
