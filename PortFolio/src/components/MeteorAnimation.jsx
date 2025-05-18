import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MeteorShower = () => {
  // Configuration constants
  const METEOR_COUNT = 15;
  const MIN_DURATION = 2.5;
  const DURATION_VARIATION = 1.5;
  const MIN_SIZE = 0.5;
  const SIZE_VARIATION = 1.5;
  const MAX_DELAY = 5;
  const COLORS = [
    'rgba(255, 255, 255, 0.9)',
    'rgba(100, 200, 255, 0.8)',
    'rgba(200, 150, 255, 0.8)'
  ];

  // State for window dimensions
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate meteor variants
  const createMeteorVariants = (meteor) => ({
    hidden: {
      x: meteor.startX * windowSize.width / 100,
      y: meteor.startY * windowSize.height / 100,
      opacity: 0
    },
    visible: {
      x: [
        meteor.startX * windowSize.width / 100,
        meteor.startX * windowSize.width / 100 + windowSize.width * 0.5
      ],
      y: [
        meteor.startY * windowSize.height / 100,
        meteor.startY * windowSize.height / 100 + windowSize.height
      ],
      opacity: [1, 0],
      rotate: [meteor.rotation, meteor.rotation + 45],
      transition: {
        duration: meteor.duration,
        repeat: Infinity,
        repeatDelay: meteor.delay,
        ease: "linear"
      }
    }
  });

  // Generate meteor data
  const meteors = useMemo(() => {
    return Array.from({ length: METEOR_COUNT }).map((_, i) => ({
      id: i,
      size: MIN_SIZE + Math.random() * SIZE_VARIATION,
      startX: Math.random() * 100,
      startY: -10 - Math.random() * 20, // Start above the viewport
      delay: Math.random() * MAX_DELAY,
      duration: MIN_DURATION + Math.random() * DURATION_VARIATION,
      rotation: 30 + Math.random() * 30,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {meteors.map((meteor) => (
        <motion.div
          key={`meteor-${meteor.id}`}
          className="absolute"
          initial="hidden"
          animate="visible"
          variants={createMeteorVariants(meteor)}
          style={{
            width: `${meteor.size * 30}px`,
            height: `${meteor.size}px`,
            background: `linear-gradient(90deg, ${meteor.color}, transparent)`,
            filter: 'blur(0.5px)',
            borderRadius: '50%',
            boxShadow: `
              0 0 3px rgba(255, 255, 255, 0.8),
              0 0 10px rgba(255, 255, 255, 0.6),
              0 0 15px rgba(100, 150, 255, 0.4)
            `,
            willChange: 'transform, opacity',
            transformOrigin: 'left center'
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(MeteorShower);