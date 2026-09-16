import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AITool } from './tools-data';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterTools(
  tools: AITool[],
  searchQuery: string,
  selectedCategory: string,
  selectedProvider: string,
  selectedPricing: string,
  googleOnly: boolean = false
): AITool[] {
  return tools.filter((tool) => {
    // Search query filter
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.provider.toLowerCase().includes(query) ||
      tool.categories.some((c) => c.toLowerCase().includes(query)) ||
      tool.features.some((f) => f.toLowerCase().includes(query));

    // Category filter
    const matchesCategory =
      selectedCategory === 'All' || tool.categories.includes(selectedCategory);

    // Provider filter
    const matchesProvider =
      selectedProvider === 'All Providers' ||
      tool.provider.toLowerCase() === selectedProvider.toLowerCase();

    // Pricing filter
    const matchesPricing =
      selectedPricing === 'All' || tool.pricing === selectedPricing;

    // Google only filter
    const matchesGoogle = !googleOnly || tool.isGoogleTool;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesProvider &&
      matchesPricing &&
      matchesGoogle
    );
  });
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}
