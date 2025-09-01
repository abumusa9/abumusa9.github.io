import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'scholarshipasa9@gmail.com',
      href: 'mailto:scholarshipasa9@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kano, Nigeria',
      href: null,
      description: 'Open to remote work'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 (814) 078-0307',
      href: 'tel:+2348140780307',
      description: 'Available during business hours'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/abdussalam-shehu-0750061b3',
      color: 'hover:text-blue-600',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/abumusa9',
      color: 'hover:text-gray-800 dark:hover:text-gray-200',
      description: 'Code repositories'
    },
    /*{
      name: 'Google Scholar',
      icon: ExternalLink,
      href: 'https://scholar.google.com/citations?user=scholarshipasa9',
      color: 'hover:text-blue-500',
      description: 'Research publications'
    }*/
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic spam check
    const honeypot = e.target.honeypot?.value;
      if (honeypot) {
        alert("Spam detected.");
        setIsSubmitting(false);
        return;
      }

      // reCAPTCHA validation
      if (!formData.captcha) {
        alert("Please complete the CAPTCHA.");
        setIsSubmitting(false);
        return;
      }

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            'g-recaptcha-response': formData.captcha,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        alert("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '', captcha: '' });
      } catch (error) {
        console.error('Email send failed:', error);
        alert("There was an error. Please try again later.");
      }

      setIsSubmitting(false);
    };



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborations, or innovative AI projects. 
              Let's connect and explore how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking for an AI engineer, want to collaborate on research, 
                  or have an exciting project in mind, I'd love to hear from you. I'm currently 
                  open to new opportunities and always interested in discussing innovative AI applications.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">{info.label}</h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-primary hover:text-primary/80 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">{info.value}</span>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-muted rounded-lg ${link.color} transition-all duration-200 hover:bg-accent group`}
                        title={link.description}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-accent/30 p-6 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-medium text-foreground">Currently Available</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm actively seeking new opportunities in AI/ML engineering, research positions, 
                  and exciting collaborations. Open to full-time, contract, and consulting work.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-background p-8 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                  {/* Honeypot field (invisible to users) */}
                  <input
                    type="text"
                    name="honeypot"
                    style={{ display: 'none' }}
                    onChange={() => {}}
                  />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email *</label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject *</label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="e.g. Research, Fulltime Job or Freelance Project Inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message *</label>
        <Textarea
          id="message"
          name="message"
          required
          draggable={false}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="How can I help you?"
          className="w-full resize-none"
          rows={6}
        />
      </div>

      {/* reCAPTCHA */}
      <div className="flex justify-center">
        <div className="my-4">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(value) => setFormData(prev => ({ ...prev, captcha: value }))}
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>


                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours. For urgent matters, 
                    feel free to reach out via{' '}
                    <a href="mailto:scholarshipasa9@gmail.com" className="text-primary hover:text-primary/80">
                      email
                    </a>{' '}
                    directly.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

