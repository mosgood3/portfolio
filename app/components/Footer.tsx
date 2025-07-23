interface FooterProps {
  name?: string;
}

export default function Footer({ name = "Matthew Osgood" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/20 backdrop-blur-sm border-t border-white/10 py-12 overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-600"></div>
        <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-pulse delay-1400"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-lg">
              &copy; {currentYear} <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">{name}</span>. All rights reserved.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              Built with{" "}
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Next.js
              </a>
              
              {" "}and{" "}
              <a 
                href="https://tailwindcss.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <a 
            href="#hero" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-200 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            Back to top
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Crafted in the depths of space with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}