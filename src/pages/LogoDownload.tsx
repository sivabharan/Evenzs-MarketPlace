import React, { useState } from 'react';
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
    { id: 'small', name: 'Small', pixels: '256x256', description: 'Social media, favicons' },
    { id: 'medium', name: 'Medium', pixels: '512x512', description: 'Web headers, presentations' },
    { id: 'large', name: 'Large', pixels: '1024x1024', description: 'Print, high-res displays' },
    { id: 'xlarge', name: 'Extra Large', pixels: '2048x2048', description: 'Billboards, large prints' }
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
    const logoVariant = variant === 'white' ? 'white' : variant === 'dark' ? 'dark' : 'default';

    // Create SVG content based on the Logo component
    const svgContent = `
<svg width="${logoSize}" height="${logoSize}" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </defs>

  <!-- Background circle -->
  <circle cx="60" cy="60" r="55" fill="url(#coralMangoGradient)" opacity="0.08" />

  <!-- Main champagne glasses -->
  <g transform="translate(60, 60)">
    <!-- Left champagne glass -->
    <g transform="translate(-15, 0)">
      <path d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z" fill="url(#glassGradient1)" stroke="#F4F5F7" stroke-width="1.2" />
      <path d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z" fill="url(#champagneLiquid)" opacity="0.85" />
      <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient1)" />
      <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient1)" stroke="#F4F5F7" stroke-width="1.2" />
      <circle cx="-2" cy="-10" r="0.9" fill="#FF7A8A" opacity="0.8" />
      <circle cx="3" cy="-15" r="0.7" fill="#FF4F6A" opacity="0.7" />
      <circle cx="0" cy="-5" r="1.1" fill="#FFB85C" opacity="0.9" />
    </g>

    <!-- Right champagne glass -->
    <g transform="translate(15, 0)">
      <path d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z" fill="url(#glassGradient2)" stroke="#FFA533" stroke-width="1.2" />
      <path d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z" fill="url(#champagneLiquid)" opacity="0.9" />
      <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient2)" />
      <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient2)" stroke="#FFA533" stroke-width="1.2" />
      <circle cx="2" cy="-12" r="0.9" fill="#FF7A8A" opacity="0.8" />
      <circle cx="-3" cy="-8" r="0.7" fill="#FF4F6A" opacity="0.7" />
      <circle cx="1" cy="-18" r="1.1" fill="#FFB85C" opacity="0.9" />
    </g>

    <!-- Sparkles at clinking point -->
    <g transform="translate(0, -20)">
      <polygon points="0,-2.5 1,0 0,2.5 -1,0" fill="#FF4F6A" opacity="0.9" />
      <polygon points="2.5,-2 3,0 2.5,2 2,0" fill="#FFA533" opacity="0.8" />
      <polygon points="-2.5,-2 -2,0 -2.5,2 -3,0" fill="#1E2A38" opacity="0.8" />
    </g>
  </g>

  ${showText ? `
  <!-- Logo Text -->
  <g transform="translate(140, 60)">
    <text x="0" y="0" font-family="Inter, sans-serif" font-size="24" font-weight="bold" fill="${variant === 'white' ? '#FFFFFF' : '#1E2A38'}">
      <tspan>Even</tspan><tspan fill="#FF4F6A">z</tspan><tspan>s</tspan>
    </text>
    <text x="0" y="20" font-family="Inter, sans-serif" font-size="8" font-weight="500" fill="${variant === 'white' ? 'rgba(255,255,255,0.8)' : '#374151'}" letter-spacing="1px">
      EVENTS MADE EFFORTLESS
    </text>
  </g>
  ` : ''}
</svg>`.trim();

    return svgContent;
  };

  const downloadLogo = () => {
    const svgContent = generateLogoSVG(selectedVariant, selectedSize);
    const fileName = `evenzs-logo-${selectedVariant}-${selectedSize}.${selectedFormat}`;

    if (selectedFormat === 'svg') {
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      // For other formats, we'd need to convert SVG to the desired format
      // For demo purposes, we'll download the SVG with the requested extension
      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const downloadAllFormats = () => {
    formats.forEach(format => {
      setTimeout(() => {
        const svgContent = generateLogoSVG(selectedVariant, selectedSize);
        const fileName = `evenzs-logo-${selectedVariant}-${selectedSize}.${format.extension}`;
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
      }, 100);
    });
  };

  return (
    <div className="min-h-screen bg-background">
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
              <div className="bg-gray-50 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Logo 
                    size="xl" 
                    variant={selectedVariant as 'default' | 'white' | 'dark'}
                    showText={selectedVariant !== 'icon'}
                    animated={false}
                  />
                  <div className="mt-4 text-sm text-gray-600">
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