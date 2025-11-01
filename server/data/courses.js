// Complete course data for Learn Sphere
const courses = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'AI & ML',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.9,
    enrolledStudents: 15420,
    instructor: 'Yasaswi',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    shortDescription: 'Comprehensive AI course covering search algorithms, NLP, computer vision, and ethical AI principles.',
    description: 'Explore the foundations of Artificial Intelligence including intelligent agents, search algorithms, machine learning integration, natural language processing, computer vision, and reinforcement learning. Learn to build AI systems that can reason, learn, and make decisions.',
    prerequisites: [
      'Python Programming',
      'Basic Mathematics (Linear Algebra, Calculus)',
      'Data Structures and Algorithms'
    ],
    learningOutcomes: [
      'Master AI search and optimization algorithms',
      'Build NLP applications',
      'Implement computer vision systems',
      'Understand reinforcement learning',
      'Apply ethical AI principles'
    ],
    modules: [
      {
        id: 1,
        title: 'Introduction to AI',
        topics: ['History of AI', 'Intelligent Agents', 'Problem-solving Agents', 'AI Applications'],
        handsOn: 'Build a simple intelligent agent in Python'
      },
      {
        id: 2,
        title: 'Search Algorithms',
        topics: ['Uninformed Search (BFS, DFS)', 'Informed Search (A*, Greedy)', 'Heuristic Functions', 'Game Playing'],
        handsOn: 'Implement A* pathfinding algorithm'
      },
      {
        id: 3,
        title: 'Knowledge Representation',
        topics: ['Propositional Logic', 'First-Order Logic', 'Inference', 'Knowledge Bases'],
        handsOn: 'Create a logic-based inference system'
      },
      {
        id: 4,
        title: 'Machine Learning Integration',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Selection'],
        handsOn: 'Build a classification model'
      },
      {
        id: 5,
        title: 'Natural Language Processing',
        topics: ['Text Processing', 'Tokenization', 'NER', 'Sentiment Analysis', 'Language Models'],
        handsOn: 'Develop a chatbot using NLP'
      },
      {
        id: 6,
        title: 'Computer Vision',
        topics: ['Image Processing', 'Object Detection', 'CNN Architecture', 'Image Classification'],
        handsOn: 'Build an image classifier'
      },
      {
        id: 7,
        title: 'Reinforcement Learning',
        topics: ['MDP', 'Q-Learning', 'Policy Gradients', 'Deep RL'],
        handsOn: 'Train an RL agent to play a game'
      },
      {
        id: 8,
        title: 'Ethical AI',
        topics: ['Bias in AI', 'Fairness', 'Transparency', 'Accountability', 'Privacy'],
        handsOn: 'Evaluate AI system for bias'
      }
    ],
    projects: [
      'Intelligent Search Agent',
      'NLP Sentiment Analyzer',
      'Computer Vision Application',
      'Reinforcement Learning Game AI'
    ],
    certification: 'Industry-recognized AI Professional Certificate'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    category: 'AI & ML',
    level: 'Intermediate',
    duration: '8 weeks',
    rating: 4.9,
    enrolledStudents: 18650,
    instructor: 'Sravani',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    shortDescription: 'Master supervised and unsupervised learning, model evaluation, and ML deployment strategies.',
    description: 'Comprehensive machine learning course covering algorithms, model evaluation, feature engineering, and production deployment. Learn to build, train, and deploy ML models that solve real-world problems.',
    prerequisites: [
      'Python Programming',
      'Statistics and Probability',
      'Linear Algebra basics'
    ],
    learningOutcomes: [
      'Understand ML algorithms deeply',
      'Build and evaluate ML models',
      'Master feature engineering',
      'Deploy ML models to production',
      'Handle imbalanced datasets'
    ],
    modules: [
      {
        id: 1,
        title: 'ML Fundamentals',
        topics: ['Types of ML', 'Training vs Testing', 'Bias-Variance Tradeoff', 'Overfitting'],
        handsOn: 'Set up ML development environment'
      },
      {
        id: 2,
        title: 'Supervised Learning - Regression',
        topics: ['Linear Regression', 'Polynomial Regression', 'Regularization (L1/L2)', 'Evaluation Metrics'],
        handsOn: 'Build house price prediction model'
      },
      {
        id: 3,
        title: 'Supervised Learning - Classification',
        topics: ['Logistic Regression', 'Decision Trees', 'Random Forest', 'SVM', 'Naive Bayes'],
        handsOn: 'Create email spam classifier'
      },
      {
        id: 4,
        title: 'Model Evaluation',
        topics: ['Cross-Validation', 'ROC-AUC', 'Precision-Recall', 'Confusion Matrix'],
        handsOn: 'Evaluate multiple models comparatively'
      },
      {
        id: 5,
        title: 'Feature Engineering',
        topics: ['Feature Selection', 'Feature Extraction', 'Encoding', 'Scaling', 'PCA'],
        handsOn: 'Engineer features for real dataset'
      },
      {
        id: 6,
        title: 'Unsupervised Learning',
        topics: ['K-Means', 'Hierarchical Clustering', 'DBSCAN', 'Dimensionality Reduction'],
        handsOn: 'Customer segmentation project'
      },
      {
        id: 7,
        title: 'Ensemble Methods',
        topics: ['Bagging', 'Boosting', 'Gradient Boosting', 'XGBoost', 'Stacking'],
        handsOn: 'Build ensemble model for Kaggle competition'
      },
      {
        id: 8,
        title: 'ML Deployment',
        topics: ['Model Serialization', 'API Development', 'Docker', 'Cloud Deployment', 'Monitoring'],
        handsOn: 'Deploy ML model as REST API'
      }
    ],
    projects: [
      'Regression Analysis System',
      'Multi-class Classifier',
      'Customer Segmentation',
      'Production ML API'
    ],
    certification: 'Machine Learning Professional Certificate'
  },
  {
    id: 'python-programming',
    title: 'Python Programming',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.7,
    enrolledStudents: 25800,
    instructor: 'Anil',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
    shortDescription: 'Learn Python from basics to advanced OOP, with NumPy, Pandas, and Matplotlib libraries.',
    description: 'Complete Python programming course from fundamentals to advanced concepts. Master variables, control flow, functions, OOP, and popular libraries like NumPy, Pandas, and Matplotlib.',
    prerequisites: [
      'Basic computer skills',
      'No prior programming experience required'
    ],
    learningOutcomes: [
      'Write efficient Python code',
      'Master object-oriented programming',
      'Use NumPy and Pandas effectively',
      'Create data visualizations',
      'Build real-world applications'
    ],
    modules: [
      {
        id: 1,
        title: 'Python Basics',
        topics: ['Variables', 'Data Types', 'Operators', 'Input/Output', 'Comments'],
        handsOn: 'Create a calculator program'
      },
      {
        id: 2,
        title: 'Control Flow',
        topics: ['If-Else', 'Loops (for, while)', 'Break and Continue', 'Match-Case'],
        handsOn: 'Build a number guessing game'
      },
      {
        id: 3,
        title: 'Functions and Modules',
        topics: ['Defining Functions', 'Parameters', 'Return Values', 'Lambda Functions', 'Modules'],
        handsOn: 'Create a utility module'
      },
      {
        id: 4,
        title: 'Data Structures',
        topics: ['Lists', 'Tuples', 'Sets', 'Dictionaries', 'Comprehensions'],
        handsOn: 'Build a contact management system'
      },
      {
        id: 5,
        title: 'Object-Oriented Programming',
        topics: ['Classes and Objects', 'Inheritance', 'Polymorphism', 'Encapsulation'],
        handsOn: 'Design a banking system'
      },
      {
        id: 6,
        title: 'File Handling',
        topics: ['Reading Files', 'Writing Files', 'CSV', 'JSON', 'Exception Handling'],
        handsOn: 'Build a data processing script'
      },
      {
        id: 7,
        title: 'NumPy Library',
        topics: ['Arrays', 'Operations', 'Broadcasting', 'Linear Algebra', 'Random'],
        handsOn: 'Numerical computations project'
      },
      {
        id: 8,
        title: 'Pandas Library',
        topics: ['DataFrames', 'Series', 'Data Manipulation', 'Grouping', 'Merging'],
        handsOn: 'Data analysis project'
      },
      {
        id: 9,
        title: 'Matplotlib Visualization',
        topics: ['Line Plots', 'Bar Charts', 'Histograms', 'Scatter Plots', 'Customization'],
        handsOn: 'Create data dashboard'
      }
    ],
    projects: [
      'Calculator Application',
      'Contact Manager',
      'Banking System OOP',
      'Data Analysis Dashboard'
    ],
    certification: 'Python Programming Certificate'
  },
  {
    id: 'data-science-python',
    title: 'Data Science with Python',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.9,
    enrolledStudents: 21340,
    instructor: 'Sai Krishna',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    shortDescription: 'Complete data science workflow: wrangling, visualization, statistics, and ML integration.',
    description: 'Master the complete data science pipeline using Python. Learn data wrangling with Pandas, visualization with Matplotlib/Seaborn, statistical analysis, and integrating machine learning models.',
    prerequisites: [
      'Python Programming',
      'Basic Statistics',
      'Mathematics fundamentals'
    ],
    learningOutcomes: [
      'Perform data wrangling and cleaning',
      'Create insightful visualizations',
      'Apply statistical analysis',
      'Build predictive models',
      'Communicate data insights'
    ],
    modules: [
      {
        id: 1,
        title: 'Data Science Overview',
        topics: ['DS Lifecycle', 'Tools and Libraries', 'Jupyter Notebooks', 'Best Practices'],
        handsOn: 'Set up data science environment'
      },
      {
        id: 2,
        title: 'Data Wrangling with Pandas',
        topics: ['Loading Data', 'Cleaning', 'Transformation', 'Missing Values', 'Outliers'],
        handsOn: 'Clean messy real-world dataset'
      },
      {
        id: 3,
        title: 'Exploratory Data Analysis',
        topics: ['Descriptive Statistics', 'Data Distributions', 'Correlations', 'Feature Relationships'],
        handsOn: 'EDA on business dataset'
      },
      {
        id: 4,
        title: 'Data Visualization',
        topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Interactive Dashboards', 'Best Practices'],
        handsOn: 'Create interactive visualizations'
      },
      {
        id: 5,
        title: 'Statistical Analysis',
        topics: ['Hypothesis Testing', 'p-values', 't-tests', 'ANOVA', 'Chi-Square'],
        handsOn: 'Perform A/B testing analysis'
      },
      {
        id: 6,
        title: 'Probability Distributions',
        topics: ['Normal', 'Binomial', 'Poisson', 'Sampling', 'Central Limit Theorem'],
        handsOn: 'Monte Carlo simulation'
      },
      {
        id: 7,
        title: 'Machine Learning Integration',
        topics: ['Scikit-learn', 'Model Building', 'Evaluation', 'Feature Engineering'],
        handsOn: 'Build end-to-end ML pipeline'
      },
      {
        id: 8,
        title: 'Time Series Analysis',
        topics: ['Trends', 'Seasonality', 'ARIMA', 'Forecasting', 'Prophet'],
        handsOn: 'Sales forecasting project'
      },
      {
        id: 9,
        title: 'Data Storytelling',
        topics: ['Effective Communication', 'Report Generation', 'Presentation Skills'],
        handsOn: 'Create executive presentation'
      }
    ],
    projects: [
      'Customer Churn Analysis',
      'Sales Forecasting System',
      'Marketing Campaign Analysis',
      'Business Intelligence Dashboard'
    ],
    certification: 'Data Science Professional Certificate'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data Science',
    level: 'Beginner',
    duration: '8 weeks',
    rating: 4.6,
    enrolledStudents: 19250,
    instructor: 'Charan',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    shortDescription: 'Excel to Power BI to SQL pipeline, business metrics, dashboards, and data storytelling.',
    description: 'Complete data analytics course covering Excel, SQL, Power BI, and Tableau. Learn to analyze business data, create dashboards, and tell compelling data stories.',
    prerequisites: [
      'Basic computer skills',
      'No prior experience required'
    ],
    learningOutcomes: [
      'Master Excel for data analysis',
      'Write SQL queries effectively',
      'Create Power BI dashboards',
      'Analyze business metrics',
      'Present data insights'
    ],
    modules: [
      {
        id: 1,
        title: 'Excel Fundamentals',
        topics: ['Formulas', 'Functions', 'Pivot Tables', 'Charts', 'Conditional Formatting'],
        handsOn: 'Create sales analysis spreadsheet'
      },
      {
        id: 2,
        title: 'Advanced Excel',
        topics: ['VLOOKUP/XLOOKUP', 'INDEX-MATCH', 'Power Query', 'Macros', 'Data Validation'],
        handsOn: 'Automated reporting system'
      },
      {
        id: 3,
        title: 'SQL Basics',
        topics: ['SELECT', 'WHERE', 'JOIN', 'GROUP BY', 'Aggregations'],
        handsOn: 'Query business database'
      },
      {
        id: 4,
        title: 'Advanced SQL',
        topics: ['Subqueries', 'Window Functions', 'CTEs', 'Optimization', 'Indexes'],
        handsOn: 'Complex analytical queries'
      },
      {
        id: 5,
        title: 'Power BI Fundamentals',
        topics: ['Data Import', 'Data Modeling', 'DAX', 'Visualizations', 'Reports'],
        handsOn: 'Create interactive dashboard'
      },
      {
        id: 6,
        title: 'Business Metrics',
        topics: ['KPIs', 'Revenue Metrics', 'Customer Metrics', 'Operational Metrics'],
        handsOn: 'Build KPI dashboard'
      },
      {
        id: 7,
        title: 'Data Visualization Best Practices',
        topics: ['Chart Selection', 'Color Theory', 'Dashboard Design', 'UX Principles'],
        handsOn: 'Design executive dashboard'
      },
      {
        id: 8,
        title: 'Analytics Storytelling',
        topics: ['Narrative Structure', 'Insights Communication', 'Presentation Skills'],
        handsOn: 'Present analytical findings'
      }
    ],
    projects: [
      'Sales Performance Dashboard',
      'Customer Analytics Report',
      'Financial Analysis System',
      'Executive KPI Dashboard'
    ],
    certification: 'Data Analytics Professional Certificate'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Prompt Engineering',
    category: 'AI & ML',
    level: 'Intermediate',
    duration: '6 weeks',
    rating: 4.9,
    enrolledStudents: 12890,
    instructor: 'Yasaswi',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    shortDescription: 'Master prompt design, LLM fine-tuning, embeddings, RAG, and ethical AI considerations.',
    description: 'Comprehensive course on Generative AI and prompt engineering. Learn to design effective prompts, fine-tune LLMs, work with embeddings, implement RAG systems, and address ethical considerations.',
    prerequisites: [
      'Python Programming',
      'Basic ML concepts',
      'API usage experience'
    ],
    learningOutcomes: [
      'Design effective prompts',
      'Fine-tune language models',
      'Implement RAG systems',
      'Work with embeddings',
      'Apply ethical AI practices'
    ],
    modules: [
      {
        id: 1,
        title: 'Introduction to Gen AI',
        topics: ['LLM Overview', 'Transformers', 'GPT Architecture', 'Use Cases'],
        handsOn: 'Explore OpenAI API'
      },
      {
        id: 2,
        title: 'Prompt Engineering Fundamentals',
        topics: ['Prompt Structure', 'Zero-shot', 'Few-shot', 'Chain-of-Thought'],
        handsOn: 'Design effective prompts'
      },
      {
        id: 3,
        title: 'Advanced Prompting',
        topics: ['System Messages', 'Temperature', 'Top-p', 'Prompt Chaining'],
        handsOn: 'Build multi-step AI workflow'
      },
      {
        id: 4,
        title: 'Embeddings and Vector Databases',
        topics: ['Text Embeddings', 'Similarity Search', 'Pinecone', 'Chroma'],
        handsOn: 'Create semantic search engine'
      },
      {
        id: 5,
        title: 'Retrieval Augmented Generation',
        topics: ['RAG Architecture', 'Document Processing', 'Chunking Strategies'],
        handsOn: 'Build chatbot with RAG'
      },
      {
        id: 6,
        title: 'LLM Fine-tuning',
        topics: ['Transfer Learning', 'LoRA', 'Dataset Preparation', 'Evaluation'],
        handsOn: 'Fine-tune model on custom data'
      },
      {
        id: 7,
        title: 'Multimodal AI',
        topics: ['Vision-Language Models', 'DALL-E', 'Stable Diffusion', 'Image Generation'],
        handsOn: 'Create image generation app'
      },
      {
        id: 8,
        title: 'Ethical Considerations',
        topics: ['Bias', 'Safety', 'Privacy', 'Responsible AI', 'Content Moderation'],
        handsOn: 'Implement safety guardrails'
      }
    ],
    projects: [
      'AI Content Generator',
      'RAG-powered Chatbot',
      'Semantic Search Engine',
      'Custom Fine-tuned Model'
    ],
    certification: 'Generative AI Expert Certificate'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    category: 'Advanced Computing',
    level: 'Advanced',
    duration: '12 weeks',
    rating: 4.8,
    enrolledStudents: 8542,
    instructor: 'Sravani',
    price: 149900,
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
    shortDescription: 'Master quantum computing fundamentals, algorithms, and real-world applications with hands-on exercises.',
    description: 'Dive deep into the fascinating world of quantum computing. Learn quantum mechanics principles, quantum algorithms, and how to implement them using modern quantum programming frameworks like Qiskit.',
    prerequisites: [
      'Linear Algebra & Probability (basic level)',
      'Python Programming (NumPy, Matplotlib)',
      'Basic understanding of classical computing'
    ],
    learningOutcomes: [
      'Understand quantum mechanics principles',
      'Master quantum algorithms and circuits',
      'Implement quantum programs using Qiskit',
      'Apply quantum computing to real-world problems'
    ],
    modules: [
      {
        id: 1,
        title: 'Introduction to Quantum Computing',
        topics: ['Classical vs Quantum', 'Qubits', 'Superposition', 'Quantum Gates'],
        handsOn: 'Create your first quantum circuit in Qiskit'
      },
      {
        id: 2,
        title: 'Quantum Mechanics Basics',
        topics: ['Wave Functions', 'Operators', 'Measurement', 'Uncertainty Principle'],
        handsOn: 'Simulate quantum measurement'
      },
      {
        id: 3,
        title: 'Quantum Gates and Circuits',
        topics: ['Single-qubit Gates', 'Multi-qubit Gates', 'Circuit Diagrams', 'Universal Gates'],
        handsOn: 'Build complex quantum circuits'
      },
      {
        id: 4,
        title: 'Quantum Entanglement',
        topics: ['Bell States', 'EPR Paradox', 'Quantum Correlations', 'No-Cloning Theorem'],
        handsOn: 'Create and measure entangled states'
      },
      {
        id: 5,
        title: 'Quantum Algorithms - Part 1',
        topics: ['Deutsch-Jozsa', 'Bernstein-Vazirani', 'Simon\'s Algorithm'],
        handsOn: 'Implement basic quantum algorithms'
      },
      {
        id: 6,
        title: 'Quantum Fourier Transform',
        topics: ['QFT Theory', 'Implementation', 'Inverse QFT', 'Applications'],
        handsOn: 'Build QFT circuit'
      },
      {
        id: 7,
        title: 'Shor\'s Algorithm',
        topics: ['Integer Factorization', 'Period Finding', 'RSA Cryptography'],
        handsOn: 'Implement simplified Shor\'s algorithm'
      },
      {
        id: 8,
        title: 'Grover\'s Search Algorithm',
        topics: ['Unstructured Search', 'Oracle', 'Amplitude Amplification', 'Complexity'],
        handsOn: 'Build Grover search for database'
      },
      {
        id: 9,
        title: 'Quantum Error Correction',
        topics: ['Noise in Quantum Systems', 'Error Correction Codes', 'Stabilizer Codes'],
        handsOn: 'Implement error correction'
      },
      {
        id: 10,
        title: 'Variational Quantum Algorithms',
        topics: ['VQE', 'QAOA', 'Hybrid Classical-Quantum', 'Optimization'],
        handsOn: 'Solve optimization with VQE'
      },
      {
        id: 11,
        title: 'Quantum Machine Learning',
        topics: ['Quantum Neural Networks', 'Quantum SVM', 'Quantum PCA'],
        handsOn: 'Build quantum classifier'
      },
      {
        id: 12,
        title: 'Quantum Cryptography',
        topics: ['QKD', 'BB84 Protocol', 'Quantum Teleportation', 'Security'],
        handsOn: 'Implement BB84 protocol'
      },
      {
        id: 13,
        title: 'Quantum Hardware',
        topics: ['Superconducting Qubits', 'Ion Traps', 'Photonic QC', 'Topological Qubits'],
        handsOn: 'Explore IBM Quantum hardware'
      },
      {
        id: 14,
        title: 'Quantum Programming with Qiskit',
        topics: ['Qiskit Components', 'Circuit Optimization', 'Backends', 'Visualization'],
        handsOn: 'Advanced Qiskit programming'
      },
      {
        id: 15,
        title: 'Real-World Applications',
        topics: ['Drug Discovery', 'Financial Modeling', 'Logistics', 'Chemistry Simulation'],
        handsOn: 'Final capstone project'
      }
    ],
    projects: [
      'Quantum Circuit Simulator',
      'Shor\'s Factorization Implementation',
      'Quantum Search Engine',
      'Quantum Chemistry Simulation'
    ],
    certification: 'Quantum Computing Professional Certificate',
    assessment: {
      quizzes: 15,
      assignments: 12,
      finalProject: true,
      passingScore: 70
    }
  },
  // New Courses Added
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    category: 'AI & ML',
    level: 'Advanced',
    duration: '12 weeks',
    rating: 4.9,
    enrolledStudents: 14200,
    instructor: 'Anil',
    price: 149900,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    shortDescription: 'Master neural networks, CNNs, RNNs, transformers, and deploy deep learning models.',
    description: 'Advanced deep learning course covering neural network architectures, CNNs for computer vision, RNNs for sequences, transformers, GANs, and deployment strategies.',
    prerequisites: ['Machine Learning', 'Python Programming', 'Linear Algebra', 'Calculus'],
    learningOutcomes: ['Build deep neural networks', 'Implement CNNs and RNNs', 'Work with transformers', 'Deploy DL models'],
    modules: [
      {id: 1, title: 'Neural Networks Fundamentals', topics: ['Perceptrons', 'Backpropagation', 'Activation Functions'], handsOn: 'Build a neural network from scratch'},
      {id: 2, title: 'Convolutional Neural Networks', topics: ['CNN Architecture', 'Transfer Learning', 'Object Detection'], handsOn: 'Image classification with CNN'},
      {id: 3, title: 'Recurrent Neural Networks', topics: ['LSTM', 'GRU', 'Sequence Modeling'], handsOn: 'Text generation with RNN'},
      {id: 4, title: 'Transformers', topics: ['Attention Mechanism', 'BERT', 'GPT'], handsOn: 'Fine-tune a transformer model'}
    ],
    projects: ['Image Classifier', 'Text Generator', 'Object Detection System'],
    certification: 'Deep Learning Professional Certificate'
  },
  {
    id: 'fullstack-web-dev',
    title: 'Full Stack Web Development',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '14 weeks',
    rating: 4.9,
    enrolledStudents: 22300,
    instructor: 'Sai Krishna',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800',
    shortDescription: 'Complete frontend and backend development with HTML, CSS, JavaScript, Node.js, databases.',
    description: 'Comprehensive full stack development covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, REST APIs, and deployment.',
    prerequisites: ['Basic programming knowledge', 'Understanding of web concepts'],
    learningOutcomes: ['Build responsive frontends', 'Create REST APIs', 'Work with databases', 'Deploy web applications'],
    modules: [
      {id: 1, title: 'HTML & CSS Fundamentals', topics: ['HTML5', 'CSS3', 'Flexbox', 'Grid'], handsOn: 'Build a responsive website'},
      {id: 2, title: 'JavaScript Essentials', topics: ['ES6+', 'DOM', 'Async/Await', 'Fetch API'], handsOn: 'Interactive web application'},
      {id: 3, title: 'Frontend Framework (React)', topics: ['Components', 'State', 'Hooks', 'Routing'], handsOn: 'React SPA'},
      {id: 4, title: 'Backend with Node.js', topics: ['Express', 'REST APIs', 'Authentication'], handsOn: 'Build RESTful API'},
      {id: 5, title: 'Databases', topics: ['MongoDB', 'SQL', 'CRUD Operations'], handsOn: 'Database integration'},
      {id: 6, title: 'Deployment', topics: ['Heroku', 'Netlify', 'CI/CD'], handsOn: 'Deploy full stack app'}
    ],
    projects: ['E-commerce Website', 'Blog Platform', 'Social Media App'],
    certification: 'Full Stack Developer Certificate'
  },
  {
    id: 'fullstack-java',
    title: 'Full Stack Java Development',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '16 weeks',
    rating: 4.8,
    enrolledStudents: 18900,
    instructor: 'Charan',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    shortDescription: 'Master Java, Spring Boot, Hibernate, React, and enterprise application development.',
    description: 'Complete Java full stack course with Spring Boot, Hibernate, JPA, React, REST APIs, microservices, and cloud deployment.',
    prerequisites: ['Basic Java knowledge', 'OOP concepts'],
    learningOutcomes: ['Build Spring Boot applications', 'Create microservices', 'Work with Hibernate/JPA', 'Deploy to cloud'],
    modules: [
      {id: 1, title: 'Core Java', topics: ['OOP', 'Collections', 'Streams', 'Lambda'], handsOn: 'Java console application'},
      {id: 2, title: 'Spring Framework', topics: ['Dependency Injection', 'Spring MVC', 'AOP'], handsOn: 'Spring MVC app'},
      {id: 3, title: 'Spring Boot', topics: ['Auto-configuration', 'REST APIs', 'Security'], handsOn: 'RESTful service'},
      {id: 4, title: 'Data Access', topics: ['Hibernate', 'JPA', 'Spring Data'], handsOn: 'Database CRUD operations'},
      {id: 5, title: 'Frontend Integration', topics: ['React', 'Axios', 'State Management'], handsOn: 'Full stack app'},
      {id: 6, title: 'Microservices', topics: ['Spring Cloud', 'API Gateway', 'Service Discovery'], handsOn: 'Microservices architecture'}
    ],
    projects: ['Banking System', 'E-commerce Platform', 'Inventory Management'],
    certification: 'Java Full Stack Developer Certificate'
  },
  {
    id: 'fullstack-python',
    title: 'Full Stack Python Development',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '14 weeks',
    rating: 4.9,
    enrolledStudents: 20100,
    instructor: 'Yasaswi',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
    shortDescription: 'Django/Flask, PostgreSQL, React, REST APIs, and deployment for full stack Python apps.',
    description: 'Complete Python full stack development with Django, Flask, PostgreSQL, React, REST APIs, authentication, and cloud deployment.',
    prerequisites: ['Python basics', 'Basic web concepts'],
    learningOutcomes: ['Build Django applications', 'Create Flask APIs', 'Frontend integration', 'Deploy Python apps'],
    modules: [
      {id: 1, title: 'Python for Web', topics: ['Advanced Python', 'Virtual Environments', 'Packages'], handsOn: 'Python web scraper'},
      {id: 2, title: 'Django Framework', topics: ['Models', 'Views', 'Templates', 'Admin'], handsOn: 'Django blog'},
      {id: 3, title: 'Django REST Framework', topics: ['Serializers', 'ViewSets', 'Authentication'], handsOn: 'REST API'},
      {id: 4, title: 'Flask Microframework', topics: ['Routes', 'Blueprints', 'SQLAlchemy'], handsOn: 'Flask API'},
      {id: 5, title: 'Frontend with React', topics: ['React basics', 'Integration', 'State'], handsOn: 'React frontend'},
      {id: 6, title: 'Databases', topics: ['PostgreSQL', 'ORM', 'Migrations'], handsOn: 'Database design'}
    ],
    projects: ['Blog Platform', 'Task Manager', 'API Service'],
    certification: 'Python Full Stack Developer Certificate'
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack Development',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '12 weeks',
    rating: 4.9,
    enrolledStudents: 19500,
    instructor: 'Sravani',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800',
    shortDescription: 'Master MongoDB, Express, React, Node.js stack for modern web applications.',
    description: 'Complete MERN stack course: MongoDB, Express.js, React, Node.js. Build modern, scalable web applications with authentication, state management, and deployment.',
    prerequisites: ['JavaScript basics', 'HTML/CSS'],
    learningOutcomes: ['Build MERN applications', 'Implement authentication', 'State management', 'Deploy to production'],
    modules: [
      {id: 1, title: 'Node.js & Express', topics: ['Node fundamentals', 'Express routing', 'Middleware'], handsOn: 'Express server'},
      {id: 2, title: 'MongoDB', topics: ['NoSQL concepts', 'Mongoose', 'CRUD'], handsOn: 'Database operations'},
      {id: 3, title: 'React Frontend', topics: ['Components', 'Hooks', 'Context API'], handsOn: 'React app'},
      {id: 4, title: 'REST API Development', topics: ['API design', 'JWT', 'Validation'], handsOn: 'Secure API'},
      {id: 5, title: 'State Management', topics: ['Redux', 'Context', 'Data flow'], handsOn: 'State management'},
      {id: 6, title: 'Deployment', topics: ['Heroku', 'MongoDB Atlas', 'CI/CD'], handsOn: 'Deploy MERN app'}
    ],
    projects: ['Social Network', 'E-commerce Store', 'Dashboard App'],
    certification: 'MERN Stack Developer Certificate'
  },
  {
    id: 'mean-stack',
    title: 'MEAN Stack Development',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '12 weeks',
    rating: 4.8,
    enrolledStudents: 16200,
    instructor: 'Anil',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    shortDescription: 'MongoDB, Express, Angular, Node.js for enterprise-grade web applications.',
    description: 'Complete MEAN stack development: MongoDB, Express.js, Angular, Node.js. Build enterprise applications with TypeScript, RxJS, and best practices.',
    prerequisites: ['JavaScript/TypeScript basics', 'Web fundamentals'],
    learningOutcomes: ['Build MEAN applications', 'Master Angular', 'Create scalable backends', 'Enterprise patterns'],
    modules: [
      {id: 1, title: 'Node.js Backend', topics: ['Node.js', 'Express', 'APIs'], handsOn: 'Build Express API'},
      {id: 2, title: 'MongoDB Database', topics: ['Mongoose', 'Schema design', 'Aggregation'], handsOn: 'Database modeling'},
      {id: 3, title: 'Angular Framework', topics: ['Components', 'Services', 'Routing'], handsOn: 'Angular SPA'},
      {id: 4, title: 'TypeScript', topics: ['Types', 'Interfaces', 'Generics'], handsOn: 'TypeScript app'},
      {id: 5, title: 'RxJS', topics: ['Observables', 'Operators', 'Async'], handsOn: 'Reactive programming'},
      {id: 6, title: 'Testing & Deployment', topics: ['Unit tests', 'E2E', 'Deployment'], handsOn: 'Deploy application'}
    ],
    projects: ['CRM System', 'Project Management Tool', 'Analytics Dashboard'],
    certification: 'MEAN Stack Developer Certificate'
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security',
    category: 'Security',
    level: 'Advanced',
    duration: '14 weeks',
    rating: 4.9,
    enrolledStudents: 13400,
    instructor: 'Sai Krishna',
    price: 149900,
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    shortDescription: 'Network security, cryptography, penetration testing, incident response, and security architecture.',
    description: 'Comprehensive cybersecurity course covering network security, cryptography, ethical hacking, penetration testing, incident response, and security operations.',
    prerequisites: ['Networking basics', 'Linux fundamentals', 'Programming knowledge'],
    learningOutcomes: ['Perform security assessments', 'Implement security controls', 'Respond to incidents', 'Design secure systems'],
    modules: [
      {id: 1, title: 'Security Fundamentals', topics: ['CIA Triad', 'Threat Landscape', 'Risk Management'], handsOn: 'Security assessment'},
      {id: 2, title: 'Network Security', topics: ['Firewalls', 'IDS/IPS', 'VPN'], handsOn: 'Configure firewall'},
      {id: 3, title: 'Cryptography', topics: ['Encryption', 'Hashing', 'PKI'], handsOn: 'Implement encryption'},
      {id: 4, title: 'Penetration Testing', topics: ['Reconnaissance', 'Exploitation', 'Reporting'], handsOn: 'Pen testing lab'},
      {id: 5, title: 'Incident Response', topics: ['Detection', 'Containment', 'Recovery'], handsOn: 'Incident handling'},
      {id: 6, title: 'Security Operations', topics: ['SIEM', 'Monitoring', 'Compliance'], handsOn: 'SOC operations'}
    ],
    projects: ['Security Audit', 'Penetration Test Report', 'Incident Response Plan'],
    certification: 'Certified Cybersecurity Professional'
  },
  {
    id: 'c-programming',
    title: 'C Programming Language',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.7,
    enrolledStudents: 23100,
    instructor: 'Charan',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
    shortDescription: 'Learn C from basics: variables, pointers, memory management, data structures.',
    description: 'Complete C programming course from fundamentals to advanced concepts including pointers, memory management, file handling, and data structures.',
    prerequisites: ['Basic computer knowledge', 'No programming experience required'],
    learningOutcomes: ['Write C programs', 'Master pointers', 'Manage memory', 'Implement data structures'],
    modules: [
      {id: 1, title: 'C Basics', topics: ['Variables', 'Data Types', 'Operators', 'Control Flow'], handsOn: 'Simple C programs'},
      {id: 2, title: 'Functions', topics: ['Function definition', 'Parameters', 'Recursion'], handsOn: 'Calculator program'},
      {id: 3, title: 'Pointers', topics: ['Pointer basics', 'Pointer arithmetic', 'Arrays'], handsOn: 'Pointer exercises'},
      {id: 4, title: 'Memory Management', topics: ['malloc', 'free', 'Memory leaks'], handsOn: 'Dynamic memory'},
      {id: 5, title: 'Data Structures', topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'], handsOn: 'Implement data structures'}
    ],
    projects: ['Student Management System', 'File Manager', 'Data Structure Library'],
    certification: 'C Programming Certificate'
  },
  {
    id: 'cpp-programming',
    title: 'C++ Programming Language',
    category: 'Programming',
    level: 'Beginner',
    duration: '8 weeks',
    rating: 4.8,
    enrolledStudents: 20800,
    instructor: 'Yasaswi',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800',
    shortDescription: 'Master C++ with OOP, STL, templates, and modern C++ features.',
    description: 'Comprehensive C++ course covering OOP principles, STL, templates, smart pointers, and modern C++11/14/17 features.',
    prerequisites: ['Basic programming knowledge', 'C basics helpful but not required'],
    learningOutcomes: ['Write modern C++ code', 'Master OOP', 'Use STL effectively', 'Apply design patterns'],
    modules: [
      {id: 1, title: 'C++ Fundamentals', topics: ['Syntax', 'Variables', 'Functions', 'References'], handsOn: 'Basic C++ programs'},
      {id: 2, title: 'Object-Oriented Programming', topics: ['Classes', 'Inheritance', 'Polymorphism'], handsOn: 'OOP project'},
      {id: 3, title: 'STL', topics: ['Vectors', 'Maps', 'Algorithms', 'Iterators'], handsOn: 'STL exercises'},
      {id: 4, title: 'Templates', topics: ['Function templates', 'Class templates', 'Template specialization'], handsOn: 'Generic programming'},
      {id: 5, title: 'Modern C++', topics: ['Smart pointers', 'Lambda', 'Move semantics'], handsOn: 'Modern C++ features'}
    ],
    projects: ['Game Engine', 'Library Management System', 'Graphics Application'],
    certification: 'C++ Programming Certificate'
  },
  {
    id: 'app-development',
    title: 'Mobile App Development',
    category: 'Mobile Development',
    level: 'Intermediate',
    duration: '12 weeks',
    rating: 4.8,
    enrolledStudents: 17600,
    instructor: 'Sravani',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    shortDescription: 'Build native and cross-platform mobile apps with React Native and Flutter.',
    description: 'Complete mobile app development course covering React Native, Flutter, UI/UX design, API integration, and app deployment to stores.',
    prerequisites: ['JavaScript basics', 'Basic programming knowledge'],
    learningOutcomes: ['Build mobile apps', 'Cross-platform development', 'App store deployment', 'Mobile UI/UX'],
    modules: [
      {id: 1, title: 'Mobile Dev Fundamentals', topics: ['Native vs Hybrid', 'Mobile UI', 'Navigation'], handsOn: 'First mobile app'},
      {id: 2, title: 'React Native', topics: ['Components', 'State', 'Navigation', 'APIs'], handsOn: 'React Native app'},
      {id: 3, title: 'Flutter Basics', topics: ['Widgets', 'Dart', 'State Management'], handsOn: 'Flutter app'},
      {id: 4, title: 'API Integration', topics: ['REST APIs', 'Authentication', 'Data Storage'], handsOn: 'Backend integration'},
      {id: 5, title: 'App Deployment', topics: ['Play Store', 'App Store', 'Testing'], handsOn: 'Publish app'}
    ],
    projects: ['Social Media App', 'E-commerce App', 'Fitness Tracker'],
    certification: 'Mobile App Developer Certificate'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design',
    level: 'Beginner',
    duration: '8 weeks',
    rating: 4.9,
    enrolledStudents: 21400,
    instructor: 'Anil',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    shortDescription: 'Master user interface and experience design with Figma, wireframing, prototyping.',
    description: 'Complete UI/UX design course covering design principles, user research, wireframing, prototyping, Figma, and design systems.',
    prerequisites: ['Basic computer skills', 'No design experience required'],
    learningOutcomes: ['Create wireframes', 'Design prototypes', 'Master Figma', 'User research'],
    modules: [
      {id: 1, title: 'Design Fundamentals', topics: ['Color Theory', 'Typography', 'Layout', 'Principles'], handsOn: 'Design basics project'},
      {id: 2, title: 'User Research', topics: ['User Personas', 'Journey Maps', 'Research Methods'], handsOn: 'User research study'},
      {id: 3, title: 'Wireframing', topics: ['Low-fidelity', 'High-fidelity', 'Tools'], handsOn: 'Create wireframes'},
      {id: 4, title: 'Prototyping with Figma', topics: ['Figma Basics', 'Components', 'Interactive Prototypes'], handsOn: 'Figma prototype'},
      {id: 5, title: 'Design Systems', topics: ['Components Library', 'Style Guide', 'Consistency'], handsOn: 'Build design system'}
    ],
    projects: ['Mobile App Design', 'Website Redesign', 'Design System'],
    certification: 'UI/UX Design Certificate'
  },
  {
    id: 'react-js',
    title: 'React JS',
    category: 'Frontend',
    level: 'Intermediate',
    duration: '8 weeks',
    rating: 4.9,
    enrolledStudents: 24100,
    instructor: 'Sai Krishna',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    shortDescription: 'Master React with hooks, context, Redux, routing, and modern best practices.',
    description: 'Comprehensive React course covering components, hooks, state management, routing, Redux, performance optimization, and testing.',
    prerequisites: ['JavaScript ES6+', 'HTML/CSS'],
    learningOutcomes: ['Build React apps', 'Master hooks', 'State management', 'Performance optimization'],
    modules: [
      {id: 1, title: 'React Fundamentals', topics: ['JSX', 'Components', 'Props', 'State'], handsOn: 'React basics'},
      {id: 2, title: 'React Hooks', topics: ['useState', 'useEffect', 'Custom Hooks'], handsOn: 'Hooks project'},
      {id: 3, title: 'React Router', topics: ['Routing', 'Navigation', 'Protected Routes'], handsOn: 'Multi-page app'},
      {id: 4, title: 'State Management', topics: ['Context API', 'Redux', 'Redux Toolkit'], handsOn: 'Redux app'},
      {id: 5, title: 'Performance', topics: ['Optimization', 'Code Splitting', 'Lazy Loading'], handsOn: 'Optimize app'}
    ],
    projects: ['Todo App', 'E-commerce Store', 'Social Dashboard'],
    certification: 'React Developer Certificate'
  },
  {
    id: 'angular-js',
    title: 'Angular JS',
    category: 'Frontend',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.7,
    enrolledStudents: 15800,
    instructor: 'Charan',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=800',
    shortDescription: 'Complete Angular framework with TypeScript, RxJS, components, and services.',
    description: 'Master Angular framework with TypeScript, components, services, routing, RxJS, forms, and enterprise patterns.',
    prerequisites: ['JavaScript/TypeScript', 'HTML/CSS'],
    learningOutcomes: ['Build Angular apps', 'Master TypeScript', 'RxJS', 'Enterprise patterns'],
    modules: [
      {id: 1, title: 'Angular Basics', topics: ['Components', 'Templates', 'Data Binding'], handsOn: 'First Angular app'},
      {id: 2, title: 'TypeScript', topics: ['Types', 'Interfaces', 'Classes', 'Generics'], handsOn: 'TypeScript exercises'},
      {id: 3, title: 'Services & DI', topics: ['Dependency Injection', 'Services', 'HTTP'], handsOn: 'Service integration'},
      {id: 4, title: 'Routing', topics: ['Router', 'Guards', 'Lazy Loading'], handsOn: 'Multi-page app'},
      {id: 5, title: 'RxJS', topics: ['Observables', 'Operators', 'Subjects'], handsOn: 'Reactive programming'}
    ],
    projects: ['Enterprise Dashboard', 'CRM System', 'Admin Panel'],
    certification: 'Angular Developer Certificate'
  },
  {
    id: 'mysql-springboot',
    title: 'MySQL with Spring Boot',
    category: 'Backend',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.8,
    enrolledStudents: 16900,
    instructor: 'Yasaswi',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
    shortDescription: 'Master MySQL database with Spring Boot, JPA, Hibernate, and REST APIs.',
    description: 'Complete MySQL and Spring Boot course covering SQL, database design, JPA, Hibernate, REST APIs, and security.',
    prerequisites: ['Java basics', 'Basic SQL knowledge'],
    learningOutcomes: ['Design databases', 'Spring Boot', 'JPA/Hibernate', 'Build APIs'],
    modules: [
      {id: 1, title: 'SQL Fundamentals', topics: ['CRUD', 'Joins', 'Indexes', 'Transactions'], handsOn: 'SQL queries'},
      {id: 2, title: 'Database Design', topics: ['Normalization', 'ER Diagrams', 'Best Practices'], handsOn: 'Design database'},
      {id: 3, title: 'Spring Boot', topics: ['Setup', 'Auto-configuration', 'REST Controllers'], handsOn: 'Spring Boot API'},
      {id: 4, title: 'JPA & Hibernate', topics: ['Entities', 'Repositories', 'Relationships'], handsOn: 'ORM operations'},
      {id: 5, title: 'Security', topics: ['Spring Security', 'JWT', 'Authentication'], handsOn: 'Secure API'}
    ],
    projects: ['Banking API', 'E-commerce Backend', 'Inventory System'],
    certification: 'MySQL Spring Boot Developer Certificate'
  },
  {
    id: 'react-native',
    title: 'React Native',
    category: 'Mobile Development',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.9,
    enrolledStudents: 19300,
    instructor: 'Sravani',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    shortDescription: 'Build cross-platform mobile apps with React Native, navigation, and native modules.',
    description: 'Complete React Native course for iOS and Android development with navigation, state management, animations, and deployment.',
    prerequisites: ['React basics', 'JavaScript ES6+'],
    learningOutcomes: ['Build mobile apps', 'Cross-platform dev', 'Native modules', 'App deployment'],
    modules: [
      {id: 1, title: 'React Native Basics', topics: ['Components', 'Styling', 'Layout'], handsOn: 'First RN app'},
      {id: 2, title: 'Navigation', topics: ['React Navigation', 'Stack', 'Tabs', 'Drawer'], handsOn: 'Multi-screen app'},
      {id: 3, title: 'State Management', topics: ['Redux', 'Context', 'Async Storage'], handsOn: 'State management'},
      {id: 4, title: 'Native Features', topics: ['Camera', 'Location', 'Push Notifications'], handsOn: 'Native modules'},
      {id: 5, title: 'Deployment', topics: ['iOS Build', 'Android Build', 'App Stores'], handsOn: 'Publish app'}
    ],
    projects: ['Social App', 'Food Delivery App', 'Fitness Tracker'],
    certification: 'React Native Developer Certificate'
  },
  {
    id: 'aws-devops',
    title: 'AWS with DevOps',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    duration: '14 weeks',
    rating: 4.9,
    enrolledStudents: 14700,
    instructor: 'Anil',
    price: 149900,
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800',
    shortDescription: 'Master AWS cloud services, CI/CD, Docker, Kubernetes, and DevOps practices.',
    description: 'Comprehensive AWS and DevOps course covering EC2, S3, Lambda, Docker, Kubernetes, Jenkins, Terraform, and CI/CD pipelines.',
    prerequisites: ['Linux basics', 'Networking', 'Programming knowledge'],
    learningOutcomes: ['AWS services', 'CI/CD pipelines', 'Docker & Kubernetes', 'Infrastructure as Code'],
    modules: [
      {id: 1, title: 'AWS Fundamentals', topics: ['EC2', 'S3', 'IAM', 'VPC'], handsOn: 'Deploy on AWS'},
      {id: 2, title: 'Docker', topics: ['Containers', 'Images', 'Docker Compose'], handsOn: 'Containerize app'},
      {id: 3, title: 'Kubernetes', topics: ['Pods', 'Deployments', 'Services', 'Scaling'], handsOn: 'K8s deployment'},
      {id: 4, title: 'CI/CD', topics: ['Jenkins', 'GitLab CI', 'GitHub Actions'], handsOn: 'Build pipeline'},
      {id: 5, title: 'Infrastructure as Code', topics: ['Terraform', 'CloudFormation', 'Ansible'], handsOn: 'IaC project'}
    ],
    projects: ['Microservices Deployment', 'CI/CD Pipeline', 'Scalable Infrastructure'],
    certification: 'AWS DevOps Professional Certificate'
  },
  {
    id: 'tableau',
    title: 'Tableau Data Visualization',
    category: 'Data Analytics',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.7,
    enrolledStudents: 18200,
    instructor: 'Sai Krishna',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    shortDescription: 'Create interactive dashboards and visualizations with Tableau for data analysis.',
    description: 'Master Tableau for data visualization, dashboard creation, data connections, calculations, and storytelling.',
    prerequisites: ['Basic computer skills', 'Basic data understanding'],
    learningOutcomes: ['Create dashboards', 'Data visualization', 'Tableau Desktop', 'Data storytelling'],
    modules: [
      {id: 1, title: 'Tableau Basics', topics: ['Interface', 'Connect Data', 'Basic Charts'], handsOn: 'First visualization'},
      {id: 2, title: 'Advanced Visualizations', topics: ['Maps', 'Parameters', 'Sets'], handsOn: 'Complex charts'},
      {id: 3, title: 'Calculations', topics: ['Calculated Fields', 'LOD', 'Table Calculations'], handsOn: 'Advanced calculations'},
      {id: 4, title: 'Dashboards', topics: ['Dashboard Design', 'Actions', 'Filters'], handsOn: 'Interactive dashboard'},
      {id: 5, title: 'Storytelling', topics: ['Stories', 'Best Practices', 'Publishing'], handsOn: 'Data story'}
    ],
    projects: ['Sales Dashboard', 'HR Analytics', 'Financial Report'],
    certification: 'Tableau Specialist Certificate'
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    category: 'Security',
    level: 'Advanced',
    duration: '16 weeks',
    rating: 4.9,
    enrolledStudents: 12100,
    instructor: 'Charan',
    price: 149900,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
    shortDescription: 'Learn penetration testing, vulnerability assessment, and ethical hacking techniques.',
    description: 'Complete ethical hacking course covering reconnaissance, scanning, exploitation, web app security, and penetration testing methodologies.',
    prerequisites: ['Networking', 'Linux', 'Programming', 'Security basics'],
    learningOutcomes: ['Penetration testing', 'Vulnerability assessment', 'Exploit development', 'Security auditing'],
    modules: [
      {id: 1, title: 'Reconnaissance', topics: ['Footprinting', 'OSINT', 'Social Engineering'], handsOn: 'Information gathering'},
      {id: 2, title: 'Scanning', topics: ['Network Scanning', 'Port Scanning', 'Vulnerability Scanning'], handsOn: 'Scan networks'},
      {id: 3, title: 'Exploitation', topics: ['Metasploit', 'Exploit Development', 'Privilege Escalation'], handsOn: 'Exploit vulnerabilities'},
      {id: 4, title: 'Web App Security', topics: ['OWASP Top 10', 'XSS', 'SQL Injection'], handsOn: 'Web app testing'},
      {id: 5, title: 'Wireless Security', topics: ['WiFi Hacking', 'WPA/WPA2', 'Evil Twin'], handsOn: 'Wireless testing'},
      {id: 6, title: 'Reporting', topics: ['Documentation', 'Report Writing', 'Remediation'], handsOn: 'Pen test report'}
    ],
    projects: ['Network Pen Test', 'Web App Assessment', 'Complete Security Audit'],
    certification: 'Certified Ethical Hacker (CEH) Preparation'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing',
    level: 'Beginner',
    duration: '8 weeks',
    rating: 4.8,
    enrolledStudents: 22500,
    instructor: 'Yasaswi',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    shortDescription: 'Master SEO, social media marketing, Google Ads, content marketing, and analytics.',
    description: 'Complete digital marketing course covering SEO, SEM, social media, email marketing, content strategy, and analytics.',
    prerequisites: ['Basic computer skills', 'No marketing experience required'],
    learningOutcomes: ['SEO optimization', 'Social media marketing', 'Google Ads', 'Content strategy'],
    modules: [
      {id: 1, title: 'Digital Marketing Fundamentals', topics: ['Overview', 'Strategy', 'Channels'], handsOn: 'Marketing plan'},
      {id: 2, title: 'SEO', topics: ['On-page', 'Off-page', 'Technical SEO', 'Keywords'], handsOn: 'SEO optimization'},
      {id: 3, title: 'Social Media Marketing', topics: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'], handsOn: 'Social campaign'},
      {id: 4, title: 'Google Ads', topics: ['Search Ads', 'Display Ads', 'Bidding', 'Optimization'], handsOn: 'Ad campaign'},
      {id: 5, title: 'Analytics', topics: ['Google Analytics', 'Metrics', 'Reporting'], handsOn: 'Analytics setup'}
    ],
    projects: ['SEO Campaign', 'Social Media Strategy', 'Google Ads Campaign'],
    certification: 'Digital Marketing Professional Certificate'
  },
  {
    id: 'business-analytics',
    title: 'Business Analytics',
    category: 'Analytics',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.8,
    enrolledStudents: 16400,
    instructor: 'Sravani',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    shortDescription: 'Data analysis, business intelligence, predictive analytics, and decision-making.',
    description: 'Master business analytics with data analysis, Excel, Power BI, SQL, statistical analysis, and predictive modeling.',
    prerequisites: ['Basic statistics', 'Excel basics'],
    learningOutcomes: ['Data analysis', 'Business intelligence', 'Predictive analytics', 'Data-driven decisions'],
    modules: [
      {id: 1, title: 'Business Analytics Fundamentals', topics: ['Analytics Overview', 'KPIs', 'Metrics'], handsOn: 'KPI dashboard'},
      {id: 2, title: 'Advanced Excel', topics: ['Pivot Tables', 'VLOOKUP', 'Macros'], handsOn: 'Excel analysis'},
      {id: 3, title: 'SQL for Analytics', topics: ['Queries', 'Aggregations', 'Joins'], handsOn: 'SQL analysis'},
      {id: 4, title: 'Power BI', topics: ['Dashboards', 'DAX', 'Visualizations'], handsOn: 'BI dashboard'},
      {id: 5, title: 'Predictive Analytics', topics: ['Regression', 'Forecasting', 'ML basics'], handsOn: 'Predictive model'}
    ],
    projects: ['Sales Analytics', 'Customer Segmentation', 'Forecasting Model'],
    certification: 'Business Analytics Professional Certificate'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    category: 'Business',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.7,
    enrolledStudents: 19800,
    instructor: 'Anil',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    shortDescription: 'Start your business: idea validation, business model, funding, and scaling.',
    description: 'Complete entrepreneurship course covering ideation, validation, business planning, funding, marketing, and scaling.',
    prerequisites: ['Entrepreneurial mindset', 'No business experience required'],
    learningOutcomes: ['Validate ideas', 'Create business plan', 'Raise funding', 'Scale startup'],
    modules: [
      {id: 1, title: 'Entrepreneurial Mindset', topics: ['Innovation', 'Problem-solving', 'Risk-taking'], handsOn: 'Mindset exercises'},
      {id: 2, title: 'Idea Validation', topics: ['Market Research', 'MVP', 'Customer Discovery'], handsOn: 'Validate idea'},
      {id: 3, title: 'Business Model', topics: ['Business Model Canvas', 'Revenue Streams', 'Costs'], handsOn: 'Business model'},
      {id: 4, title: 'Funding', topics: ['Bootstrapping', 'Angel Investors', 'VC', 'Crowdfunding'], handsOn: 'Pitch deck'},
      {id: 5, title: 'Growth', topics: ['Marketing', 'Sales', 'Scaling', 'Team Building'], handsOn: 'Growth strategy'}
    ],
    projects: ['Business Plan', 'Pitch Deck', 'Growth Roadmap'],
    certification: 'Entrepreneurship Certificate'
  },
  {
    id: 'marketing-management',
    title: 'Marketing Management',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.7,
    enrolledStudents: 15600,
    instructor: 'Sai Krishna',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    shortDescription: 'Marketing strategy, brand management, consumer behavior, and market analysis.',
    description: 'Comprehensive marketing management covering strategy, branding, consumer behavior, market research, and campaign management.',
    prerequisites: ['Basic business knowledge'],
    learningOutcomes: ['Marketing strategy', 'Brand management', 'Market research', 'Campaign planning'],
    modules: [
      {id: 1, title: 'Marketing Fundamentals', topics: ['4Ps', 'Market Segmentation', 'Targeting'], handsOn: 'Marketing plan'},
      {id: 2, title: 'Consumer Behavior', topics: ['Psychology', 'Decision Making', 'Trends'], handsOn: 'Consumer analysis'},
      {id: 3, title: 'Brand Management', topics: ['Brand Equity', 'Positioning', 'Identity'], handsOn: 'Brand strategy'},
      {id: 4, title: 'Market Research', topics: ['Surveys', 'Focus Groups', 'Data Analysis'], handsOn: 'Research project'},
      {id: 5, title: 'Campaign Management', topics: ['Planning', 'Execution', 'Measurement'], handsOn: 'Marketing campaign'}
    ],
    projects: ['Marketing Strategy', 'Brand Launch', 'Campaign Analysis'],
    certification: 'Marketing Management Certificate'
  },
  {
    id: 'human-resource',
    title: 'Human Resource Management',
    category: 'HR',
    level: 'Intermediate',
    duration: '10 weeks',
    rating: 4.6,
    enrolledStudents: 14300,
    instructor: 'Charan',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    shortDescription: 'HR strategy, recruitment, training, performance management, and employee relations.',
    description: 'Complete HR management course covering recruitment, training, performance management, compensation, and organizational behavior.',
    prerequisites: ['Basic management knowledge'],
    learningOutcomes: ['HR strategy', 'Recruitment', 'Performance management', 'Employee development'],
    modules: [
      {id: 1, title: 'HR Fundamentals', topics: ['HR Role', 'Strategic HR', 'HR Functions'], handsOn: 'HR audit'},
      {id: 2, title: 'Recruitment & Selection', topics: ['Job Analysis', 'Sourcing', 'Interviewing'], handsOn: 'Hiring process'},
      {id: 3, title: 'Training & Development', topics: ['Training Needs', 'Program Design', 'Evaluation'], handsOn: 'Training program'},
      {id: 4, title: 'Performance Management', topics: ['Appraisals', 'Feedback', 'Development Plans'], handsOn: 'Performance system'},
      {id: 5, title: 'Employee Relations', topics: ['Engagement', 'Conflict Resolution', 'Culture'], handsOn: 'Engagement strategy'}
    ],
    projects: ['Recruitment Strategy', 'Training Program', 'Performance System'],
    certification: 'HR Management Professional Certificate'
  },
  {
    id: 'finance-management',
    title: 'Finance Management',
    category: 'Finance',
    level: 'Intermediate',
    duration: '12 weeks',
    rating: 4.8,
    enrolledStudents: 13800,
    instructor: 'Yasaswi',
    price: 99900,
    thumbnail: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800',
    shortDescription: 'Financial analysis, investment, budgeting, risk management, and corporate finance.',
    description: 'Master finance management with financial analysis, investment strategies, budgeting, risk management, and corporate finance principles.',
    prerequisites: ['Basic accounting', 'Mathematics'],
    learningOutcomes: ['Financial analysis', 'Investment decisions', 'Budget management', 'Risk assessment'],
    modules: [
      {id: 1, title: 'Financial Fundamentals', topics: ['Financial Statements', 'Ratios', 'Analysis'], handsOn: 'Financial analysis'},
      {id: 2, title: 'Investment Management', topics: ['Stocks', 'Bonds', 'Portfolio', 'Valuation'], handsOn: 'Investment portfolio'},
      {id: 3, title: 'Budgeting', topics: ['Budget Planning', 'Forecasting', 'Variance Analysis'], handsOn: 'Budget creation'},
      {id: 4, title: 'Risk Management', topics: ['Financial Risk', 'Hedging', 'Derivatives'], handsOn: 'Risk assessment'},
      {id: 5, title: 'Corporate Finance', topics: ['Capital Structure', 'M&A', 'Valuation'], handsOn: 'Corporate finance project'}
    ],
    projects: ['Financial Analysis', 'Investment Strategy', 'Budget Plan'],
    certification: 'Finance Management Certificate'
  },
  {
    id: 'power-bi',
    title: 'Power BI',
    category: 'Data Analytics',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.9,
    enrolledStudents: 20500,
    instructor: 'Yasaswi',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    shortDescription: 'Master Microsoft Power BI for business intelligence, data visualization, and interactive dashboards.',
    description: 'Complete Power BI course covering data modeling, DAX, visualizations, Power Query, and dashboard creation for business intelligence.',
    prerequisites: ['Basic Excel knowledge', 'Basic data understanding'],
    learningOutcomes: ['Create Power BI dashboards', 'Master DAX formulas', 'Data modeling', 'Power Query transformations'],
    modules: [
      {id: 1, title: 'Power BI Fundamentals', topics: ['Interface', 'Data Import', 'Basic Visuals', 'Reports'], handsOn: 'First Power BI report'},
      {id: 2, title: 'Power Query', topics: ['Data Transformation', 'M Language', 'Data Cleaning', 'Merge/Append'], handsOn: 'Transform data'},
      {id: 3, title: 'Data Modeling', topics: ['Relationships', 'Star Schema', 'Calculated Columns', 'Measures'], handsOn: 'Build data model'},
      {id: 4, title: 'DAX Formulas', topics: ['DAX Basics', 'Time Intelligence', 'Filter Context', 'Advanced DAX'], handsOn: 'DAX calculations'},
      {id: 5, title: 'Advanced Visualizations', topics: ['Custom Visuals', 'Drill-through', 'Bookmarks', 'Tooltips'], handsOn: 'Interactive dashboard'},
      {id: 6, title: 'Power BI Service', topics: ['Publishing', 'Sharing', 'Workspaces', 'Refresh'], handsOn: 'Deploy to service'}
    ],
    projects: ['Sales Dashboard', 'HR Analytics Dashboard', 'Financial Report'],
    certification: 'Microsoft Power BI Certificate'
  },
  {
    id: 'google-looker-studio',
    title: 'Google Looker Studio',
    category: 'Data Analytics',
    level: 'Beginner',
    duration: '5 weeks',
    rating: 4.8,
    enrolledStudents: 18700,
    instructor: 'Sravani',
    price: 69900,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    shortDescription: 'Create stunning data visualizations and reports with Google Looker Studio (formerly Data Studio).',
    description: 'Master Google Looker Studio for creating interactive dashboards, connecting data sources, and building stunning visualizations.',
    prerequisites: ['Basic computer skills', 'Google account'],
    learningOutcomes: ['Build Looker Studio dashboards', 'Connect data sources', 'Create calculated fields', 'Share reports'],
    modules: [
      {id: 1, title: 'Looker Studio Basics', topics: ['Interface', 'Data Connectors', 'Basic Charts', 'Filters'], handsOn: 'First dashboard'},
      {id: 2, title: 'Data Sources', topics: ['Google Sheets', 'BigQuery', 'Google Analytics', 'MySQL'], handsOn: 'Connect data'},
      {id: 3, title: 'Visualizations', topics: ['Charts Types', 'Tables', 'Maps', 'Scorecards'], handsOn: 'Create visuals'},
      {id: 4, title: 'Calculated Fields', topics: ['Formulas', 'Functions', 'Aggregations', 'Date Functions'], handsOn: 'Custom calculations'},
      {id: 5, title: 'Dashboard Design', topics: ['Layout', 'Themes', 'Interactivity', 'Best Practices'], handsOn: 'Professional dashboard'},
      {id: 6, title: 'Sharing & Collaboration', topics: ['Permissions', 'Embedding', 'Scheduling', 'PDF Export'], handsOn: 'Share reports'}
    ],
    projects: ['Marketing Dashboard', 'Website Analytics Report', 'Sales Performance Dashboard'],
    certification: 'Google Looker Studio Certificate'
  }
];

// Export the courses array
module.exports = courses;
