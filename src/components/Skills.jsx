function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building responsive and user-friendly interfaces",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      description: "Developing server-side applications and APIs",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Programming",
      description: "Programming languages and development fundamentals",
      skills: ["Python", "Java", "C", "OOP"],
    },
    {
      title: "Database",
      description: "Working with relational and NoSQL databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Core Concepts",
      description: "Understanding important computer science concepts",
      skills: ["Operating Systems"],
    },
    {
      title: "Tools",
      description: "Tools I use for development and collaboration",
      skills: ["Git", "GitHub", "VS Code", "MS Office"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <p className="section-label">My Skills</p>

        <h2>Technologies I Work With</h2>

        <p className="skills-intro">
          A collection of technologies and tools I use to build projects,
          solve problems, and continuously improve my development skills.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <div className="skill-card-top">
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="skill-icon">
                  {index === 0 && "◆"}
                  {index === 1 && "⌘"}
                  {index === 2 && "</>"}
                  {index === 3 && "▣"}
                  {index === 4 && "⚙"}
                  {index === 5 && "✦"}
                </div>
              </div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;