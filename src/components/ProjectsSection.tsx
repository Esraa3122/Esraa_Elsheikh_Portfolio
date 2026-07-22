import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, ShoppingCart, Droplet, Github, ExternalLink, Cloud, UtensilsCrossed, MessageCircle, BookOpen, CheckSquare } from 'lucide-react';

const projects = [
  {
    title: 'E-Chat',
    subtitle: 'Real-time Messaging',
    description: 'Real-time messaging with stories, groups, and media sharing.',
    icon: MessageCircle,
    accentColor: 'purple',
    tech: ['Flutter', 'Firebase Auth', 'Firestore', 'Real-time Messaging', 'Clean Architecture', 'SOLID Principles'],
    features: ['User authentication', 'Private and group chats', 'Stories with 24h expiry', 'Posts page', 'Location sharing', "contact sharing"],
    githubUrl: 'https://github.com/ZeyadTarek10/chat_app.git',
    demoUrl: 'https://canva.link/qan26gb75dqoksq',
  },
  {
    title: 'Bookly App',
    subtitle: 'Book Marketplace',
    description: 'This application is an app for selling books built with Clean Architecture.',
    icon: BookOpen,
    accentColor: 'brown',
    tech: ['Flutter', 'REST APIs', 'Cubit', 'Clean Architecture'],
    features: ['Book catalog', 'Categories', 'Book details', 'Clean architecture'],
    githubUrl: 'https://github.com/Esraa3122/Bookly-App.git',
    demoUrl: null,
  },
  // {
  //   title: 'Hunger App',
  //   subtitle: 'Burger Ordering',
  //   description: 'A food ordering app for burgers with menu browsing and seamless order flow.',
  //   icon: UtensilsCrossed,
  //   accentColor: 'orange',
  //   tech: ['Flutter', 'Cubit', 'REST APIs', 'UI State Management'],
  //   features: ['Menu browsing', 'Order flow', 'Cart management', 'State management'],
  //   githubUrl: 'https://github.com/Esraa3122/hunger-app',
  //   demoUrl: null,
  // },
  {
    title: 'Topamine',
    subtitle: 'Educational Platform',
    description: 'A comprehensive educational platform with course management, payment integration, real-time notifications, and in-app chat functionality.',
    icon: GraduationCap,
    accentColor: 'blue',
    tech: ['Flutter', 'Firebase', 'Cubit', 'MVVM', 'Payments', 'Push Notifications', 'Chat'],
    features: ['Course management', 'Payment integration', 'Real-time chat', 'Push notifications'],
    githubUrl: 'https://github.com/Esraa3122/topamine',
    demoUrl: 'https://canva.link/reff75yj1c6menx',
  },
  {
    title: 'E-Commerce App',
    subtitle: 'Shopping Platform',
    description: 'Full-featured e-commerce application with product browsing, cart management, and user preferences.',
    icon: ShoppingCart,
    accentColor: 'green',
    tech: ['Flutter', 'REST APIs', 'Cubit', 'Shared Preferences'],
    features: ['Product catalog', 'Shopping cart', 'User authentication', 'Order tracking'],
    githubUrl: 'https://github.com/Esraa3122/e-commerce_Task7_Nti.git',
    demoUrl: null,
  },
  {
    title: 'Life Drop',
    subtitle: 'Blood Donation App',
    description: 'A humanitarian app connecting blood donors with those in need, featuring real-time notifications and multi-language support.',
    icon: Droplet,
    accentColor: 'red',
    tech: ['Flutter', 'Firebase', 'GraphQL', 'Localization'],
    features: ['Donor matching', 'Real-time alerts', 'Location services', 'Multi-language'],
    githubUrl: 'https://github.com/Esraa3122/life_drop.git',
    demoUrl: 'https://canva.link/zl3pp0dgzh2vyyu',
  },
  // {
  //   title: 'Weather App',
  //   subtitle: 'Weather Forecast',
  //   description: 'A modern Flutter Weather Application that provides real-time weather information with a clean UI and dynamic background colors that adapt based on weather conditions.',
  //   icon: Cloud,
  //   accentColor: 'sky',
  //   tech: ['Flutter', 'REST APIs', 'API Integration'],
  //   features: ['Real-time weather', 'Location-based', 'Clean UI'],
  //   githubUrl: 'https://github.com/Esraa3122/Weather_App.git',
  //   demoUrl: 'https://canva.link/affsa26xmqzxkmh',
  // },
  // {
  //   title: 'To-Do List App',
  //   subtitle: 'Task Management',
  //   description: 'A task management application that allows users to add, edit, delete, and mark tasks as completed with a clean and responsive UI.',
  //   icon: CheckSquare,
  //   accentColor: 'teal',
  //   tech: ['Flutter', 'Cubit', 'Local Storage', 'State Management', 'Responsive UI'],
  //   features: ['Add/Edit tasks', 'Mark complete', 'Delete tasks', 'Persistent storage'],
  //   githubUrl: 'https://github.com/Esraa3122/todo-app',
  //   demoUrl: null,
  // },
];

