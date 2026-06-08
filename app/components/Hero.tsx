'use client';

import { PersonalInfo } from '../types';
import ProfileCard from './ProfileCard';

interface HeroProps {
  personalInfo?: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  const defaultInfo = {
    name: "Matthew Osgood",
    title: "Data Engineer",
    tagline: "Building production ETL pipelines and lakehouse architectures with PySpark, Microsoft Fabric, and Delta Lake in financial services",
    bio: "",
    contactInfo: { email: "mosgood@mosgood.me" }
  };

  const info = personalInfo || defaultInfo;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-0 bg-cream"
    >
      {/* Retro sunburst accent */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 80% 30%, #d9762b 0deg 9deg, transparent 9deg 18deg)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left order-1 lg:order-1 lg:col-span-2">
            <span className="inline-block font-display font-bold text-sm uppercase tracking-[0.2em] text-rust bg-card border-2 border-ink rounded-full px-4 py-1 mb-6 shadow-retro">
              Howdy &mdash; welcome to my portfolio
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-ink mb-6 leading-[1.05]">
              {info.name}
            </h1>
            <div className="space-y-4 mb-8">
              <p className="font-display text-2xl md:text-3xl text-rust font-bold">
                {info.title}
              </p>
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl">
                {info.tagline}. I also ship full-stack products end-to-end
                and host open-source LLMs to power internal automation and decision workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-block bg-rust text-cream px-8 py-3 rounded-lg border-2 border-ink shadow-retro font-display font-bold hover:bg-rust-dark hover:-translate-y-0.5 hover:shadow-retro-lg transition-all duration-150"
                aria-label="View my projects"
              >
                View My Work
              </a>
              <a
                href="/Matthew_Osgood_Resume-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal text-cream px-8 py-3 rounded-lg border-2 border-ink shadow-retro font-display font-bold hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-retro-lg transition-all duration-150"
                aria-label="Download my resume (PDF)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Résumé
              </a>
              <a
                href="#contact"
                className="inline-block bg-card text-ink px-8 py-3 rounded-lg border-2 border-ink shadow-retro font-display font-bold hover:bg-mustard hover:-translate-y-0.5 hover:shadow-retro-lg transition-all duration-150"
                aria-label="Get in touch"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div className="bg-card rounded-xl p-4 border-2 border-ink shadow-retro">
                <div className="font-display text-3xl font-extrabold text-rust">3+</div>
                <div className="text-sm text-ink-soft font-medium">Years in Data Engineering</div>
              </div>
              <div className="bg-card rounded-xl p-4 border-2 border-ink shadow-retro">
                <div className="font-display text-3xl font-extrabold text-teal">$150K</div>
                <div className="text-sm text-ink-soft font-medium">Monthly Cost Saved</div>
              </div>
              <div className="bg-card rounded-xl p-4 border-2 border-ink shadow-retro">
                <div className="font-display text-3xl font-extrabold text-brown">59</div>
                <div className="text-sm text-ink-soft font-medium">Spark Cold Starts Cut</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end xl:justify-center order-2 lg:order-2 relative px-4 sm:px-8 lg:px-0">
            <ProfileCard
              name={info.name}
              avatarUrl="/me.png"
              enableTilt={true}
              className="w-full sm:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
