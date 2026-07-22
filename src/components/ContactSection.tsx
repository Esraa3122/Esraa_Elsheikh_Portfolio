import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mykzyprj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/israa-al-sheikh-90baba231',
      icon: Linkedin,
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Esraa3122',
      icon: Github,
      color: 'hover:text-foreground',
    },
    {
      name: 'Email',
      url: 'mailto:esraaelsheikh52@gmail.com',
      icon: Mail,
      color: 'hover:text-accent',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Whether you need a Flutter app or want to collaborate 
                on something exciting, let's talk!
              </p>

              <div className="space-y-3 md:space-y-4">
                <a 
                  href="mailto:esraaelsheikh52@gmail.com" 
                  className="flex items-center gap-3 md:gap-4 text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 rounded-lg min-h-[48px]"
                >
                  <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 text-primary">
                    <Mail size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Email</p>
                    <span className="text-foreground text-sm md:text-base">
                      esraaelsheikh52@gmail.com
                    </span>
                  </div>
                </a>

                <a 
                  href="tel:+201006933534" 
                  className="flex items-center gap-3 md:gap-4 text-muted-foreground hover:text-foreground transition-colors p-2 -m-2 rounded-lg min-h-[48px]"
                >
                  <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 text-primary">
                    <Phone size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Phone</p>
                    <span className="text-foreground text-sm md:text-base">01006933534</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 md:gap-4 text-muted-foreground p-2 -m-2">
                  <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 text-primary">
                    <MapPin size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground text-sm md:text-base">Egypt</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-accent font-medium">✨ Available for freelance projects</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 md:p-4 glass-card rounded-2xl text-muted-foreground ${link.color} transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center`}
                  aria-label={link.name}
                >
                  <link.icon size={22} className="md:w-6 md:h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all min-h-[48px] text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all min-h-[48px] text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 md:py-3.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-base"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary-gradient py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
