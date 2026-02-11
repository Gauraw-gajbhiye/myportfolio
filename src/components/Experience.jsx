import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8 mt-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-cyan-500/30"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-[9px]"></div>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                      <p className="text-sm text-slate-400">{exp.location}</p>
                    </div>
                    <span className="text-sm text-slate-400 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <span className="text-cyan-400 mr-3">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
