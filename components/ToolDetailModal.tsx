'use client';

import React from 'react';
import { AITool } from '../lib/tools-data';
import { formatNumber } from '../lib/utils';
import { X, ExternalLink, Star, ThumbsUp, Check, Globe, Cpu, Code, Layers } from 'lucide-react';

interface ToolDetailModalProps {
  tool: AITool | null;
  onClose: () => void;
  onCompare: (tool: AITool) => void;
  isCompared: boolean;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({
  tool,
  onClose,
  onCompare,
  isCompared,
}) => {
  if (!tool) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl p-0.5 border ${
              tool.isGoogleTool
                ? 'bg-gradient-to-tr from-blue-600 via-red-500 to-yellow-500 border-blue-400'
                : 'bg-zinc-900 border-zinc-800'
            }`}
          >
            <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-zinc-950">
              {tool.isGoogleTool ? (
                <Globe className="h-8 w-8 text-blue-400" />
              ) : (
                <Cpu className="h-8 w-8 text-purple-400" />
              )}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-white">{tool.name}</h2>
              {tool.isGoogleTool && (
                <span className="rounded-full bg-blue-950 border border-blue-600 px-3 py-0.5 text-xs font-bold text-blue-300">
                  Google AI Tool
                </span>
              )}
              <span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-0.5 text-xs font-medium text-zinc-400">
                {tool.pricing}
              </span>
            </div>

            <p className="text-xs text-zinc-400 mb-2">Developed by <strong className="text-zinc-200">{tool.provider}</strong></p>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="h-4 w-4 fill-amber-400" />
                <span>{tool.rating}</span>
                <span className="text-zinc-500 font-normal">({formatNumber(tool.reviewCount)} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-purple-400 font-bold">
                <ThumbsUp className="h-4 w-4" />
                <span>{formatNumber(tool.upvotes)} Upvotes</span>
              </div>
              {tool.apiAvailable && (
                <div className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Code className="h-4 w-4" />
                  <span>API Available</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="space-y-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-900 pt-6">
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Overview</h3>
            <p className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4 text-zinc-200">
              {tool.longDescription || tool.description}
            </p>
          </div>

          {/* Key Specs for Google tools or advanced models */}
          {tool.keySpecs && (
            <div>
              <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Layers className="h-4 w-4 text-blue-400" /> Technical Specifications & Performance
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(tool.keySpecs).map(([specKey, specVal]) => (
                  <div key={specKey} className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-3">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">{specKey}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{specVal}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Grid */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tool.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-xl bg-zinc-900/50 border border-zinc-800/60 p-2.5 text-xs text-zinc-200">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Recommended Use Cases</h3>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((uc, idx) => (
                <span key={idx} className="rounded-lg bg-purple-950/40 border border-purple-800/40 px-3 py-1 text-xs text-purple-200">
                  {uc}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Details & Website Link */}
          {tool.priceDetails && (
            <div className="rounded-xl bg-blue-950/20 border border-blue-800/30 p-4 flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-semibold">Pricing Model Details:</span>
              <span className="text-blue-300 font-medium">{tool.priceDetails}</span>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 border-t border-zinc-900 pt-6 mt-6">
          <button
            onClick={() => onCompare(tool)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
              isCompared
                ? 'bg-purple-950 border-purple-500 text-purple-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            {isCompared ? 'Added to Comparison' : '+ Add to Compare'}
          </button>

          <a
            href={tool.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-purple-600/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <span>Visit Official Site</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
