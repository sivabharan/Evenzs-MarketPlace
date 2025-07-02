import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Palette, 
  Monitor, 
  Smartphone, 
  FileImage, 
  Copy,
  Check,
  Eye,
  Zap,
  Bot
} from 'lucide-react';
import { Logo } from '../components/Logo';

export const LogoDownload: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState('svg');
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const formats = [
    { id: 'svg', name: 'SVG', description: 'Vector format, scalable', extension: '.svg' },
    { id: 'png', name: 'PNG', description: 'High quality with transparency', extension: '.png' },
    { id: 'jpg', name: 'JPG', description: 'Compressed format', extension: '.jpg' },
    { id: 'pdf', name: 'PDF', description: 'Print ready vector', extension: '.pdf' }
  ];

  const variants = [
    { id: 'default', name: 'Full Logo', description: 'Logo with text' },
    { id: 'icon', name: 'Icon Only', description: 'Just the champagne glasses' },
    { id: 'white', name: 'White Version', description: 'For dark backgrounds' },
    { id: 'dark', name: 'Dark Version', description: 'For light backgrounds' }
  ];

  const sizes = [
    { id: 'small', name: 'Small', pixels: '256x256', description: 'Social media, favicons', size: 256 },
    { id: 'medium', name: 'Medium', pixels: '512x512', description: 'Web headers, presentations', size: 512 },
    { id: 'large', name: 'Large', pixels: '1024x1024', description: 'Print, high-res displays', size: 1024 },
    { id: 'xlarge', name: 'Extra Large', pixels: '2048x2048', description: 'Billboards, large prints', size: 2048 }
  ];

  const brandColors = [
    { name: 'Coral Pink', hex: '#FF4F6A', description: 'Primary brand color' },
    { name: 'Mango Orange', hex: '#FFA533', description: 'Secondary brand color' },
    { name: 'Midnight Blue', hex: '#1E2A38', description: 'Dark accent color' },
    { name: 'Mist Gray', hex: '#F4F5F7', description: 'Neutral background' },
    { name: 'White', hex: '#FFFFFF', description: 'Clean background' },
    { name: 'Success Green', hex: '#3CC179', description: 'Success states' }
  ];

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const generateLogoSVG = (variant: string, size: string) => {
    const dimensions = {
      small: 256,
      medium: 512,
      large: 1024,
      xlarge: 2048
    };

    const logoSize = dimensions[size as keyof typeof dimensions];
    const showText = variant !== 'icon';
    const isWhite = variant === 'white';
    const isDark = variant === 'dark';
    
    // Calculate dimensions based on whether text is included
    const viewBoxWidth = showText ? 300 : 120;
    const viewBoxHeight = 120;
    
    // Text colors based on variant
    const textColor = isWhite ? '#FFFFFF' : '#1E2A38';
    const taglineColor = isWhite ? 'rgba(255,255,255,0.8)' : '#374151';
    const accentColor = '#FF4F6A'; // Always coral for the 'z'

    const svgContent = `
<svg width="${logoSize}" height="${showText ? Math.round(logoSize * 0.4) : logoSize}" viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coralMangoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF4F6A" />
      <stop offset="25%" stop-color="#FF7A8A" />
      <stop offset="50%" stop-color="#FFA533" />
      <stop offset="75%" stop-color="#FFB85C" />
      <stop offset="100%" stop-color="#FF4F6A" />
    </linearGradient>
    
    <linearGradient id="glassGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="30%" stop-color="#F8F9FA" />
      <stop offset="70%" stop-color="#F4F5F7" />
      <stop offset="100%" stop-color="#FF4F6A" />
    </linearGradient>

    <linearGradient id="glassGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF7ED" />
      <stop offset="30%" stop-color="#FFCC80" />
      <stop offset="70%" stop-color="#FFA533" />
      <stop offset="100%" stop-color="#E6941A" />
    </linearGradient>

    <linearGradient id="champagneLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFCC80" />
      <stop offset="40%" stop-color="#FFA533" />
      <stop offset="80%" stop-color="#E6941A" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>

    <radialGradient id="celebration1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF4F6A" />
      <stop offset="60%" stop-color="#FF7A8A" />
      <stop offset="100%" stop-color="rgba(255, 79, 106, 0)" />
    </radialGradient>

    <radialGradient id="celebration2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFA533" />
      <stop offset="60%" stop-color="#FFB85C" />
      <stop offset="100%" stop-color="rgba(255, 165, 51, 0)" />
    </radialGradient>

    <radialGradient id="celebration3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1E2A38" />
      <stop offset="60%" stop-color="#2D3E50" />
      <stop offset="100%" stop-color="rgba(30, 42, 56, 0)" />
    </radialGradient>
  </defs>

  <!-- Background circle -->
  <circle cx="60" cy="60" r="55" fill="url(#coralMangoGradient)" opacity="0.08" />

  <!-- Elegant celebration background -->
  <g opacity="0.4">
    <!-- Coral celebration burst 1 -->
    <g transform="translate(25, 25)">
      <circle cx="0" cy="0" r="5" fill="url(#celebration1)" />
      <g stroke="#FF4F6A" stroke-width="1.5" stroke-linecap="round" opacity="0.8">
        <line x1="0" y1="0" x2="7" y2="-4" />
        <line x1="0" y1="0" x2="9" y2="0" />
        <line x1="0" y1="0" x2="7" y2="4" />
        <line x1="0" y1="0" x2="4" y2="-7" />
        <line x1="0" y1="0" x2="4" y2="7" />
        <line x1="0" y1="0" x2="-4" y2="-4" />
        <line x1="0" y1="0" x2="-4" y2="4" />
        <line x1="0" y1="0" x2="0" y2="-9" />
      </g>
    </g>

    <!-- Mango celebration burst 2 -->
    <g transform="translate(95, 30)">
      <circle cx="0" cy="0" r="4" fill="url(#celebration2)" />
      <g stroke="#FFA533" stroke-width="1.5" stroke-linecap="round" opacity="0.8">
        <line x1="0" y1="0" x2="6" y2="-3" />
        <line x1="0" y1="0" x2="7" y2="0" />
        <line x1="0" y1="0" x2="6" y2="3" />
        <line x1="0" y1="0" x2="3" y2="-6" />
        <line x1="0" y1="0" x2="3" y2="6" />
        <line x1="0" y1="0" x2="-3" y2="-3" />
        <line x1="0" y1="0" x2="-3" y2="3" />
        <line x1="0" y1="0" x2="0" y2="-7" />
      </g>
    </g>

    <!-- Midnight celebration burst 3 -->
    <g transform="translate(85, 85)">
      <circle cx="0" cy="0" r="4.5" fill="url(#celebration3)" />
      <g stroke="#1E2A38" stroke-width="1.5" stroke-linecap="round" opacity="0.8">
        <line x1="0" y1="0" x2="6" y2="-4" />
        <line x1="0" y1="0" x2="8" y2="0" />
        <line x1="0" y1="0" x2="6" y2="4" />
        <line x1="0" y1="0" x2="4" y2="-6" />
        <line x1="0" y1="0" x2="4" y2="6" />
        <line x1="0" y1="0" x2="-4" y2="-4" />
        <line x1="0" y1="0" x2="-4" y2="4" />
        <line x1="0" y1="0" x2="0" y2="-8" />
      </g>
    </g>
  </g>

  <!-- Main elegant champagne glasses -->
  <g transform="translate(60, 60)">
    <!-- Left champagne glass -->
    <g transform="translate(-15, 0)">
      <!-- Glass bowl -->
      <path d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z" fill="url(#glassGradient1)" stroke="#F4F5F7" stroke-width="1.2" />
      
      <!-- Luxurious champagne liquid -->
      <path d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z" fill="url(#champagneLiquid)" opacity="0.85" />
      
      <!-- Glass stem -->
      <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient1)" />
      
      <!-- Glass base -->
      <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient1)" stroke="#F4F5F7" stroke-width="1.2" />
      
      <!-- Colorful bubbles -->
      <circle cx="-2" cy="-10" r="0.9" fill="#FF7A8A" opacity="0.8" />
      <circle cx="3" cy="-15" r="0.7" fill="#FF4F6A" opacity="0.7" />
      <circle cx="0" cy="-5" r="1.1" fill="#FFB85C" opacity="0.9" />
      <circle cx="1" cy="-12" r="0.5" fill="#FFA533" opacity="0.6" />
    </g>

    <!-- Right champagne glass -->
    <g transform="translate(15, 0)">
      <!-- Glass bowl -->
      <path d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z" fill="url(#glassGradient2)" stroke="#FFA533" stroke-width="1.2" />
      
      <!-- Luxurious champagne liquid -->
      <path d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z" fill="url(#champagneLiquid)" opacity="0.9" />
      
      <!-- Glass stem -->
      <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient2)" />
      
      <!-- Glass base -->
      <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient2)" stroke="#FFA533" stroke-width="1.2" />
      
      <!-- Colorful bubbles -->
      <circle cx="2" cy="-12" r="0.9" fill="#FF7A8A" opacity="0.8" />
      <circle cx="-3" cy="-8" r="0.7" fill="#FF4F6A" opacity="0.7" />
      <circle cx="1" cy="-18" r="1.1" fill="#FFB85C" opacity="0.9" />
      <circle cx="-1" cy="-15" r="0.5" fill="#FFA533" opacity="0.6" />
    </g>

    <!-- Elegant clinking effect -->
    <g transform="translate(0, -20)">
      <!-- Sparkles at the clinking point -->
      <polygon points="0,-2.5 1,0 0,2.5 -1,0" fill="#FF4F6A" opacity="0.9" />
      <polygon points="2.5,-2 3,0 2.5,2 2,0" fill="#FFA533" opacity="0.8" />
      <polygon points="-2.5,-2 -2,0 -2.5,2 -3,0" fill="#1E2A38" opacity="0.8" />
      <polygon points="1.5,-3 2,0 1.5,3 1,0" fill="#FF7A8A" opacity="0.7" />
      <polygon points="-1.5,-3 -1,0 -1.5,3 -2,0" fill="#FFB85C" opacity="0.7" />
    </g>

    <!-- Elegant celebration ribbons -->
    <g opacity="0.4">
      <!-- Left ribbon -->
      <path d="M-25,-10 Q-20,-15 -15,-10 Q-20,-5 -25,-10" fill="#FF4F6A" opacity="0.5" />
      <path d="M-25,-5 Q-20,-10 -15,-5 Q-20,0 -25,-5" fill="#FF7A8A" opacity="0.4" />
      
      <!-- Right ribbon -->
      <path d="M25,-10 Q20,-15 15,-10 Q20,-5 25,-10" fill="#FFA533" opacity="0.5" />
      <path d="M25,-5 Q20,-10 15,-5 Q20,0 25,-5" fill="#FFB85C" opacity="0.4" />
    </g>
  </g>

  <!-- Sophisticated confetti -->
  <g opacity="0.3">
    <!-- Diamond confetti -->
    <polygon points="20,38 22,40 20,42 18,40" fill="#FF4F6A" />
    <polygon points="100,48 101.5,50 100,52 98.5,50" fill="#FFA533" />
    <polygon points="30,88 32,90 30,92 28,90" fill="#1E2A38" />
    <polygon points="90,18 91.5,20 90,22 88.5,20" fill="#3CC179" />
    
    <!-- Circular confetti -->
    <circle cx="15" cy="70" r="1.8" fill="#FF4F6A" />
    <circle cx="105" cy="75" r="1.2" fill="#FFA533" />
    <circle cx="25" cy="20" r="1.8" fill="#1E2A38" />
    <circle cx="95" cy="95" r="1.2" fill="#3CC179" />
    
    <!-- Star confetti -->
    <polygon points="35,23 35.5,24.5 37,25 35.5,25.5 35,27 34.5,25.5 33,25 34.5,24.5" fill="#FF7A8A" />
    <polygon points="85,63 85.4,64.4 86.8,65 85.4,65.6 85,67 84.6,65.6 83.2,65 84.6,64.4" fill="#FFB85C" />
  </g>

  <!-- Corner decorative elements -->
  <g opacity="0.2">
    <circle cx="15" cy="15" r="1.2" fill="#FF4F6A" />
    <circle cx="105" cy="15" r="1.2" fill="#FFA533" />
    <circle cx="15" cy="105" r="1.2" fill="#1E2A38" />
    <circle cx="105" cy="105" r="1.2" fill="#3CC179" />
  </g>

  <!-- Premium shine effect -->
  <path d="M20,20 Q60,10 100,20 Q60,30 20,20" fill="rgba(255, 79, 106, 0.25)" opacity="0.7" />

  ${showText ? `
  <!-- Logo Text -->
  <g transform="translate(140, 45)">
    <text x="0" y="0" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="700" letter-spacing="-0.02em">
      <tspan fill="${textColor}">Even</tspan><tspan fill="${accentColor}">z</tspan><tspan fill="${textColor}">s</tspan>
    </text>
    <text x="0" y="20" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="500" fill="${taglineColor}" letter-spacing="0.1em" text-transform="uppercase">
      Events Made Effortless
    </text>
  </g>
  ` : ''}
</svg>`.trim();

    return svgContent;
  };

  const convertSVGToCanvas = (svgContent: string, width: number, height: number): Promise<HTMLCanvasElement> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      canvas.width = width;
      canvas.height = height;

      const img = new Image();
      img.onload = () => {
        ctx.fillStyle = selectedFormat === 'jpg' ? '#FFFFFF' : 'transparent';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas);
      };
      img.onerror = reject;

      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      img.src = url;
    });
  };

  const downloadLogo = async () => {
    const svgContent = generateLogoSVG(selectedVariant, selectedSize);
    const sizeData = sizes.find(s => s.id === selectedSize);
    const fileName = `evenzs-logo-${selectedVariant}-${selectedSize}`;

    if (selectedFormat === 'svg') {
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    } else if (selectedFormat === 'png' || selectedFormat === 'jpg') {
      try {
        const showText = selectedVariant !== 'icon';
        const width = sizeData?.size || 512;
        const height = showText ? Math.round(width * 0.4) : width;
        
        const canvas = await convertSVGToCanvas(svgContent, width, height);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName}.${selectedFormat}`;
            a.click();
            URL.revokeObjectURL(url);
          }
        }, `image/${selectedFormat}`, selectedFormat === 'jpg' ? 0.9 : undefined);
      } catch (error) {
        console.error('Error converting SVG:', error);
        // Fallback to SVG download
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName}.svg`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } else if (selectedFormat === 'pdf') {
      // For PDF, we'll download as SVG with PDF extension for now
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const downloadAllFormats = async () => {
    for (let i = 0; i < formats.length; i++) {
      const format = formats[i];
      const svgContent = generateLogoSVG(selectedVariant, selectedSize);
      const fileName = `evenzs-logo-${selectedVariant}-${selectedSize}`;
      
      // Add delay between downloads
      setTimeout(async () => {
        if (format.id === 'svg' || format.id === 'pdf') {
          const blob = new Blob([svgContent], { type: 'image/svg+xml' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${fileName}${format.extension}`;
          a.click();
          URL.revokeObjectURL(url);
        } else if (format.id === 'png' || format.id === 'jpg') {
          try {
            const showText = selectedVariant !== 'icon';
            const sizeData = sizes.find(s => s.id === selectedSize);
            const width = sizeData?.size || 512;
            const height = showText ? Math.round(width * 0.4) : width;
            
            const canvas = await convertSVGToCanvas(svgContent, width, height);
            
            canvas.toBlob((blob) => {
              if (blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${fileName}${format.extension}`;
                a.click();
                URL.revokeObjectURL(url);
              }
            }, `image/${format.id}`, format.id === 'jpg' ? 0.9 : undefined);
          } catch (error) {
            console.error(`Error converting to ${format.id}:`, error);
          }
        }
      }, i * 500); // 500ms delay between each download
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/"
            className="flex items-center text-gray-600 hover:text-primary transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center">
              Download Evenzs Logo
              <Bot className="w-8 h-8 ml-3 text-primary" />
            </h1>
            <p className="text-xl text-gray-600">Get our logo in various formats and sizes for your projects</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Logo Preview</h2>
              
              {/* Preview Area */}
              <div className={`rounded-xl p-8 mb-6 flex items-center justify-center min-h-[300px] ${
                selectedVariant === 'white' ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <div className="text-center">
                  <Logo 
                    size="xl" 
                    variant={selectedVariant as 'default' | 'white' | 'dark'}
                    showText={selectedVariant !== 'icon'}
                    animated={false}
                  />
                  <div className={`mt-4 text-sm ${selectedVariant === 'white' ? 'text-white' : 'text-gray-600'}`}>
                    {variants.find(v => v.id === selectedVariant)?.description}
                  </div>
                </div>
              </div>

              {/* Download Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={downloadLogo}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-coral-glow text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center animate-coral-glow"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download {formats.find(f => f.id === selectedFormat)?.name}
                </button>
                <button
                  onClick={downloadAllFormats}
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <FileImage className="w-5 h-5 mr-2" />
                  Download All Formats
                </button>
              </div>
            </div>

            {/* Format Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">File Format</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {formats.map((format) => (
                  <button
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedFormat === format.id
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">{format.name}</div>
                    <div className="text-sm text-gray-600">{format.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Size</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedSize === size.id
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-gray-900">{size.name}</div>
                      <div className="text-sm text-primary font-medium">{size.pixels}</div>
                    </div>
                    <div className="text-sm text-gray-600">{size.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Variant Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Logo Variant</h3>
              <div className="space-y-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`w-full p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedVariant === variant.id
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium text-gray-900 mb-1">{variant.name}</div>
                    <div className="text-sm text-gray-600">{variant.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Brand Colors */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Palette className="w-5 h-5 mr-2" />
                Brand Colors
              </h3>
              <div className="space-y-3">
                {brandColors.map((color) => (
                  <div key={color.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div 
                        className="w-6 h-6 rounded-full mr-3 border border-gray-200"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{color.name}</div>
                        <div className="text-xs text-gray-600">{color.description}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(color.hex, color.name)}
                      className="p-2 text-gray-600 hover:text-primary transition-colors"
                      title="Copy color code"
                    >
                      {copiedColor === color.name ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Usage Guidelines</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <Monitor className="w-4 h-4 mr-2 mt-0.5 text-primary" />
                  <span>Use SVG format for web and digital applications</span>
                </div>
                <div className="flex items-start">
                  <FileImage className="w-4 h-4 mr-2 mt-0.5 text-accent" />
                  <span>Use PNG for presentations and documents</span>
                </div>
                <div className="flex items-start">
                  <Smartphone className="w-4 h-4 mr-2 mt-0.5 text-gold-dark" />
                  <span>Maintain minimum size of 32px for readability</span>
                </div>
                <div className="flex items-start">
                  <Eye className="w-4 h-4 mr-2 mt-0.5 text-purple-500" />
                  <span>Ensure adequate contrast on backgrounds</span>
                </div>
              </div>
            </div>

            {/* Download Stats */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Download Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Format:</span>
                  <span className="font-medium">{formats.find(f => f.id === selectedFormat)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Selected Size:</span>
                  <span className="font-medium">{sizes.find(s => s.id === selectedSize)?.pixels}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Variant:</span>
                  <span className="font-medium">{variants.find(v => v.id === selectedVariant)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">File Name:</span>
                  <span className="font-medium text-xs">evenzs-logo-{selectedVariant}-{selectedSize}.{selectedFormat}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};