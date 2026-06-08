import { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo?: PersonalInfo;
}

const defaultBio = `I'm a Data Engineer with 3+ years building production ETL/ELT pipelines and large-scale data-processing systems in financial services. I specialize in PySpark, Microsoft Fabric, and Delta Lake architectures across bronze/silver/gold lakehouse layers — cleansing, deduplicating, and transforming raw source data into reportable, well-modeled (SCD Type 2) datasets.

Much of my work is performance optimization — partitioning, clustering, and indexing to drive down compute cost — and partnering directly with business stakeholders to translate their needs into reliable data products. I've driven automation initiatives that saved roughly $150K per month and cut 59 Spark cold starts from a high-cost refresh pipeline.

Outside of the data stack, I ship full-stack products end-to-end with Next.js, Supabase, and Stripe, and I host open-source LLMs with RAG and vector search to power internal automation. I'm passionate about building practical, scalable systems that make a measurable impact.`;

const skills = [
  { category: "Languages", technologies: ["Python", "SQL", "T-SQL", "TypeScript", "JavaScript"] },
  { category: "Data Engineering", technologies: ["PySpark", "Delta Lake", "Microsoft Fabric", "Lakehouse (Bronze/Silver/Gold)", "SCD Type 2", "MERGE / COPY INTO"] },
  { category: "Databases & Warehousing", technologies: ["SQL Server", "PostgreSQL", "Partitioning & Clustering", "Query Optimization"] },
  { category: "Backend & APIs", technologies: ["REST APIs", "Django REST", "Next.js", "Stripe", "JAMS Scheduler"] },
  { category: "Cloud & DevOps", technologies: ["AWS (SES)", "Supabase", "Vercel", "Docker", "CI/CD", "Linux / WSL"] },
  { category: "AI / LLMs", technologies: ["RAG", "Embeddings", "Vector Search", "Llama 3", "Prompt Engineering", "Fine-Tuning"] }
];

export default function About({ personalInfo }: AboutProps) {
  const bio = personalInfo?.bio || defaultBio;

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-sand border-y-2 border-ink"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink mb-4">About Me</h2>
          <div className="flex justify-center gap-1.5">
            <span className="w-10 h-2 rounded-full bg-rust"></span>
            <span className="w-10 h-2 rounded-full bg-mustard"></span>
            <span className="w-10 h-2 rounded-full bg-teal"></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-ink-soft leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-rust text-cream border-2 border-ink rounded-lg font-display font-bold shadow-retro">
                🛢️ Lakehouse Architecture
              </span>
              <span className="px-4 py-2 bg-teal text-cream border-2 border-ink rounded-lg font-display font-bold shadow-retro">
                ⚡ Performance Optimization
              </span>
              <span className="px-4 py-2 bg-mustard text-ink border-2 border-ink rounded-lg font-display font-bold shadow-retro">
                🏦 FinTech
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-ink mb-6">Technical Skills</h3>
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border-2 border-ink shadow-retro">
                <h4 className="font-display text-lg font-bold text-rust mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cream text-ink text-sm rounded-full font-medium border border-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
