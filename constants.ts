
import { Portfolio } from './types';

export const TECH_STACKS: string[] = [
  "React", 
  "Vue", 
  "Angular", 
  "Svelte", 
  "Node.js", 
  "Python", 
  "Go", 
  "TypeScript", 
  "Firebase", 
  "AWS"
];

// Portfolio data - contributors edit this array to add their portfolios
export const INITIAL_PORTFOLIOS: Portfolio[] = [
  {
    id: 1,
    name: "Rajdeep Kushwaha",
    bio: "Creative developer building stunning interactive web experiences with modern design.",
    techStack: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/RajdeepKushwaha5/Lumen-by-RJDP",
    liveUrl: "https://rajdeepkushwaha5.github.io/Lumen-by-RJDP/",
    imageUrl: "/screenshots/lumen-1.png",
    likes: 0,
    country: "India"
  },
  {
    id: 2,
    name: "Rajdeep Kushwaha",
    bio: "Terminal-inspired portfolio with unique command-line interface design.",
    techStack: ["React", "TypeScript"],
    githubUrl: "https://github.com/RajdeepKushwaha5/terminal-theme-portfolio",
    liveUrl: "https://rajdeepkushwaha5.github.io/terminal-theme-portfolio/",
    imageUrl: "/screenshots/terminal-theme.png",
    likes: 0,
    country: "India"
  },
  {
    id: 3,
    name: "Rajdeep Kushwaha",
    bio: "Lumen 2.0 - Enhanced portfolio with advanced animations and interactions.",
    techStack: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/RajdeepKushwaha5/Lumen-2.0",
    liveUrl: "https://rajdeepkushwaha5.github.io/Lumen-2.0/",
    imageUrl: "/screenshots/lumen-2.png",
    likes: 0,
    country: "India"
  },
  {
    id: 4,
    name: "Rajdeep Kushwaha",
    bio: "Lumen Part 4 - Latest iteration with cutting-edge web technologies.",
    techStack: ["React", "TypeScript"],
    githubUrl: "https://github.com/RajdeepKushwaha5/Lumen-by-RJDP-Part4",
    liveUrl: "https://rajdeep-lumen4.vercel.app/",
    imageUrl: "/screenshots/lumen4.png",
    likes: 0,
    country: "India"
  }
];

// Fallback data if JSON fails to load
export const FALLBACK_PORTFOLIOS: Portfolio[] = [
  {
    id: 1,
    name: "Rajdeep Kushwaha",
    bio: "Creative developer building stunning interactive web experiences with modern design.",
    techStack: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/RajdeepKushwaha5/Lumen-by-RJDP",
    liveUrl: "https://rajdeepkushwaha5.github.io/Lumen-by-RJDP/",
    imageUrl: "/screenshots/lumen-1.png",
    likes: 245,
    country: "India"
  },
  {
    id: 2,
    name: "Rajdeep Kushwaha",
    bio: "Terminal-inspired portfolio with unique command-line interface design.",
    techStack: ["React", "TypeScript"],
    githubUrl: "https://github.com/RajdeepKushwaha5/terminal-theme-portfolio",
    liveUrl: "https://rajdeepkushwaha5.github.io/terminal-theme-portfolio/",
    imageUrl: "/screenshots/terminal-theme.png",
    likes: 189,
    country: "India"
  },
  {
    id: 3,
    name: "Rajdeep Kushwaha",
    bio: "Lumen 2.0 - Enhanced portfolio with advanced animations and interactions.",
    techStack: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/RajdeepKushwaha5/Lumen-2.0",
    liveUrl: "https://rajdeepkushwaha5.github.io/Lumen-2.0/",
    imageUrl: "/screenshots/lumen-2.png",
    likes: 312,
    country: "India"
  },
  {
    id: 4,
    name: "Rajdeep Kushwaha",
    bio: "Lumen Part 4 - Latest iteration with cutting-edge web technologies.",
    techStack: ["React", "TypeScript"],
    githubUrl: "https://github.com/RajdeepKushwaha5/Lumen-by-RJDP-Part4",
    liveUrl: "https://rajdeep-lumen4.vercel.app/",
    imageUrl: "/screenshots/lumen4.png",
    likes: 278,
    country: "India"
  },
  {
    id: 5,
    name: "Alex Johnson",
    bio: "Full-stack dev crafting beautiful and scalable web apps.",
    techStack: ["React", "Node.js", "TypeScript", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/alex/600/400",
    likes: 125,
    country: "USA"
  },
  {
    id: 6,
    name: "Maria Garcia",
    bio: "Frontend enthusiast with a passion for UI/UX and Vue.",
    techStack: ["Vue", "TypeScript", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/maria/600/400",
    likes: 98,
    country: "Spain"
  },
  {
    id: 7,
    name: "Kenji Tanaka",
    bio: "Backend engineer specializing in Go and microservices.",
    techStack: ["Go", "AWS", "Python"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/kenji/600/400",
    likes: 210,
    country: "Japan"
  },
  {
    id: 8,
    name: "David Chen",
    bio: "Data scientist and Python developer. Loves data visualization.",
    techStack: ["Python", "React", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/david/600/400",
    likes: 150,
    country: "Canada"
  },
  {
    id: 9,
    name: "Chloe Dubois",
    bio: "Creative coder building interactive experiences with Angular.",
    techStack: ["Angular", "TypeScript", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/chloe/600/400",
    likes: 112,
    country: "France"
  },
  {
    id: 10,
    name: "Samuel Green",
    bio: "JAMstack developer making the web faster with modern tools.",
    techStack: ["React", "Svelte", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/samuel/600/400",
    likes: 88,
    country: "UK"
  },
  {
    id: 11,
    name: "Isabella Rossi",
    bio: "Lover of clean code and robust backends.",
    techStack: ["Python", "Go", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/isabella/600/400",
    likes: 194,
    country: "Italy"
  },
  {
    id: 12,
    name: "Fatima Al-Fassi",
    bio: "Mobile developer creating cross-platform apps with Svelte.",
    techStack: ["Svelte", "Node.js", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "https://picsum.photos/seed/fatima/600/400",
    likes: 76,
    country: "Morocco"
  },
];
