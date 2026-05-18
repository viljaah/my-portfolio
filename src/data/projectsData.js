export const projectsData = [
    {
    id: 1,
    projectUrl: "currents",
    title: "Currents",
    description: "An ADHD-focused task management web app to help students break down academic work through AI.",
    technologies: ['React', 'Express', 'PostgreSQL'],
    imageUrl: "/images/currents-overview-closed.png",
    images: [
      "/images/currents-focus.png",
      "/images/currents-overview-closed.png",
      "/images/currents-overview-open.png",
      "/images/currents-chat.png",
      "/images/currents-calendar.png",
      "/images/currents-completed.png",
      "/images/currents-category.png",
      "/images/currents-task-modal.png"
    ],
    fullDescription: "Currents is my bachelor thesis project, built with a classmate for university students with ADHD who struggle with executive function challenges like planning, working memory, and task initiation. The app lets users break down academic tasks through a conversational AI, track step-by-step progress visually, and re-orient after breaks.",
    // contributors: [
    //   { name: "Modesta", link: "https://github.com/modestat" }
    // ],
    githubUrl: "https://github.com/viljaah/bachelor-project",
    // liveUrl: "",
    process: [
      "Before building anything, we needed to understand the problem properly. We started with a literature review on ADHD and executive function to figure out why academic tasks are so hard to start and stay on top of for students with ADHD. Then we ran a survey with students to see which challenges actually came up most in real life, and held a co-design workshop with students with ADHD who helped shape what the app should do. From all of this we landed on four things the app needed to support: breaking down tasks, seeing progress visually, small deadlines along the way, and feedback when finishing something.",
      "We built the backend on a PERN stack with a routes-controller-service architecture, covering auth, tasks, categories, steps, and the AI chat. The AI integration was the part we spent the most time thinking about. Instead of just using an API as is, we wrote the system prompt based on what came out of the research, so the AI helps users break tasks down in a way that supports the target group. The chat is tied to a specific task, so the steps the AI suggests can be approved and turned into actual checkable steps in that task.",
      "The pages maps back to the design requirements from the research. Focus shows what to pay attention to right now so users don't have to decide where to start, Overview gives the visual progress overview, and Calendar and Overdue handle the deadlines. The chat page is where the task breakdown happens, with the AI suggesting steps that users can approve and turn into checkable items in the task. Completed works as a simple archive of finished tasks."
    ],
    },
    {
    id: 2,
    projectUrl: "twitter-remake",
    title: "Twitter Remake",
    description: "A Twitter clone built with a focus on handling lots of users at once.",
    technologies: ['React', 'Express', 'Python', 'PostgreSQL', 'Docker'],
    imageUrl: "/images/twitter-homepage.png",
    images: [
      "/images/twitter-log-in.png",
      "/images/twitter-join.png",
      "/images/twitter-homepage.png",
      "/images/twitter-post.png",
      "/images/twitter-profile-settings.png",
      "/images/twitter-color-settings.png",
      "/images/twitter-fastapi.png",
      "/images/twitter-fastapi2.png"
    ],
    fullDescription: "This was a group project I had with a classmate for a social media platform similar to Twitter. First, we created the basic features with React, FastAPI, and PostgreSQL. Then added tools to help it handle more traffic, like load balancing, caching, and a system that batches likes together before saving them to the database.",
    // contributors: [
    //   { name: "Modesta", link: "https://github.com/modestat" }
    // ],
    githubUrl: "https://github.com/viljaah/twitter-remake-2",
    process: [
      "The project includes login/signup, searching for tweets, users, and hashtags, posting tweets, and user profiles. We started by planning out the database structure with five tables to handle users, tweets, hashtags, and who follows who. After that, we built the backend API using FastAPI with proper security like password hashing and JWT tokens that expire after 30 minutes. The frontend was built with React, keeping things organized with reusable components.",
      "When the app was working, we focused on making it handle more users. We set up Nginx as a load balancer to spread incoming requests across three cache servers. The caching system works in two layers, where one catches repeated API calls and another saves common database queries.",
      "The like feature got special attention because it can create a lot of database traffic. Instead of saving each like immediately, we built a batcher using SQLite that collects likes and saves them in groups. It updates the main database either when 10 likes pile up or after one minute passes, whichever comes first. Everything was deployed on Render with the frontend and backend running as separate services."
    ], 
  },
  {
    id: 3,
    projectUrl: "accessibility-project",
    title: "Accessibility Project",
    description: "A fully accessible wesite built with WCAG standards, keyboard navigation, and screen reader support.",
    technologies: ['HTML', 'CSS'],
    imageUrl: "/images/accessibility-homepage.png",
    images: [
      "/images/accessibility-homepage.png",
      "/images/accessibility-table.png",
      "/images/accessibility-form.png"
    ],
    fullDescription: "The project focused on creating a fully accessible website for users with different disabilities. The site features a recipe exchange platform where users can browse recipes and submit their own through an accessible form. Every aspect was designed with accessibility-first principles, ensuring equal access for all users regardless of their abilities.",
    liveUrl: "https://viljaah.github.io/accessibility-project/",
    githubUrl: "https://github.com/viljaah/accessibility-project",
    process: [
      "User Research: Created four detailed personas representing users with visual, mobility, auditory, and cognitive impairments. This research helped me understand what different users need and identify important accessibility requirements before development began.",
      "Accessibility Implementation: Built the site with semantic HTML, ARIA labels, keyboard navigation support (tabindex), and skip-to-content links. Implemented proper heading hierarchy, descriptive alt text for all images, and form validation with screen reader compatible error messages. All interactive elements are keyboard accessible and have clear focus indicators."
    ],
  },
  // {
  //   id: 4,
  //   projectUrl: "quiz-platform",
  //   title: "Quiz Platform",
  //   description: "A platform for creating studies where participants can rate different artifacts.",
  //   technologies: ['React', 'Express', 'MongoDB', 'Docker'],
  //   imageUrl: "/images/quiz-log-in.png",
  //   images: [
  //     "/images/quiz-log-in.png",
  //     "/images/quiz-homepage.png",
  //     "/images/quiz-create.png",
  //     "/images/quiz-create2.png",
  //     "/images/quiz-participant.png",
  //     "/images/quiz-results.png"
  //   ],
  //   fullDescription: "A full-stack web platform designed for researchers to run comparative studies. The system lets researchers create stuides with different question types (multiple choice, text, ranked), upload different artifact formats, and collect participant responses. We also implemented artifact randomization using Latin square, customizable consent forms and demographics, and data export in JSON or CSV formats.",
  //   liveUrl: "https://group6.sustainability.it.ntnu.no/",
  //   githubUrl: "https://github.com/miasannstud/webproject",
  //   process: [
  //     "This project was built by a team of four with input from our professor, who worked as the role of product owner. We started by meeting with the product owner to understand what researchers needed. The main problem was that existing survey tools like Google Forms couldn't handle comparing multiple artifacts well. After some planning, we split up the backend work between team members. I took on building the study and session functionality, which meant creating the database schemas, API endpoints for managing studies, and all the logic for handling participant sessions and storing their answers.",
  //     "When we had the backend working, we moved to the frontend using React. I built several key components including the dashboard where researchers manage their studies, the results page that shows participant data, and parts of the participant flow like the consent form and question displays.",
  //     "The deployment process was a learning experience. We used Docker to containerize the frontend and backend, then set up GitHub Actions to automatically build and push new images whenever we merged to main. From there, we wrote bash scripts to pull those images and restart the containers on the school server. Working as a team of four meant coordinating who was working on what, handling merge conflicts, and making sure our different pieces fit together. We used feature branches and had regular meetings to stay aligned, which kept the project moving smoothly even when we ran into issues like one team member falling behind."
  //   ],    
  // }
];
