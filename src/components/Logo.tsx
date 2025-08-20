import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark';
  showText?: boolean;
  className?: string;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'default',
  showText = true,
  className = '',
  animated = true
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl'
  };

  const spacingClasses = {
    sm: 'space-x-3',
    md: 'space-x-4',
    lg: 'space-x-5',
    xl: 'space-x-6'
  };

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          text: 'text-white',
          tagline: 'text-white/80'
        };
      case 'dark':
        return {
          text: 'text-gray-900',
          tagline: 'text-gray-700'
        };
      default:
        return {
          text: 'text-gray-900',
          tagline: 'text-gray-700'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex items-center ${spacingClasses[size]} ${className}`}>
      {/* Logo Icon - Modern E with celebration elements */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Modern gradients */}
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF4F6A" />
              <stop offset="50%" stopColor="#FFA533" />
              <stop offset="100%" stopColor="#FF4F6A" />
            </linearGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA533" />
              <stop offset="100%" stopColor="#FFB85C" />
            </linearGradient>

            <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E2A38" />
              <stop offset="100%" stopColor="#2D3E50" />
            </linearGradient>

            {/* Celebration elements */}
            <radialGradient id="celebration1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF4F6A" />
              <stop offset="60%" stopColor="#FF7A8A" />
              <stop offset="100%" stopColor="rgba(255, 79, 106, 0)" />
            </radialGradient>

            <radialGradient id="celebration2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFA533" />
              <stop offset="60%" stopColor="#FFB85C" />
              <stop offset="100%" stopColor="rgba(255, 165, 51, 0)" />
            </radialGradient>

            {/* Glow effect */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background circle */}
          <circle cx="60" cy="60" r="55" fill="url(#primaryGradient)" opacity="0.1" className={animated ? "animate-pulse-slow" : ""} />

          {/* Celebration confetti */}
          <g className={animated ? "animate-sparkle" : ""} opacity="0.6">
            {/* Top left */}
            <circle cx="20" cy="25" r="2" fill="#FF4F6A" />
            <polygon points="25,20 27,22 25,24 23,22" fill="#FFA533" />
            
            {/* Top right */}
            <circle cx="100" cy="30" r="1.5" fill="#FFA533" />
            <polygon points="95,25 96.5,26.5 95,28 93.5,26.5" fill="#FF4F6A" />
            
            {/* Bottom left */}
            <circle cx="25" cy="95" r="1.8" fill="#1E2A38" />
            <polygon points="30,90 31.5,91.5 30,93 28.5,91.5" fill="#3CC179" />
            
            {/* Bottom right */}
            <circle cx="95" cy="90" r="1.5" fill="#3CC179" />
            <polygon points="100,95 101.5,96.5 100,98 98.5,96.5" fill="#FF4F6A" />
          </g>

          {/* Main Logo - Modern "E" */}
          <g transform="translate(60, 60)">
            {/* Letter E with modern design */}
            <g transform="translate(-15, -25)">
              {/* Main vertical bar */}
              <rect x="0" y="0" width="8" height="50" rx="4" fill="url(#primaryGradient)" filter="url(#glow)" />
              
              {/* Top horizontal bar */}
              <rect x="0" y="0" width="25" height="8" rx="4" fill="url(#primaryGradient)" />
              
              {/* Middle horizontal bar */}
              <rect x="0" y="21" width="20" height="8" rx="4" fill="url(#accentGradient)" />
              
              {/* Bottom horizontal bar */}
              <rect x="0" y="42" width="25" height="8" rx="4" fill="url(#primaryGradient)" />
              
              {/* Modern accent dots */}
              <circle cx="30" cy="4" r="3" fill="url(#celebration1)" className={animated ? "animate-float" : ""} />
              <circle cx="25" cy="25" r="2.5" fill="url(#celebration2)" className={animated ? "animate-float" : ""} />
              <circle cx="30" cy="46" r="3" fill="url(#celebration1)" className={animated ? "animate-float" : ""} />
            </g>

            {/* Celebration sparkles around the E */}
            <g className={animated ? "animate-celebration" : ""} opacity="0.8">
              {/* Left side sparkles */}
              <g transform="translate(-35, -10)">
                <polygon points="0,-3 1,0 0,3 -1,0" fill="#FF4F6A" />
                <polygon points="3,-2 4,0 3,2 2,0" fill="#FFA533" />
              </g>
              
              {/* Right side sparkles */}
              <g transform="translate(25, 5)">
                <polygon points="0,-2.5 1.5,0 0,2.5 -1.5,0" fill="#FFA533" />
                <polygon points="4,-2 5,0 4,2 3,0" fill="#FF4F6A" />
              </g>
              
              {/* Top sparkles */}
              <g transform="translate(0, -35)">
                <polygon points="0,-2 1.5,0 0,2 -1.5,0" fill="#3CC179" />
                <polygon points="-5,-1.5 -3.5,0 -5,1.5 -6.5,0" fill="#FF7A8A" />
              </g>
              
              {/* Bottom sparkles */}
              <g transform="translate(5, 30)">
                <polygon points="0,-2 1.5,0 0,2 -1.5,0" fill="#FFB85C" />
                <polygon points="6,-1.5 7.5,0 6,1.5 4.5,0" fill="#1E2A38" />
              </g>
            </g>

            {/* Elegant connecting lines */}
            <g opacity="0.3" className={animated ? "animate-elegant-float" : ""}>
              <path d="M-30,-20 Q0,-30 30,-20" stroke="url(#primaryGradient)" strokeWidth="1.5" fill="none" />
              <path d="M-30,20 Q0,30 30,20" stroke="url(#accentGradient)" strokeWidth="1.5" fill="none" />
            </g>
          </g>

          {/* Corner decorative elements */}
          <g opacity="0.4">
            <circle cx="15" cy="15" r="1.5" fill="#FF4F6A" />
            <circle cx="105" cy="15" r="1.5" fill="#FFA533" />
            <circle cx="15" cy="105" r="1.5" fill="#1E2A38" />
            <circle cx="105" cy="105" r="1.5" fill="#3CC179" />
          </g>

          {/* Subtle shine effect */}
          <path
            d="M20,20 Q60,15 100,20 Q60,25 20,20"
            fill="rgba(255, 79, 106, 0.2)"
            opacity="0.6"
            className={animated ? "animate-shimmer" : ""}
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span className={`${textSizeClasses[size]} font-bold ${colors.text} tracking-tight`}>
              Even
            </span>
            <span className={`${textSizeClasses[size]} font-bold bg-sunset-gradient bg-clip-text text-transparent tracking-tight`}>
              z
            </span>
            <span className={`${textSizeClasses[size]} font-bold ${colors.text} tracking-tight`}>
              s
            </span>
          </div>
          <span className={`text-sm ${colors.tagline} -mt-1 tracking-wider uppercase font-medium`}>
            Events Made Effortless
          </span>
        </div>
      )}
    </div>
  );
};