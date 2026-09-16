import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Tools Directory - Explore 200+ AI Models & Tools | Google AI, Gemini, OpenAI',
  description: 'Comprehensive directory of top AI tools, models, APIs, and frameworks featuring Google AI (Gemini 1.5, NotebookLM, Veo, Imagen 3), OpenAI, Anthropic, Meta, and more.',
  keywords: ['AI tools directory', 'Google AI', 'Gemini 1.5 Pro', 'NotebookLM', 'Veo AI', 'Imagen 3', 'OpenAI', 'Claude 3.5', 'Llama 3.1'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}
