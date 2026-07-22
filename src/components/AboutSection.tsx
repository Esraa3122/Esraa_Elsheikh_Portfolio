import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Code2, Layers, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with best practices',
  },
  {
    icon: Layers,
    title: 'Architecture',
    description: 'BLoC, Cubit, MVVM patterns, Clean Architecture for robust apps',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimized apps that load fast and run smooth',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate Flutter developer crafting exceptional mobile experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
                Flutter Developer & Mobile Enthusiast
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated Flutter developer with a strong foundation in mobile app development, 
                clean architecture patterns, and Firebase integration. I specialize in building 
                high-performance, cross-platform applications that deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With expertise in state management solutions like BLoC and Cubit, along with 
                architectural patterns such as MVVM, I create scalable and maintainable codebases. 
                My problem-solving mindset, honed through competitive programming (ICPC), enables me 
                to tackle complex challenges efficiently.
              </p>
              <a
                href="/CV.pdf"
                download="Esraa_Mosad_Flutter_Developer_CV.pdf"
                className="inline-flex items-center gap-2 btn-primary-gradient px-5 md:px-6 py-3 md:py-3.5 rounded-full min-h-[48px]"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-5 md:p-6 rounded-2xl flex items-start gap-3 md:gap-4 group hover:bg-secondary/50 transition-colors"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
