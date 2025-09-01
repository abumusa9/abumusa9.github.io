import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Building, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    /*{
      id: 1,
      type: 'work',
      title: 'Senior AI Engineer',
      company: 'TechCorp AI Solutions',
      location: 'San Francisco, CA',
      period: 'Jan 2024 - Present',
      current: true,
      description: 'Leading the development of next-generation AI products and managing a team of ML engineers.',
      achievements: [
        'Led development of computer vision system that improved accuracy by 25%',
        'Managed team of 5 ML engineers and delivered 3 major product releases',
        'Reduced model inference time by 40% through optimization techniques',
        'Implemented MLOps pipeline that decreased deployment time by 60%'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Kubernetes', 'MLflow'],
      icon: Briefcase
    },
    {
      id: 2,
      type: 'work',
      title: 'Machine Learning Engineer',
      company: 'DataTech Innovations',
      location: 'Remote',
      period: 'Jun 2022 - Dec 2023',
      current: false,
      description: 'Developed and deployed machine learning models for predictive analytics and recommendation systems.',
      achievements: [
        'Built recommendation engine that increased user engagement by 35%',
        'Developed time series forecasting models with 92% accuracy',
        'Optimized data pipeline processing 10M+ records daily',
        'Mentored 3 junior engineers and conducted ML workshops'
      ],
      technologies: ['Python', 'Scikit-learn', 'Apache Spark', 'Docker', 'PostgreSQL', 'Redis'],
      icon: Briefcase
    },
    {
      id: 3,
      type: 'education',
      title: 'Master of Science in Data Science',
      company: 'University of California, San Diego',
      location: 'San Diego, CA',
      period: 'Sep 2024 - Jun 2026 (Expected)',
      current: true,
      description: 'Advanced coursework in machine learning, deep learning, and statistical modeling.',
      achievements: [
        'GPA: 3.9/4.0',
        'Research focus on computer vision and medical AI',
        'Teaching Assistant for Machine Learning course',
        'Published 2 papers in top-tier conferences'
      ],
      technologies: ['Research', 'Deep Learning', 'Computer Vision', 'Statistical Modeling', 'Python', 'R'],
      icon: GraduationCap
    },
    {
      id: 4,
      type: 'work',
      title: 'AI Research Intern',
      company: 'Google Research',
      location: 'Mountain View, CA',
      period: 'Jun 2023 - Aug 2023',
      current: false,
      description: 'Conducted research on large language models and their applications in code generation.',
      achievements: [
        'Developed novel attention mechanism for code understanding',
        'Improved code generation accuracy by 18% on benchmark datasets',
        'Collaborated with senior researchers on 2 research publications',
        'Presented findings at internal research symposium'
      ],
      technologies: ['Python', 'Transformers', 'JAX', 'TensorFlow', 'BERT', 'GPT'],
      icon: Briefcase
    }*/,
    {
      id: 5,
      type: 'work',
      title: 'Data Science Intern',
      company: 'Dabolinux Technology',
      location: 'Kano, Nigeria',
      period: 'Jun 2020 - Aug 2024',
      current: false,
      description: 'Worked on natural language processing projects for Azure Cognitive Services.',
      achievements: [
        'Developed sentiment analysis model with 90% accuracy',
        'Optimized NLP pipeline reducing latency by 30%',
        'Created automated testing framework for ML models',
        /*'Contributed to Azure Cognitive Services documentation'*/
      ],
      technologies: ['Python', 'Azure', 'BERT', 'PyTorch', 'Docker', 'Azure DevOps'],
      icon: Briefcase
    },
    {
      id: 6,
      type: 'education',
      title: 'Bachelor of Science in Electronics',
      company: 'Bayero University, Kano',
      location: 'Kano, Nigeria',
      period: '2014 - 2018',
      current: false,
      description: 'Specialized in intelligent systems, signal processing, and embedded systems with a growing focus on machine learning and data-driven technologies.',
      achievements: [
        'CGPA: 3.6/5.0',
        'Completed online specializations in Machine Learning, Deep Learning, and AI (Coursera, WQU)',
        'Top 10% of class in Advanced Mathematics and Digital Systems Design',
        
      ],
      technologies: ['Electronics','Computer Science', 'AI/ML', 'Algorithms', 'Data Structures', 'Mathematics', 'Statistics'],
      icon: GraduationCap
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous learning and professional growth in AI and machine learning
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative flex items-start gap-8"
                  >
                    {/* Timeline Icon */}
                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-background ${
                      exp.type === 'work' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      <IconComponent size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-background p-6 rounded-lg border border-border hover:shadow-md transition-shadow duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-medium mb-2">
                            <Building size={16} />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          {exp.current && (
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              Current
                            </Badge>
                          )}
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <Award size={16} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-accent/30 p-8 rounded-lg border border-border"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {experiences.filter(exp => exp.type === 'work').length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Work Experiences
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {experiences.filter(exp => exp.type === 'education').length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Education
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {new Set(experiences.flatMap(exp => exp.technologies)).size}
                </div>
                <div className="text-sm text-muted-foreground">
                  Technologies Used
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

