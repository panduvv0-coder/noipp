import React from 'react';
import { Search, Sparkles, Zap, Globe, Layers, CheckCircle } from 'lucide-react';
import { CATEGORIES, PROVIDERS, PRICING_FILTERS } from '../lib/tools-data';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedProvider: string;
  setSelectedProvider: (prov: string) => void;
  selectedPricing: string;
  setSelectedPricing: (price: string) => void;
  googleOnly: boolean;
  setGoogleOnly: (val: boolean) => void;
  totalToolsCount: number;
  googleToolsCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedProvider,
  setSelectedProvider,
  selectedPricing,
  setSelectedPricing,
  googleOnly,
  setGoogleOnly,
  totalToolsCount,
  googleToolsCount,
}) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[250px] bg-cyan-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-cyan-900/40 border border-purple-500/30 px-4 py-1.5 text-xs font-semibold text-purple-200 backdrop-blur-md mb-8 animate-float">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span>Discover 200+ Cutting-Edge AI Models & Tools</span>
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto">
          Explore the Next Generation of <br />
          <span className="gradient-text">Artificial Intelligence</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Search, compare, and filter top-tier AI models across <strong className="text-zinc-200">Google AI (Gemini 1.5, NotebookLM, Veo)</strong>, OpenAI, Anthropic, Meta, and open-source ecosystems.
        </p>

        {/* Live Stats Counters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80 px-4 py-2">
            <Layers className="h-4 w-4 text-purple-400" />
            <span><strong className="text-white font-bold">{totalToolsCount}+</strong> AI Tools Indexed</span>
          </div>
          <button
            onClick={() => setGoogleOnly(!googleOnly)}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition-all cursor-pointer ${
              googleOnly
                ? 'bg-blue-950/80 border-blue-500 text-blue-200 shadow-md shadow-blue-500/20'
                : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-blue-500/50'
            }`}
          >
            <Globe className="h-4 w-4 text-blue-400" />
            <span><strong className="text-blue-300 font-bold">{googleToolsCount}</strong> Google AI Tools Highlighted</span>
            {googleOnly && <CheckCircle className="h-3.5 w-3.5 text-blue-400 ml-1" />}
          </button>
          <div className="flex items-center gap-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80 px-4 py-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span>Real-time Benchmarks & Pricing</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-30 blur-md group-hover:opacity-60 transition duration-500" />
            <div className="relative flex items-center rounded-2xl bg-zinc-950/90 border border-zinc-800 p-2 shadow-2xl backdrop-blur-xl">
              <Search className="h-6 w-6 text-purple-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search tools by name, features, or provider (e.g. Gemini 1.5, NotebookLM, Veo)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mr-3 text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-800"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filter Grid */}
        <div className="mt-10 space-y-4 max-w-5xl mx-auto">
          <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">
            Filter Tools by Category
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 border ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/25 border-purple-400 scale-[1.02]'
                    : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/80'
                }`}
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Provider & Pricing Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Provider Select */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300">Provider:</span>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg px-3 py-1.5 text-xs focus:border-purple-500 focus:outline-none"
              >
                {PROVIDERS.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing Select */}
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300">Pricing:</span>
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-lg px-3 py-1.5 text-xs focus:border-purple-500 focus:outline-none"
              >
                {PRICING_FILTERS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            {/* Google Only Toggle Button */}
            <button
              onClick={() => setGoogleOnly(!googleOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                googleOnly
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-blue-400 shadow-md shadow-blue-500/20'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <Globe className="h-3.5 w-3.5 text-blue-400" />
              <span>Google AI Filter Only</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
