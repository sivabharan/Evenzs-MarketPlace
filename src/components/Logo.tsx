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
          tagline: 'text-gray-600'
        };
      default:
        return {
          text: 'text-gray-900',
          tagline: 'text-gray-600'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex items-center ${spacingClasses[size]} ${className}`}>
      {/* Logo Icon - Professional Celebration Design */}
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Professional gradients */}
            <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="25%" stopColor="#475569" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="75%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            
            {/* Champagne glass gradients */}
            <linearGradient id="glassGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <linearGradient id="glassGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Professional champagne liquid */}
            <linearGradient id="champagneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="50%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Subtle celebration elements */}
            <radialGradient id="celebration1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="rgba(217, 119, 6, 0)" />
            </radialGradient>

            <radialGradient id="celebration2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="70%" stopColor="#64748B" />
              <stop offset="100%" stopColor="rgba(71, 85, 105, 0)" />
            </radialGradient>

            <radialGradient id="celebration3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="100%" stopColor="rgba(30, 41, 59, 0)" />
            </radialGradient>

            {/* Professional glow effect */}
            <filter id="professionalGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Subtle sparkle filter */}
            <filter id="subtleSparkle" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="sparkleBlur"/>
              <feMerge> 
                <feMergeNode in="sparkleBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background professional circle */}
          <circle cx="60" cy="60" r="55" fill="url(#professionalGradient)" opacity="0.08" className={animated ? "animate-party-pulse" : ""} />

          {/* Subtle celebration background */}
          <g className={animated ? "animate-sparkle" : ""} opacity="0.4">
            {/* Celebration burst 1 */}
            <g transform="translate(25, 25)">
              <circle cx="0" cy="0" r="6" fill="url(#celebration1)" />
              <g stroke="#D97706" strokeWidth="1" strokeLinecap="round" opacity="0.6">
                <line x1="0" y1="0" x2="8" y2="-5" />
                <line x1="0" y1="0" x2="10" y2="0" />
                <line x1="0" y1="0" x2="8" y2="5" />
                <line x1="0" y1="0" x2="5" y2="-8" />
                <line x1="0" y1="0" x2="5" y2="8" />
                <line x1="0" y1="0" x2="-5" y2="-5" />
                <line x1="0" y1="0" x2="-5" y2="5" />
                <line x1="0" y1="0" x2="0" y2="-10" />
              </g>
            </g>

            {/* Celebration burst 2 */}
            <g transform="translate(95, 30)">
              <circle cx="0" cy="0" r="4" fill="url(#celebration2)" />
              <g stroke="#475569" strokeWidth="1" strokeLinecap="round" opacity="0.6">
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

            {/* Celebration burst 3 */}
            <g transform="translate(85, 85)">
              <circle cx="0" cy="0" r="5" fill="url(#celebration3)" />
              <g stroke="#1E293B" strokeWidth="1" strokeLinecap="round" opacity="0.6">
                <line x1="0" y1="0" x2="7" y2="-5" />
                <line x1="0" y1="0" x2="9" y2="0" />
                <line x1="0" y1="0" x2="7" y2="5" />
                <line x1="0" y1="0" x2="5" y2="-7" />
                <line x1="0" y1="0" x2="5" y2="7" />
                <line x1="0" y1="0" x2="-5" y2="-5" />
                <line x1="0" y1="0" x2="-5" y2="5" />
                <line x1="0" y1="0" x2="0" y2="-9" />
              </g>
            </g>
          </g>

          {/* Main champagne glasses */}
          <g transform="translate(60, 60)">
            
            {/* Left champagne glass */}
            <g transform="translate(-15, 0)">
              {/* Glass bowl */}
              <path
                d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z"
                fill="url(#glassGradient1)"
                stroke="#E2E8F0"
                strokeWidth="1"
                filter="url(#professionalGlow)"
              />
              
              {/* Champagne liquid */}
              <path
                d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z"
                fill="url(#champagneGradient)"
                opacity="0.8"
              />
              
              {/* Glass stem */}
              <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient1)" />
              
              {/* Glass base */}
              <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient1)" stroke="#E2E8F0" strokeWidth="1" />
              
              {/* Subtle bubbles */}
              <g className={animated ? "animate-float" : ""}>
                <circle cx="-2" cy="-10" r="0.8" fill="#F59E0B" opacity="0.6" />
                <circle cx="3" cy="-15" r="0.6" fill="#D97706" opacity="0.5" />
                <circle cx="0" cy="-5" r="1" fill="#FDE68A" opacity="0.7" />
              </g>
            </g>

            {/* Right champagne glass */}
            <g transform="translate(15, 0)">
              {/* Glass bowl */}
              <path
                d="M-8,-20 Q-8,-25 -5,-25 L5,-25 Q8,-25 8,-20 L6,5 Q6,8 3,8 L-3,8 Q-6,8 -6,5 Z"
                fill="url(#glassGradient2)"
                stroke="#D97706"
                strokeWidth="1"
                filter="url(#professionalGlow)"
              />
              
              {/* Champagne liquid */}
              <path
                d="M-6,-18 Q-6,-22 -4,-22 L4,-22 Q6,-22 6,-18 L5,2 Q5,4 3,4 L-3,4 Q-5,4 -5,2 Z"
                fill="url(#champagneGradient)"
                opacity="0.9"
              />
              
              {/* Glass stem */}
              <rect x="-1" y="8" width="2" height="12" fill="url(#glassGradient2)" />
              
              {/* Glass base */}
              <ellipse cx="0" cy="22" rx="6" ry="2" fill="url(#glassGradient2)" stroke="#D97706" strokeWidth="1" />
              
              {/* Subtle bubbles */}
              <g className={animated ? "animate-float" : ""}>
                <circle cx="2" cy="-12" r="0.8" fill="#F59E0B" opacity="0.6" />
                <circle cx="-3" cy="-8" r="0.6" fill="#D97706" opacity="0.5" />
                <circle cx="1" cy="-18" r="1" fill="#FDE68A" opacity="0.7" />
              </g>
            </g>

            {/* Professional clinking effect */}
            <g className={animated ? "animate-sparkle" : ""}>
              {/* Subtle sparkles at the clinking point */}
              <g transform="translate(0, -20)">
                <polygon points="0,-2 0.8,0 0,2 -0.8,0" fill="#D97706" filter="url(#subtleSparkle)" opacity="0.8" />
                <polygon points="2,-1.5 2.5,0 2,1.5 1.5,0" fill="#475569" filter="url(#subtleSparkle)" opacity="0.7" />
                <polygon points="-2,-1.5 -1.5,0 -2,1.5 -2.5,0" fill="#1E293B" filter="url(#subtleSparkle)" opacity="0.6" />
              </g>
            </g>

            {/* Professional celebration ribbons */}
            <g className={animated ? "animate-elegant-float" : ""} opacity="0.5">
              {/* Left ribbon */}
              <path
                d="M-25,-10 Q-20,-15 -15,-10 Q-20,-5 -25,-10"
                fill="#D97706"
                opacity="0.4"
              />
              <path
                d="M-25,-5 Q-20,-10 -15,-5 Q-20,0 -25,-5"
                fill="#F59E0B"
                opacity="0.3"
              />
              
              {/* Right ribbon */}
              <path
                d="M25,-10 Q20,-15 15,-10 Q20,-5 25,-10"
                fill="#475569"
                opacity="0.4"
              />
              <path
                d="M25,-5 Q20,-10 15,-5 Q20,0 25,-5"
                fill="#64748B"
                opacity="0.3"
              />
            </g>
          </g>

          {/* Professional confetti */}
          <g className={animated ? "animate-celebration" : ""} opacity="0.3">
            {/* Diamond confetti */}
            <g transform="translate(20, 40)">
              <polygon points="0,-2 1.5,0 0,2 -1.5,0" fill="#1E293B" />
            </g>
            <g transform="translate(100, 50)">
              <polygon points="0,-1.5 1,0 0,1.5 -1,0" fill="#D97706" />
            </g>
            <g transform="translate(30, 90)">
              <polygon points="0,-2 1.5,0 0,2 -1.5,0" fill="#475569" />
            </g>
            <g transform="translate(90, 20)">
              <polygon points="0,-1.5 1,0 0,1.5 -1,0" fill="#334155" />
            </g>
            
            {/* Circular confetti */}
            <circle cx="15" cy="70" r="1.5" fill="#1E293B" />
            <circle cx="105" cy="75" r="1" fill="#D97706" />
            <circle cx="25" cy="20" r="1.5" fill="#475569" />
            <circle cx="95" cy="95" r="1" fill="#334155" />
          </g>

          {/* Professional border elements */}
          <g opacity="0.2">
            {/* Corner decorative elements */}
            <circle cx="15" cy="15" r="1" fill="#1E293B" />
            <circle cx="105" cy="15" r="1" fill="#D97706" />
            <circle cx="15" cy="105" r="1" fill="#475569" />
            <circle cx="105" cy="105" r="1" fill="#334155" />
          </g>

          {/* Professional shine effect */}
          <path
            d="M20,20 Q60,10 100,20 Q60,30 20,20"
            fill="rgba(255,255,255,0.15)"
            opacity="0.6"
            className={animated ? "animate-pulse-slow" : ""}
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
            <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight`}>
              z
            </span>
            <span className={`${textSizeClasses[size]} font-bold ${colors.text} tracking-tight`}>
              s
            </span>
          </div>
          <span className={`text-base ${colors.tagline} -mt-1 tracking-wider uppercase font-medium`}>
            Events Made Effortless
          </span>
        </div>
      )}
    </div>
  );
};