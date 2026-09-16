import { NextResponse } from 'next/server';
import { AI_TOOLS } from '../../../lib/tools-data';
import { filterTools } from '../../../lib/utils';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'All';
  const provider = searchParams.get('provider') || 'All Providers';
  const pricing = searchParams.get('pricing') || 'All';
  const googleOnly = searchParams.get('googleOnly') === 'true';

  const filtered = filterTools(AI_TOOLS, query, category, provider, pricing, googleOnly);

  return NextResponse.json({
    success: true,
    count: filtered.length,
    tools: filtered,
  });
}
