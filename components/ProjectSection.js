import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "CollegeSpace",
    description:
      "AI based profile recommendation platform for students to find project partners in college.",
    tags: ["react-native", "mysql", "flask", "android"],
    isProtected: true,
    gitHubLink: null,
    liveLink: null,
  },
  {
    name: "Plant Notifier",
    description:
      "Android app to notify you when your plant needs water or fertilizer.",
    tags: [
      "android",
      "jetpack-compose",
      "kotlin",
      "room-db",
      "hilt",
      "flow",
      "mvvm",
    ],
    isProtected: true,
    gitHubLink: null,
    liveLink: null,
  },
  {
    name: "Code Type",
    description:
      "Practice code-typing with top 1000 keywords of the most popular programming languages.",
    tags: ["nextjs", "tailwindcss"],
    isProtected: false,
    gitHubLink: "https://github.com/siddheshkothadi/code-type",
    liveLink: "https://code-type.vercel.app/",
  },
  {
    name: "Health Appointment Application",
    description:
      "A web-app to book appointments or virtual-appointments with doctors.",
    tags: ["mern", "react", "express", "mongodb", "nodejs"],
    isProtected: false,
    gitHubLink:
      "https://github.com/Project-Based-Learning-IT/healthcare-appointment-scheduling-app",
    // liveLink: "https://healthcareapp.netlify.app/",
    liveLink: null,
  },
  {
    name: "Easy Notes",
    description:
      "A minimal, simple web-app to keep notes. Helps you create, edit, delete notes in a simple manner.",
    tags: ["react", "express", "mongodb", "nodejs"],
    isProtected: false,
    gitHubLink: "https://github.com/siddheshkothadi/notes-frontend",
    liveLink: "https://easy-notes.azurewebsites.net/",
  },
  {
    name: "Shopkart",
    description:
      "An android app to buy products. Built to demonstrate the best architecture practices in Android",
    tags: ["android", "mvvm"],
    isProtected: false,
    gitHubLink: "https://github.com/siddheshkothadi/Shopkart",
    liveLink: null,
  },
];

export default function ProjectSection() {
  return (
    <div className="w-11/12 flex pt-20 flex-col pb-8" id="projects">
      <p className="text-2xl font-semibold text-textHeadBlack dark:text-drForeGround">
        Projects
      </p>
      {/* <div className="flex flex-col md:flex-row w-full mt-6 flex-wrap"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
