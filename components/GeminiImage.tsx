import React, { useState, useEffect } from 'react';
import { generateWatercolorImage } from '../services/geminiService';
import { Sparkles } from 'lucide-react';

interface GeminiImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackUrl?: string;
}

// Map of prompts to static fallbacks to ensure the site looks good even without an API Key
const FALLBACKS: Record<string, string> = {
  hero: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop", // Soft light, nature
  default: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop" // Golden sunset
};

const GeminiImage: React.FC<GeminiImageProps> = ({ prompt, alt, className = "", fallbackUrl }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      // First, try to generate
      const generated = await generateWatercolorImage(prompt);
      
      if (isMounted) {
        if (generated) {
          setSrc(generated);
          setLoading(false);
        } else {
          // If generation failed (e.g. no key), use fallback
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  const finalSrc = src || fallbackUrl || FALLBACKS.default;

  return (
    <div className={`relative overflow-hidden bg-brand-base/20 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F5F1EC]/50 animate-pulse z-10 backdrop-blur-sm">
          <Sparkles className="w-8 h-8 text-brand-gold animate-spin-slow opacity-50" />
        </div>
      )}
      
      <img
        src={finalSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}
      />
      
      {/* Optional: Indicator that this is AI generated if successful */}
      {!loading && !error && src && (
        <div className="absolute bottom-2 right-2 bg-white/40 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] text-brand-dark/40 uppercase tracking-widest border border-white/20">
          AI Art
        </div>
      )}
    </div>
  );
};

export default GeminiImage;