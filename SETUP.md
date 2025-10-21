# 🛠️ Development Setup Guide

Complete guide to set up DevFolio Showcase for local development.

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **Code Editor** (VS Code recommended)
- **Gemini API Key** ([Get one here](https://makersuite.google.com/app/apikey))

## 🚀 Quick Setup (5 Minutes)

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/devfolio-showcase.git
cd devfolio-showcase

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Add your Gemini API key to .env.local
# Open .env.local and replace 'your_gemini_api_key_here' with your actual key

# 5. Start development server
npm run dev
```

Visit `http://localhost:3000` 🎉

## 📝 Detailed Setup

### Step 1: Clone Repository

```bash
# Clone via HTTPS
git clone https://github.com/yourusername/devfolio-showcase.git

# OR clone via SSH
git clone git@github.com:yourusername/devfolio-showcase.git

# Navigate to project
cd devfolio-showcase
```

### Step 2: Install Dependencies

```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

**What gets installed:**
- React 19.2.0
- TypeScript 5.8.2
- Vite 6.2.0
- Google Gemini API client
- Development tools

### Step 3: Environment Configuration

Create `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
GEMINI_API_KEY=your_actual_api_key_here
```

**Get your Gemini API key:**
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with Google account
3. Click "Create API Key"
4. Copy the key
5. Paste it in `.env.local`

### Step 4: Verify Setup

```bash
# Check Node.js version
node --version  # Should be 18.x or higher

# Check npm version
npm --version   # Should be 9.x or higher

# Verify dependencies installed
npm list --depth=0

# Test build
npm run build
```

### Step 5: Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v6.2.0  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

## 🔧 Development Tools Setup

### VS Code Extensions (Recommended)

Install these extensions for the best development experience:

1. **ESLint** - Code linting
2. **Prettier** - Code formatting
3. **TypeScript Vue Plugin (Volar)** - TypeScript support
4. **Tailwind CSS IntelliSense** - Tailwind autocomplete
5. **GitLens** - Git integration
6. **Error Lens** - Inline error display

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## 📂 Project Structure Overview

```
devfolio-showcase/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Top navigation
│   │   ├── PortfolioCard.tsx # Portfolio display card
│   │   ├── SearchBar.tsx    # Search functionality
│   │   └── ...
│   ├── data/
│   │   └── portfolios.json  # Portfolio data (EDIT THIS!)
│   ├── services/
│   │   └── geminiService.ts # AI integration
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point
│   ├── types.ts             # TypeScript types
│   └── constants.ts         # App constants
├── public/                  # Static assets
├── components/              # Legacy components (to be moved)
├── .github/                 # GitHub configuration
│   ├── workflows/           # CI/CD workflows
│   └── ISSUE_TEMPLATE/      # Issue templates
├── .env.local               # Environment variables (create this)
├── .env.example             # Environment template
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 🎯 Common Development Tasks

### Adding a New Portfolio

Edit `src/data/portfolios.json`:

```json
{
  "id": 9,
  "name": "Your Name",
  "bio": "Your bio here",
  "techStack": ["React", "TypeScript"],
  "githubUrl": "https://github.com/username/repo",
  "liveUrl": "https://your-site.com",
  "imageUrl": "https://picsum.photos/seed/yourname/600/400",
  "likes": 0,
  "country": "Your Country"
}
```

### Creating a New Component

```bash
# Create component file
touch src/components/NewComponent.tsx
```

```tsx
import React from 'react';

interface NewComponentProps {
  // Define props here
}

export const NewComponent: React.FC<NewComponentProps> = (props) => {
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};
```

### Running Tests

```bash
# Run all tests (when configured)
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# OR use a different port
npm run dev -- --port 3001
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### TypeScript Errors

```bash
# Restart TypeScript server in VS Code
# Press: Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac)
# Type: "TypeScript: Restart TS Server"

# Check TypeScript configuration
npx tsc --noEmit
```

### Environment Variables Not Loading

```bash
# Verify .env.local exists
ls -la .env.local

# Check file contents (don't share your actual key!)
cat .env.local

# Restart dev server
# Stop server (Ctrl+C) and run npm run dev again
```

### Build Failures

```bash
# Check for syntax errors
npm run build

# View detailed error logs
npm run build --verbose

# Clear cache and rebuild
rm -rf dist node_modules/.vite
npm run build
```

## 🔍 Debugging Tips

### Browser DevTools

1. Open DevTools (F12)
2. Check Console for errors
3. Use React DevTools extension
4. Monitor Network tab for API calls

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### Logging

```typescript
// Add debug logs
console.log('Debug:', variable);
console.table(arrayData);
console.error('Error:', error);

// Use debugger statement
debugger; // Execution will pause here
```

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Google Gemini API](https://ai.google.dev/docs)

## 🤝 Contributing

Ready to contribute? Check out:
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Community guidelines

## 🆘 Getting Help

- 🐛 [Report a Bug](../../issues/new?template=bug_report.md)
- 💡 [Request a Feature](../../issues/new?template=feature_request.md)
- 💬 [Ask a Question](../../discussions)
- 📧 Contact maintainers via GitHub

## ✅ Setup Checklist

Before starting development:

- [ ] Node.js 18+ installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` created with API key
- [ ] Dev server running (`npm run dev`)
- [ ] Can access http://localhost:3000
- [ ] VS Code extensions installed
- [ ] Git configured
- [ ] Read CONTRIBUTING.md

## 🎉 You're All Set!

Start coding and have fun! 🚀

---

**Need help?** Don't hesitate to [open an issue](../../issues/new) or reach out to the community!
