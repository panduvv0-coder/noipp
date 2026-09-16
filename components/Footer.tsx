import React from 'react';
import Link from 'next/link';
import { Cpu, Github, Twitter, Globe, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 py-12 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Cpu className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">NOIPP AI</span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed">
              The ultimate directory for exploring modern AI models, tools, and developer APIs. Featuring comprehensive coverage of Google AI, Gemini 1.5, NotebookLM, OpenAI, Anthropic, and open-source models.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-blue-400" /> Google AI Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#google-gemini-1-5-pro" className="hover:text-blue-400 transition-colors">Gemini 1.5 Pro (2M Context)</a></li>
              <li><a href="#google-notebooklm" className="hover:text-blue-400 transition-colors">NotebookLM (Audio Podcasts)</a></li>
              <li><a href="#google-veo" className="hover:text-blue-400 transition-colors">Google Veo (1080p Video)</a></li>
              <li><a href="#google-imagen-3" className="hover:text-blue-400 transition-colors">Imagen 3 (Text-to-Image)</a></li>
              <li><a href="#google-gemma-2" className="hover:text-blue-400 transition-colors">Gemma 2 (Open Weights)</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-4">
              Top Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#all-tools" className="hover:text-purple-400 transition-colors">Text & Chat Models</a></li>
              <li><a href="#all-tools" className="hover:text-purple-400 transition-colors">Coding Assistants</a></li>
              <li><a href="#all-tools" className="hover:text-purple-400 transition-colors">Image & Visual Generators</a></li>
              <li><a href="#all-tools" className="hover:text-purple-400 transition-colors">Video & Motion AI</a></li>
              <li><a href="#all-tools" className="hover:text-purple-400 transition-colors">Audio & Voice Synthesis</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-4">
              About NOIPP
            </h4>
            <p className="text-xs text-zinc-400 mb-4">
              Built with Next.js 14, Tailwind CSS, and TypeScript. Continuously updated with the latest artificial intelligence breakthroughs.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} NOIPP AI Tools Directory. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for the AI community
          </p>
        </div>
      </div>
    </footer>
  );
};
