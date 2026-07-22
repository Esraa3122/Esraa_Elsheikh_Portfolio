import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Trophy, ExternalLink } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Cross Platform Mobile Application (Flutter) Intern',
    organization: 'iGenTech',
    location: 'Giza, Sheikh Zayed, Egypt',
    period: 'Apr 2026 - Jun 2026',
    description: 'Built a full chat app: private and group messaging, stories, real-time delivery. Location sharing, contact sharing, media, and push notifications. Firestore + Firebase Auth + Cubit on top of Clean Architecture and SOLID.',
    icon: Briefcase,
    certificateUrl: null, 
  },
    {
    type: 'work',
    title: 'Front-End & Cross-Platform Development',
    organization: 'ITI (Information Technology Institute)',
    location: 'Zagazig, Egypt',
    period: 'Feb 2025 - Aug 2025',
    description: 'Intensive training in front-end web development and cross-platform mobile development, covering React.js, Flutter, and modern development practices.',
    icon: Briefcase,
    certificateUrl: 'https://drive.google.com/file/d/1ZcP7uY0op2zkyDxKsgu8Pu_xjE7FdJF3/view?usp=sharing', 
  },
  {
    type: 'work',
    title: 'Mobile App Development Intern',
    organization: 'NTI (National Telecommunication Institute)',
    location: 'Mansoura, Egypt',
    period: 'Dec 2024 - Jan 2025',
    description: 'Focused on mobile application development using Flutter framework, building cross-platform applications with clean architecture.',
    icon: Briefcase,
    certificateUrl: 'https://drive.google.com/file/d/1GznkS4qlR1ojil9WZlEBStxod_wSKs_R/view?usp=sharing', 
  },
];

const education = [
  {
    type: 'education',
    title: 'B.Sc. in Statistics & Computer Science',
    organization: 'Mansoura University',
    location: 'Mansoura, Egypt',
    period: '2021 - 2024',
    description: 'Bachelor\'s degree combining statistical analysis with computer science fundamentals, including algorithms, data structures, and software engineering.',
    icon: GraduationCap,
    certificateUrl: 'https://drive.google.com/file/d/1sqaUbDV3iLzUlEeORpHRYHV_h7BgRuGM/view?usp=sharing',
  },
  {
    type: 'achievement',
    title: 'ICPC Competitive Programming',
    organization: 'International Collegiate Programming Contest',
    location: 'Alexandria, Egypt',
    period: 'Participant',
    description: 'Participated in ICPC competitive programming contests, developing strong problem-solving skills and algorithmic thinking.',
    icon: Trophy,
    certificateUrl: 'https://drive.google.com/drive/folders/1-0vlYn91UmpwvQTCmrk9r_vD-osBsb5b?usp=sharing',
  },
];

const allItems = [...experiences, ...education];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative bg-secondary/20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in tech education and professional development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {allItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 ring-4 ring-background" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'}`}>
                  {item.certificateUrl ? (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass-card p-5 md:p-6 rounded-2xl hover:bg-secondary/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group/card"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className={`p-2 rounded-xl ${
                          item.type === 'work' ? 'bg-primary/10 text-primary' :
                          item.type === 'education' ? 'bg-accent/10 text-accent' :
                          'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs md:text-sm text-primary font-medium">{item.period}</span>
                          <h3 className="text-base md:text-lg font-semibold text-foreground mt-1 group-hover/card:text-primary transition-colors flex items-center gap-2">
                            {item.title}
                            <ExternalLink size={14} className="opacity-0 group-hover/card:opacity-100 transition-opacity" />
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.organization}
                            {item.location && ` • ${item.location}`}
                          </p>
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="glass-card p-5 md:p-6 rounded-2xl hover:bg-secondary/30 transition-colors">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className={`p-2 rounded-xl ${
                          item.type === 'work' ? 'bg-primary/10 text-primary' :
                          item.type === 'education' ? 'bg-accent/10 text-accent' :
                          'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs md:text-sm text-primary font-medium">{item.period}</span>
                          <h3 className="text-base md:text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                          <p className="text-muted-foreground text-xs md:text-sm">
                            {item.organization}
                            {item.location && ` • ${item.location}`}
                          </p>
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
