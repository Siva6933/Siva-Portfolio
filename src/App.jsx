import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>

            <h1>Munagala Siva Balaji</h1>

            <p className="hero-description">
              I build clean, responsive web experiences and full-stack
              applications with modern technologies. I enjoy turning ideas
              into practical and user-friendly digital solutions.
            </p>

            <div className="hero-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
              </a>

              <a href="/Resume.pdf" className="secondary-button">
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/profile.jpg"
              alt="Munagala Siva Balaji"
              className="profile-image"
            />
          </div>
        </section>

        {/* About Section */}
        <About />

        <Skills />

        <Projects />

        <Education />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;