"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Analysis of Hypertension Levels in East Java Province",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Dashboard"],
    gitUrl: "https://github.com/Kurniaman/Visualisasi-OpenDataJabar",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dashboard KPI (Finance, L&G, Customer, Internal Process)",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Dashboard Coffe Chain",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Dashboard Flood : Based on Clustering and Prediction Flood",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Dashboard Credit Card",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Dashboard Covid Indonesia",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Dashboard"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Final Project Dicoding : Image Classification",
    description: "Project 5 description",
    image: "/images/projects/7.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Sentiment Analysis with Decision Tree dan GridSearchCV",
    description: "Project 5 description",
    image: "/images/projects/8.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Prediction Clothing Sales with ARIMA model",
    description: "Project 5 description",
    image: "/images/projects/9.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "K-Means Clustering using RFM Analysis variable ",
    description: "Project 5 description",
    image: "/images/projects/10.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Hypotesis Testing",
    description: "Project 5 description",
    image: "/images/projects/11.png",
    tag: ["All", "Statistics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Confidence Interval",
    description: "Project 5 description",
    image: "/images/projects/12.png",
    tag: ["All", "Statistics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Uji Reabilitas dan Validitas",
    description: "Project 5 description",
    image: "/images/projects/13.png",
    tag: ["All", "Statistics"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Project ETL - Selection of New Strikers and Midfielders",
    description: "Project 5 description",
    image: "/images/projects/14.png",
    tag: ["All", "ETL"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Dashboard"
          isSelected={tag === "Dashboard"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Statistics"
          isSelected={tag === "Statistics"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ETL"
          isSelected={tag === "ETL"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
