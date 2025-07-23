'use client';

import { PersonalInfo } from '../types';
import ProfileCard from './ProfileCard';

interface HeroProps {
  personalInfo?: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  const defaultInfo = {
    name: "Matthew Osgood",
    title: "Data Developer & AI Enthusiast",
    tagline: "Transforming financial data through intelligent ETL processes and AI-driven solutions in mortgage servicing",
    bio: "",
    contactInfo: { email: "mosgood@mosgood.me" }
  };

  const info = personalInfo || defaultInfo;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-0"
      style={{
        background: `
          radial-gradient(ellipse at top, #1e1b4b 0%, #0f0a1a 50%, #000000 100%),
          radial-gradient(circle at 20% 80%, #3730a3 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, #1e40af 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, #7c3aed 0%, transparent 50%)
        `,
      }}
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-70 animate-pulse delay-2000"></div>
        <div className="absolute top-1/6 left-5/6 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-3000"></div>
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-blue-200 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute top-5/6 left-1/5 w-1 h-1 bg-purple-200 rounded-full opacity-60 animate-pulse delay-1500"></div>
      </div>
      
      {/* Gradient overlay for depth and smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-2">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Welcome to My Portfolio
            </h1>
            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-200 font-medium">
                I&apos;m {info.name}, a {info.title}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                {info.tagline}. I also build modern web applications in my free time 
                and continuously explore cutting-edge AI developments to integrate into innovative projects.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                aria-label="View my projects"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="inline-block border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-400/20 hover:border-blue-300 hover:text-blue-300 transition-all duration-200 font-semibold backdrop-blur-sm"
                aria-label="Get in touch"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-gray-300">Years in FinTech</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">TB+</div>
                <div className="text-sm text-gray-300">Data Processed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">15+</div>
                <div className="text-sm text-gray-300">AI Integrations</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end xl:justify-center order-1 lg:order-2 relative px-4 sm:px-8 lg:px-0">
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