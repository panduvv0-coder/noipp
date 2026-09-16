import React from 'react';
import { AITool } from '../lib/tools-data';
import { ExternalLink, Sparkles, Check, Zap, Cpu, FileText, Video, Image, Mic } from 'lucide-react';

interface GoogleAISpotlightProps {
  googleTools: AITool[];
  onSelectTool: (tool: AITool) => void;
  onCompareTool: (tool: AITool) => void;
  isCompared: (toolId: string) => boolean;
}

export const GoogleAISpotlight: React.FC<GoogleAISpotlightProps> = ({
  googleTools,
  onSelectTool,
  onCompareTool,
  isCompared,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Research':
        return <FileText className="h-4 w-4 text-emerald-400" />;
      case 'Video Generation':
        return <Video className="h-4 w-4 text-red-400" />;
      case 'Image Generation':
        return <Image className="h-4 w-4 text-purple-400" />;
      case 'Audio & Music':
        return <Mic className="h-4 w-4 text-yellow-400" />;
      default:
        return <Cpu className="h-4 w-4 text-blue-400" />;
    }
  };

  return (
    <section id="google-spotlight" className="relative my-16 py-12 px-4 sm:px-6 lg:px-8 rounded-3xl bg-gradient-to-b from-blue-950/20 via-zinc-950 to-purple-950/20 border border-blue-500/20 shadow-2xl overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 opacity-80" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10 pb-6 border-b border-zinc-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-950/80 border border-blue-500/30 px-3 py-1 text-xs font-semibold text-blue-300 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
            <span>Featured Ecosystem</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <span className="google-gradient-text text-3xl font-black">Google AI</span> Innovation Hub
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
            Explore Google DeepMind’s flagship foundation models, multi-modal audio generators, 1080p video synthesis engines, and intelligent research assistants.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3 py-2 rounded-xl">
          <Zap className="h-4 w-4 text-yellow-400" />
          <span>Powered by Gemini 1.5 Architecture</span>
        </div>
      </div>

      {/* Grid of Google Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {googleTools.map((tool) => {
          const compared = isCompared(tool.id);
          return (
            <div
              key={tool.id}
              id={tool.slug}
              className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 hover:border-blue-500/50 hover:bg-zinc-900/90 transition-all duration-300 shadow-xl hover:shadow-blue-500/10"
            >
              {/* Top Row: Icon/Logo & Badges */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600/20 via-red-500/20 to-yellow-500/20 p-0.5 border border-zinc-700">
                      <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-950">
                        {getCategoryIcon(tool.categories[0])}
                      </div>
                    </div>
                    <div>
                      <h3
                        onClick={() => onSelectTool(tool)}
                        className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {tool.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[11px] text-blue-400 font-medium">
                        Google AI • {tool.pricing}
                      </span>
                    </div>
                  </div>

                  {tool.contextWindow && (
                    <span className="rounded-full bg-blue-950 border border-blue-800/60 px-2.5 py-0.5 text-[10px] font-bold text-blue-300">
                      {tool.contextWindow}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* Key Specs Pills */}
                {tool.keySpecs && (
                  <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-[11px]">
                    {Object.entries(tool.keySpecs).slice(0, 2).map(([k, v]) => (
                      <div key={k} className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase">{k}</span>
                        <span className="text-zinc-200 font-medium truncate">{v}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights List */}
                <ul className="space-y-1.5 mb-6 text-[11px] text-zinc-400">
                  {tool.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Check className="h-3 w-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-zinc-800/80 mt-auto">
                <button
                  onClick={() => onSelectTool(tool)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-all"
                >
                  View Details
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onCompareTool(tool)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      compared
                        ? 'bg-purple-950 border-purple-600 text-purple-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    {compared ? 'Compared' : '+ Compare'}
                  </button>

                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all"
                    title="Visit Official Website"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
