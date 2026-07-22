import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Globe, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-primary to-accent',
    skills: ['Flutter', 'Dart', 'OOP', 'BLoC', 'Cubit', 'MVVM', 'Clean Architecture'],
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    color: 'from-accent to-primary',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Material UI',],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-primary to-cyan-400',
    skills: ['Git', 'GitHub', 'Postman', 'Agile', 'Scrum', 'VS Code', 'Android Studio'],
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'from-cyan-400 to-blue-500',
    skills: ['Firebase', 'Cloud Firestore', 'Firebase Auth', 'FCM', 'REST API', 'Cloudinary', 'Paymob', 'GraphQL', 'Node.js', 'Express.js', 'MongoDB'],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-secondary/20">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern mobile and web applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-5 md:p-6 rounded-3xl group"
            >
              <div className="flex items-center gap-2.5 md:gap-3 mb-4 md:mb-6">
                <div className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${category.color} text-primary-foreground`}>
                  <category.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-secondary text-xs md:text-sm text-foreground font-medium 
                             hover:bg-primary hover:text-primary-foreground transition-colors cursor-default min-h-[36px] flex items-center"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
