import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Users, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    {
      icon: Code,
      number: '15+',
      label: 'Projects',
      description: 'AI/ML projects completed',
    },
    {
      icon: Award,
      number: '9+',
      label: 'Certifications',
      description: 'Professional certifications',
    },
    {
      icon: Zap,
      number: '3+',
      label: 'Years',
      description: 'Experience in AI/ML',
    },
    {
      icon: Users,
      number: '4',
      label: 'Languages',
      description: 'Programming languages',
    },
  ];

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
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating intelligent solutions that make a real-world impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stats Section */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      className="text-center p-6 bg-background rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm font-medium text-primary mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.description}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  I'm a passionate <strong className="text-primary">AI Engineer and Machine Learning Researcher</strong> with 
                  over 3 years of experience developing cutting-edge AI solutions. My expertise spans across 
                  computer vision, natural language processing, and deep learning applications.
                </p>
                
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  Currently pursuing <strong className="text-primary">Certifications, in Data Science and Artificial Intelligence</strong>, I'm dedicated to 
                  pushing the boundaries of AI innovation. I specialize in transforming complex data into 
                  actionable insights and building scalable machine learning systems that solve real-world problems.
                </p>

                <p className="text-foreground/90 mb-6 leading-relaxed">
                  I'm particularly interested in the intersection of AI and healthcare, 
                  autonomous systems, and ethical AI development.
                </p>

                <div className="bg-accent/50 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground/90 italic mb-2">
                    "I believe that the future of AI lies not just in creating intelligent systems, 
                    but in ensuring they augment human capabilities and contribute positively to society."
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">What drives me:</h3>
                  <ul className="space-y-2 text-foreground/90">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Building AI solutions that have measurable real-world impact
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Continuous learning and staying at the forefront of AI research
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Collaborating with diverse teams to solve complex challenges
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Mentoring the next generation of AI practitioners
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

