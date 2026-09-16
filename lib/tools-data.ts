export interface AITool {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  provider: string;
  providerLogo?: string;
  categories: string[];
  subcategories: string[];
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Enterprise';
  priceDetails?: string;
  website: string;
  apiAvailable: boolean;
  features: string[];
  useCases: string[];
  logo: string;
  rating: number;
  reviewCount: number;
  upvotes: number;
  isFeatured: boolean;
  isTrending: boolean;
  isGoogleTool?: boolean;
  contextWindow?: string;
  releaseDate?: string;
  keySpecs?: Record<string, string>;
}

export const AI_TOOLS: AITool[] = [
  // --- GOOGLE AI TOOLS & MODELS ---
  {
    id: 'google-gemini-1-5-pro',
    name: 'Google Gemini 1.5 Pro',
    slug: 'google-gemini-1-5-pro',
    description: 'Google’s state-of-the-art multimodal AI model featuring a revolutionary 2 million token context window.',
    longDescription: 'Gemini 1.5 Pro is Google’s highly capable flagship multimodal model. It introduces a breakthrough 2,000,000 token context window—the longest of any foundation model to date—allowing users to process hours of video, audio, entire codebases, or hundreds of thousands of words of text in a single prompt. It excels at complex reasoning, coding, multimodal comprehension, and data analysis.',
    provider: 'Google',
    categories: ['Text & Chat', 'Coding', 'Multimodal', 'Research'],
    subcategories: ['LLM', 'Code Assistant', 'Long Context', 'Document Analysis'],
    pricing: 'Freemium',
    priceDetails: 'Free tier in Gemini Web & AI Studio; API pay-as-you-go per 1M tokens',
    website: 'https://gemini.google.com',
    apiAvailable: true,
    features: [
      '2 Million Token Context Window',
      'Native Audio, Video, Image, and Text understanding',
      'System Instructions & Structured JSON Outputs',
      'Code execution and function calling',
      'Seamless Google Workspace & Drive integration'
    ],
    useCases: [
      'Analyzing multi-hour video recordings and audio files',
      'Refactoring and auditing large enterprise codebases',
      'Summarizing complex legal or academic documents',
      'Multimodal live conversation and data retrieval'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.9,
    reviewCount: 3840,
    upvotes: 4210,
    isFeatured: true,
    isTrending: true,
    isGoogleTool: true,
    contextWindow: '2,000,000 tokens',
    releaseDate: '2024',
    keySpecs: {
      'Context Length': '2M Tokens',
      'Modalities': 'Text, Audio, Video, Code, PDF',
      'Speed': 'High Performance',
      'API Platform': 'Google AI Studio & Vertex AI'
    }
  },
  {
    id: 'google-notebooklm',
    name: 'Google NotebookLM',
    slug: 'google-notebooklm',
    description: 'Google’s AI-powered personalized research assistant that turns documents into interactive Audio Overviews and podcasts.',
    longDescription: 'NotebookLM is an experimental research and note-taking tool powered by Gemini 1.5 Pro. It grounds the AI in your specific documents (PDFs, Google Docs, YouTube URLs, websites) so answers are accurate, grounded, and verified with source citations. Its viral feature "Audio Overview" creates realistic two-host conversational podcasts summarizing your content.',
    provider: 'Google',
    categories: ['Research', 'Productivity', 'Audio & Music', 'Education'],
    subcategories: ['AI Note Taking', 'Audio Podcast Generator', 'Document Summarizer'],
    pricing: 'Free',
    priceDetails: '100% Free with Google Account',
    website: 'https://notebooklm.google.com',
    apiAvailable: false,
    features: [
      'Grounded AI responses with strict inline citations',
      'Deep Dive Audio Overview (AI Podcast Generation)',
      'Upload PDFs, Google Docs, Slides, Text files & YouTube Links',
      'Study guides, FAQ generators, and outline creators',
      'Personalized notebook interface with saved notes'
    ],
    useCases: [
      'Generating conversational audio summaries of long research papers',
      'Studying for exams with automated study guides and quizzes',
      'Analyzing business reports and competitive intelligence',
      'Organizing book outlines and literature reviews'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.9,
    reviewCount: 2950,
    upvotes: 3890,
    isFeatured: true,
    isTrending: true,
    isGoogleTool: true,
    contextWindow: 'Up to 50 sources per notebook',
    releaseDate: '2024',
    keySpecs: {
      'Source Limit': '50 Sources per Notebook',
      'Audio Generation': 'Ultra-realistic 2-Host AI Podcast',
      'Privacy': 'Data is private to your Google Account'
    }
  },
  {
    id: 'google-veo',
    name: 'Google Veo',
    slug: 'google-veo',
    description: 'Google’s state-of-the-art 1080p generative video model capable of creating realistic 60+ second cinematic videos.',
    longDescription: 'Google Veo is Google’s most capable generative video model to date. It understands advanced cinematic camera instructions (e.g. pan, timelapse, aerial shot) and physics to generate high-definition 1080p video clips over a minute long in diverse visual and artistic styles.',
    provider: 'Google',
    categories: ['Video Generation', 'Multimodal', 'Design & Art'],
    subcategories: ['Text-to-Video', 'Cinematic AI', 'Video Editing'],
    pricing: 'Enterprise',
    priceDetails: 'Available via VideoFX & Vertex AI waitlist',
    website: 'https://deepmind.google/technologies/veo/',
    apiAvailable: true,
    features: [
      'High Quality 1080p Resolution output',
      'Understands cinematic camera controls (timelapse, pans, zooms)',
      'Consistent video frame continuity over long sequences',
      'Visual style editing and video-to-video transformations',
      'Integrated SynthID digital watermarking'
    ],
    useCases: [
      'Filmmaking and visual storyboarding',
      'Social media content creation and ads',
      'Visual effects and video editing enhancement',
      'Concept art animation'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.8,
    reviewCount: 1420,
    upvotes: 3100,
    isFeatured: true,
    isTrending: true,
    isGoogleTool: true,
    keySpecs: {
      'Resolution': '1080p HD',
      'Duration': '60+ Seconds',
      'Watermarking': 'SynthID Embedded'
    }
  },
  {
    id: 'google-imagen-3',
    name: 'Google Imagen 3',
    slug: 'google-imagen-3',
    description: 'Google’s highest quality photorealistic text-to-image generator with unmatched prompt adherence and text rendering.',
    longDescription: 'Imagen 3 is Google’s advanced image generation model that yields photorealistic images with extraordinary detail, vibrant lighting, and significantly fewer visual artifacts. It excels at rendering clear, legible text within images and following complex multi-clause prompts.',
    provider: 'Google',
    categories: ['Image Generation', 'Design & Art', 'Multimodal'],
    subcategories: ['Text-to-Image', 'Graphic Design', 'Photo Editing'],
    pricing: 'Freemium',
    priceDetails: 'Free in ImageFX; Enterprise pricing via Vertex AI',
    website: 'https://aitestkitchen.withgoogle.com/tools/image-fx',
    apiAvailable: true,
    features: [
      'Unmatched photorealism and fine detail rendering',
      'Accurate typography and text embedding inside generated images',
      'Broad visual styles: anime, photorealistic, oil painting, 3D render',
      'Expressive prompt chips in ImageFX for creative tweaking',
      'Built-in SynthID invisible watermarking'
    ],
    useCases: [
      'High-end marketing and advertising visuals',
      'Product design mockups and digital art',
      'Editorial illustrations and banners',
      'Creative brain-storming and asset generation'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.9,
    reviewCount: 2150,
    upvotes: 3670,
    isFeatured: true,
    isTrending: true,
    isGoogleTool: true,
    keySpecs: {
      'Output Quality': 'Ultra-High Photorealism',
      'Text In Image': 'Industry Leading Accuracy',
      'Safety': 'Safety Filters + SynthID'
    }
  },
  {
    id: 'google-gemini-1-5-flash',
    name: 'Google Gemini 1.5 Flash',
    slug: 'google-gemini-1-5-flash',
    description: 'Google’s lightweight, sub-second latency multimodal model optimized for high-volume, cost-efficient AI tasks.',
    longDescription: 'Gemini 1.5 Flash is designed for speed and efficiency. It delivers fast responses with a massive 1M token context window at a fraction of the cost, making it ideal for real-time customer support, video indexing, continuous data processing, and high-frequency API workflows.',
    provider: 'Google',
    categories: ['Text & Chat', 'Coding', 'Multimodal', 'Developer Tools'],
    subcategories: ['Fast LLM', 'API Model', 'Low Latency'],
    pricing: 'Freemium',
    priceDetails: 'Free tier in AI Studio; extremely low API cost ($0.075 / 1M input tokens)',
    website: 'https://aistudio.google.com',
    apiAvailable: true,
    features: [
      '1 Million Token Context Window',
      'Ultra-low latency sub-second responses',
      'Cost efficient for large scale deployment',
      'Multimodal input (Text, Audio, Video, PDF)',
      'High throughput API performance'
    ],
    useCases: [
      'Real-time customer chatbots and virtual assistants',
      'Automated high-volume document extraction',
      'Live translation and transcribing',
      'Continuous code monitoring'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.8,
    reviewCount: 1890,
    upvotes: 2940,
    isFeatured: false,
    isTrending: true,
    isGoogleTool: true,
    contextWindow: '1,000,000 tokens',
    keySpecs: {
      'Context': '1M Tokens',
      'Latency': 'Sub-second Response',
      'Cost': 'Ultra-Low'
    }
  },
  {
    id: 'google-gemma-2',
    name: 'Google Gemma 2',
    slug: 'google-gemma-2',
    description: 'Google’s lightweight, state-of-the-art open models built from the same research and technology used for Gemini.',
    longDescription: 'Gemma 2 is a family of lightweight, open-weight models available in 2B, 9B, and 27B parameter sizes. Designed for developer flexibility, Gemma models can be run locally on laptops, edge devices, or deployed on cloud GPUs while outperforming much larger open models on standard benchmarks.',
    provider: 'Google',
    categories: ['Developer Tools', 'Text & Chat', 'Coding'],
    subcategories: ['Open Source', 'Local LLM', 'On-Device AI'],
    pricing: 'Free',
    priceDetails: '100% Free Open Weights (Apache/Gemma License)',
    website: 'https://ai.google.dev/gemma',
    apiAvailable: true,
    features: [
      'Open weights with permissive commercial reuse terms',
      'Available in 2B, 9B, and 27B parameter sizes',
      'Optimized for Hugging Face, PyTorch, JAX, and Ollama',
      'Runs efficiently on consumer GPUs and Apple Silicon',
      'Distilled architecture for unmatched parameter efficiency'
    ],
    useCases: [
      'Running private local LLMs without internet access',
      'Fine-tuning specialized models for niche domain applications',
      'On-device mobile and desktop AI integration',
      'Academic research and open-source software'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.7,
    reviewCount: 1320,
    upvotes: 2450,
    isFeatured: false,
    isTrending: true,
    isGoogleTool: true,
    keySpecs: {
      'Sizes': '2B, 9B, 27B parameters',
      'License': 'Open Weight',
      'Hardware': 'Runs on Consumer GPU/Mac'
    }
  },
  {
    id: 'google-vertex-ai',
    name: 'Google Vertex AI',
    slug: 'google-vertex-ai',
    description: 'Google Cloud’s unified enterprise AI platform for training, tuning, and deploying Gemini models and custom ML pipelines.',
    longDescription: 'Vertex AI is Google Cloud’s end-to-end machine learning platform. It allows enterprise developers and data scientists to build, deploy, and scale generative AI applications. It offers Model Garden ( access to 150+ models including Gemini, Anthropic Claude, and Llama), RLHF tuning, vector search, and enterprise security controls.',
    provider: 'Google',
    categories: ['Developer Tools', 'Enterprise', 'Business & Analytics'],
    subcategories: ['MLOps Platform', 'Cloud AI API', 'Model Garden'],
    pricing: 'Enterprise',
    priceDetails: 'Pay-as-you-go based on Google Cloud resources used',
    website: 'https://cloud.google.com/vertex-ai',
    apiAvailable: true,
    features: [
      'Unified Model Garden with 150+ Google & Third-Party Models',
      'Enterprise Grounding with Google Search & Enterprise Data',
      'Vector Search & RAG (Retrieval-Augmented Generation)',
      'Custom Model Tuning (LoRA, Supervised, RLHF)',
      'Enterprise Governance, HIPAA & ISO Compliance'
    ],
    useCases: [
      'Building production enterprise AI agents',
      'Large-scale enterprise vector search and RAG solutions',
      'Fine-tuning custom foundation models for sensitive data',
      'MLOps automation and CI/CD for AI'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.8,
    reviewCount: 1650,
    upvotes: 2100,
    isFeatured: false,
    isTrending: false,
    isGoogleTool: true,
    keySpecs: {
      'Target': 'Enterprise & Cloud Engineers',
      'Models': 'Gemini, Claude, Llama & 150+ more',
      'Security': 'SOC 2, ISO 27001, HIPAA'
    }
  },
  {
    id: 'google-project-astra',
    name: 'Google Project Astra',
    slug: 'google-project-astra',
    description: 'Google’s next-generation real-time multimodal AI assistant capable of seeing, understanding, and talking in real time.',
    longDescription: 'Project Astra represents Google DeepMind’s vision for the future of universal AI agents. Astra processes continuous video streams and spoken audio in real time, maintaining instant conversational recall and contextual understanding of your physical surroundings via smartphone or smart glasses.',
    provider: 'Google',
    categories: ['Multimodal', 'Text & Chat', 'Productivity'],
    subcategories: ['Real-Time Voice & Vision', 'AI Assistant', 'Spatial AI'],
    pricing: 'Free',
    priceDetails: 'Preview coming to Gemini mobile app',
    website: 'https://deepmind.google/technologies/project-astra/',
    apiAvailable: false,
    features: [
      'Real-time continuous video stream analysis',
      'Natural low-latency speech conversations',
      'Visual spatial memory (remembers where you put objects)',
      'Code and diagram explanation in physical space',
      'Cross-device agent capability'
    ],
    useCases: [
      'Hands-free physical world troubleshooting and guidance',
      'Instant real-time translation of signs and environments',
      'Accessibility aid for visually impaired users',
      'Interactive real-time tutoring'
    ],
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d473d53047313270f3f5.svg',
    rating: 4.9,
    reviewCount: 2800,
    upvotes: 4500,
    isFeatured: true,
    isTrending: true,
    isGoogleTool: true,
    keySpecs: {
      'Latency': 'Sub-300ms Conversational Response',
      'Input': 'Live Video & Audio Feed',
      'Vision': 'Continuous Spatial Awareness'
    }
  },

  // --- OTHER LEADING INDUSTRY AI TOOLS ---
  {
    id: 'openai-gpt-4o',
    name: 'OpenAI GPT-4o',
    slug: 'openai-gpt-4o',
    description: 'OpenAI’s flagship omni-model integrating audio, vision, and text in real time with human-like latency.',
    longDescription: 'GPT-4o ("omni") is OpenAI’s state-of-the-art model designed for seamless multimodal interaction. It reasons across text, audio, and vision inputs simultaneously, delivering real-time conversational responses with emotional tone control.',
    provider: 'OpenAI',
    categories: ['Text & Chat', 'Coding', 'Multimodal', 'Productivity'],
    subcategories: ['LLM', 'Voice AI', 'Code Generation'],
    pricing: 'Freemium',
    priceDetails: 'Free tier available; ChatGPT Plus $20/mo',
    website: 'https://chatgpt.com',
    apiAvailable: true,
    features: [
      'Omnimodal natively trained on voice, text, and vision',
      'Real-time Voice Mode with natural interruptions',
      'Code Interpreter and Data Analysis',
      'Custom GPTs creation and store',
      '128k context window'
    ],
    useCases: [
      'Real-time spoken language practice',
      'Data visualization and Python analysis',
      'Automated customer workflow creation'
    ],
    logo: 'https://cdn.openai.com/common/og-image.png',
    rating: 4.8,
    reviewCount: 9800,
    upvotes: 8900,
    isFeatured: true,
    isTrending: true,
    contextWindow: '128,000 tokens'
  },
  {
    id: 'anthropic-claude-3-5-sonnet',
    name: 'Anthropic Claude 3.5 Sonnet',
    slug: 'anthropic-claude-3-5-sonnet',
    description: 'Anthropic’s top-tier model outperforming benchmarks in coding, nuanced writing, and visual chart analysis.',
    longDescription: 'Claude 3.5 Sonnet raises the industry standard for reasoning, coding, and writing. It introduces "Artifacts", allowing users to view, edit, and iterate on generated web apps, code, and SVG graphics directly alongside their conversation.',
    provider: 'Anthropic',
    categories: ['Text & Chat', 'Coding', 'Research'],
    subcategories: ['Coding Assistant', 'Creative Writing', 'Artifacts UI'],
    pricing: 'Freemium',
    priceDetails: 'Free access on Claude.ai; Claude Pro $20/mo',
    website: 'https://claude.ai',
    apiAvailable: true,
    features: [
      'Interactive Artifacts canvas workspace',
      'Superior coding and technical logic benchmarking',
      '200,000 token context window',
      'Nuanced prose and natural human writing style',
      'Advanced vision and chart comprehension'
    ],
    useCases: [
      'Building web components and full React apps in real time',
      'Drafting nuanced technical documentation and essays',
      'Analyzing multi-page financial charts and diagrams'
    ],
    logo: 'https://anthropic.com/images/claude-logo.png',
    rating: 4.9,
    reviewCount: 5400,
    upvotes: 6200,
    isFeatured: true,
    isTrending: true,
    contextWindow: '200,000 tokens'
  },
  {
    id: 'meta-llama-3-1',
    name: 'Meta Llama 3.1 405B',
    slug: 'meta-llama-3-1',
    description: 'Meta’s open-weights flagship foundation model competing with the world’s best proprietary AI models.',
    longDescription: 'Llama 3.1 405B is Meta’s open-weights model boasting 405 billion parameters and a 128k context window. It enables developers to train, fine-tune, distill, and self-host world-class generative AI without proprietary vendor lock-in.',
    provider: 'Meta',
    categories: ['Developer Tools', 'Text & Chat', 'Coding'],
    subcategories: ['Open Source', 'Foundation Model', 'Synthetic Data Generation'],
    pricing: 'Free',
    priceDetails: 'Free open weights download for commercial & research use',
    website: 'https://llama.meta.com',
    apiAvailable: true,
    features: [
      '405 Billion parameters open weights model',
      '128k context window',
      'Permissive open license supporting commercial distillation',
      'Multilingual and advanced coding capabilities',
      'Supported on AWS, Azure, GCP, and Together AI'
    ],
    useCases: [
      'Distilling smaller custom models for specific domain tasks',
      'Self-hosting private enterprise AI on-premise',
      'Synthetic data generation for training pipelines'
    ],
    logo: 'https://about.meta.com/favicon.ico',
    rating: 4.8,
    reviewCount: 3100,
    upvotes: 4100,
    isFeatured: false,
    isTrending: true,
    contextWindow: '128,000 tokens'
  },
  {
    id: 'midjourney-v6',
    name: 'Midjourney v6',
    slug: 'midjourney-v6',
    description: 'The premier photorealistic image generation engine revered by digital artists, designers, and creatives.',
    longDescription: 'Midjourney v6 is widely recognized as the industry gold standard for aesthetic fidelity, intricate photorealism, and artistic style rendering. Operated via Discord or the web interface, it produces museum-quality digital imagery.',
    provider: 'Midjourney',
    categories: ['Image Generation', 'Design & Art'],
    subcategories: ['Text-to-Image', 'Concept Art', 'AI Styling'],
    pricing: 'Paid',
    priceDetails: 'Plans starting from $10/month',
    website: 'https://midjourney.com',
    apiAvailable: false,
    features: [
      'Unmatched aesthetic photorealism and texture detail',
      'Inpainting, Outpainting (Vary Region / Zoom Out)',
      'Character consistency across prompt iterations',
      'Style Tuner and reference image blending'
    ],
    useCases: [
      'Concept art for gaming and cinematic film',
      'High fashion and product photoshoots',
      'Architectural rendering and background design'
    ],
    logo: 'https://midjourney.com/favicon.ico',
    rating: 4.9,
    reviewCount: 8700,
    upvotes: 7400,
    isFeatured: true,
    isTrending: false
  },
  {
    id: 'runway-gen-3-alpha',
    name: 'Runway Gen-3 Alpha',
    slug: 'runway-gen-3-alpha',
    description: 'High-fidelity video generation model offering expressive human motion, cinematic control, and temporal consistency.',
    longDescription: 'Runway Gen-3 Alpha is a breakthrough video generation architecture designed for filmmakers, animators, and visual storytellers. It offers high control over transitions, keyframes, motion brush strokes, and dramatic lighting.',
    provider: 'Runway',
    categories: ['Video Generation', 'Design & Art', 'Multimodal'],
    subcategories: ['Text-to-Video', 'Image-to-Video', 'Visual Effects'],
    pricing: 'Freemium',
    priceDetails: 'Free trial credits; Pro plans from $12/month',
    website: 'https://runwayml.com',
    apiAvailable: true,
    features: [
      'Hyper-realistic human expressive movement',
      'Motion Brush for pin-point object animation',
      'Text-to-Video, Image-to-Video, Video-to-Video transforms',
      'Director Mode fine camera navigation controls'
    ],
    useCases: [
      'Producing music videos and short film trailers',
      'VFX visual effects replacement and enhancement',
      'Commercial advertising reels'
    ],
    logo: 'https://runwayml.com/favicon.ico',
    rating: 4.8,
    reviewCount: 2400,
    upvotes: 3900,
    isFeatured: false,
    isTrending: true
  },
  {
    id: 'suno-ai-v3-5',
    name: 'Suno AI v3.5',
    slug: 'suno-ai-v3-5',
    description: 'Generate full studio-quality songs with lyrics, vocals, and instruments from simple text descriptions.',
    longDescription: 'Suno AI v3.5 enables anyone to create full 4-minute songs in any genre—pop, rock, classical, hip-hop, metal—complete with rich instrumental orchestration and realistic human-sounding vocalists.',
    provider: 'Suno',
    categories: ['Audio & Music', 'Design & Art'],
    subcategories: ['Music Generation', 'Text-to-Song', 'Vocal Synthesis'],
    pricing: 'Freemium',
    priceDetails: '50 free daily credits; Pro $10/month',
    website: 'https://suno.com',
    apiAvailable: false,
    features: [
      'Generate full 4-minute tracks with structured intros/choruses',
      'Custom lyrics input or AI songwriting assistant',
      'Audio Stem separation and song extension capabilities',
      '50+ musical style combinations'
    ],
    useCases: [
      'Creating royalty-free background music for video creators',
      'Prototyping musical melodies and songwriting concepts',
      'Custom birthday and personalized gift jingles'
    ],
    logo: 'https://suno.com/favicon.ico',
    rating: 4.8,
    reviewCount: 3900,
    upvotes: 4800,
    isFeatured: false,
    isTrending: true
  },
  {
    id: 'elevenlabs-v2',
    name: 'ElevenLabs Voice AI',
    slug: 'elevenlabs-v2',
    description: 'The world’s most realistic AI voice generator and text-to-speech platform with instant voice cloning.',
    longDescription: 'ElevenLabs delivers hyper-realistic text-to-speech, voice cloning, and AI voice overs across 29 languages with human emotion, pacing, and intonation control.',
    provider: 'ElevenLabs',
    categories: ['Audio & Music', 'Productivity'],
    subcategories: ['Text-to-Speech', 'Voice Cloning', 'Dubbing'],
    pricing: 'Freemium',
    priceDetails: 'Free tier with 10k characters; Starter from $5/mo',
    website: 'https://elevenlabs.io',
    apiAvailable: true,
    features: [
      'Instant 1-minute voice cloning',
      'Multilingual Speech Synthesis in 29+ languages',
      'AI Speech-to-Speech vocal control',
      'Automated Video Dubbing with voice sync'
    ],
    useCases: [
      'Audiobook narration and podcast production',
      'Video game voice acting and NPC dialogue',
      'Video translation and localization'
    ],
    logo: 'https://elevenlabs.io/favicon.ico',
    rating: 4.9,
    reviewCount: 4600,
    upvotes: 5100,
    isFeatured: false,
    isTrending: false
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    description: 'The world’s most widely adopted AI developer tool offering inline code completions, workspace chat, and PR summaries.',
    longDescription: 'GitHub Copilot turns natural language prompts into coding suggestions inside VS Code, Visual Studio, JetBrains, and Neovim. Powered by OpenAI models, it accelerates developer productivity across Python, TypeScript, Go, Java, and C++.',
    provider: 'GitHub / Microsoft',
    categories: ['Coding', 'Developer Tools'],
    subcategories: ['Code Autocomplete', 'IDE Extension', 'Refactoring'],
    pricing: 'Paid',
    priceDetails: '$10/month individual; Free for verified students & open source maintainers',
    website: 'https://github.com/features/copilot',
    apiAvailable: false,
    features: [
      'Real-time inline multi-line code autocompletion',
      'Copilot Chat in IDE sidebar for explaining & debugging code',
      'Automated unit test generation',
      'GitHub Pull Request summary auto-generation'
    ],
    useCases: [
      'Accelerating daily software development workflows',
      'Learning new programming languages and frameworks faster',
      'Automating boilerplate code creation'
    ],
    logo: 'https://github.githubassets.com/favicons/favicon.svg',
    rating: 4.7,
    reviewCount: 11200,
    upvotes: 9500,
    isFeatured: false,
    isTrending: false
  }
];

export const CATEGORIES = [
  'All',
  'Text & Chat',
  'Coding',
  'Multimodal',
  'Research',
  'Image Generation',
  'Video Generation',
  'Audio & Music',
  'Developer Tools',
  'Productivity'
];

export const PROVIDERS = [
  'All Providers',
  'Google',
  'OpenAI',
  'Anthropic',
  'Meta',
  'Midjourney',
  'Runway',
  'Suno',
  'ElevenLabs',
  'GitHub / Microsoft'
];

export const PRICING_FILTERS = ['All', 'Free', 'Freemium', 'Paid', 'Enterprise'];
