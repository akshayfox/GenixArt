import { ImageGenerator } from '@/components/image-generator';
import { SparklesIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">AI Image Generator</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Transform your ideas into stunning visuals with our AI-powered image generator
          </p>
        </div>
        
        <ImageGenerator />
      </div>
    </main>
  );
}