import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Login from './Login';
import SignUp from './SignUp';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: -90 },
    in: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20, 
        duration: 0.8 
      } 
    },
    out: { 
      opacity: 0, 
      scale: 0.8, 
      rotateY: 90,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20, 
        duration: 0.8 
      } 
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 perspective-1000">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-300 opacity-70"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: Math.random() * 2
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.div
            key="login"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Login onToggle={toggleAuth} />
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="absolute inset-0 flex items-center justify-center"
          >
            <SignUp onToggle={toggleAuth} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthContainer;