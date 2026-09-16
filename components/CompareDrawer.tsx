'use client';

import React from 'react';
import { AITool } from '../lib/tools-data';
import { X, Scale, Check, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CompareDrawerProps {
  comparedTools: AITool[];
  onRemoveTool: (toolId: string) => void;
  onClearAll: () => void;
  onClose: () => void;
}

export const CompareDrawer: React.FC<CompareDrawerProps> = ({
  comparedTools,
  onRemoveTool,
  onClearAll,
  onClose,
}) => {
  if (comparedTools.length === 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-zinc-950/95 border-t border-purple-500/30 backdrop-blur-2xl shadow-2xl animate-slide-up">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-purple-400" />
            <h3 className="text-base font-bold text-white">
              Tool Comparison Matrix ({comparedTools.length}/3)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {comparedTools.length >= 2 && (
              <Link
                href="/compare"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-xs font-bold text-white shadow-md hover:brightness-110 transition-all"
              >
                <span>Full Comparison Matrix</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
            <button
              onClick={onClearAll}
              className="text-xs text-zinc-400 hover:text-red-400 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Quick Side-by-Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {comparedTools.map((tool) => (
            <div
              key={tool.id}
              className="relative rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 flex flex-col justify-between"
            >
              <button
                onClick={() => onRemoveTool(tool.id)}
                className="absolute top-3 right-3 p-1 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>

              <div>
                <span className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">
                  {tool.provider}
                </span>
                <h4 className="text-sm font-bold text-white truncate pr-6">{tool.name}</h4>
                <p className="text-xs text-zinc-400 line-clamp-2 mt-1">{tool.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-1.5 text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Pricing:</span>
                  <span className="font-semibold text-purple-300">{tool.pricing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">API:</span>
                  <span>{tool.apiAvailable ? <Check className="h-3.5 w-3.5 text-emerald-400 inline" /> : <Minus className="h-3.5 w-3.5 text-zinc-600 inline" />}</span>
                </div>
                {tool.contextWindow && (
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Context:</span>
                    <span className="font-bold text-blue-300">{tool.contextWindow}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
