import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/RajdeepKushwaha5',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/rajdeeptwts',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajdeepsingh5/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@rajdeep01',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Add Portfolio', href: 'https://github.com/RajdeepKushwaha5/DevFolio/blob/main/CONTRIBUTING.md' },
    { name: 'Documentation', href: 'https://github.com/RajdeepKushwaha5/DevFolio#readme' },
    { name: 'Report Bug', href: 'https://github.com/RajdeepKushwaha5/DevFolio/issues' },
  ];

  const resources = [
    { name: 'GitHub Repo', href: 'https://github.com/RajdeepKushwaha5/DevFolio' },
    { name: 'Contributing Guide', href: 'https://github.com/RajdeepKushwaha5/DevFolio/blob/main/CONTRIBUTING.md' },
    { name: 'License', href: 'https://github.com/RajdeepKushwaha5/DevFolio/blob/main/LICENSE' },
    { name: 'Changelog', href: 'https://github.com/RajdeepKushwaha5/DevFolio/releases' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0a0e14] via-[#0f1419] to-[#0a0e14] border-t border-[#00ff6a]/30 mt-20">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
      
      {/* Animated cyber line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff6a] to-transparent" style={{ boxShadow: '0 0 10px rgba(0, 255, 106, 0.5)' }}></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Cyber Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="cyber-border bg-[#0a0e14] p-2">
                <svg className="h-6 w-6 text-[#00ff6a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xl font-bold font-mono text-[#00ff6a] tracking-wider">
                <span className="text-[#00ffff]">&lt;</span>DEV<span className="text-white">FOLIO</span><span className="text-[#00ffff]">/&gt;</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed font-mono">
              <span className="text-[#00ff6a]">//</span> A modern platform to showcase developer portfolios from around the world.
              <br />
              <span className="text-[#00ff6a]">//</span> Built with <span className="text-[#00ffff]">&lt;3</span> for the community.
            </p>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-[#0a0e14] border border-[#00ff6a]/30 text-xs text-[#00ff6a] font-mono font-bold">
                [OPEN_SOURCE]
              </span>
              <span className="px-2 py-1 bg-[#0a0e14] border border-[#00ffff]/30 text-xs text-[#00ffff] font-mono font-bold">
                [MIT]
              </span>
            </div>
          </div>

          {/* Cyber Quick Links */}
          <div>
            <h3 className="text-[#00ff6a] font-bold mb-4 text-xs uppercase tracking-wider font-mono">
              <span className="text-[#00ffff]">&gt;</span> QUICK_LINKS
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#00ff6a] transition-colors duration-200 text-xs flex items-center group font-mono"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#00ff6a] transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cyber Resources */}
          <div>
            <h3 className="text-[#00ff6a] font-bold mb-4 text-xs uppercase tracking-wider font-mono">
              <span className="text-[#00ffff]">&gt;</span> RESOURCES
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00ffff] transition-colors duration-200 text-xs flex items-center group font-mono"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#00ffff] transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cyber Creator & Social */}
          <div>
            <h3 className="text-[#00ff6a] font-bold mb-4 text-xs uppercase tracking-wider font-mono">
              <span className="text-[#00ffff]">&gt;</span> CONNECT
            </h3>
            <p className="text-gray-400 text-xs mb-3 font-mono">
              <span className="text-[#00ff6a]">//</span> Created by{' '}
              <a
                href="https://rajdeep-singh.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ffff] hover:text-[#00ff6a] font-bold transition-colors"
              >
                RAJDEEP_SINGH
              </a>
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 bg-[#0a0e14] border border-[#00ff6a]/30 hover:border-[#00ffff] hover:bg-[#00ff6a]/20 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-[#00ff6a] group-hover:text-[#00ffff] transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Cyber Divider */}
        <div className="border-t border-[#00ff6a]/20 mb-6" style={{ boxShadow: '0 1px 10px rgba(0, 255, 106, 0.1)' }}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-xs text-center md:text-left font-mono">
            <p>
              <span className="text-[#00ff6a]">//</span> © {currentYear} DevFolio Showcase
              <br />
              <span className="text-[#00ff6a]">//</span> Made with{' '}
              <span className="text-[#00ffff] animate-pulse">&lt;3</span> by developers, for developers
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/RajdeepKushwaha5/DevFolio"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button text-xs px-4 py-2"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>STAR_ON_GITHUB</span>
            </a>
          </div>
        </div>

        {/* Cyber data stream effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#00ff6a] animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#00ffff] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-[#00ff6a] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </footer>
  );
};
