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
      {/* Logo Icon - Elegant Celebration Design */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Purple & Amber elegant gradients */}
            <linearGradient id="purpleAmberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="25%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="75%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            
            {/* Elegant champagne glass gradients */}
            <linearGradient id="glassGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9FAFB" />
              <stop offset="30%" stopColor="#F3F4F6" />
              <stop offset="70%" stopColor="#E5E7EB" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            <linearGradient id="glassGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="30%" stopColor="#FCD34D" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Luxurious champagne liquid */}
            <linearGradient id="champagneLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="40%" stopColor="#FCD34D" />
              <stop offset="80%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Elegant celebration elements */}
            <radialGradient id="celebration1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="60%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </radialGradient>

            <radialGradient id="celebration2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="60%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
            </radialGradient>

            <radialGradient id="celebration3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="60%" stopColor="#F87171" />
              <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
            </radialGradient>

            {/* Sophisticated glow effect */}
            <filter id="elegantGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Premium sparkle filter */}
            <filter id="sparkleFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="sparkleBlur"/>
              <feMerge> 
                <feMergeNode in="sparkleBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background sophisticated circle */}
          <circle cx="60" cy="60" r="55" fill="url(#purpleAmberGradient)" opacity="0.08" className={animated ? "animate-party-pulse" : ""} />

          {/* Elegant celebration background */}
          <g className={animated ? "animate-sparkle" : ""} opacity="0.4">
            {/* Purple celebration burst 1 */}
            <g transform="translate(25, 25)">
              <circle cx="0" cy="0" r="5" fill="url(#celebration1)" />
              <g stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
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

            {/* Amber celebration burst 2 */}
            <g transform="translate(95, 30)">
              <circle cx="0" cy="0" r="4" fill="url(#celebration2)" />
              <g stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
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

            {/* Coral celebration burst 3 */}
            <g transform="translate(85, 85)">
              <circle cx="0" cy="0" r="4.5" fill="url(#celebration3)" />
              <g stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
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

          {/* Main elegant champagne glasses */}
          <g transform="translate(60, 60)">
            
            {/* Left champagne glass */}
            <g transform="translate(-15, 0)">
              {/* Glass bowl */}
              <path
                d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z"
                fill="url(#glassGradient1)"
                stroke="#E5E7EB"
                strokeWidth="1.2"
                filter="url(#elegantGlow)"
              />
              
              {/* Luxurious champagne liquid */}
              <path
                d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z"
                fill="url(#champagneLiquid)"
                opacity="0.85"
              />
              
              {/* Glass stem */}
              <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient1)" />
              
              {/* Glass base */}
              <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient1)" stroke="#E5E7EB" strokeWidth="1.2" />
              
              {/* Golden bubbles */}
              <g className={animated ? "animate-float" : ""}>
                <circle cx="-2" cy="-10" r="0.9" fill="#A78BFA" opacity="0.8" />
                <circle cx="3" cy="-15" r="0.7" fill="#8B5CF6" opacity="0.7" />
                <circle cx="0" cy="-5" r="1.1" fill="#FCD34D" opacity="0.9" />
                <circle cx="1" cy="-12" r="0.5" fill="#F59E0B" opacity="0.6" />
              </g>
            </g>

            {/* Right champagne glass */}
            <g transform="translate(15, 0)">
              {/* Glass bowl */}
              <path
                d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z"
                fill="url(#glassGradient2)"
                stroke="#F59E0B"
                strokeWidth="1.2"
                filter="url(#elegantGlow)"
              />
              
              {/* Luxurious champagne liquid */}
              <path
                d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z"
                fill="url(#champagneLiquid)"
                opacity="0.9"
              />
              
              {/* Glass stem */}
              <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient2)" />
              
              {/* Glass base */}
              <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient2)" stroke="#F59E0B" strokeWidth="1.2" />
              
              {/* Golden bubbles */}
              <g className={animated ? "animate-float" : ""}>
                <circle cx="2" cy="-12" r="0.9" fill="#A78BFA" opacity="0.8" />
                <circle cx="-3" cy="-8" r="0.7" fill="#8B5CF6" opacity="0.7" />
                <circle cx="1" cy="-18" r="1.1" fill="#FCD34D" opacity="0.9" />
                <circle cx="-1" cy="-15" r="0.5" fill="#F59E0B" opacity="0.6" />
              </g>
            </g>

            {/* Elegant clinking effect */}
            <g className={animated ? "animate-sparkle" : ""}>
              {/* Sparkles at the clinking point */}
              <g transform="translate(0, -20)">
                <polygon points="0,-2.5 1,0 0,2.5 -1,0" fill="#8B5CF6" filter="url(#sparkleFilter)" opacity="0.9" />
                <polygon points="2.5,-2 3,0 2.5,2 2,0" fill="#F59E0B" filter="url(#sparkleFilter)" opacity="0.8" />
                <polygon points="-2.5,-2 -2,0 -2.5,2 -3,0" fill="#EF4444" filter="url(#sparkleFilter)" opacity="0.8" />
                <polygon points="1.5,-3 2,0 1.5,3 1,0" fill="#A78BFA" filter="url(#sparkleFilter)" opacity="0.7" />
                <polygon points="-1.5,-3 -1,0 -1.5,3 -2,0" fill="#FCD34D" filter="url(#sparkleFilter)" opacity="0.7" />
              </g>
            </g>

            {/* Elegant celebration ribbons */}
            <g className={animated ? "animate-elegant-float" : ""} opacity="0.4">
              {/* Left ribbon */}
              <path
                d="M-25,-10 Q-20,-15 -15,-10 Q-20,-5 -25,-10"
                fill="#8B5CF6"
                opacity="0.5"
              />
              <path
                d="M-25,-5 Q-20,-10 -15,-5 Q-20,0 -25,-5"
                fill="#A78BFA"
                opacity="0.4"
              />
              
              {/* Right ribbon */}
              <path
                d="M25,-10 Q20,-15 15,-10 Q20,-5 25,-10"
                fill="#F59E0B"
                opacity="0.5"
              />
              <path
                d="M25,-5 Q20,-10 15,-5 Q20,0 25,-5"
                fill="#FCD34D"
                opacity="0.4"
              />
            </g>
          </g>

          {/* Sophisticated confetti */}
          <g className={animated ? "animate-celebration" : ""} opacity="0.3">
            {/* Diamond confetti */}
            <g transform="translate(20, 40)">
              <polygon points="0,-2.5 2,0 0,2.5 -2,0" fill="#8B5CF6" />
            </g>
            <g transform="translate(100, 50)">
              <polygon points="0,-2 1.5,0 0,2 -1.5,0" fill="#F59E0B" />
            </g>
            <g transform="translate(30, 90)">
              <polygon points="0,-2.5 2,0 0,2.5 -2,0" fill="#EF4444" />
            </g>
            <g transform="translate(90, 20)">
              <polygon points="0,-2 1.5,0 0,2 -1.5,0" fill="#10B981" />
            </g>
            
            {/* Circular confetti */}
            <circle cx="15" cy="70" r="1.8" fill="#8B5CF6" />
            <circle cx="105" cy="75" r="1.2" fill="#F59E0B" />
            <circle cx="25" cy="20" r="1.8" fill="#EF4444" />
            <circle cx="95" cy="95" r="1.2" fill="#10B981" />
            
            {/* Star confetti */}
            <g transform="translate(35, 25)">
              <polygon points="0,-1.5 0.5,-0.5 1.5,0 0.5,0.5 0,1.5 -0.5,0.5 -1.5,0 -0.5,-0.5" fill="#A78BFA" />
            </g>
            <g transform="translate(85, 65)">
              <polygon points="0,-1.2 0.4,-0.4 1.2,0 0.4,0.4 0,1.2 -0.4,0.4 -1.2,0 -0.4,-0.4" fill="#FCD34D" />
            </g>
          </g>

          {/* Sophisticated border elements */}
          <g opacity="0.2">
            {/* Corner decorative elements */}
            <circle cx="15" cy="15" r="1.2" fill="#8B5CF6" />
            <circle cx="105" cy="15" r="1.2" fill="#F59E0B" />
            <circle cx="15" cy="105" r="1.2" fill="#EF4444" />
            <circle cx="105" cy="105" r="1.2" fill="#10B981" />
          </g>

          {/* Premium shine effect */}
          <path
            d="M20,20 Q60,10 100,20 Q60,30 20,20"
            fill="rgba(139, 92, 246, 0.25)"
            opacity="0.7"
            className={animated ? "animate-pulse-slow" : ""}
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span className={`${textSizeClasses[size]} font-bold ${colors.text} tracking-tight`}>
              even
            </span>
            <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-primary via-accent to-purple-light bg-clip-text text-transparent tracking-tight`}>
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