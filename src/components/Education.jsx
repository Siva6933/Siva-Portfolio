function Education() {
  const education = [
    {
      year: "2022-2026",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "KSRM College of Engineering",
      description:
        "Completed B.Tech in Computer Science and Engineering with a focus on programming, web development, databases, and software technologies.",
    },
    {
      year: "2020-2022",
      degree: "Intermediate",
      field: "Higher Secondary Education",
      institution: "New Vikram Junior College",
      description:
        "Completed Intermediate education and developed a strong foundation in academic and technical fundamentals.",
    },
    {
      year: "2020",
      degree: "Secondary School Certificate",
      field: "SSC",
      institution: "S.V.R. High School",
      description:
        "Completed secondary school education and built a strong foundation in core academic subjects.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <p className="section-label">Education</p>

        <h2>My Academic Journey</h2>

        <p className="education-intro">
          My educational journey has helped me build a strong foundation
          in computer science, programming, and problem-solving.
        </p>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="education-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="education-card">
                <div className="education-year">
                  {item.year}
                </div>

                <div className="education-content">
                  <h3>{item.degree}</h3>

                  <h4>{item.field}</h4>

                  <p className="college-name">
                    {item.institution}
                  </p>

                  <p className="education-description">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;