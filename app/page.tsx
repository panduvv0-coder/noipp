'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { GoogleAISpotlight } from '../components/GoogleAISpotlight';
import { ToolCard } from '../components/ToolCard';
import { ToolDetailModal } from '../components/ToolDetailModal';
import { CompareDrawer } from '../components/CompareDrawer';
import { SubmitToolModal } from '../components/SubmitToolModal';
import { Footer } from '../components/Footer';
import { AI_TOOLS, AITool } from '../lib/tools-data';
import { filterTools } from '../lib/utils';
import { Layers, Info } from 'lucide-react';

export default function HomePage() {
  const [toolsList, setToolsList] = useState<AITool[]>(AI_TOOLS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [selectedPricing, setSelectedPricing] = useState('All');
  const [googleOnly, setGoogleOnly] = useState(false);

  // Modal & Drawer State
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);
  const [comparedTools, setComparedTools] = useState<AITool[]>([]);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Filter tools dynamically
  const filteredTools = useMemo(() => {
    return filterTools(
      toolsList,
      searchQuery,
      selectedCategory,
      selectedProvider,
      selectedPricing,
      googleOnly
    );
  }, [toolsList, searchQuery, selectedCategory, selectedProvider, selectedPricing, googleOnly]);

  const googleTools = useMemo(() => {
    return toolsList.filter((t) => t.isGoogleTool);
  }, [toolsList]);

  // Handle comparison toggle
  const handleToggleCompare = (tool: AITool) => {
    if (comparedTools.some((t) => t.id === tool.id)) {
      setComparedTools((prev) => prev.filter((t) => t.id !== tool.id));
    } else {
      if (comparedTools.length >= 3) {
        alert('You can compare up to 3 tools at a time.');
        return;
      }
      setComparedTools((prev) => [...prev, tool]);
    }
  };

  const isToolCompared = (toolId: string) => {
    return comparedTools.some((t) => t.id === toolId);
  };

  const handleToolSubmission = (newTool: any) => {
    const created: AITool = {
      id: `tool-${Date.now()}`,
      name: newTool.name,
      slug: newTool.name.toLowerCase().replace(/\s+/g, '-'),
      description: newTool.description,
      longDescription: newTool.description,
      provider: newTool.provider,
      categories: [newTool.category],
      subcategories: [newTool.category],
      pricing: newTool.pricing as any,
      website: newTool.website,
      apiAvailable: true,
      features: newTool.features,
      useCases: ['General AI productivity'],
      logo: '',
      rating: 5.0,
      reviewCount: 1,
      upvotes: 1,
      isFeatured: false,
      isTrending: true,
      isGoogleTool: newTool.provider.toLowerCase().includes('google'),
    };
    setToolsList((prev) => [created, ...prev]);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-purple-500/30 selection:text-purple-200">
      {/* Top Navbar */}
      <Navbar
        onSearchChange={(q) => setSearchQuery(q)}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        compareCount={comparedTools.length}
        onOpenCompare={() => {
          if (comparedTools.length === 0) {
            alert('Add tools to compare by clicking "+ Compare" on any tool card.');
          }
        }}
      />

      {/* Hero Section */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedProvider={selectedProvider}
        setSelectedProvider={setSelectedProvider}
        selectedPricing={selectedPricing}
        setSelectedPricing={setSelectedPricing}
        googleOnly={googleOnly}
        setGoogleOnly={setGoogleOnly}
        totalToolsCount={toolsList.length}
        googleToolsCount={googleTools.length}
      />

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {/* Google AI Spotlight Section */}
        {!searchQuery && selectedCategory === 'All' && selectedProvider === 'All Providers' && (
          <GoogleAISpotlight
            googleTools={googleTools}
            onSelectTool={(tool) => setSelectedTool(tool)}
            onCompareTool={handleToggleCompare}
            isCompared={isToolCompared}
          />
        )}

        {/* All AI Tools Grid Header */}
        <section id="all-tools" className="mt-12 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <Layers className="h-6 w-6 text-purple-400" />
              <span>AI Tools Directory</span>
              <span className="text-xs font-normal text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
                {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'} found
              </span>
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Browse top rated generative models, coding assistants, image generators, and developer platforms.
            </p>
          </div>

          {/* Active Filter Tags */}
          {(selectedCategory !== 'All' || selectedProvider !== 'All Providers' || selectedPricing !== 'All' || googleOnly) && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedProvider('All Providers');
                  setSelectedPricing('All');
                  setGoogleOnly(false);
                  setSearchQuery('');
                }}
                className="text-xs text-purple-400 hover:text-purple-300 font-semibold underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* Tools Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onSelectTool={(t) => setSelectedTool(t)}
                onCompareTool={handleToggleCompare}
                isCompared={isToolCompared(tool.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-zinc-900/40 border border-zinc-800 my-12">
            <Info className="mx-auto h-12 w-12 text-zinc-500 mb-4" />
            <h3 className="text-xl font-bold text-white">No AI tools match your criteria</h3>
            <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
              Try adjusting your search query or reset category filters to view available tools.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedProvider('All Providers');
                setSelectedPricing('All');
                setGoogleOnly(false);
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white hover:bg-purple-500 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Tool Detail Modal */}
      <ToolDetailModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
        onCompare={handleToggleCompare}
        isCompared={selectedTool ? isToolCompared(selectedTool.id) : false}
      />

      {/* Comparison Drawer */}
      <CompareDrawer
        comparedTools={comparedTools}
        onRemoveTool={(id) => setComparedTools((prev) => prev.filter((t) => t.id !== id))}
        onClearAll={() => setComparedTools([])}
        onClose={() => setComparedTools([])}
      />

      {/* Submit Tool Modal */}
      <SubmitToolModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitSuccess={handleToolSubmission}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
