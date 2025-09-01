import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const certifications = [
    {
      id: 1,
      name: 'Applied Data Science Lab',
      issuer: 'WorldQuant University',
      date: '2025',
      /*credentialId: 'GCP-ML-2024-001',*/ 
      verifyUrl: 'https://www.credly.com/badges/befebc31-a488-463b-8367-6820be4dfd14/public_url',
      logo: '/images/applied-data-science-lab.2.png', // Placeholder for Google Cloud logo
      description: 'Earners of this badge have completed eight end-to-end, applied data science projects. In each project, they accessed data from files, SQL and NoSQL databases and APIs. They have demonstrated their ability to explore and clean data, create functions and ETL pipelines to prepare training sets. They have built machine learning models for supervised and unsupervised learning tasks, and have created visualizations to explain data characteristics and model predictions for non-technical audiences.',
      skills: ['Python (Programming Language)', 'Data Science', 'Data Visualization', 'Machine Learning', 'MongoDB', 'API Design', 'SQL', 'Statistics'],
      featured: true,
      status: 'active'
    },
    {
      id: 2,
      name: 'Applied AI Lab: Deep Learning for Computer Vision',
      issuer: 'WorldQuant University',
      date: '2025',
      /* credentialId: 'AWS-MLS-2024-002',*/
      verifyUrl: 'https://www.credly.com/badges/96e0c045-8924-4ccb-8749-badce46c9f86/public_url',
      logo: '/images/applied-ai-lab-deep-learning-for-computer-vision.png', // Placeholder for AWS logo
      description: 'Earners of this badge completed six end-to-end PyTorch computer vision projects. From data preparation, cleaning and transformation pipelines to mastering deep learning models like MLPs, CNNs, and transformers, they tackled tasks like image classification, object detection, and generative AI. They applied transfer learning and self-regulated learning, explored software libraries, and debugged code while considering core values and ethical and environmental concerns faced by AI scientists.',
      skills: ['Artificial Intelligence (AI)', 'Data Science', 'Deep Learning', 'Facenet', 'Facial Recognition', 'Flask', 'Generative Adversarial Networks (GANs)', 'HuggingFace diffusers', 'HuggingFace Hub', 'HuggingFace transformers', 'Image Classification', 'Image Generation', 'Machine Learning', 'Matplotlib', 'MediGan', 'Neural Networks', 'Numpy', 'Object Detection', 'OpenCV', 'python', 'Pandas', 'PyTorch', 'Sciki-learn', 'Stable Diffusion', 'Supervised Learning', 'Ultralytics YOLOv8'],
      featured: true,
      status: 'active'
    },
    /*{
      id: 3,
      name: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      date: '2023',
      credentialId: 'TF-DEV-2023-003',
      verifyUrl: 'https://www.tensorflow.org/certificate',
      logo: '🟡', // Placeholder for TensorFlow logo
      description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems.',
      skills: ['Neural Networks', 'Computer Vision', 'NLP', 'Time Series', 'TensorFlow Lite'],
      featured: true,
      status: 'active'
    },
    {
      id: 4,
      name: 'Deep Learning Specialization',
      issuer: 'Coursera (DeepLearning.AI)',
      date: '2023',
      credentialId: 'DL-SPEC-2023-004',
      verifyUrl: 'https://coursera.org/verify/specialization/XXXXXXXX',
      logo: '🔷', // Placeholder for Coursera logo
      description: 'Comprehensive specialization covering neural networks, deep learning, and their applications.',
      skills: ['Neural Networks', 'CNN', 'RNN', 'Hyperparameter Tuning', 'Sequence Models'],
      featured: false,
      status: 'active'
    },
    {
      id: 5,
      name: 'Microsoft Azure AI Engineer Associate',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'AZ-AI-2023-005',
      verifyUrl: 'https://docs.microsoft.com/en-us/learn/certifications/azure-ai-engineer',
      logo: '🔵', // Placeholder for Microsoft logo
      description: 'Validates skills in designing and implementing AI solutions using Azure Cognitive Services.',
      skills: ['Azure Cognitive Services', 'Bot Framework', 'Computer Vision API', 'Speech Services', 'Language Understanding'],
      featured: false,
      status: 'active'
    },
    {
      id: 6,
      name: 'Machine Learning Engineering for Production (MLOps)',
      issuer: 'Coursera (DeepLearning.AI)',
      date: '2023',
      credentialId: 'MLOPS-2023-006',
      verifyUrl: 'https://coursera.org/verify/specialization/YYYYYYYY',
      logo: '🔷', // Placeholder for Coursera logo
      description: 'Specialization focused on deploying ML models in production environments.',
      skills: ['MLOps', 'Model Deployment', 'Monitoring', 'CI/CD for ML', 'Data Versioning'],
      featured: false,
      status: 'active'
    },
    {
      id: 7,
      name: 'Natural Language Processing Specialization',
      issuer: 'Coursera (DeepLearning.AI)',
      date: '2022',
      credentialId: 'NLP-SPEC-2022-007',
      verifyUrl: 'https://coursera.org/verify/specialization/ZZZZZZZZ',
      logo: '🔷', // Placeholder for Coursera logo
      description: 'Comprehensive coverage of NLP techniques including transformers and attention mechanisms.',
      skills: ['NLP', 'Transformers', 'BERT', 'Attention Mechanisms', 'Sentiment Analysis'],
      featured: false,
      status: 'active'
    },
    {
      id: 8,
      name: 'Computer Vision Nanodegree',
      issuer: 'Udacity',
      date: '2022',
      credentialId: 'CV-ND-2022-008',
      verifyUrl: 'https://confirm.udacity.com/XXXXXXXX',
      logo: '🟣', // Placeholder for Udacity logo
      description: 'Comprehensive program covering computer vision techniques and applications.',
      skills: ['Image Processing', 'Object Detection', 'Facial Recognition', 'SLAM', 'Deep Learning for CV'],
      featured: false,
      status: 'active'
    }*/
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const featuredCerts = certifications.filter(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  return (
    <section id="certifications" className="py-20" ref={ref}>
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
              Certifications & Credentials
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications demonstrating expertise in AI, ML, and cloud technologies
            </p>
          </motion.div>

          {/* Featured Certifications */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Featured Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="group bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10">
                        {cert.logo.startsWith('/images/') ? (
                          <img
                            src={cert.logo}
                            alt={cert.name}
                            className="h-full w-auto object-contain"
                          />
                        ) : (
                          <div className="text-3xl">{cert.logo}</div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Featured
                        </Badge>
                        {cert.status === 'active' && (
                          <CheckCircle size={16} className="text-green-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(cert.verifyUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Verify
                    </Button>
                  </div>

                  {/* Credential ID */}
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                       {cert.credentialId}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {/*Additional Certifications */}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {otherCerts.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="group bg-background p-4 rounded-lg border border-border hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10">
                      {cert.logo.startsWith('/images/') ? (
                        <img
                          src={cert.logo}
                          alt={cert.name}
                          className="h-full w-auto object-contain"
                        />
                      ) : (
                        <div className="text-2xl">{cert.logo}</div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {cert.name}
                        </h4>
                        {cert.status === 'active' && (
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0 ml-2" />
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(cert.verifyUrl, '_blank')}
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Verify
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certification Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-accent/30 p-8 rounded-lg border border-border text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {certifications.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Certifications
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {featuredCerts.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Professional Level
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {new Set(certifications.flatMap(cert => cert.skills)).size}
                </div>
                <div className="text-sm text-muted-foreground">
                  Skills Validated
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {certifications.filter(cert => cert.status === 'active').length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Currently Active
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

