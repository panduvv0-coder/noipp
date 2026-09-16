'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AI_TOOLS } from '../../lib/tools-data';
import { Scale, Check, ExternalLink, ArrowLeft, Globe, Cpu, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ComparePage() {
  const [selectedToolIds, setSelectedToolIds] = useState<string[]>([
    'google-gemini-1-5-pro',
    'openai-gpt-4o',
    'anthropic-claude-3-5-sonnet',
  ]);

  const selectedTools = AI_TOOLS.filter((t) => selectedToolIds.includes(t.id));

  const handleSelectSlot = (toolId: string, slotIndex: number) => {
    const updated = [...selectedToolIds];
    updated[slotIndex] = toolId;
    setSelectedToolIds(updated);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Navigation back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to AI Directory</span>
        </Link>

        {/* Title */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-950/60 border border-purple-800/50 px-3 py-1 text-xs font-semibold text-purple-300 mb-4">
            <Scale className="h-4 w-4 text-purple-400" />
            <span>Side-by-Side Model Benchmarking</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Compare <span className="gradient-text">AI Foundation Models</span>
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Compare capabilities, context length, pricing, and API availability across Google AI Gemini, OpenAI GPT-4o, Anthropic Claude, and more.
          </p>
        </div>

        {/* Slot Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[0, 1, 2].map((slotIndex) => {
            const currentTool = selectedTools[slotIndex];
            return (
              <div key={slotIndex} className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-4">
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Model Slot {slotIndex + 1}
                </label>
                <select
                  value={currentTool?.id || ''}
                  onChange={(e) => handleSelectSlot(e.target.value, slotIndex)}
                  className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 text-sm text-zinc-100 font-semibold focus:border-purple-500 focus:outline-none"
                >
                  {AI_TOOLS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.provider})
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-x-auto rounded-3xl bg-zinc-900/40 border border-zinc-800 p-6 backdrop-blur-xl">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="py-4 px-4 font-semibold text-zinc-400 w-1/4">Feature / Metric</th>
                {selectedTools.map((tool) => (
                  <th key={tool.id} className="py-4 px-4 font-bold text-white w-1/4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl p-0.5 border ${
                          tool.isGoogleTool
                            ? 'bg-gradient-to-tr from-blue-600 via-red-500 to-yellow-500 border-blue-400'
                            : 'bg-zinc-950 border-zinc-800'
                        }`}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-950">
                          {tool.isGoogleTool ? (
                            <Globe className="h-5 w-5 text-blue-400" />
                          ) : (
                            <Cpu className="h-5 w-5 text-purple-400" />
                          )}
                        </div>
                      </div>
                      <span className="text-base">{tool.name}</span>
                      <span className="text-xs font-normal text-zinc-400">{tool.provider}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-xs">
              {/* Pricing Row */}
              <tr>
                <td className="py-4 px-4 font-semibold text-zinc-300">Pricing Tier</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="py-4 px-4 text-center font-semibold text-purple-300">
                    {tool.pricing}
                  </td>
                ))}
              </tr>

              {/* Context Window Row */}
              <tr>
                <td className="py-4 px-4 font-semibold text-zinc-300">Context Window</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="py-4 px-4 text-center font-bold text-blue-400">
                    {tool.contextWindow || 'N/A'}
                  </td>
                ))}
              </tr>

              {/* API Availability */}
              <tr>
                <td className="py-4 px-4 font-semibold text-zinc-300">Developer API</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="py-4 px-4 text-center">
                    {tool.apiAvailable ? (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                        <Check className="h-4 w-4" /> Yes
                      </span>
                    ) : (
                      <span className="text-zinc-600">No</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* User Rating */}
              <tr>
                <td className="py-4 px-4 font-semibold text-zinc-300">User Rating</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="py-4 px-4 text-center font-bold text-amber-400">
                    ★ {tool.rating} / 5.0
                  </td>
                ))}
              </tr>

              {/* Description */}
              <tr>
                <td className="py-4 px-4 font-semibold text-zinc-300">Primary Focus</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="py-4 px-4 text-center text-zinc-300 leading-relaxed">
                    {tool.description}
                  </td>
                ))}
              </tr>

              {/* Key Features */}
              <tr>
                <td className="py-4 px-4 font-semibold text-zinc-300">Highlights</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="py-4 px-4 text-left">
                    <ul className="space-y-1.5 text-zinc-400">
                      {tool.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Sparkles className="h-3 w-3 text-purple-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Action Link */}
              <tr>
                <td className="py-4 px-4 font-semibold text-zinc-300">Official Link</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="py-4 px-4 text-center">
                    <a
                      href={tool.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl bg-purple-600 hover:bg-purple-500 px-4 py-2 text-xs font-bold text-white transition-all"
                    >
                      <span>Try {tool.name.split(' ')[0]}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}
