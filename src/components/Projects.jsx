import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Eye, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Medical Diagnosis System',
      description: 'Deep learning model for automated medical image analysis and diagnosis. Achieved 94% accuracy in detecting pneumonia from chest X-rays using CNN architecture.',
      longDescription: 'Developed a comprehensive medical diagnosis system using deep learning techniques. The system processes chest X-ray images and provides accurate pneumonia detection with 94% accuracy. Implemented using TensorFlow and deployed on AWS for real-time inference.',
      image: '/api/placeholder/400/250',
      category: 'computer-vision',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'AWS', 'Flask'],
      github: 'https://github.com/alexchen/medical-diagnosis',
      demo: 'https://medical-ai-demo.com',
      featured: true,
      metrics: {
        accuracy: '94%',
        dataset: '10K+ images',
        performance: '< 2s inference'
      }
    },
    {
      id: 2,
      title: 'Real-time Sentiment Analysis Platform',
      description: 'NLP-powered platform for analyzing social media sentiment in real-time. Processes 1M+ tweets daily with 92% accuracy using transformer models.',
      longDescription: 'Built a scalable sentiment analysis platform that processes social media data in real-time. Uses BERT-based transformer models for high accuracy sentiment classification and provides interactive dashboards for insights.',
      image: '/api/placeholder/400/250',
      category: 'nlp',
      technologies: ['Python', 'BERT', 'Kafka', 'React', 'PostgreSQL'],
      github: 'https://github.com/alexchen/sentiment-analysis',
      demo: 'https://sentiment-platform.com',
      featured: true,
      metrics: {
        accuracy: '92%',
        throughput: '1M+ tweets/day',
        latency: '< 100ms'
      }
    },
    {
      id: 3,
      title: 'Computer Vision for Autonomous Vehicles',
      description: 'Object detection and tracking system for autonomous vehicles. Implemented YOLO-based detection with 98% accuracy for real-time road object recognition.',
      longDescription: 'Developed an advanced computer vision system for autonomous vehicles using YOLO architecture. The system can detect and track multiple objects including vehicles, pedestrians, and traffic signs in real-time.',
      image: '/api/placeholder/400/250',
      category: 'computer-vision',
      technologies: ['Python', 'YOLO', 'PyTorch', 'CUDA', 'ROS'],
      github: 'https://github.com/alexchen/autonomous-vision',
      demo: null,
      featured: true,
      metrics: {
        accuracy: '98%',
        fps: '30 FPS',
        objects: '15+ classes'
      }
    },
    {
      id: 4,
      title: 'Recommendation Engine for E-commerce',
      description: 'Machine learning-based recommendation system that increased user engagement by 35% and sales conversion by 28% using collaborative filtering.',
      longDescription: 'Built a sophisticated recommendation engine using collaborative filtering and matrix factorization techniques. The system analyzes user behavior patterns to provide personalized product recommendations.',
      image: '/api/placeholder/400/250',
      category: 'ml',
      technologies: ['Python', 'Scikit-learn', 'Spark', 'Redis', 'Docker'],
      github: 'https://github.com/alexchen/recommendation-engine',
      demo: 'https://ecommerce-rec-demo.com',
      featured: false,
      metrics: {
        engagement: '+35%',
        conversion: '+28%',
        users: '100K+ active'
      }
    },
    {
      id: 5,
      title: 'Time Series Forecasting Dashboard',
      description: 'Interactive dashboard for financial time series forecasting using LSTM networks. Provides accurate stock price predictions with confidence intervals.',
      longDescription: 'Created an interactive web application for financial forecasting using LSTM neural networks. Features real-time data ingestion, model training, and visualization of predictions with uncertainty quantification.',
      image: '/api/placeholder/400/250',
      category: 'ml',
      technologies: ['Python', 'LSTM', 'Streamlit', 'Yahoo Finance API', 'Plotly'],
      github: 'https://github.com/alexchen/time-series-forecasting',
      demo: 'https://forecasting-dashboard.com',
      featured: false,
      metrics: {
        accuracy: '87%',
        stocks: '500+ symbols',
        updates: 'Real-time'
      }
    },
    {
      id: 6,
      title: 'Chatbot with Natural Language Understanding',
      description: 'Intelligent chatbot with advanced NLU capabilities. Handles customer service queries with 89% resolution rate using transformer architecture.',
      longDescription: 'Developed an intelligent chatbot system with advanced natural language understanding capabilities. Uses transformer-based models for intent recognition and entity extraction.',
      image: '/api/placeholder/400/250',
      category: 'nlp',
      technologies: ['Python', 'Transformers', 'Rasa', 'FastAPI', 'MongoDB'],
      github: 'https://github.com/alexchen/intelligent-chatbot',
      demo: 'https://chatbot-demo.com',
      featured: false,
      metrics: {
        resolution: '89%',
        languages: '5 languages',
        response: '< 1s'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'computer-vision', name: 'Computer Vision', count: projects.filter(p => p.category === 'computer-vision').length },
    { id: 'nlp', name: 'NLP', count: projects.filter(p => p.category === 'nlp').length },
    { id: 'ml', name: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative AI solutions that solve real-world problems
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground border border-border'
                  }`}
                >
                  <Filter size={16} />
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/40">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-muted/50 rounded">
                        <div className="font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex-1"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, '_blank')}
                        className="flex-1"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-accent/30 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on innovative AI projects that can make a positive impact. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

