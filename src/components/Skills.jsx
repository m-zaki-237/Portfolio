import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-10 mb-10 text-center text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="relative w-full max-w-md p-6 rounded-2xl border-4 border-neutral-800">
            <SkillBar skill="HTML" percentage="90%" delay={0} />
            <SkillBar skill="CSS" percentage="75%" delay={0.1} />
            <SkillBar skill="Javascript" percentage="82%" delay={0.2} />
            <SkillBar skill="React" percentage="68%" delay={0.3} />
          </div>
        </div>
      </div>
    </>
  );
};

const SkillBar = ({ skill, percentage, delay }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: delay }}
      className="mb-6"
    >
      <div className="flex justify-between text-white mb-2">
        <span>{skill}</span>
        <span>{percentage}</span>
      </div>
      <div className="border-opacity-5 p-1.5 rounded-full backdrop-filter backdrop-blur-lg bg-white bg-opacity-10">
        <motion.div
          whileInView={{ width: percentage }}
          initial={{ width: '0%' }}
          transition={{ duration: 1, delay: delay }}
          className="h-1 bg-purple-800 border border-purple-800 rounded-full shadow-[0_0_5px_rgba(102,51,153,0.6)]"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
