import { ContactInfo } from '../types';

interface ContactProps {
  contactInfo?: ContactInfo;
}

const defaultContactInfo: ContactInfo = {
  email: "mosgood@mosgood.me",
  linkedin: "https://www.linkedin.com/in/matthew-osgood-b41bb320a/",
  github: "https://github.com/mosgood3",
};

export default function Contact({ contactInfo = defaultContactInfo }: ContactProps) {
  return (
    <section 
      id="contact" 
      className="relative py-24 overflow-hidden"
      style={{
        background: `
          linear-gradient(to bottom, #000000 0%, #0f0a1a 50%, #1e1b4b 100%),
          radial-gradient(circle at 60% 20%, #3730a3 0%, transparent 50%),
          radial-gradient(circle at 20% 60%, #1e40af 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, #7c3aed 0%, transparent 50%)
        `,
      }}
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/5 left-4/5 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse delay-400"></div>
        <div className="absolute top-4/5 left-1/5 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-pulse delay-1600"></div>
        <div className="absolute top-2/5 left-3/5 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse delay-2800"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to work together!
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Let&apos;s Connect</h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind, want to discuss opportunities, 
              or just want to say hello, I&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                aria-label="Send email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contactInfo.email}
              </a>
            </div>

            <div className="flex justify-center gap-8">
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors font-medium p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10"
                  aria-label="LinkedIn profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
              )}

              {contactInfo.github && (
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors font-medium p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10"
                  aria-label="GitHub profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}

              {contactInfo.twitter && (
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors font-medium p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10"
                  aria-label="Twitter profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}