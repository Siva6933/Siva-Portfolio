function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "balu85507@gmail.com",
      href: "mailto:balu85507@gmail.com",
      icon: "✉",
    },
    {
      label: "LinkedIn",
      value: "Munagala Siva Balaji",
      href: "https://www.linkedin.com/in/munagala-siva-balaji-828499306",
      icon: "in",
    },
    {
      label: "GitHub",
      value: "Siva6933",
      href: "https://github.com/Siva6933",
      icon: "⌘",
    },
    {
      label: "HackerRank",
      value: "balu85507",
      href: "https://www.hackerrank.com/profile/balu85507",
      icon: "</>",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-heading">
          <p className="section-label">Contact</p>

          <h2>Let's Connect</h2>

          <p className="contact-description">
            I'm open to opportunities, collaborations, and conversations
            about web development, software projects, and new ideas.
          </p>
        </div>

        <div className="contact-grid">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={
                contact.label === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="contact-card"
            >
              <div className="contact-icon">
                {contact.icon}
              </div>

              <div className="contact-info">
                <span>{contact.label}</span>
                <strong>{contact.value}</strong>
              </div>

              <div className="contact-arrow">↗</div>
            </a>
          ))}
        </div>

        <div className="contact-bottom">
          <span>Have an opportunity?</span>

          <a href="mailto:balu85507@gmail.com">
            Let's talk →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;