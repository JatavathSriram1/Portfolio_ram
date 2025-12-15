import { CandidateProfile } from './types';

export const CANDIDATE_DATA: CandidateProfile = {
  name: "Jatavath Sri Ram",
  title: "Data Science & Mathematical Sciences Student",
  location: "IIT (BHU), Varanasi",
  email: "jatavathsriram3328@gmail.com",
  phone: "+91 9177653328",
  address: "Rathya naik thanda, Gottimukkala, Devarakonda, Telangana 508248",
  linkedin: "https://www.linkedin.com/in/jatavath-sriram-5-year-idd-mathematical-sciences-80500322a/",
  github: "https://github.com/JatavathSriram1",
  avatar: "https://github.com/JatavathSriram1.png",
  summary: "Integrated Dual Degree student in Mathematical Sciences at IIT (BHU) Varanasi with a strong foundation in Data Science, Machine Learning, and Optimization. Passionate about leveraging advanced mathematical techniques and GenAI for solving real-world problems. Experienced in data analytics, computer vision, and creating efficient algorithms with practical industry applications.",
  
  experience: [
    {
      title: "Data Science Intern",
      company: "Blue Blots",
      location: "Hyderabad",
      period: "May 2025 - July 2025",
      description: "Worked on retail sales analysis and prediction projects using Python and advanced machine learning techniques.",
      highlights: [
        "Conducted Retail Sales Analysis and prediction using Python and Pandas on large datasets to extract key insights",
        "Performed Data cleaning, Feature Engineering, and Outlier removal to improve Data quality and model accuracy",
        "Created rich Data Visualizations with Matplotlib and Seaborn to uncover sales patterns and business trends",
        "Applied Time Series Analysis techniques to detect Sales trends, Seasonal patterns, and optimize inventory"
      ],
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Random Forest", "XGBoost"]
    }
  ],
  
  education: [
    {
      degree: "Integrated Dual Degree in Mathematical Sciences",
      school: "IIT (BHU), Varanasi",
      year: "2026 (Expected)",
      cgpa: "6.74 CGPA"
    },
    {
      degree: "Intermediate (XII) - TSBIE",
      school: "TTWR Junior College (Boys)",
      year: "2021",
      cgpa: "96.40%"
    },
    {
      degree: "Secondary School (X) - TSBSE",
      school: "St Mary's High School",
      year: "2019",
      cgpa: "92.15%"
    }
  ],
  
  skills: {
    "Programming Languages": ["Python", "SQL", "MATLAB"],
    "Tools & Technologies": ["MS Excel", "Power BI", "n8n", "TensorFlow", "Streamlit"],
    "Data Science": ["Data Profiling", "Data Cleaning", "Feature Engineering", "Data Visualization", "Time Series Analysis"],
    "Machine Learning": ["Scikit-learn", "Random Forest", "XGBoost", "Computer Vision", "Deep Learning"],
    "Databases": ["DBMS", "SQL"],
    "Mathematics": ["Statistics", "Calculus", "Optimization", "ADMM Techniques"]
  },
  
  projects: [
    {
      name: "Efficient Optimization Algorithm for Image Compression",
      description: "Developed a novel three-block iterative algorithm ensuring reliable global convergence. Applied the method to image compression, achieving high accuracy with reduced storage cost. Showcased the algorithm's robustness and scalability for large, real-world data problems.",
      tech: ["MATLAB", "ADMM", "Optimization", "Image Processing"],
      link: "https://www.sciencedirect.com/science/article/pii/S0377042724007313?via%3Dihub"
    },
    {
      name: "Dynamic CSV Data Dashboard",
      description: "Built a dual-mode data dashboard: interactive Streamlit UI and robust CLI fallback for non-GUI environments. Automated data profiling, schema extraction, correlation analysis, and visualization across CSV datasets. Delivered interactive filtering, pivot tables, and exportable charts/reports.",
      tech: ["Python", "Streamlit", "Pandas", "CLI", "Data Visualization"],
      link: "https://github.com/JatavathSriram1/CSV-Visualizer-"
    },
    {
      name: "Efficient Deep Learning Model for Image Reconstruction",
      description: "Developed a convolutional autoencoder in TensorFlow to compress and reconstruct handwritten digit images. Optimized the data processing workflow by implementing a tf.data pipeline, significantly improving training efficiency. Trained on MNIST dataset with high-fidelity reconstruction results.",
      tech: ["TensorFlow", "Deep Learning", "Autoencoder", "MNIST", "Computer Vision"]
    }
  ],
  
  certifications: [
    {
      name: "Oracle Certification",
      description: "Demonstrated validated expertise in Oracle technologies and applications",
      link: "https://drive.google.com/file/d/1BfCvhlOOa9hNgeyUOBW4VPKiCThw0pGn/view"
    },
    {
      name: "Forage Technology Apprenticeship",
      description: "Gained skills in role understanding and technology applications",
      link: "https://drive.google.com/file/d/1t8rspoOk-Ytuzmj-MrFOIZU5-SdZ7qkf/view"
    },
    {
      name: "Member at AIMTDR 2023",
      description: "Organized by IIT (BHU), Varanasi, for research on ADMM convex programming",
      link: "https://drive.google.com/file/d/1ckk-Sfdwh96Oal-Zb8tF5rkBxCEyBuFk/view"
    }
  ],
  
  responsibilities: [
    {
      title: "Operation Manager",
      event: "KASHIYATRA 2024",
      organization: "Annual Socio-cultural Festival of IIT (BHU) Varanasi",
      period: "19th - 21st January, 2024",
      description: "Managed the smooth execution and coordination of event logistics and activities"
    },
    {
      title: "Hockey Coordinator",
      event: "Spardha'22 and General Championship'23",
      organization: "IIT (BHU) Varanasi",
      period: "2022 - 2023",
      description: "Prepared fixtures for Hockey matches to ensure the smooth and efficient running of the championship"
    },
    {
      title: "Team Captain",
      event: "General Championship League '23",
      organization: "Sport's Council of IIT (BHU) Varanasi",
      period: "2023",
      description: "Led the team as captain, demonstrating strategic leadership and fostering team coordination to achieve championship success"
    }
  ],
  
  achievements: [
    "Won Silver Medal in Hockey at 55th Inter IIT Sports Meet'22, Demonstrating Athleticism and Competitive Spirit",
    "Won Gold Medal in Hockey Tournament in General Championship '23 organised by Sport's Council of IIT(BHU) Varanasi",
    "On National Sports Day, secured Gold Medal in the prestigious Dhyan Chand Hockey Tournament",
    "Secured an Impressive Rank of 1751 among 2,50,000+ candidates in the TS EAMCET 2021 Engineering Stream, marking a remarkable achievement",
    "Felicitated by Minister Satyavathi Rathod on Janjatiya Gaurav Divas for achieving AIR 358 (ST) during Azadi Ka Amrit Mahotsav"
  ],
  
  interests: ["GenAI", "Data Analytics", "Statistics", "Machine Learning", "Computer Vision", "Calculus and Optimization"]
};