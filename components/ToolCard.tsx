'use client';

import React, { useState } from 'react';
import { AITool } from '../lib/tools-data';
import { formatNumber } from '../lib/utils';
import { Star, ThumbsUp, ExternalLink, Globe, Cpu, Check } from 'lucide-react';

interface ToolCardProps {
  tool: AITool;
  onSelectTool: (tool: AITool) => void;
  onCompareTool: (tool: AITool) => void;
  isCompared: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  onSelectTool,
  onCompareTool,
  isCompared,
}) => {
  const [upvotes, setUpvotes] = useState(tool.upvotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasUpvoted) {
      setUpvotes((prev) => prev - 1);
      setHasUpvoted(false);
    } else {
      setUpvotes((prev) => prev + 1);
      setHasUpvoted(true);
    }
  };

  const getPricingBadge = (pricing: string) => {
    switch (pricing) {
      case 'Free':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60';
      case 'Freemium':
        return 'bg-blue-950/80 text-blue-400 border-blue-800/60';
      case 'Paid':
        return 'bg-purple-950/80 text-purple-400 border-purple-800/60';
      default:
        return 'bg-amber-950/80 text-amber-400 border-amber-800/60';
    }
  };

  return (
    <div
      onClick={() => onSelectTool(tool)}
      className={`glass-card group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
        tool.isGoogleTool ? 'border-blue-500/30 hover:border-blue-500/70' : ''
      }`}
    >
      <div>
        {/* Card Header: Provider & Badges */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl p-0.5 border ${
                tool.isGoogleTool
                  ? 'bg-gradient-to-tr from-blue-600 via-red-500 to-yellow-500 border-blue-400/50'
                  : 'bg-zinc-900 border-zinc-800'
              }`}
            >
              <div className="flex h-full w-full items-center justify-center rounded-[9px] bg-zinc-950">
                {tool.isGoogleTool ? (
                  <Globe className="h-4 w-4 text-blue-400" />
                ) : (
                  <Cpu className="h-4 w-4 text-purple-400" />
                )}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-purple-400 transition-colors flex items-center gap-1.5">
                {tool.name}
              </h3>
              <p className="text-[11px] text-zinc-400">by {tool.provider}</p>
            </div>
          </div>

          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold border ${getPricingBadge(
              tool.pricing
            )}`}
          >
            {tool.pricing}
          </span>
        </div>

        {/* Google AI Highlight Tag */}
        {tool.isGoogleTool && (
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 text-[10px] text-blue-300 font-medium">
            <span className="google-gradient-text font-bold">Google AI Ecosystem</span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed mb-4">
          {tool.description}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="rounded-md bg-zinc-900/90 border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400 font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Key Feature preview */}
        <div className="space-y-1 mb-4 text-[11px] text-zinc-400">
          {tool.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-1.5 truncate">
              <Check className="h-3 w-3 text-purple-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Rating, Upvotes, Compare, Link */}
      <div className="flex items-center justify-between gap-2 pt-4 border-t border-zinc-800/80 mt-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
            <Star className="h-3.5 w-3.5 fill-amber-400" />
            <span>{tool.rating}</span>
            <span className="text-[10px] text-zinc-500 font-normal">
              ({formatNumber(tool.reviewCount)})
            </span>
          </div>

          {/* Upvote Button */}
          <button
            onClick={handleUpvote}
            className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold transition-all ${
              hasUpvoted
                ? 'bg-purple-600 text-white'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            <ThumbsUp className="h-3 w-3" />
            <span>{formatNumber(upvotes)}</span>
          </button>
        </div>

        {/* Compare & External Link */}
        <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onCompareTool(tool)}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all border ${
              isCompared
                ? 'bg-purple-950 border-purple-500 text-purple-300'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
            }`}
            title="Add to comparison matrix"
          >
            {isCompared ? 'Added' : '+ Compare'}
          </button>

          <a
            href={tool.website}
            target="_blank"
            rel="noreferrer"
            className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all border border-zinc-800"
            title="Visit Website"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
