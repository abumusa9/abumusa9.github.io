import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/abdussalam-shehu-0750061b3',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/abumusa9',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:scholarshipasa9@gmail.com',
      color: 'hover:text-red-600',
    },
    /*{
      name: 'Google Scholar',
      icon: ExternalLink,
      href: 'https://scholar.google.com/citations?user=scholarshipasa9',
      color: 'hover:text-blue-500',
    },*/
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Abdussalam Shehu</h3>
              <p className="text-muted-foreground">
                AI Engineer & Machine Learning Researcher passionate about creating 
                intelligent solutions that drive innovation and make a positive impact.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-muted-foreground ${link.color} transition-colors duration-200 p-2 rounded-full hover:bg-accent`}
                      aria-label={link.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:scholarshipasa9@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    scholarshipasa9@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Location:</strong> Kano, Nigeria
                </p>
                <p className="text-muted-foreground">
                  <strong>Status:</strong>{' '}
                  <span className="text-green-600 font-medium">Available for opportunities</span>
                </p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full sm:w-auto"
                >
                  Let's Work Together
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© Abdussalam Shehu</span>
             {/* <Heart size={16} className="text-red-500" />*/}
              <span></span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {/* Made with React, Tailwind CSS & Framer Motion */}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="flex items-center gap-2"
              >
                <ArrowUp size={16} />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

