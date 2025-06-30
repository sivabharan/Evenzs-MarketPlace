import React from 'react';
import { CheckCircle, Sparkles, ArrowRight, Calendar, Users, Music, MapPin, Bot, Zap, Target, Brain, TrendingUp } from 'lucide-react';

interface UserProfile {
  userType: 'customer' | 'vendor' | 'organizer' | null;
  interests: string[];
  favoriteArtists: string[];
  preferredVibe: string;
  locationPreference: string;
  purpose: string;
  services?: string[];
  eventTypes?: string[];
  targetAudience?: string;
  coverageArea?: string;
  vendorNeeds?: string[];
  region?: string;
  supportNeeds?: string[];
  suggestedTags: string[];
  aiTrainingData: {
    responses: Array<{
      question: string;
      answer: any;
      timestamp: string;
      confidence: number;
    }>;
    preferences: Record<string, any>;
    behaviorPatterns: string[];
  };
}

interface AIOnboardingCompleteProps {
  profile: UserProfile;
  onGetStarted: () => void;
}

export const AIOnboardingComplete: React.FC<AIOnboardingCompleteProps> = ({ profile, onGetStarted }) => {
  const getUserTypeLabel = () => {
    switch (profile.userType) {
      case 'customer': return 'Customer';
      case 'organizer': return 'Event Organizer';
      case 'vendor': return 'Event Vendor';
      default: return 'User';
    }
  };

  const getPersonalizedSummary = () => {
    if (profile.userType === 'customer') {
      const interests = profile.interests.slice(0, 2).join(' and ');
      const artists = profile.favoriteArtists.length > 0 ? `, especially ${profile.favoriteArtists.slice(0, 2).join(' and ')}` : '';
      const location = profile.locationPreference === 'austin-tx' ? 'focused on local Austin events' : 
                     profile.locationPreference === 'texas' ? 'open to travel within Texas' :
                     profile.locationPreference === 'national' ? 'willing to travel nationally' : 'open to international events';
      return `You love ${interests}${artists}, prefer ${profile.preferredVibe?.replace('-', ' ')} vibes, and are ${location}.`;
    } else if (profile.userType === 'vendor') {
      const services = profile.services?.slice(0, 2).join(' and ') || 'services';
      const events = profile.eventTypes?.slice(0, 2).join(' and ') || 'events';
      return `You provide ${services} for ${events}, covering ${profile.coverageArea?.replace('-', ' ')}. Your specialty: ${profile.targetAudience || 'premium event services'}.`;
    } else if (profile.userType === 'organizer') {
      const events = profile.organizerEventTypes?.slice(0, 2).join(' and ') || 'events';
      const vendors = profile.vendorNeeds?.slice(0, 2).join(' and ') || 'vendor services';
      return `You organize ${events} in ${profile.region?.replace('-', ' ')}, typically needing ${vendors}. Platform focus: ${profile.supportNeeds?.slice(0, 2).join(' and ') || 'event management'}.`;
    }
    return "Welcome to your personalized Evenzs experience!";
  };

  const getAIInsights = () => {
    const patterns = profile.aiTrainingData.behaviorPatterns;
    const insights = [];

    if (patterns.includes('music-enthusiast')) {
      insights.push('🎵 Music Enthusiast - You\'ll love our concert discovery features');
    }
    if (patterns.includes('travel-enthusiast')) {
      insights.push('✈️ Travel Lover - Perfect for destination events and travel packages');
    }
    if (patterns.includes('luxury-specialist')) {
      insights.push('💎 Luxury Specialist - Premium event opportunities await');
    }
    if (patterns.includes('tech-adopter')) {
      insights.push('🚀 Tech Adopter - You\'ll appreciate our advanced platform features');
    }
    if (patterns.includes('outdoor-lover')) {
      insights.push('🌲 Outdoor Enthusiast - Festival and outdoor event recommendations ready');
    }
    if (patterns.includes('foodie')) {
      insights.push('🍽️ Foodie - Culinary events and food festivals curated for you');
    }
    if (patterns.includes('latin-music-enthusiast')) {
      insights.push('🎺 Latin Music Fan - Reggaeton and Latin concerts personalized for you');
    }
    if (patterns.includes('indie-music-lover')) {
      insights.push('🎸 Indie Music Lover - Alternative and indie events matched to your taste');
    }
    if (patterns.includes('business-focused')) {
      insights.push('💼 Business Professional - Corporate event tools and networking opportunities');
    }
    if (patterns.includes('visual-artist')) {
      insights.push('📸 Visual Artist - Photography and creative opportunities highlighted');
    }

    return insights.length > 0 ? insights : ['🎯 Personalized recommendations are being prepared for you'];
  };

  const getRecommendations = () => {
    if (profile.userType === 'customer') {
      return [
        'Discover curated events matching your music taste and preferences',
        'Get AI-powered notifications about new events in your preferred locations',
        'Connect with like-minded event-goers through intelligent matching',
        'Access exclusive early-bird pricing and VIP experiences based on your profile'
      ];
    } else if (profile.userType === 'organizer') {
      return [
        'Browse our AI-matched network of verified vendors',
        'Get intelligent vendor recommendations based on your event type and needs',
        'Access event planning templates and automation tools tailored to your style',
        'Manage all your events with our comprehensive AI-enhanced dashboard'
      ];
    } else if (profile.userType === 'vendor') {
      return [
        'Create an AI-optimized business profile that highlights your strengths',
        'Receive qualified leads matching your specialties and coverage area',
        'Showcase your portfolio with intelligent categorization and tagging',
        'Grow your business with our analytics and AI-driven insights'
      ];
    }
    return [];
  };

  // Generate structured JSON output for AI training
  const generateTrainingData = () => {
    return {
      role: profile.userType,
      interests: profile.interests || profile.services || profile.organizerEventTypes || [],
      favoriteArtists: profile.favoriteArtists || [],
      vibe: profile.preferredVibe || profile.targetAudience || '',
      location: profile.locationPreference || profile.coverageArea || profile.region || '',
      discoveryTags: profile.suggestedTags,
      aiMetadata: {
        completionRate: profile.aiTrainingData.preferences.completionRate || 100,
        behaviorPatterns: profile.aiTrainingData.behaviorPatterns,
        responseConfidence: profile.aiTrainingData.preferences.aiConfidence || 0.9,
        timestamp: new Date().toISOString(),
        preferenceStrength: profile.aiTrainingData.preferences.preferenceStrength || 'high'
      }
    };
  };

  // Save training data to localStorage (in production, this would go to your AI training pipeline)
  React.useEffect(() => {
    const trainingData = generateTrainingData();
    const existingData = JSON.parse(localStorage.getItem('ai_training_data') || '[]');
    existingData.push(trainingData);
    localStorage.setItem('ai_training_data', JSON.stringify(existingData));
    
    console.log('🤖 AI Training Data Generated:', trainingData);
  }, [profile]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto animate-mobile-safe">
        {/* Header */}
        <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-gold-glow">
            <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 flex items-center justify-center">
            AI Profile Complete!
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 ml-2 text-primary" />
          </h2>
          <p className="text-base sm:text-lg text-charcoal">Your intelligent recommendations are ready</p>
        </div>

        {/* AI Profile Summary */}
        <div className="p-4 sm:p-6 border-b border-platinum">
          <div className="bg-pearl rounded-xl p-3 sm:p-4 mb-4">
            <h3 className="font-semibold text-secondary mb-2 flex items-center text-sm sm:text-base">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
              Your AI-Generated Profile:
            </h3>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-primary text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                {getUserTypeLabel()}
              </span>
              <span className="bg-accent/10 text-accent text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                {profile.aiTrainingData.preferences.preferenceStrength || 'High'} Confidence
              </span>
              <span className="bg-green-100 text-green-800 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                {Math.round((profile.aiTrainingData.preferences.aiConfidence || 0.9) * 100)}% Match
              </span>
            </div>
            <p className="text-charcoal text-xs sm:text-sm leading-relaxed">
              {getPersonalizedSummary()}
            </p>
          </div>

          {/* AI Insights */}
          <div className="mb-4">
            <h4 className="font-medium text-secondary mb-2 flex items-center text-sm sm:text-base">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" />
              AI Behavioral Insights:
            </h4>
            <div className="space-y-2">
              {getAIInsights().map((insight, index) => (
                <div key={index} className="text-xs sm:text-sm text-charcoal bg-white/50 rounded-lg p-2">
                  {insight}
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Tags */}
          {profile.suggestedTags.length > 0 && (
            <div>
              <h4 className="font-medium text-secondary mb-2 flex items-center text-sm sm:text-base">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" />
                AI-Generated Recommendation Tags:
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.suggestedTags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Training Data Preview */}
        <div className="p-4 sm:p-6 border-b border-platinum">
          <h4 className="font-medium text-secondary mb-3 flex items-center text-sm sm:text-base">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary" />
            AI Training Data Generated:
          </h4>
          <div className="bg-charcoal rounded-lg p-3 sm:p-4 text-green-400 font-mono text-xs overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">{JSON.stringify(generateTrainingData(), null, 2)}</pre>
          </div>
        </div>

        {/* What's Next */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-secondary mb-4 flex items-center">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-primary" />
            Your Personalized Experience:
          </h3>
          
          <div className="space-y-3 mb-6">
            {getRecommendations().map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-xs sm:text-sm font-bold">{index + 1}</span>
                </div>
                <span className="text-charcoal text-sm sm:text-base">{recommendation}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onGetStarted}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center animate-gold-glow text-sm sm:text-base"
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>Start My AI-Powered Experience</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              {profile.userType === 'customer' && (
                <>
                  <button className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors text-xs sm:text-sm">
                    <Calendar className="w-4 h-4 mr-1 sm:mr-2" />
                    Browse Events
                  </button>
                  <button className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors text-xs sm:text-sm">
                    <Music className="w-4 h-4 mr-1 sm:mr-2" />
                    Find Concerts
                  </button>
                </>
              )}
              
              {profile.userType === 'organizer' && (
                <>
                  <button className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors text-xs sm:text-sm">
                    <Users className="w-4 h-4 mr-1 sm:mr-2" />
                    Find Vendors
                  </button>
                  <button className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors text-xs sm:text-sm">
                    <Calendar className="w-4 h-4 mr-1 sm:mr-2" />
                    Plan Event
                  </button>
                </>
              )}
              
              {profile.userType === 'vendor' && (
                <>
                  <button className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors text-xs sm:text-sm">
                    <Users className="w-4 h-4 mr-1 sm:mr-2" />
                    Create Profile
                  </button>
                  <button className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 mr-1 sm:mr-2" />
                    Find Opportunities
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-pearl border-t border-platinum text-center">
          <p className="text-xs sm:text-sm text-charcoal flex items-center justify-center">
            <Bot className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            AI will continue learning your preferences to improve recommendations
          </p>
        </div>
      </div>
    </div>
  );
};