# 👻 SpiritBoxAI - Paranormal Investigation Assistant

[![Netlify Status](https://api.netlify.com/api/v1/badges/b012be-hilarious-crisp/deploy-status)](https://hilarious-crisp-b012be.netlify.app)

SpiritBoxAI is a cutting-edge web application designed to assist paranormal investigators in collecting, analyzing, and documenting supernatural phenomena. Built with React, TypeScript, and Tailwind CSS, it provides a modern, intuitive interface for real-time paranormal investigation.

🔗 [View Live Demo](https://hilarious-crisp-b012be.netlify.app)

![SpiritBoxAI Dashboard](https://images.unsplash.com/photo-1518709766631-a6c7f7856bc3?auto=format&fit=crop&w=2400&q=80)

## ✨ Key Features

- **Real-time EVP Analysis**: Advanced audio processing for Electronic Voice Phenomena
- **EMF Monitoring**: Continuous electromagnetic field measurement with trend analysis
- **Visual Analysis**: AI-powered motion and anomaly detection from camera feeds
- **Dark Mode**: Optimized interface for low-light investigation environments
- **Responsive Design**: Fully responsive layout that works on all devices

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **State Management**: React Hooks and Context
- **Icons**: Lucide React for consistent, scalable icons
- **Build Tool**: Vite for lightning-fast development
- **Deployment**: Netlify for reliable hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/spiritbox-ai.git
cd spiritbox-ai
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The application will be available at \`http://localhost:5173\`

## 📖 Project Structure

\`\`\`
src/
├── components/           # React components
│   ├── AnalysisPanel/   # Analysis panel components
│   ├── Dashboard/       # Dashboard components
│   ├── LiveFeed/       # Live feed components
│   └── Navbar/         # Navigation components
├── hooks/               # Custom React hooks
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
\`\`\`

## 💻 Usage

### Dark Mode Toggle

The application supports both light and dark modes, optimized for different investigation environments:

\`\`\`typescript
function App() {
  const [darkMode, setDarkMode] = useState(true);
  // ... rest of the component
}
\`\`\`

### Real-time Analysis

Monitor paranormal activity through the Analysis Panel:

\`\`\`typescript
interface AnalysisEvent {
  time: string;
  type: string;
  confidence: number;
  description: string;
}
\`\`\`

## 🔧 Configuration

The application is configured through environment variables:

\`\`\`env
VITE_APP_TITLE=SpiritBoxAI
VITE_API_URL=your_api_url_here
\`\`\`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code structure and naming conventions
- Write clean, maintainable, and well-documented code
- Add appropriate TypeScript types and interfaces
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- EMF readings may have a slight delay in real-time updates
- Camera feed occasionally requires refresh in Safari browsers

## 🙏 Credits

- Icons provided by [Lucide React](https://lucide.dev)
- Background images from [Unsplash](https://unsplash.com)
- Built with [Vite](https://vitejs.dev) and [React](https://reactjs.org)

## 📫 Support

For support, feature requests, or bug reports:

- Create an issue in the GitHub repository
- Email: support@spiritboxai.com
- Twitter: [@SpiritBoxAI](https://twitter.com/spiritboxai)

---

Made with 💜 by the SpiritBoxAI team