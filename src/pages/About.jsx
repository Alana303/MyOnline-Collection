import React, { useEffect } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaMugHot,
} from "react-icons/fa";

const About = () => {
  // Scroll to top button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Fade-in animations
    const faders = document.querySelectorAll(".fade-in-section");
    const appearOptions = { threshold: 0.2 };

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
      });
    }, appearOptions);

    faders.forEach((fader) => appearOnScroll.observe(fader));

    // Cleanup observer on unmount
    return () => {
      faders.forEach((fader) => appearOnScroll.unobserve(fader));
      appearOnScroll.disconnect();
    };
  }, []);

  return (
    <div className="about-page dark-mode">
      {/* ABOUT SECTION */}
      <section id="about" className="about fade-in-section">
        <div className="about-content">
          <div className="about-img">
            <img src="/images/Romeo1.png" alt="Jeff Amayo" />
          </div>

          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="tagline">
              Building purposeful technology, one line of code at a time.
            </p>

            <p>
              I’m <strong>Jeff Fortune Amayo</strong>, a{" "}
              <em>Bachelor of Business Information Technology (BBIT)</em>{" "}
              graduate from
              <strong> Mount Kenya University (Class of 2025)</strong>. My
              career mission is simple yet powerful: to design and build
              <b> secure, intuitive, and impactful digital solutions</b> that
              bridge the gap between technology and real-world business needs.
            </p>

            <p>
              My journey has allowed me to merge{" "}
              <b>software engineering expertise</b> with{" "}
              <b>business problem-solving skills</b>. From developing
              <b> web applications</b> and <b>expense tracking systems</b> to
              managing <b>databases</b> and designing visuals that communicate
              with clarity, I thrive where creativity meets logic.
            </p>

            <p>
              Beyond technical execution, I value professionalism, integrity,
              and collaboration. Whether working on independent projects or
              contributing within teams, I bring{" "}
              <strong>discipline, adaptability, and a growth mindset</strong>{" "}
              into every endeavor.
            </p>

            <h3 className="subtitle">
              <FaLayerGroup className="accent" /> Core Competencies
            </h3>

            <div className="skills-row">
              <span className="skill-badge">
                FrontEnd Frameworks: HTML5, CSS3, Vanilla JavaScript, Bootstrap
                CSS, ReactJs
              </span>
              <span className="skill-badge">
                Database Management: MySQL/MariaDB, phpMyAdmin, SQLite, Oracle
                Database
              </span>
              <span className="skill-badge">Agile Project Collaboration</span>
              <span className="skill-badge">
                Professional Graphic Design: Proficient in Adobe Suite
                (Photoshop CS6 Extended & Illustrator) and Canva.
              </span>
            </div>

            <h3 className="subtitle">
              <FaMapMarkerAlt className="accent" /> Location & Availability
            </h3>

            <p>
              I’m based in <strong>Nairobi, Kenya</strong> 🇰🇪 and available for{" "}
              <b>freelance, remote, or full-time roles</b>. I welcome
              opportunities to contribute to impactful projects where technology
              drives growth and positive change.
            </p>

            <h3 className="subtitle">
              <FaMugHot className="accent" /> Beyond the Code
            </h3>

            <ul className="fun-list">
              <li>🎧 Lo-fi beats and black coffee fuel my coding sprints</li>
              <li>📷 Capturing urban stories through street photography</li>
              <li>🎮 Gaming and experimenting with pixel art design</li>
            </ul>

            <div className="resume-action">
              <a href="/files/JEFF-FORTUNE-AMAYO-CV.pdf"
              download className="resume-link">
                <i className="fa fa-download"></i>View My Work 
              </a>
            </div>

            
            <div className="social-links">
              <a href="mailto:jeffamayo050@gmail.com" title="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://linkedin.com/in/jeffamayo"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Alana303"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
            
            </div>
          </div>
        </div>
      </section>
{/* TIMELINE SECTION */}
<section className="timeline-section fade-in-section">
  <h2 className="section-title center">Professional Experience</h2>

  <div className="timeline">
    {/* KRA */}
    <div className="timeline-item">
      <div className="timeline-date">May 2024 – Oct 2024</div>

      <div className="timeline-content">
        <div className="timeline-images">
          <img
            src="/images/Uni8.png"
            alt="Kenya Revenue Authority Logo"
          />
        </div>

        <div className="timeline-text">
          <h3>💼 Data Analytics Intern — Kenya Revenue Authority</h3>

          <p>
            Supported organizational decision-making by collecting, cleaning,
            analyzing, and visualizing data across multiple datasets. Performed
            basic data analysis using <b>Excel</b>, <b>SQL</b>, and <b>Python</b>{" "}
            to identify trends, patterns, and actionable insights.
          </p>

          <p>
            Created simple dashboards and visual reports to help teams interpret
            key metrics and improve internal processes, while ensuring data
            accuracy and consistency throughout the analysis workflow.
          </p>
        </div>
      </div>

      <div className="timeline-side-note">
        <p>
          “This role strengthened my ability to transform raw data into clear,
          meaningful insights that support operational and analytical
          decision-making.”
        </p>
      </div>
    </div>

    {/* FinSense */}
    <div className="timeline-item">
      <div className="timeline-date">May 2024 – Oct 2024</div>

      <div className="timeline-content">
        <div className="timeline-images">
          <img src="/images/Uni6.jpeg" alt="FinSense Africa Logo" />
        </div>

        <div className="timeline-text">
          <h3>💼 Front-End Web Development Intern — FinSense Africa</h3>

          <p>
            Assisted in maintaining and updating front-end components to improve
            performance, usability, and overall user experience. Collaborated
            closely with developers and designers to translate <b>UI/UX
            designs</b> into functional, responsive interfaces.
          </p>

          <p>
            Built and optimized user-friendly web pages using <b>HTML5</b>,
            <b>CSS3</b>, <b>Bootstrap</b>, <b>Vanilla JavaScript</b>, and{" "}
            <b>ReactJS</b>. Tested and debugged web pages to ensure
            cross-browser compatibility, accessibility, and smooth interaction.
          </p>

          <p>
            Used <b>Git/GitHub</b> for version control and team collaboration,
            while supporting tasks such as optimizing page load speed and
            improving front-end accessibility.
          </p>
        </div>
      </div>

      <div className="timeline-side-note">
        <p>
          “This experience bridged the gap between design and development,
          teaching me how to build responsive interfaces that balance performance,
          usability, and clean code.”
        </p>
      </div>
    </div>
  </div>
</section>

      {/* GRAPHIC DESIGN SECTION */}
      <section className="graphic-design-section fade-in-section">
        <h2 className="section-title center">
          Checkout my Graphic Design Portfolio
        </h2>
        <p className="section-sub center">
          A showcase of my creative works - from branding and posters to social
          media graphics, courtesy of<b> Adobe Photoshop CS6 Extended and Canva</b>,
          with a focus on clean, engaging aesthetics.
        </p>

        <div className="graphic-grid">
          <div className="graphic-item">
            <img
              src="/images/Lava3.jpg"
              alt="Branding Design"
              loading="lazy"
            />
            <h3>Logo Design</h3>
          </div>

          <div className="graphic-item">
            <img src="/images/1235.jpg" alt="Social Media Poster" loading="lazy" />
            <h3>Business Card Design</h3>
          </div>

          <div className="graphic-item">
            <img src="/images/Lava2.jpg" alt="Event Flyer" loading="lazy" />
            <h3>Event Flyer</h3>
          </div>

          <div className="graphic-item">
            <img
              src="/images/Lava1.jpg"
              alt="Product Ad Design"
              loading="lazy"
            />
            <h3>Product Advertisement</h3>
          </div>
        </div>

        <div className="view-portfolio center">
          <a
            href="https://jeffamayographicdesignportfolio.my.canva.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            <i className="fa fa-external-link"></i> View My Work
          </a>
        </div>
      </section>

      {/* ACADEMIC JOURNEY */}
      <section className="timeline-section fade-in-section">
        <h2 className="section-title center">My Academic Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Sept 2021 – Aug 2025</div>
            <div className="timeline-content">
              <div className="timeline-images">
                <img src="/images/Uni.jpeg" alt="MKU Logo" />
                <img src="/images/Riri1.jpg" alt="Graduation Day" />
                <img src="/images/Riri2.jpg" alt="Cap & Gown" />
              </div>
              <div className="timeline-text">
                <h3>
                  🎓 Mount Kenya University – Bachelor of Business Information
                  Technology (BBIT)
                </h3>
                <p>
                  Graduated in <b>August 2025</b> with a Second Class Lower
                  Division. My journey at MKU shaped me in
                  <b> Web Development</b>, <b>Database Systems</b>, and{" "}
                  <b>IT Project Management</b>.
                </p>
              </div>
            </div>
            <div className="timeline-side-note">
              <p>
                “MKU wasn’t just a university—it was the launchpad for my
                creative and technical evolution.”
              </p>
            </div>
          </div>

          <div className="timeline-item">
  <div className="timeline-date">June 2025 – Aug 2025</div>

  <div className="timeline-content">
    <div className="timeline-images">
      <img
        src="/images/Graphic1.jpg"
        alt="Talons Institute Logo"
      />
    </div>

    <div className="timeline-text">
      <h3>
        📘 Certificate in Professional Graphic – Quality Graphics Academy
      </h3>

     <p>
      Completed professional training in graphic design, developing practical
      expertise in visual communication, layout design, and digital content
      creation. The program emphasized hands-on use of <b>Adobe Photoshop CS6
      Extended</b> for creating high-quality graphics, branding materials, and
      polished visual assets for print and digital platforms.
    </p>

    </div>
  </div>

  <div className="timeline-side-note">
    <p>
      “This certification established the digital foundation that enabled my
      growth into professional graphic design.”
    </p>
  </div>
</div>

          <div className="timeline-item">
            <div className="timeline-date">Aug 2021 – Sep 2021</div>
            <div className="timeline-content">
              <div className="timeline-images">
                <img
                  src="/images/Uni2.jpeg"
                  alt="Talons Institute Logo"
                />
              </div>
              <div className="timeline-text">
                <h3>
                  📘 Certificate: Computer Application Packages & ICT LEVEL (1) –
                  Talons Institute
                </h3>
                <p>
                  Attained a distinction<b>: Grade A in August 2021.</b> This
                  program strengthened my digital fluency through the mastery of
                  the <b>Microsoft Office Suite</b> and related productivity
                  tools, laying the groundwork for the more advanced IT studies.
                </p>
              </div>
            </div>
            <div className="timeline-side-note">
              <p>“This certificate laid the groundwork for my digital fluency.”</p>
            </div>
          </div>

           


        </div>
      </section>

      {/* INDUSTRY CERTIFICATIONS SECTION */}
<section className="testimonials fade-in-section">
  <h2 className="section-title center">Industry-Relevant Certifications</h2>

  <div className="testimonial-grid">
    <div className="testimonial">
      <img
        src="/images/API3.jpg"
        alt="API Security Architect"
        className="testimonial-img"
      />
      <p>
        "Certified expertise in designing, securing, and governing APIs against
        modern threats, ensuring compliance, resilience, and enterprise-grade
        protection."
      </p>
      <h4>API Security Architect — API Academy</h4>
    </div>

    <div className="testimonial">
      <img
        src="/images/API1.jpg"
        alt="API Designer"
        className="testimonial-img"
      />
      <p>
        "Proven mastery in crafting scalable, developer-friendly API designs
        that prioritize usability, performance, and long-term maintainability."
      </p>
      <h4>API Designer — API Academy</h4>
    </div>

    <div className="testimonial">
      <img
        src="/images/API2.jpg"
        alt="API Product Manager"
        className="testimonial-img"
      />
      <p>
        "Demonstrated ability to align API strategy with business goals,
        delivering high-impact API products that drive adoption and growth."
      </p>
      <h4>API Product Manager — API Academy</h4>
    </div>

    <div className="testimonial">
  <img
    src="/images/Graphic1.jpg"
    alt="Certified Professional Graphic Designer"
    className="testimonial-img"
  />
  <p>
    "Certified proficiency in professional graphic design, with advanced
    expertise in Adobe Photoshop CS6 Extended for creating high-quality visual
    assets, branding materials, and digital designs."
  </p>
  <h4>
    Certified Professional Graphic Designer — Quality Graphics Academy
    <br />
    <span>Adobe Photoshop CS6 Extended</span>
  </h4>
</div>

  </div>
</section>

    </div>
  );
};

export default About;