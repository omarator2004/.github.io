/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Omar Alaa",
  title: "Hi all, I'm Omar",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1lyJjuSLozvo3fIJfOpa9chGPnuzAgmfu", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/omarator2004",
  linkedin: "https://www.linkedin.com/in/omar-alaa-20o04/",
  gmail: "omaralaa2004@gmail.com",
  // Instagram and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "ENGINEERING STUDENT | AI & COMPUTER VISION ENTHUSIAST",
  skills: [
    "⚡ Developing real-world computer vision projects with OpenCV and MediaPipe",
    "⚡ Building interactive interfaces with Python and Gradio",
    "⚡ Writing efficient and clean code in Python with NumPy, Pandas, and Scikit-learn",
    "⚡ Deploying lightweight AI tools optimized for real-time use on limited hardware",
    "⚡ Working with hardware-related systems: microcontrollers, sensors, and digital circuits",
    "⚡ Constantly learning about generative AI, model optimization, and embedded intelligence"
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "OpenCV",
      fontAwesomeClassname: "logos:opencv",
    },
    {
      skillName: "MediaPipe",
      fontAwesomeClassname: "simple-icons:mediapipe",
    },
    {
      skillName: "Gradio",
      fontAwesomeClassname: "simple-icons:gradio",
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "logos:tensorflow",
    },
    {
      skillName: "NumPy",
      fontAwesomeClassname: "logos:numpy",
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "akar-icons:github-fill",
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "logos:visual-studio-code",
    }
  ],
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Faculty of Engineering",
      logo: "https://tse4.mm.bing.net/th/id/OIP.K7mjniVIR2jRCSsOCrS-YQHaD4?w=600&h=315&rs=1&pid=ImgDetMain&o=7&rm=3",
      subHeader: "Bachelor of Electronics and Communication Engineering",
      duration: "Expected Graduation: 2027",
      desc: "Studying core subjects in digital design, embedded systems, signal processing, and data science applications.",
      grade: "",
      descBullets: [
        "Trained in AI with focus on computer vision and machine learning",
        "Completed capstone project in real-time virtual keyboard using hand tracking"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python & AI Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Computer Vision (OpenCV, MediaPipe)",
      progressPercentage: "80%"
    },
    {
      Stack: "Web Interfaces (Gradio, HTML/CSS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Embedded Systems & Microcontrollers",
      progressPercentage: "65%"
    },
    {
      Stack: "Git & Version Control",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Computer Vision Trainee",
      company: "NTI (National Telecommunication Institute)",
      companylogo: require("./assets/images/ntiLogo.png"), // You can replace with any logo
      date: "July 2025 – August 2025",
      desc: "Developed a real-time virtual keyboard using OpenCV and MediaPipe as part of NTI's Computer Vision capstone program.",
      descBullets: [
        "Designed a multi-hand detection virtual keyboard with pinch-based input",
        "Implemented hover/press effects, caps lock & shift support using logic handling",
        "Optimized usability for real-time input on CPU devices"
      ]
    },
    {
      role: "Data Science Trainee",
      company: "DEPI (Digital Egypt Pioneers Initiative)",
      companylogo: require("./assets/images/depiLogo.png"),
      date: "November 2024 – May 2025",
      desc: "Completed intensive data science training focused on Python, machine learning, and AI fundamentals.",
      descBullets: [
        "Learned core concepts of supervised/unsupervised ML and model evaluation",
        "Worked with Python libraries like NumPy, Pandas, Scikit-learn, and Matplotlib",
        "Built multiple mini-projects including classification, clustering, and regression tasks"
      ]
    }
  ]
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "REAL-WORLD TOOLS AND AI PROJECTS I BUILT FROM SCRATCH",
  projects: [
    {
      image: require("./assets/images/keyboard.png"), // Replace with an actual image if you want
      projectName: "Virtual Keyboard",
      projectDesc:
        "A real-time virtual keyboard using OpenCV and MediaPipe. Supports multi-hand tracking, pinch-to-type, shift/caps lock toggling, and smooth UI feedback.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/omarator2004/virtual-keyboard"
        }
      ]
    },
    {
      image: require("./assets/images/enhancer.png"),
      projectName: "Photo Enhancer",
      projectDesc:
        "Built a lightweight, CPU-friendly image enhancement tool using OpenCV, CLAHE, and soft denoising. Fully deployed using Gradio on Hugging Face.",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://huggingface.co/spaces/omarator2004/photo-enhancer"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/omarator2004/photo_enhancer"
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications, Training Programs, and Milestones I've completed on my journey into Data Science and AI",

  achievementsCards: [
    {
      title: "Data Science Nanodegree – NTI AI Program",
      subtitle:
        "Completed a comprehensive data science track covering Python, machine learning, and real-world AI projects.",
      image: require("./assets/images/ntiLogo.png"), // Replace with NTI logo if available
      imageAlt: "NTI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://example.com/datascience-cert" // Replace with your real certificate URL
        }
      ]
    },
    {
      title: "Computer Vision Capstone – Virtual Keyboard",
      subtitle:
        "Built an AI-powered virtual keyboard using OpenCV and MediaPipe, capable of real-time hand tracking and gesture-based typing.",
      image: require("./assets/images/opencv.png"), // Optional - placeholder
      imageAlt: "OpenCV Logo",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/omarator2004/virtual-keyboard"
        }
      ]
    },
    {
      title: "Photo Enhancer Deployment",
      subtitle:
        "Designed and deployed an efficient image enhancer using OpenCV and Gradio on Hugging Face. CPU-friendly, real-time clarity boost.",
      image: require("./assets/images/huggingface.png"), // Optional - placeholder
      imageAlt: "Hugging Face Logo",
      footerLink: [
        {
          name: "Live Demo",
          url: "https://huggingface.co/spaces/omarator2004/photo-enhancer"
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/omarator2004/photo_enhancer"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section (Hidden)
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section
};

// Talks Section (Hidden)
const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section
};

// Podcast Section (Hidden)
const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section
};

// Twitter Section (Hidden)
const twitterDetails = {
  userName: "",
  display: false // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+201064997315",
  email_address: "omaralaa2004@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails,
  contactInfo,
  isHireable,
  resumeSection
};
