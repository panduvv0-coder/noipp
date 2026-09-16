'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle, Plus } from 'lucide-react';
import { CATEGORIES, PRICING_FILTERS } from '../lib/tools-data';

interface SubmitToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: (toolData: any) => void;
}

export const SubmitToolModal: React.FC<SubmitToolModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    provider: '',
    website: '',
    category: CATEGORIES[1] || 'Text & Chat',
    pricing: 'Freemium',
    description: '',
    features: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess({
        ...formData,
        features: formData.features.split(',').map((f) => f.trim()),
      });
    }
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-emerald-400 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold text-white">Tool Submitted Successfully!</h3>
            <p className="text-sm text-zinc-400">
              Thank you for contributing. Our moderators will review and publish your AI tool shorty.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Plus className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Submit an AI Tool</h3>
                <p className="text-xs text-zinc-400">Add a new Google AI tool, model, or startup</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Tool Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Gemini 1.5 Flash"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Provider / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Google DeepMind"
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Pricing Model</label>
                <select
                  value={formData.pricing}
                  onChange={(e) => setFormData({ ...formData, pricing: e.target.value })}
                  className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm text-zinc-100 focus:border-purple-500 focus:outline-none"
                >
                  {PRICING_FILTERS.filter((p) => p !== 'All').map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Website URL *</label>
              <input
                type="url"
                required
                placeholder="https://..."
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm text-zinc-100 focus:border-purple-500 focus:outline-none"
              >
                {CATEGORIES.filter((c) => c !== 'All').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Short Description *</label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe what this AI tool does..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-purple-600/25 hover:brightness-110 active:scale-98 transition-all"
            >
              <Send className="h-4 w-4" />
              <span>Submit for Verification</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
