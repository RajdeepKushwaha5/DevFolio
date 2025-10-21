# 🤝 Contributing to DevFolio Showcase

Thank you for your interest in contributing to DevFolio Showcase! This guide will help you add your portfolio to our showcase.

## 📋 Table of Contents
- [Quick Start](#quick-start)
- [Detailed Steps](#detailed-steps)
- [Portfolio Requirements](#portfolio-requirements)
- [JSON Format](#json-format)
- [Testing Locally](#testing-locally)
- [Submission Guidelines](#submission-guidelines)
- [After Submission](#after-submission)

## 🚀 Quick Start

1. **Fork** this repository
2. **Clone** your fork locally
3. **Add** your portfolio to `src/data/portfolios.json`
4. **Commit** your changes
5. **Push** to your fork
6. **Create** a Pull Request

## 📝 Detailed Steps

### 1. Fork the Repository
Click the "Fork" button at the top right of this repository.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/DevFolio.git
cd DevFolio
```

### 3. Create a New Branch
```bash
git checkout -b add-portfolio-yourname
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Add Your Portfolio
Open `constants.ts` and add your entry to the `INITIAL_PORTFOLIOS` array:

```typescript
{
  id: [next_available_id],
  name: "Your Full Name",
  bio: "Brief description of your work (max 100 characters)",
  techStack: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/yourusername/your-repo",
  liveUrl: "https://your-portfolio-url.com",
  imageUrl: "/screenshots/your-portfolio.png", // Or use placeholder
  likes: 0,
  country: "Your Country"
}
```

**Important Notes:**
- Use the next available ID number (check the last entry's ID and add 1)
- Keep your bio under 100 characters
- For imageUrl, either:
  - Add a screenshot to `public/screenshots/` folder and reference it: `/screenshots/your-name.png`
  - Or use a placeholder: `https://picsum.photos/seed/yourname/600/400`
- Start with `likes: 0`
- Ensure all URLs are valid and working

### 6. Validate Your JSON
Make sure your JSON is valid:
```bash
npm run validate-json
```

Or manually check at [jsonlint.com](https://jsonlint.com/)

### 7. Test Locally (Optional but Recommended)
```bash
npm run dev
```
Visit `http://localhost:3000` to see your portfolio in the showcase.

### 8. Commit Your Changes
```bash
git add src/data/portfolios.json
git commit -m "Add portfolio: Your Name"
```

### 9. Push to Your Fork
```bash
git push origin add-portfolio-yourname
```

### 10. Create a Pull Request
1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template
4. Submit your PR

## ✅ Portfolio Requirements

Your portfolio must meet these criteria:

### Required
- ✅ **Working GitHub URL** - Link to your portfolio repository or GitHub profile
- ✅ **Working Live URL** - Your deployed portfolio must be accessible
- ✅ **Professional Content** - Portfolio should showcase your work professionally
- ✅ **Valid JSON** - Your entry must be properly formatted JSON

### Recommended
- 🎨 **Modern Design** - Use modern web technologies and design principles
- 📱 **Responsive** - Works well on mobile and desktop
- ⚡ **Fast Loading** - Optimized for performance
- ♿ **Accessible** - Follows accessibility best practices

## 📋 JSON Format

### Complete Example
```json
{
  "id": 13,
  "name": "Jane Doe",
  "bio": "Full-stack developer passionate about creating beautiful user experiences.",
  "techStack": ["React", "TypeScript", "Node.js", "MongoDB"],
  "githubUrl": "https://github.com/janedoe/portfolio",
  "liveUrl": "https://janedoe.dev",
  "imageUrl": "https://picsum.photos/seed/janedoe/600/400",
  "likes": 0,
  "country": "USA"
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | number | ✅ | Unique identifier (use next available number) |
| `name` | string | ✅ | Your full name |
| `bio` | string | ✅ | Brief description (max 100 chars) |
| `techStack` | array | ✅ | Technologies used (2-5 items recommended) |
| `githubUrl` | string | ✅ | GitHub repository or profile URL |
| `liveUrl` | string | ✅ | Live portfolio URL |
| `imageUrl` | string | ✅ | Portfolio preview image URL |
| `likes` | number | ✅ | Start with 0 |
| `country` | string | ✅ | Your country |

### Available Tech Stack Options
Choose from these or add your own:
- React
- Vue
- Angular
- Svelte
- Node.js
- Python
- Go
- TypeScript
- JavaScript
- Firebase
- AWS
- MongoDB
- PostgreSQL
- Next.js
- Tailwind CSS

## 🧪 Testing Locally

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Validate JSON
```bash
node -e "JSON.parse(require('fs').readFileSync('src/data/portfolios.json', 'utf8'))"
```

## 📤 Submission Guidelines

### Do's ✅
- ✅ Follow the JSON format exactly
- ✅ Test your portfolio URLs before submitting
- ✅ Write a clear, professional bio
- ✅ Use appropriate tech stack tags
- ✅ Make one portfolio addition per PR
- ✅ Fill out the PR template completely

### Don'ts ❌
- ❌ Don't modify other people's portfolios
- ❌ Don't add fake or placeholder information
- ❌ Don't include broken links
- ❌ Don't submit multiple portfolios in one PR
- ❌ Don't modify files outside of `portfolios.json`

## 🔄 After Submission

### What Happens Next?

1. **Automated Checks** - GitHub Actions will validate your JSON
2. **Review** - Maintainers will review your submission (usually within 48 hours)
3. **Feedback** - You may receive feedback or change requests
4. **Merge** - Once approved, your PR will be merged
5. **Deployment** - Vercel automatically deploys the updated site
6. **Live** - Your portfolio appears on the website within 5 minutes! 🎉

### Automatic Deployment

Once your PR is merged to the `main` branch:
- ⚡ GitHub Actions triggers automatically
- 🏗️ The project builds with your new portfolio
- 🚀 Vercel deploys the updated site
- ✅ Your portfolio is live at [devfolio-showcase.vercel.app](https://devfolio-showcase.vercel.app)

**No manual steps required!** Everything is automated.

## 🆘 Need Help?

- 📚 Check existing [Pull Requests](https://github.com/RajdeepKushwaha5/DevFolio/pulls) for examples
- 🐛 Found a bug? [Report it](https://github.com/RajdeepKushwaha5/DevFolio/issues/new?template=bug_report.md)
- 💬 Have questions? [Open a discussion](https://github.com/RajdeepKushwaha5/DevFolio/discussions)
- 📧 Contact: [Rajdeep Singh](https://www.linkedin.com/in/rajdeepsingh5/)

## 🎯 Code of Conduct

- Be respectful and professional
- Provide accurate information
- Help others when possible
- Follow submission guidelines
- Be patient during the review process

## 🌟 Recognition

All contributors will be:
- Listed in our [Contributors](https://github.com/RajdeepKushwaha5/DevFolio/graphs/contributors) page
- Showcased on the live website
- Part of the DevFolio community

## 👨‍💻 Project Creator

**Rajdeep Singh Kushwaha**
- GitHub: [@RajdeepKushwaha5](https://github.com/RajdeepKushwaha5)
- Twitter/X: [@rajdeeptwts](https://x.com/rajdeeptwts)
- LinkedIn: [Rajdeep Singh](https://www.linkedin.com/in/rajdeepsingh5/)
- Portfolio: [rajdeep-singh.vercel.app](https://rajdeep-singh.vercel.app/)

Thank you for contributing! 🙏

---

**Happy Coding!** 💻✨
