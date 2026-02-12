import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Menu, X, Github, Linkedin, Mail, Code2, Brain, 
  Medal, Gamepad2, Bike, Truck, Building2, Briefcase, 
  IdCard, Award, Phone, MapPin, Heart 
} from 'lucide-react';
import Aurora from './Aurora';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
    });
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="antialiased min-h-screen text-slate-200 bg-[#020617] relative">
      
      {/* 1. FULL PAGE AURORA BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <Aurora
          colorStops={["#7cff67","#B19EEF","#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* 2. NAVIGATION */}
      <nav className="fixed w-full z-50 glass-panel top-0 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
            CJ<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Menu - Items-center fixed alignment */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-300 hover:text-white transition relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition shadow-lg shadow-blue-500/20">
              Contact
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-slate-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="block text-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* 3. CONTENT WRAPPER */}
      <main className="relative z-10">
        {/* Hero Section */}
        <header id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
                Portfolio 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 leading-tight text-white">
                Christian John <br />
                <span className="text-gradient">Jimenez</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-6">
                BS Information Technology Student
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg border-l-2 border-blue-500 pl-4">
                To obtain a role that allows me to utilize my strengths and experience to their fullest potential, while also providing opportunities for growth and development.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-3 bg-white text-slate-900 font-bold rounded hover:bg-slate-200 transition">
                  Get in Touch
                </a>
                <a href="#experience" className="px-8 py-3 glass-card text-white font-medium rounded hover:bg-white/10 transition">
                  View Work
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6 text-slate-400">
                <a href="#" className="hover:text-blue-400 transition transform hover:scale-110"><Github className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400 transition transform hover:scale-110"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-400 transition transform hover:scale-110"><Mail className="w-6 h-6" /></a>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="relative flex justify-center items-center h-[500px] w-full" data-aos="fade-left" data-aos-duration="1200">
              <div className="relative z-10 w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full spin-slow"></div>
                <div className="absolute inset-4 border-2 border-dashed border-teal-500/30 rounded-full spin-reverse"></div>
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl backdrop-blur-md bg-slate-900/40">
                  <img 
                    src="/profile.jpg" 
                    alt="Christian John Jimenez" 
                    className="w-full h-full object-cover opacity-90" 
                  />
                </div>
              </div>
            </div>

          </div>
        </header>

        {/* Skills Section */}
        <section id="skills" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Technical Arsenal</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl" data-aos="fade-up">
                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                  <div className="bg-blue-500/10 p-2 rounded-lg"><Code2 className="w-6 h-6" /></div> Hard Skills
                </h3>
                <div className="space-y-6">
                  {[
                    { name: 'Front End Development', level: 'Intermediate', width: '70%' },
                    { name: 'Manual Testing', level: 'Intermediate', width: '65%' },
                    { name: 'Office Suite (Excel, Word)', level: 'Advanced', width: '85%' },
                    { name: 'Marksmanship', level: 'Intermediate', width: '60%' },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-xs text-blue-300">{skill.level}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: skill.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-3">
                  <div className="bg-teal-500/10 p-2 rounded-lg"><Brain className="w-6 h-6" /></div> Soft Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['Active Listening', 'Critical Thinking', 'Leadership', 'Task Delegation', 'Teamwork', 'Time Management'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700">
                  <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Affiliations</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Medal className="w-5 h-5 text-yellow-500" />
                      <span>PH Army Reserve (RESCOM) - 1302nd Btn</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Gamepad2 className="w-5 h-5 text-purple-500" />
                      <span>Kyusi Esports Player (2023)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-slate-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-16 text-center" data-aos="zoom-in">Work Exposure</h2>

            <div className="max-w-4xl mx-auto">
              {[
                { role: 'Motorcycle Rider Partner', date: 'July 2025 - Present', company: 'ANGKAS Philippines', Icon: Bike },
                { role: 'Motorcycle Delivery Rider', date: 'Feb 2025 - Present', company: 'LALAMOVE Philippines', Icon: Truck },
                { role: 'Internship / Staff', date: 'Sep 09, 2025 - Nov 13, 2025', company: 'Curriculum Learning and Management Division', Icon: Building2 },
                { role: 'Investments Accounting Intern', date: 'June - Aug 2023', company: 'Social Security System', Icon: Briefcase }
              ].map((job, index, arr) => (
                <div key={index} className="flex gap-6 mb-12 last:mb-0" data-aos="fade-left">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 z-10`}>
                      <job.Icon className="w-6 h-6 text-slate-300" />
                    </div>
                    {index !== arr.length - 1 && <div className="h-full w-0.5 bg-slate-800 my-2"></div>}
                  </div>
                  <div className="glass-card p-6 rounded-xl flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                        {job.date}
                      </span>
                    </div>
                    <p className="text-slate-400">{job.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-display font-bold mb-8 text-white border-l-4 border-blue-500 pl-4">Education History</h3>
              <div className="space-y-6">
                {[
                  { school: 'Quezon City University', degree: 'BS in Information Technology', date: '2022 - Present' },
                  { school: 'Metro Manila College', degree: 'Humanities and Social Science (Honors)', date: '2020 - 2022' },
                  { school: 'Dona Rosario High School', degree: 'Junior High School', date: '2016 - 2020' },
                  { school: 'Rosa L. Susano Elementary School', degree: 'Elementary', date: '2010 - 2016' }
                ].map((edu, i) => (
                  <div key={i} className="glass-card p-6 rounded-lg border-l-4 border-l-blue-600">
                    <span className="text-xs text-blue-400 mb-1 block">{edu.date}</span>
                    <h4 className="text-lg font-bold text-white">{edu.school}</h4>
                    <p className="text-slate-400">{edu.degree}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-display font-bold mb-8 text-white border-l-4 border-teal-500 pl-4">Licenses & Certs</h3>
              <div className="grid gap-4">
                {[
                  { title: "Professional Driver's License", org: "LTO Philippines", Icon: IdCard },
                  { title: "Basic ROTC Completer", org: "Quezon City University", Icon: Award },
                  { title: "Artificial Intelligence in Education", org: "Certificate of Participation (Feb 05, 2026)", Icon: Brain }
                ].map((cert, i) => (
                  <div key={i} className="glass-card p-4 rounded-lg flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center`}>
                      <cert.Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{cert.title}</p>
                      <p className="text-xs text-slate-500">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-black/80 py-12 border-t border-slate-800 backdrop-blur-md">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-slate-400">
              <span className="flex items-center justify-center gap-2 hover:text-white transition">
                <Phone className="w-5 h-5" /> 09944966180
              </span>
              <span className="flex items-center justify-center gap-2 hover:text-white transition">
                <Mail className="w-5 h-5" /> jimenezchristianjohngran07@gmail.com
              </span>
              <span className="flex items-center justify-center gap-2 hover:text-white transition">
                <MapPin className="w-5 h-5" /> Quezon City, Philippines
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;