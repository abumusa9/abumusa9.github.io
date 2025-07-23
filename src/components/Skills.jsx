import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Brain, Cloud, Database, Settings, Cpu } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, description: 'Primary language for AI/ML development' },
        { name: 'R', level: 85, description: 'Statistical analysis and data science' },
        { name: 'SQL', level: 90, description: 'Database querying and management' },
        { name: 'JavaScript', level: 80, description: 'Web development and visualization' },
        { name: 'C++', level: 75, description: 'Performance-critical applications' },
        { name: 'Java', level: 70, description: 'Enterprise applications' },
      ],
    },
    ml: {
      icon: Brain,
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', level: 92, description: 'Deep learning framework' },
        { name: 'PyTorch', level: 90, description: 'Research and production ML' },
        { name: 'Scikit-learn', level: 95, description: 'Classical ML algorithms' },
        { name: 'Keras', level: 88, description: 'High-level neural networks' },
        { name: 'Hugging Face', level: 85, description: 'NLP and transformers' },
        { name: 'OpenCV', level: 82, description: 'Computer vision' },
      ],
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 88, description: 'SageMaker, EC2, S3, Lambda' },
        { name: 'Google Cloud', level: 85, description: 'AI Platform, BigQuery, Vertex AI' },
        { name: 'Azure', level: 75, description: 'ML Studio, Cognitive Services' },
        { name: 'Docker', level: 90, description: 'Containerization' },
        { name: 'Kubernetes', level: 78, description: 'Container orchestration' },
        { name: 'MLflow', level: 82, description: 'ML lifecycle management' },
      ],
    },
    data: {
      icon: Database,
      title: 'Data & Databases',
      skills: [
        { name: 'Pandas', level: 95, description: 'Data manipulation and analysis' },
        { name: 'NumPy', level: 93, description: 'Numerical computing' },
        { name: 'PostgreSQL', level: 85, description: 'Relational database' },
        { name: 'MongoDB', level: 80, description: 'NoSQL database' },
        { name: 'Redis', level: 75, description: 'In-memory data store' },
        { name: 'Apache Spark', level: 78, description: 'Big data processing' },
      ],
    },
    tools: {
      icon: Settings,
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git', level: 92, description: 'Version control' },
        { name: 'Jupyter', level: 95, description: 'Interactive development' },
        { name: 'VS Code', level: 90, description: 'Code editor' },
        { name: 'Tableau', level: 82, description: 'Data visualization' },
        { name: 'Power BI', level: 78, description: 'Business intelligence' },
        { name: 'Plotly', level: 88, description: 'Interactive visualizations' },
      ],
    },
    specialized: {
      icon: Cpu,
      title: 'Specialized AI',
      skills: [
        { name: 'Computer Vision', level: 90, description: 'Image processing and analysis' },
        { name: 'NLP', level: 88, description: 'Natural language processing' },
        { name: 'Deep Learning', level: 92, description: 'Neural networks and architectures' },
        { name: 'Reinforcement Learning', level: 75, description: 'RL algorithms and applications' },
        { name: 'MLOps', level: 85, description: 'ML operations and deployment' },
        { name: 'Time Series', level: 80, description: 'Temporal data analysis' },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2,
      },
    }),
  };

  return (
    <section id="skills" className="py-20" ref={ref}>
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent solutions
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeCategory === key
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <IconComponent size={18} />
                    <span className="hidden sm:inline">{category.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-background p-6 rounded-lg border border-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-2 mb-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                    variants={progressVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={skill.level}
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-accent/30 p-8 rounded-lg border border-border"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              developments in AI and machine learning. Currently exploring areas like 
              Large Language Models (LLMs), Generative AI, and Edge AI deployment.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

