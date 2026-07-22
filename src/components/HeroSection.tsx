import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { lazy, Suspense } from 'react';

const FlutterLogo3D = lazy(() => import('./FlutterLogo3D'));

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-balance"
            >
              Esraa <span className="gradient-text">Mosad</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-light"
            >
              Flutter Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-xl mb-8 text-base md:text-lg leading-relaxed mx-auto md:mx-0"
            >
              Building high-performance Flutter apps with clean architecture & Firebase
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start mb-8"
            >
              <a
                href="#projects"
                className="btn-primary-gradient px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold min-h-[48px] flex items-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="glass-card px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base font-semibold hover:bg-secondary transition-colors min-h-[48px] flex items-center"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 md:gap-4 justify-center md:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/israa-al-sheikh-90baba231/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-3.5 glass-card rounded-xl hover:bg-primary/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Esraa3122"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-3.5 glass-card rounded-xl hover:bg-primary/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:esraaelsheikh52@gmail.com"
                className="p-3 md:p-3.5 glass-card rounded-xl hover:bg-primary/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[300px] md:h-[350px] lg:h-[500px] relative hidden md:block"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-2xl animate-pulse" />
                </div>
              }
            >
              <FlutterLogo3D />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors z-50 pointer-events-auto cursor-pointer"
      >
        <span className="text-sm">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