const accentStyles = {
  blue: {
    gradient: 'from-cyan-500 to-blue-600',
    border: 'hover:border-cyan-500/50',
    glow: 'hover:shadow-cyan-500/20',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: 'text-cyan-400',
    bar: 'bg-gradient-to-r from-cyan-500 to-blue-600',
    button: 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 focus-visible:ring-cyan-500',
  },
  green: {
    gradient: 'from-emerald-500 to-orange-500',
    border: 'hover:border-emerald-500/50',
    glow: 'hover:shadow-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'text-emerald-400',
    bar: 'bg-gradient-to-r from-emerald-500 to-orange-500',
    button: 'text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 focus-visible:ring-emerald-500',
  },
  red: {
    gradient: 'from-red-500 to-pink-500',
    border: 'hover:border-red-500/50',
    glow: 'hover:shadow-red-500/20',
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
    icon: 'text-red-400',
    bar: 'bg-gradient-to-r from-red-500 to-pink-500',
    button: 'text-red-400 hover:text-red-300 hover:bg-red-500/10 focus-visible:ring-red-500',
  },
  sky: {
    gradient: 'from-sky-400 to-blue-500',
    border: 'hover:border-sky-500/50',
    glow: 'hover:shadow-sky-500/20',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    icon: 'text-sky-400',
    bar: 'bg-gradient-to-r from-sky-400 to-blue-500',
    button: 'text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 focus-visible:ring-sky-500',
  },
  orange: {
    gradient: 'from-orange-400 to-yellow-500',
    border: 'hover:border-orange-500/50',
    glow: 'hover:shadow-orange-500/20',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    icon: 'text-orange-400',
    bar: 'bg-gradient-to-r from-orange-400 to-yellow-500',
    button: 'text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 focus-visible:ring-orange-500',
  },
  purple: {
    gradient: 'from-purple-500 to-indigo-500',
    border: 'hover:border-purple-500/50',
    glow: 'hover:shadow-purple-500/20',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    icon: 'text-purple-400',
    bar: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    button: 'text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 focus-visible:ring-purple-500',
  },
  brown: {
    gradient: 'from-amber-700 to-green-700',
    border: 'hover:border-amber-600/50',
    glow: 'hover:shadow-amber-600/20',
    badge: 'bg-amber-700/10 text-amber-500 border-amber-600/20',
    icon: 'text-amber-500',
    bar: 'bg-gradient-to-r from-amber-700 to-green-700',
    button: 'text-amber-500 hover:text-amber-400 hover:bg-amber-600/10 focus-visible:ring-amber-500',
  },
  teal: {
    gradient: 'from-teal-400 to-green-500',
    border: 'hover:border-teal-500/50',
    glow: 'hover:shadow-teal-500/20',
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    icon: 'text-teal-400',
    bar: 'bg-gradient-to-r from-teal-400 to-green-500',
    button: 'text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 focus-visible:ring-teal-500',
  },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work demonstrating clean architecture and modern Flutter development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const styles = accentStyles[project.accentColor as keyof typeof accentStyles];
            const Icon = project.icon;
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  group relative bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden
                  border border-border/50 ${styles.border}
                  shadow-lg shadow-background/50 ${styles.glow} hover:shadow-xl
                  transition-all duration-300 hover:-translate-y-1
                `}
              >
                {/* Top accent bar */}
                <div className={`h-1 w-full ${styles.bar}`} />
                
                <div className="p-5 md:p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <div className={`p-2.5 md:p-3 rounded-xl bg-secondary/50 ${styles.icon}`}>
                      <Icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-foreground truncate">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-muted-foreground text-xs flex items-center gap-1.5">
                          <span className={`w-1 h-1 rounded-full ${styles.bar}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium border ${styles.badge}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium text-muted-foreground">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2 border-t border-border/30">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className={`
                        flex items-center gap-1.5 px-3 py-2 md:py-1.5 rounded-lg text-xs font-medium
                        transition-all duration-200 hover:-translate-y-0.5 min-h-[40px] md:min-h-[36px]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                        ${styles.button}
                      `}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className={`
                          flex items-center gap-1.5 px-3 py-2 md:py-1.5 rounded-lg text-xs font-medium
                          transition-all duration-200 hover:-translate-y-0.5 min-h-[40px] md:min-h-[36px]
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                          ${styles.button}
                        `}
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    ) : (
                      <span
                        className="flex items-center gap-1.5 px-3 py-2 md:py-1.5 rounded-lg text-xs font-medium
                          min-h-[40px] md:min-h-[36px] text-muted-foreground/50 cursor-not-allowed"
                        title="Demo coming soon"
                      >
                        <ExternalLink size={14} />
                        <span>Coming Soon</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Esraa3122"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-primary hover:text-primary-foreground bg-primary/10 hover:bg-primary border border-primary/20 hover:border-primary transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Github size={16} />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
