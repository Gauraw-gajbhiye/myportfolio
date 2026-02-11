import { motion } from "framer-motion";
import { personalInfo, about } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              {about.intro.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-slate-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Achievements
                </h3>
                <ul className="space-y-3">
                  {about.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-400 mr-3">▹</span>
                      <span className="text-slate-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Location</p>
                    <p className="text-slate-200 font-medium">
                      {personalInfo.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Experience</p>
                    <p className="text-slate-200 font-medium">
                      {personalInfo.experience}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Education</p>
                    <p className="text-slate-200 font-medium">
                      {personalInfo.education.degree}
                    </p>
                    <p className="text-sm text-slate-400">
                      {personalInfo.education.university}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Current Role</p>
                    <p className="text-slate-200 font-medium">
                      {personalInfo.currentRole.title}
                    </p>
                    <p className="text-sm text-slate-400">
                      {personalInfo.currentRole.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
