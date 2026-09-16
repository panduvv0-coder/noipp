'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AI_TOOLS } from '../../../lib/tools-data';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { ArrowLeft, Star, ExternalLink, Globe, Cpu, Check, Code, Layers, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

export default function ToolDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const tool = AI_TOOLS.find((t) => t.slug === slug || t.id === slug);

  if (!tool) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center flex-1">
          <h1 className="text-3xl font-bold text-white mb-4">Tool Not Found</h1>
          <p className="text-zinc-400 mb-6">The requested AI tool page could not be found.</p>
          <Link href="/" className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs">
            Back to Directory
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-6 sm:p-10 backdrop-blur-xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8 pb-8 border-b border-zinc-800">
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl p-0.5 border ${
                tool.isGoogleTool
                  ? 'bg-gradient-to-tr from-blue-600 via-red-500 to-yellow-500 border-blue-400'
                  : 'bg-zinc-950 border-zinc-800'
              }`}
            >
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-zinc-950">
                {tool.isGoogleTool ? (
                  <Globe className="h-10 w-10 text-blue-400" />
                ) : (
                  <Cpu className="h-10 w-10 text-purple-400" />
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl font-extrabold text-white">{tool.name}</h1>
                {tool.isGoogleTool && (
                  <span className="rounded-full bg-blue-950 border border-blue-600 px-3 py-1 text-xs font-bold text-blue-300">
                    Google AI Tool
                  </span>
                )}
                <span className="rounded-full bg-purple-950 border border-purple-800 px-3 py-1 text-xs font-semibold text-purple-300">
                  {tool.pricing}
                </span>
              </div>

              <p className="text-sm text-zinc-400 mb-4">Provided by <strong className="text-zinc-200">{tool.provider}</strong></p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-300">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <span>{tool.rating} rating</span>
                </div>
                <div className="flex items-center gap-1.5 text-purple-400 font-bold">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{tool.upvotes} Upvotes</span>
                </div>
                {tool.apiAvailable && (
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Code className="h-4 w-4" />
                    <span>API Available</span>
                  </div>
                )}
              </div>
            </div>

            <a
              href={tool.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-xs font-bold text-white shadow-lg hover:brightness-110 transition-all self-stretch sm:self-auto justify-center"
            >
              <span>Visit Official Site</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Body */}
          <div className="space-y-8 text-sm text-zinc-300 leading-relaxed">
            <div>
              <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Description</h2>
              <p className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 text-zinc-200 text-base leading-relaxed">
                {tool.longDescription || tool.description}
              </p>
            </div>

            {tool.keySpecs && (
              <div>
                <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-blue-400" /> Key Specifications
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(tool.keySpecs).map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-zinc-950 border border-zinc-800 p-4">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">{k}</span>
                      <span className="text-sm font-bold text-white mt-1 block">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tool.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-3.5 text-xs text-zinc-200">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
