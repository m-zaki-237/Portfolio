import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    skills: [
      { skill: "React.js", percentage: "80%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "TypeScript", percentage: "55%" },
      { skill: "Tailwind CSS", percentage: "75%" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { skill: "Node.js", percentage: "75%" },
      { skill: "Express.js", percentage: "70%" },
      { skill: "MongoDB", percentage: "70%" },
      { skill: "RESTful APIs", percentage: "75%" },
    ],
  },
  {
    category: "Other",
    skills: [
      { skill: "Java (OOP)", percentage: "65%" },
      { skill: "Redux Toolkit", percentage: "60%" },
      { skill: "Git & GitHub", percentage: "75%" },
      { skill: "HTML / CSS", percentage: "90%" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="border-b border-neutral-300 dark:border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-10 mb-14 text-center text-4xl text-neutral-900 dark:text-neutral-300"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {SKILL_GROUPS.map((group, gIndex) => (
          <motion.div
            key={gIndex}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: gIndex * 0.15 }}
            className="rounded-2xl border-4 border-neutral-500 dark:border-neutral-800 p-6 bg-neutral-50 dark:bg-neutral-950"
          >
            <h3 className="mb-5 text-center text-lg font-semibold text-purple-800 dark:text-purple-300 tracking-wide uppercase">
              {group.category}
            </h3>
            {group.skills.map((s, i) => (
              <SkillBar key={i} skill={s.skill} percentage={s.percentage} delay={i * 0.1} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SkillBar = ({ skill, percentage, delay }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="mb-5"
    >
      <div className="flex justify-between text-sm text-neutral-900 dark:text-white mb-1.5">
        <span className="font-medium">{skill}</span>
        <span className="text-neutral-600 dark:text-neutral-400">{percentage}</span>
      </div>
      <div className="border-opacity-5 p-1 rounded-full backdrop-filter backdrop-blur-lg bg-neutral-900 bg-opacity-10 dark:bg-white dark:bg-opacity-10">
        <motion.div
          whileInView={{ width: percentage }}
          initial={{ width: "0%" }}
          transition={{ duration: 1, delay }}
          className="h-1.5 bg-purple-800 dark:bg-purple-700 border border-purple-800 rounded-full shadow-[0_0_5px_rgba(102,51,153,0.6)]"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;