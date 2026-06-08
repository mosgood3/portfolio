import { Project } from '../types';

interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Mortgage Lakehouse ETL on Microsoft Fabric",
    description: "Production PySpark pipelines on Microsoft Fabric that ingest, cleanse, deduplicate, and transform mortgage and loan-servicing data across bronze, silver, and gold lakehouse layers. Modeled raw sources into SCD Type 2 datasets for point-in-time history and eliminated 59 Spark cold starts from a high-cost refresh, materially reducing CU consumption on an F64 capacity.",
    technologies: ["PySpark", "Microsoft Fabric", "Delta Lake", "SCD Type 2", "SQL Server", "T-SQL"],
  },
  {
    id: "2",
    title: "Sell Local — Cottage-Food SaaS Platform",
    description: "Founder and full-stack engineer of a production multi-tenant SaaS for cottage-food businesses: storefronts, Stripe Connect payments, pickup ordering, a notifications hub, bio-link pages, and digital product sales. Architected end-to-end with a TypeScript/Next.js frontend, Supabase/PostgreSQL backend, and AWS SES transactional email, with live customers in production.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe Connect", "AWS SES", "Vercel"],
    liveUrl: "https://selllocal.app"
  },
  {
    id: "3",
    title: "Mortgage Servicing AI Agents (RAG)",
    description: "Hosted open-source LLMs (Llama 3) and built RAG pipelines with embeddings and vector search to replicate complex human tasks hindered by unstructured data—enabling automated document analysis, decision-making, and workflow execution to power internal automation.",
    technologies: ["Python", "Llama 3", "RAG", "Vector Search", "LangChain"],
    githubUrl: "https://github.com/mosgood3/langchain"
  },
  {
    id: "4",
    title: "Matthew C. Molloy Memorial Foundation",
    description: "Built a Next.js + Supabase + Stripe tournament registration platform with real-time updates and secure authentication for an annual charity basketball event, letting users securely donate, register, and access event details through a mobile-friendly interface.",
    technologies: ["Next.js", "Supabase", "Stripe", "Vercel"],
    githubUrl: "https://github.com/mosgood3/MolloyFoundation",
    liveUrl: "https://www.matthewcmolloyfoundation.org/"
  },
  {
    id: "5",
    title: "Sour The Bakery",
    description: "Custom bakery storefront with a full-featured admin panel, empowering the owner to manage products, track and fulfill orders, and control inventory and content—streamlining day-to-day operations with an intuitive interface.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/mosgood3/sourthebakery",
    liveUrl: "https://sourthebakery.com"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card rounded-xl border-2 border-ink shadow-retro hover:-translate-y-1 hover:shadow-retro-lg transition-all duration-150 overflow-hidden group">
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-ink mb-3">{project.title}</h3>
        <p className="text-ink-soft mb-4 leading-relaxed">{project.description}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-mustard/30 text-ink border border-ink text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-display font-semibold text-ink hover:text-rust transition-colors"
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
              className="flex items-center gap-2 font-display font-semibold text-teal hover:text-teal-dark transition-colors"
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
      className="relative py-24 overflow-hidden bg-cream"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink mb-4">Featured Projects</h2>
          <div className="flex justify-center gap-1.5 mb-6">
            <span className="w-10 h-2 rounded-full bg-rust"></span>
            <span className="w-10 h-2 rounded-full bg-mustard"></span>
            <span className="w-10 h-2 rounded-full bg-teal"></span>
          </div>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            A mix of data engineering work and full-stack products I&apos;ve shipped &mdash;
            from lakehouse pipelines to production SaaS.
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
