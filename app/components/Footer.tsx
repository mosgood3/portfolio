interface FooterProps {
  name?: string;
}

export default function Footer({ name = "Matthew Osgood" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brown text-cream border-t-2 border-ink py-12 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-cream/90 text-lg">
              &copy; {currentYear} <span className="font-display font-bold text-mustard">{name}</span>. All rights reserved.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-cream/80">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mustard hover:text-rust transition-colors font-semibold"
              >
                Next.js
              </a>

              {" "}and{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mustard hover:text-rust transition-colors font-semibold"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream/20 text-center">
          <a
            href="#hero"
            className="inline-flex items-center font-display font-semibold text-cream hover:text-mustard transition-all duration-200 bg-cream/10 hover:bg-cream/20 px-4 py-2 rounded-lg border-2 border-cream/30"
            aria-label="Back to top"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            Back to top
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-cream/60">
            Crafted with warm pixels and good coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
