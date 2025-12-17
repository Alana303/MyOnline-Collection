import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css";

// ✅ Import FA6 icons
import {
  FaMoneyBillTrendUp,
  FaBrain,
  FaDollarSign,
  FaCode,
  FaArrowUpRightFromSquare,
  FaCalculator,
  FaShield,
} from "react-icons/fa6";

const projectsData = [
  {
    id: 1,
    category: "fullstack",
    title: "TrackWise Expense Tracker",
    icon: <FaMoneyBillTrendUp />,
    image: "/images/main2.jpeg",
    desc: "An advanced, user-friendly platform designed to help individuals efficiently monitor, categorize, and analyze daily expenses with interactive dashboards and visual insights.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    code: "https://github.com/Alana303/Expense-Tracking-Website.git",
    demo: "#",
  },
  {
    id: 2,
    category: "frontend",
    title: "EcomVista Market Insights",
    icon: <FaBrain />,
    image: "/images/main3.jpg",
    desc: "Developed a feature of the EcomVista platform that provides actionable market insights and includes a blog offering news and updates on e-commerce trends for a seamless user experience.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "PHP", "MySQL", "SQL"],
    code: "https://github.com/Alana303/Ecom-VistaRegime.git",
    demo: "#",
  },
  {
    id: 3,
    category: "frontend",
    title: "JS Currency Converter",
    icon: <FaDollarSign />,
    image: "/images/main4.jpg",
    desc: "Built a real-time, responsive currency converter web application using modern JavaScript and external APIs to fetch up-to-date exchange rates for seamless user experience.",
    tech: ["HTML5", "CSS3", "Bootstrap", "Vanilla JavaScript"],
    code: "https://github.com/Alana303/CurrencyConverter.git",
    demo: "#",
  },
  {
    id: 4,
    category: "frontend",
    title: "JS Advanced Calculator",
    icon: <FaCalculator />,
    image: "/images/Calculator.png",
    desc: "Developed an advanced calculator web application with a clean, responsive UI that supports basic arithmetic operations, scientific functions, and real-time input validation for an intuitive user experience.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    code: "https://github.com/Alana303/JavaScript-Project-Advanced-Calculator.git",
    demo: "#",

  },
  {
    id: 5,
    category: "frontend",
    title: "Shield Okumbawa Community Sacco",
    icon: <FaShield />,
    image: "/images/shield.png",
    desc: "A community-driven SACCO empowering both women and men through secure savings and transparent financial services, powered by a modern React-based web platform.",
    tech: ["React.js",
    "React Router",
    "Vanilla JavaScript (ES6+)",
    "Bootstrap 5",
    "Animate.css",
    "HTML5",
    "Vanilla CSS3"],
    code: "https://github.com/Alana303/ShieldOkumabwaSacco-Website.git",
    demo: "#",

  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <>
      <div className="page-container">
        <Navbar />

        <main className="projects-page">
          {loading && (
            <div id="loader-bg">
              <div className="spinner"></div>
            </div>
          )}

          <h2 className="section-title fade-in-up">Featured Projects</h2>
          <p className="section-sub fade-in-up">
            A showcase of my recent work – from full-stack applications to
            AI-powered solutions
          </p>

          <div className="filter-bar fade-in-up">
            {["all", "fullstack", "frontend"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {
                
                cat === "all"
                  ? "All Projects"
                  : cat === "fullstack"
                  ? "Full Stack"
                  : cat === "frontend"
                  ? "Frontend"
                  : ""
                }
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="project-card"
                onClick={(e) => {
                  if (e.target.tagName !== "A" && proj.demo !== "#") {
                    window.open(proj.demo, "_blank");
                  }
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-content">
                  <h3 className="project-title">
                    {proj.icon} {proj.title}
                  </h3>
                  <p className="project-desc">{proj.desc}</p>

                  <div className="tech-stack">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={proj.code} target="_blank" rel="noopener noreferrer">
                      <FaCode /> Code
                    </a>
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                      <FaArrowUpRightFromSquare /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        
      </div>
    </>
  );
}

