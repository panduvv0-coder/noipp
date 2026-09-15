# noipp - AI Tools Directory

A comprehensive AI Tools Directory web application with modern UI/UX, featuring 200+ AI models and tools across all major providers (OpenAI, Google, Anthropic, Meta, Microsoft, and more).

## 🚀 Features

### User Features
- **Homepage**: Hero section with search bar, featured tools carousel, category grid, recently added & trending tools
- **Advanced Filtering**: Filter by provider, category, pricing tier, and capability
- **Tool Detail Pages**: Full descriptions, pricing, features, API availability, use cases, and similar tools
- **Comparison Tool**: Compare up to 3 tools side-by-side
- **Community**: User reviews, ratings, upvote/downvote system, and tool submission form
- **Responsive Design**: Optimized for mobile, tablet, and desktop

### Admin Features
- **Tool Management**: Add, edit, and delete AI tools
- **Submission Moderation**: Review and approve user-submitted tools
- **Analytics Dashboard**: View usage statistics and popular tools

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Search**: Algolia or full-text search
- **State Management**: Zustand + React Query
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## 📦 Pre-populated AI Models & Tools

### Supported Providers
- **OpenAI**: GPT-4o, GPT-4 Turbo, GPT-4, GPT-3.5 Turbo, DALL-E 3, Whisper, TTS-1, Sora, Codex
- **Google**: Gemini (1.5 Pro/Flash), Imagen 3, PaLM 2, VideoPoet, Vertex AI
- **Anthropic**: Claude 3.5 Sonnet, Claude 3 (Opus/Sonnet/Haiku), Claude 2.1
- **Meta**: Llama 3.1 (405B/70B/8B), Code Llama, Llama Guard
- **Alibaba**: Qwen2.5, Qwen2-VL, Qwen-Audio, Qwen-Coder
- **Microsoft**: Phi-3, Orca 2, GPT-4 Turbo with Vision
- **Other**: Mistral, Mixtral, Command R, Yi, Falcon, Grok, xAI

### Tool Categories
- Text-based AI (Chat, Writing, Coding)
- Image Generation (DALL-E, Midjourney, Stable Diffusion)
- Video Generation (Runway, Pika Labs, HeyGen)
- Audio & Music (ElevenLabs, Suno AI, Udio)
- Coding Assistants (GitHub Copilot, Cursor, Codeium)
- Development Platforms (Hugging Face, Replicate, Together AI)
- Search & Research Tools
- Business & Productivity
- Education & Learning
- Security & Compliance

## 🎨 Design

- **Theme**: Dark mode default with light mode toggle
- **Aesthetic**: Glassmorphism effects with gradient accents (purple, blue, cyan)
- **Animations**: Smooth transitions with Framer Motion
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Loading skeletons, optimized images, lazy loading

## 📊 Data Structure

Each tool includes:
```typescript
interface AITool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  provider: string;
  category: string[];
  subcategories: string[];
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Enterprise';
  website: string;
  apiAvailable: boolean;
  features: string[];
  useCases: string[];
  logo: string;
  screenshots: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isTrending: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/panduvv0-coder/noipp.git
cd noipp

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Set up database
npx prisma migrate dev
npm run seed

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/noipp

# NextAuth
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Algolia (optional)
NEXT_PUBLIC_ALGOLIA_APP_ID=your-app-id
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your-search-key
ALGOLIA_ADMIN_KEY=your-admin-key
```

## 📁 Project Structure

```
noipp/
├── app/                 # Next.js 14 App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── tools/
│   ├── admin/
│   └── api/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── layout/
│   ├── tools/
│   └── common/
├── lib/                # Utility functions
│   ├── utils.ts
│   ├── db.ts
│   └── search.ts
├── prisma/             # Database schema
│   ├── schema.prisma
│   └── seed.ts
├── public/             # Static assets
├── styles/             # Global styles
├── types/              # TypeScript types
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🔒 SEO & Metadata

- Generated sitemap.xml
- Dynamic meta tags for each tool
- Open Graph images
- Structured data (JSON-LD)
- Mobile-first indexing
- Fast Core Web Vitals

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## 📧 Support

For support, open an issue on GitHub or contact us through the website.
