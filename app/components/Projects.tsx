import { Project } from '../types';

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Mortgage Data ETL Pipeline",
    description: "Built a comprehensive ETL pipeline processing millions of mortgage records daily, with robust validation, transformation, and enrichment. Enabled automated reporting and real-time dashboards for improved compliance monitoring, risk assessment, and operational efficiency.",
    technologies: ["Python", "JAMS", "SQL Server", "Pandas", "ETL"],
  },
  {
    id: "2",
    title: "Matthew C. Molloy Memorial foundation",
    description: "Built a dynamic web platform for a cancer nonprofit organization that enables users to securely donate, register for an annual charity basketball tournament, and access event details—streamlining engagement and boosting fundraising efforts through an intuitive and mobile-friendly interface.",
    technologies: ["Python", "Next.js", "Stripe", "Vercel", "Supabase"],
    githubUrl: "https://github.com/mosgood3/MolloyFoundation",
    liveUrl: "https://www.matthewcmolloyfoundation.org/"
  },
  {
    id: "3",
    title: "Mortgage Servicing AI agents",
    description: "Developed AI agents for mortgage servicing to replicate complex human tasks typically hindered by unstructured data, enabling automated document analysis, decision-making, and workflow execution—boosting accuracy, speed, and operational scalability.",
    technologies: ["Python", "LangChain", "LLM APIs", "SQLAlchamey"],
    githubUrl: "https://github.com/mosgood3/langchain"
  },
  {
    id: "5",
    title: "Sour The Bakery",
    description: "Built a custom bakery website with a full-featured admin panel, empowering the baker to easily manage products, track and fulfill orders, and control inventory and content—streamlining day-to-day operations with an intuitive, user-friendly interface.",
    technologies: ["Next.js", "TypeScript", "FireBase","Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/mosgood3/sourthebakery",
    liveUrl: "https://sourthebakery.com"
  },
  {
    id: "6",
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js to showcase my full body of work across front-end design, back-end development, and full-stack applications. The site features interactive components, smooth animations, and detailed project case studies—highlighting my skills in UI/UX, API integration, data automation, and modern web technologies.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/mosgood3/portfolio",
    liveUrl: "https://mosgood.me"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 text-sm rounded-full font-medium backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
              aria-label={`View ${project.title} live demo`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects = defaultProjects }: ProjectsProps) {
  return (
    <section 
      id="projects" 
      className="relative py-24 overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, #1e1b4b 0%, #0f0a1a 50%, #000000 100%),
          radial-gradient(circle at 40% 30%, #3730a3 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, #1e40af 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, #7c3aed 0%, transparent 50%)
        `,
      }}
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-3/4 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-60 animate-pulse delay-300"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-1800"></div>
        <div className="absolute top-1/6 left-1/2 w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-pulse delay-2400"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}