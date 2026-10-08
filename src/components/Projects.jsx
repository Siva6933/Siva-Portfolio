function Projects() {
  const projects = [
    {
      number: "01",
      title: "BookNest",
      description:
        "A full-stack online bookstore where users can browse books, manage their accounts, make purchases, and view their order history.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Siva6933/Book-Nestle",
    },
    {
      number: "02",
      title: "Fraudulent Account Classification",
      description:
        "A machine learning project that classifies potentially fraudulent accounts on online social networks using machine learning algorithms.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    },
    {
      number: "03",
      title: "YOLOv8 Object Detection",
      description:
        "An object detection project that identifies and detects objects in images and videos using the YOLOv8 model.",
      technologies: ["Python", "YOLOv8", "Google Colab"],
    },
    {
      number: "04",
      title: "Student Dashboard",
      description:
        "A full-stack student dashboard with authentication, student information, and an organized interface for managing student data.",
      technologies: ["React", "Express.js", "MongoDB", "JWT"],
    },
    {
      number: "05",
      title: "Team Task Manager",
      description:
        "A full-stack task management application that allows teams to create projects, assign tasks, track task status, and manage their work.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Siva6933/Team-Task-Manager",
    },
    {
      number: "06",
      title: "Recipe Finder",
      description:
        "A recipe discovery application that allows users to search for recipes and explore different meal options through a simple and responsive interface.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
    },
    {
      number: "07",
      title: "Thread Scheduling using C",
      description:
        "A thread scheduling demonstrator implemented in C using POSIX threads, featuring Round Robin and Priority scheduling algorithms.",
      technologies: ["C", "Pthreads", "Operating Systems"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <p className="section-label">My Work</p>

        <h2>Projects</h2>

        <p className="projects-intro">
          A selection of projects that showcase my experience with
          web development, programming, machine learning, and software
          development.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    ↗
                  </a>
                )}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-view-link"
                >
                  View on GitHub <span>→</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;