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
      className="relative py-24 overflow-hidden bg-sand border-t-2 border-ink"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink mb-4">Get In Touch</h2>
          <div className="flex justify-center gap-1.5 mb-6">
            <span className="w-10 h-2 rounded-full bg-rust"></span>
            <span className="w-10 h-2 rounded-full bg-mustard"></span>
            <span className="w-10 h-2 rounded-full bg-teal"></span>
          </div>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together!
          </p>
        </div>

        <div className="bg-card rounded-xl border-2 border-ink shadow-retro-lg p-8 text-center">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-ink mb-4">Let&apos;s Connect</h3>
            <p className="text-ink-soft mb-6">
              Whether you have a project in mind, want to discuss opportunities,
              or just want to say hello, I&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center gap-3 bg-rust text-cream px-8 py-4 rounded-lg border-2 border-ink shadow-retro font-display font-bold text-lg hover:bg-rust-dark hover:-translate-y-0.5 hover:shadow-retro-lg transition-all duration-150"
                aria-label="Send email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contactInfo.email}
              </a>
              <a
                href="/Matthew_Osgood_Resume-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-teal text-cream px-8 py-4 rounded-lg border-2 border-ink shadow-retro font-display font-bold text-lg hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-retro-lg transition-all duration-150"
                aria-label="Download my resume (PDF)"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Résumé
              </a>
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display font-semibold text-ink hover:text-rust transition-colors p-3 bg-cream rounded-lg border-2 border-ink shadow-retro hover:-translate-y-0.5 transition-all duration-150"
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
                  className="flex items-center gap-2 font-display font-semibold text-ink hover:text-rust transition-colors p-3 bg-cream rounded-lg border-2 border-ink shadow-retro hover:-translate-y-0.5 transition-all duration-150"
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
                  className="flex items-center gap-2 font-display font-semibold text-ink hover:text-rust transition-colors p-3 bg-cream rounded-lg border-2 border-ink shadow-retro hover:-translate-y-0.5 transition-all duration-150"
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
