'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, Scale, Plus, Cpu, Globe } from 'lucide-react';

interface NavbarProps {
  onSearchChange?: (query: string) => void;
  onOpenSubmitModal?: () => void;
  compareCount?: number;
  onOpenCompare?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchChange,
  onOpenSubmitModal,
  compareCount = 0,
  onOpenCompare,
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-950">
                <Cpu className="h-5 w-5 text-purple-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                NOIPP <span className="gradient-text font-black text-xs uppercase px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/50">AI Directory</span>
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider flex items-center gap-1">
                Featuring <span className="text-blue-400 font-semibold flex items-center gap-0.5"><Globe className="h-2.5 w-2.5 inline" /> Google AI</span> & More
              </span>
            </div>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-purple-400" /> Directory
            </Link>
            <a href="#google-spotlight" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <span className="google-gradient-text font-bold">Google AI Tools</span>
            </a>
            <a href="#all-tools" className="hover:text-white transition-colors">
              Explore All
            </a>
          </nav>
        </div>

        {/* Center Search bar */}
        <div className="hidden sm:flex flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search Gemini, NotebookLM, Veo, GPT-4o..."
              value={searchValue}
              onChange={handleSearch}
              className="w-full rounded-full bg-zinc-900/90 border border-zinc-800 pl-10 pr-4 py-1.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-3">
          {onOpenCompare && (
            <button
              onClick={onOpenCompare}
              className="relative inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 text-xs font-semibold text-zinc-300 hover:border-purple-500 hover:text-white transition-all"
            >
              <Scale className="h-3.5 w-3.5 text-purple-400" />
              <span>Compare</span>
              {compareCount > 0 && (
                <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] text-white">
                  {compareCount}
                </span>
              )}
            </button>
          )}

          {onOpenSubmitModal && (
            <button
              onClick={onOpenSubmitModal}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-purple-600/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Submit Tool</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
