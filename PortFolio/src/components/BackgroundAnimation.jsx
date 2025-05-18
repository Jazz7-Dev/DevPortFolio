import React from 'react';
import { motion } from 'framer-motion';

const starVariants = {
  twinkle: {
    opacity: [0.2, 1, 0.2],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  },
};

const stars = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
}));

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.y}%`,
            left: `${star.x}%`,
            filter: 'drop-shadow(0 0 2px white)',
          }}
          variants={starVariants}
          initial="twinkle"
          animate="twinkle"
          transition={{ delay: star.delay }}
        />
      ))}
    </div>
  );
}
