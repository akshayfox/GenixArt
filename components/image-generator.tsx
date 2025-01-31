"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ImageIcon, RefreshCw, Download } from 'lucide-react';
import Image from 'next/image';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const { toast } = useToast();

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('Failed to generate image');

      const data = await response.json();
      setImageUrl(data.imageUrl);
      toast({
        title: "Success",
        description: "Image generated successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai-generated-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download image",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Create Your Image</h2>
          <div className="space-y-2">
            <Textarea
              placeholder="Describe the image you want to generate..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px]"
            />
            <div className="flex gap-2">
              <Button
                onClick={generateImage}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Generate Image
                  </>
                )}
              </Button>
              {imageUrl && (
                <Button
                  variant="outline"
                  onClick={() => setPrompt('')}
                  disabled={loading}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Generated Image</h2>
          <div className="relative aspect-square rounded-lg border bg-muted">
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt="Generated image"
                  fill
                  className="rounded-lg object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </>
            ) : loading ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-muted-foreground">
                <div className="relative h-16 w-16">
                  <div className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-75"></div>
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
                    <ImageIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-sm">Creating your masterpiece...</p>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <ImageIcon className="h-12 w-12" />
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ImageGenerator;