import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ChevronsUp,
  Code,
  Database,
  Palette,
  Zap,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    {
      name: "Frontend",
      icon: Code,
      items: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      icon: Database,
      items: ["Node.js", "Python", "PostgreSQL"],
    },
    {
      name: "Design",
      icon: Palette,
      items: ["UI/UX", "Figma", "Responsive Design"],
    },
    { name: "Tools", icon: Zap, items: ["Git", "Docker", "AWS"] },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://www.shutterstock.com/image-photo/typing-on-laptop-glowing-shopping-260nw-2669971031.jpg",
      demo: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with drag-and-drop functionality, team features, and real-time updates.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      demo: "#",
      github: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation tool using GPT-4 API with custom prompts and content optimization features.",
      tech: ["Next.js", "OpenAI API", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      demo: "#",
      github: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics platform with interactive charts, data visualization, and custom reporting capabilities.",
      tech: ["React", "D3.js", "Express", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demo: "#",
      github: "#",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 4000);
    } else {
      setFormStatus("Please fill all fields!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="transition-colors duration-300">
      <div className="min-h-screen bg-slate-900 text-slate-100">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md shadow-xl">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl ml-4 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alice Jackson
              </h1>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-10">
                {["About", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-black dark:text-slate-300 hover:text-blue-500  font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-lg bg-slate-800"
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden mt-4 pb-4 space-y-4">
                {["About", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center md:px-20 px-10 pt-20 relative overflow-hidden"
        >
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Text Content */}
              <div className="text-left order-2 md:order-1">
                <div className="mb-6">
                  <span className="px-4 py-3 bg-gradient-to-r bg-blue-950 border border-blue-500/30 rounded-full text-sm text-blue-400 font-medium">
                    👋 Welcome to my portfolio
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Alice Jackson
                  </span>
                </h2>
                <div className="mb-6">
                  <p className="text-2xl md:text-3xl text-slate-300 font-semibold mb-2">
                    Full-Stack Developer
                  </p>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Available for freelance work</span>
                  </div>
                </div>
                <p className="text-lg text-slate-400 mb-8 ">
                  I build exceptional digital experiences that combine beautiful
                  design with powerful functionality. Specializing in modern web
                  technologies and creating solutions that make a difference.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl 
                    hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 bg-slate-800 border border-slate-600 text-white rounded-lg font-semibold hover:bg-slate-700
                     hover:border-purple-500 transition-all duration-300"
                  >
                    Contact Me
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8 mb-7 md:mb-0">
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-purple-500 hover:bg-slate-700 transition-all duration-200 group"
                  >
                    <Github
                      size={24}
                      className="group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-purple-500 hover:bg-slate-700 transition-all duration-200 group"
                  >
                    <Linkedin
                      size={24}
                      className="group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-purple-500 hover:bg-slate-700 transition-all duration-200 group"
                  >
                    <Twitter
                      size={24}
                      className="group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-purple-500 hover:bg-slate-700 transition-all duration-200 group"
                  >
                    <Phone
                      size={24}
                      className="group-hover:text-purple-400 transition-colors"
                    />
                  </a>
                </div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="order-1 md:order-2 flex justify-center md:mt-0 mt-9">
                <div className="relative">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-50"></div>

                  {/* Image Container */}
                  <div className="relative w-72 h-72 md:w-96 md:h-96  rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 p-3">
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-6 bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Available</span>
                    </div>
                  </div>

                  <div className="text-center absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-xl">
                    <p className="text-2xl font-bold text-purple-400">5+</p>
                    <p className="text-sm text-slate-300">Years Exp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-6xl">
            <div className="opacity-100">
              <h3 className="text-4xl font-bold mb-12 text-center">About Me</h3>
              <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications. I specialize in creating
                responsive, user-friendly interfaces and robust backend systems.
                My approach combines technical expertise with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-slate-900 border border-slate-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <Icon className="w-8 h-8 mb-4 text-purple-400" />
                      <h4 className="text-xl font-semibold mb-3">
                        {skill.name}
                      </h4>
                      <ul className="space-y-3">
                        {skill.items.map((item, i) => (
                          <li key={i} className="flex text-slate-400 gap-1">
                            <ChevronRight /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h3 className="text-4xl font-bold mb-12 text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden bg-slate-800 hover:scale-105 transition-all duration-300 "
                >
                  <div className="relative overflow-hidden h-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                    <p className="text-slate-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-blue-900/50 text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 text-purple-400 hover:underline"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-1 text-purple-400 hover:underline"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-slate-800">
          <div className="container mx-auto max-w-4xl">
            <h3 className="text-4xl font-bold mb-12 text-center">
              Get In Touch
            </h3>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h4 className="text-3xl font-semibold mb-6">Let's Connect</h4>
                <p className="text-slate-300 mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Feel free to reach
                  out!
                </p>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    <Mail size={20} />
                    Alice30@gmail.com
                  </a>
                  <div className="flex gap-4 mt-6">
                    <a
                      href="#"
                      className="p-3 rounded-lg bg-slate-900 hover:bg-slate-700 transition-all duration-200"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-lg bg-slate-900 hover:bg-slate-700 transition-all duration-200"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-lg bg-slate-900 hover:bg-slate-700 transition-all duration-200"
                    >
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:ring-2 focus:ring-purple-400 
                    outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:ring-2 focus:ring-purple-400 
                    outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:ring-2 focus:ring-purple-400 
                    outline-none transition-all resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl
                   hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
                {formStatus && (
                  <p className="text-green-400">{formStatus}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-black text-slate-300">
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <p className="text-md mb-4 md:mb-0">
              © 2026 Alice Jackson. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-200 hover:scale-110"
              title="Scroll to top"
            >
              <ChevronsUp size={22} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
