import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Code, 
  Trophy,
  Menu,
  X
} from 'lucide-react';
import { CANDIDATE_DATA } from './constants';

type SectionId = 'about' | 'experience' | 'education' | 'skills' | 'projects' | 'certifications' | 'achievements';

interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ElementType;
}

const SECTIONS: NavItem[] = [
  { id: 'about', label: 'About', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: ExternalLink },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy }
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{CANDIDATE_DATA.summary}</p>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mt-6 border border-indigo-100/50">
              <h3 className="font-semibold text-gray-900 mb-4 text-xl">Positions of Responsibility</h3>
              <div className="space-y-6">
                {CANDIDATE_DATA.responsibilities.map((resp, idx) => (
                  <div key={idx} className="bg-white/60 p-4 rounded-lg shadow-sm border border-indigo-50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                       <h4 className="text-lg font-bold text-indigo-700">{resp.title}</h4>
                       <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-100 px-2 py-1 rounded">{resp.period}</span>
                    </div>
                    <p className="text-gray-800 font-medium mb-1">{resp.event}</p>
                    <p className="text-gray-600 text-sm mb-2 italic">{resp.organization}</p>
                    <p className="text-gray-700">{resp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              Internship & Training
            </h2>
            <div className="space-y-8">
              {CANDIDATE_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-indigo-200 hover:border-indigo-600 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-600"></div>
                  <div className="bg-gradient-to-br from-indigo-50/50 to-white p-6 rounded-xl border border-indigo-50 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-600 mb-4 text-sm mt-1">
                      <span className="font-semibold text-indigo-700">{exp.company}</span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span>{exp.location}</span>
                      <span className="hidden sm:inline text-gray-300">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 mb-5 text-sm md:text-base">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="bg-white text-indigo-700 px-3 py-1 rounded-full text-xs font-medium border border-indigo-100 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-indigo-600" size={24} />
              </div>
              Academic Profile
            </h2>
            <div className="grid gap-6">
              {CANDIDATE_DATA.education.map((edu, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap">
                      {edu.cgpa}
                    </span>
                    <span className="text-sm text-gray-500">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Code className="text-indigo-600" size={24} />
              </div>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(CANDIDATE_DATA.skills).map(([category, skills]) => (
                <div key={category} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <ExternalLink className="text-indigo-600" size={24} />
              </div>
              Projects
            </h2>
            <div className="grid gap-6">
              {CANDIDATE_DATA.projects.map((project, idx) => (
                <div key={idx} className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{project.name}</h3>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 font-medium text-sm hover:underline shrink-0"
                      >
                        View Project <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Award className="text-indigo-600" size={24} />
              </div>
              Certified Courses
            </h2>
            <div className="grid gap-4">
              {CANDIDATE_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award size={20} className="text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{cert.description}</p>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-indigo-600 text-sm font-semibold hover:text-indigo-800 transition-colors"
                      >
                        Verify Certificate <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Trophy className="text-indigo-600" size={24} />
              </div>
              Honours & Achievements
            </h2>
            <div className="space-y-4">
              {CANDIDATE_DATA.achievements.map((achievement, idx) => (
                <div key={idx} className="flex gap-4 bg-gradient-to-r from-yellow-50/50 to-white rounded-xl p-5 border border-yellow-100/50 hover:border-yellow-200 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                       <Trophy size={16} className="text-yellow-600" />
                    </div>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-sm md:text-base">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Navigation - Sticky Header for Desktop, Drawer for Mobile */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between lg:hidden">
            <span className="font-bold text-lg text-gray-800">Portfolio</span>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className={`${
            isMobileMenuOpen 
              ? 'absolute left-0 right-0 top-full bg-white border-b border-gray-200 p-4 shadow-xl flex flex-col gap-2' 
              : 'hidden lg:flex lg:flex-row lg:gap-1 lg:overflow-x-auto lg:no-scrollbar'
            } transition-all duration-200 ease-in-out`}>
            {SECTIONS.map(section => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all text-sm font-medium whitespace-nowrap
                    ${isActive
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 transform scale-105'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                    }`}
                >
                  <Icon size={18} className={isActive ? 'text-indigo-100' : 'text-gray-400 group-hover:text-indigo-500'} />
                  {section.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-6 md:p-8 mb-8 border border-white">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="relative group shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white overflow-hidden">
                {CANDIDATE_DATA.avatar && !imgError ? (
                  <img 
                    src={CANDIDATE_DATA.avatar} 
                    alt={CANDIDATE_DATA.name} 
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    {CANDIDATE_DATA.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                  {CANDIDATE_DATA.name}
                </h1>
                <p className="text-lg md:text-xl text-indigo-600 font-medium">
                  {CANDIDATE_DATA.title}
                </p>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-gray-600 text-sm md:text-base">
                <div className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                  <MapPin size={18} className="text-gray-400" />
                  <span>{CANDIDATE_DATA.location}</span>
                </div>
                <a href={`mailto:${CANDIDATE_DATA.email}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <Mail size={18} className="text-gray-400" />
                  <span>{CANDIDATE_DATA.email}</span>
                </a>
                <a href={`tel:${CANDIDATE_DATA.phone}`} className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                  <Phone size={18} className="text-gray-400" />
                  <span>{CANDIDATE_DATA.phone}</span>
                </a>
              </div>

              <div className="flex gap-4 justify-center md:justify-start pt-2">
                <a 
                  href={CANDIDATE_DATA.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006399] transition-all shadow-sm hover:shadow active:scale-95"
                >
                  <Linkedin size={20} />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href={CANDIDATE_DATA.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#333] text-white rounded-lg hover:bg-[#24292e] transition-all shadow-sm hover:shadow active:scale-95"
                >
                  <Github size={20} />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Interests Tags */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 text-center md:text-left">Areas of Interest</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {CANDIDATE_DATA.interests.map((interest, idx) => (
                <span key={idx} className="bg-indigo-50/80 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Section Content */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-6 md:p-10 border border-white min-h-[400px]">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} {CANDIDATE_DATA.name}. All rights reserved.</p>
          <p className="text-xs text-gray-400 max-w-md mx-auto">{CANDIDATE_DATA.address}</p>
        </div>
      </footer>
    </div>
  );
}