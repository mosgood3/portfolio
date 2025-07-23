import { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo?: PersonalInfo;
}

const defaultBio = `I'm a data developer and AI enthusiast working in the financial sector, focused on mortgage servicing. I design and implement robust ETL pipelines, build comprehensive reporting systems, and integrate advanced AI solutions to automate financial operations.

My work centers on transforming complex, often unstructured data into actionable insights that drive smarter business decisions and improve efficiency. I've led initiatives that bridge traditional financial workflows with modern data technologies, including intelligent agents that replicate human tasks in loan processing, default prediction, and compliance.

Outside of work, I enjoy building modern web applications and staying current with the latest in AI and machine learning. I'm passionate about using technology to create practical, scalable solutions that make a real impact.`;

const skills = [
  { category: "Data & ETL", technologies: ["Python", "SQL", "Pandas", "Jupyter"] },
  { category: "AI & ML", technologies: ["TensorFlow","LLM APIs", "Langchain", "Scikit-learn"] },
  { category: "Financial Tech", technologies: ["Mortgage APIs", "Financial Databases", "Compliance Tools", "Payment Processing"] },
  { category: "Web Development", technologies: ["React", "Next.js", "TypeScript", "Node.js", "SQL"] },
  { category: "Infrastructure", technologies: ["AWS", "Docker", "Git", "CI/CD", "FireBase"] }
];

export default function About({ personalInfo }: AboutProps) {
  const bio = personalInfo?.bio || defaultBio;

  return (
    <section 
      id="about" 
      className="relative py-24 overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, #000000 0%, #0f0a1a 50%, #1e1b4b 100%),
          radial-gradient(circle at 30% 70%, #3730a3 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, #1e40af 0%, transparent 50%),
          radial-gradient(circle at 60% 60%, #7c3aed 0%, transparent 50%)
        `,
      }}
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-4/5 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 animate-pulse delay-1200"></div>
        <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-purple-300 rounded-full opacity-70 animate-pulse delay-2100"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm rounded-lg font-medium">
                📊 Data-Driven
              </span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 border border-green-400/30 backdrop-blur-sm rounded-lg font-medium">
                🤖 AI Integration
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-sm rounded-lg font-medium">
                🏦 FinTech Expert
              </span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">Technical Skills</h3>
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-gray-200 mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full font-medium hover:bg-white/20 transition-all duration-200 border border-white/20"
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