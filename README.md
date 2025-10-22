# 🎨 DevFolio Showcase

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=flat-square)

**A modern, open-source platform to showcase developer portfolios from around the world** 🌍

[View Live Demo](https://devfolio-showcase.vercel.app/) · [Add Your Portfolio](CONTRIBUTING.md) · [Report Bug](https://github.com/RajdeepKushwaha5/DevFolio/issues)

</div>

---

## ✨ Features

- 🎯 **Modern Design** - Beautiful, responsive UI with dark/light themes
- 🔍 **Smart Search** - Real-time search by name or bio
- 🏷️ **Tech Filters** - Filter portfolios by technology stack
- ❤️ **Like System** - Interactive like counter for portfolios
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast loading
- 🌙 **Dark Mode** - Eye-friendly dark theme support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/RajdeepKushwaha5/DevFolio.git

# Navigate to project directory
cd DevFolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the app running! 🎉

## 📂 Project Structure

```
devfolio-showcase/
├── components/              # React components
│   ├── Header.tsx
│   ├── PortfolioCard.tsx
│   ├── SearchBar.tsx
│   ├── FilterPills.tsx
│   └── ...
├── services/
│   └── geminiService.ts     # AI integration
├── public/
│   └── screenshots/         # Portfolio screenshots
├── .github/
│   ├── workflows/           # CI/CD automation
│   └── ISSUE_TEMPLATE/      # Issue templates
├── constants.ts             # Portfolio data (edit this!)
├── types.ts                 # TypeScript types
├── App.tsx                  # Main app component
├── index.tsx                # Entry point
├── CONTRIBUTING.md          # Contribution guide
├── package.json
└── vite.config.ts
```

## 🤝 Contributing

We **love** contributions! Adding your portfolio is easy and takes less than 5 minutes.

### How to Add Your Portfolio

1. **Fork** this repository
2. **Edit** `constants.ts` and add your entry to `INITIAL_PORTFOLIOS` array:

```typescript
{
  id: [next_id],
  name: "Your Name",
  bio: "Brief description of your work",
  techStack: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/yourusername/your-repo",
  liveUrl: "https://your-portfolio.com",
  imageUrl: "/screenshots/your-portfolio.png", // Or use placeholder
  likes: 0,
  country: "Your Country"
}
```

3. **Commit** your changes: `git commit -m "Add portfolio: Your Name"`
4. **Push** to your fork: `git push origin main`
5. **Create** a Pull Request

### 🎯 What Happens After You Submit?

1. ✅ **Automated validation** checks your JSON format
2. 👀 **Review** by maintainers (usually within 48 hours)
3. 🔀 **Merge** to main branch
4. 🚀 **Auto-deployment** to Vercel
5. ✨ **Your portfolio is LIVE** within 5 minutes!

**No manual deployment needed!** Everything is automated via GitHub Actions + Vercel.

📖 **Detailed Guide:** See [CONTRIBUTING.md](CONTRIBUTING.md) for step-by-step instructions.

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS (via CDN)
- **Build Tool:** Vite
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Validation
npm run lint         # Run ESLint (if configured)
```

## 🌟 How Your Portfolio Appears on the Website

Once your PR is merged:

1. **GitHub Actions** automatically validates and builds the project
2. **Vercel** deploys the new version to production
3. **Your portfolio** appears on the live website instantly
4. **Visitors** can search, filter, and interact with your portfolio
5. **AI recommendations** are generated based on your tech stack

All of this happens **automatically** - no manual intervention required!


## 📸 Screenshots

<img width="1919" height="973" alt="image" src="https://github.com/user-attachments/assets/938a636c-cea9-44e0-9086-34f1433afcab" />

---
<img width="1919" height="857" alt="image" src="https://github.com/user-attachments/assets/163da14a-ae45-493a-9f3c-9ed541f776d0" />

---
<img width="1919" height="587" alt="image" src="https://github.com/user-attachments/assets/3f4d6793-091a-4662-bd32-55fd5e85eeaf" />



## 🐛 Found a Bug?

Please [open an issue](https://github.com/RajdeepKushwaha5/DevFolio/issues/new?template=bug_report.md) with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 💡 Feature Requests

Have an idea? [Open a feature request](https://github.com/RajdeepKushwaha5/DevFolio/issues/new) and let's discuss it!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All amazing contributors who added their portfolios
- Google Gemini for AI capabilities
- The open-source community

## 👨‍💻 Creator

**Rajdeep Singh Kushwaha**

- 🐙 **GitHub:** [@RajdeepKushwaha5](https://github.com/RajdeepKushwaha5)
- 🐦 **Twitter/X:** [@rajdeeptwts](https://x.com/rajdeeptwts)
- 💼 **LinkedIn:** [Rajdeep Singh](https://www.linkedin.com/in/rajdeepsingh5/)
- 📝 **Medium:** [@rajdeep01](https://medium.com/@rajdeep01)
- 🌐 **Portfolio:** [rajdeep-singh.vercel.app](https://rajdeep-singh.vercel.app/)

## 📞 Contact & Support

- 🐛 **Issues:** [GitHub Issues](https://github.com/RajdeepKushwaha5/DevFolio/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/RajdeepKushwaha5/DevFolio/discussions)
- 📧 **Email:** Contact via [LinkedIn](https://www.linkedin.com/in/rajdeepsingh5/)

## 🌟 Star This Repo!

If you find this project useful, please consider giving it a ⭐️ on GitHub!

---

<div align="center">

**Made with ❤️ by Rajdeep Singh**

[Add Your Portfolio](CONTRIBUTING.md) · [View Showcase](https://devfolio-showcase.vercel.app) · [Star on GitHub](https://github.com/RajdeepKushwaha5/DevFolio/stargazers)

</div>
