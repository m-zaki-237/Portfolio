import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/profile1.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const useTypingEffect = (text, speed, startTyping) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(typingTimeout);
    }
  }, [startTyping, index, text, speed]);

  return displayedText;
};

const Hero = () => {
  const [startTyping, setStartTyping] = useState(false);
  const typedText = useTypingEffect("Developer", 100, startTyping);

  return (
    <div className="border-b border-neutral-300 dark:border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin tracking-tight whitespace-nowrap lg:mt-16"
            >
              Zakria Awan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
              onAnimationComplete={() => setStartTyping(true)}
            >
              Full Stack{" "}
              <span className="inline-block">{typedText}</span>
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center h-full">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic}
              alt="Profile"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
