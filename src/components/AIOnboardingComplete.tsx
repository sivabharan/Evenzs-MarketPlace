import React from 'react';
import { CheckCircle, Sparkles, ArrowRight, Calendar, Users, Music, MapPin, Bot, Zap, Target } from 'lucide-react';

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
      return `You love ${interests}${artists}, prefer ${profile.preferredVibe} vibes, and are ${profile.locationPreference === 'austin-tx' ? 'focused on local Austin events' : 'open to travel within ' + profile.locationPreference}.`;
    } else if (profile.userType === 'vendor') {
      const services = profile.services?.slice(0, 2).join(' and ') || 'services';
      const events = profile.eventTypes?.slice(0, 2).join(' and ') || 'events';
      return `You provide ${services} for ${events}, covering ${profile.coverageArea}. Your specialty: ${profile.targetAudience || 'premium event services'}.`;
    } else if (profile.userType === 'organizer') {
      const events = profile.organizerEventTypes?.slice(0, 2).join(' and ') || 'events';
      const vendors = profile.vendorNeeds?.slice(0, 2).join(' and ') || 'vendor services';
      return `You organize ${events} in ${profile.region}, typically needing ${vendors}. Platform focus: ${profile.supportNeeds?.slice(0, 2).join(' and ') || 'event management'}.`;
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

    return insights.length > 0 ? insights : ['🎯 Personalized recommendations are being prepared for you'];
  };

  const getRecommendations = () => {
    if (profile.userType === 'customer') {
      return [
        'Discover curated events matching your music taste',
        'Get notified about new events in your preferred locations',
        'Connect with like-minded event-goers',
        'Access exclusive early-bird pricing and VIP experiences'
      ];
    } else if (profile.userType === 'organizer') {
      return [
        'Browse our AI-matched network of verified vendors',
        'Get intelligent vendor recommendations based on your event type',
        'Access event planning templates and automation tools',
        'Manage all your events with our comprehensive dashboard'
      ];
    } else if (profile.userType === 'vendor') {
      return [
        'Create an AI-optimized business profile',
        'Receive qualified leads matching your specialties',
        'Showcase your portfolio with intelligent categorization',
        'Grow your business with our analytics and insights'
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
        responseConfidence: profile.aiTrainingData.responses.reduce((avg, r) => avg + r.confidence, 0) / profile.aiTrainingData.responses.length,
        timestamp: new Date().toISOString()
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
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-gold-glow">
            <Bot className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-2 flex items-center justify-center">
            AI Profile Complete!
            <Zap className="w-6 h-6 ml-2 text-primary" />
          </h2>
          <p className="text-lg text-charcoal">Your intelligent recommendations are ready</p>
        </div>

        {/* AI Profile Summary */}
        <div className="p-6 border-b border-platinum">
          <div className="bg-pearl rounded-xl p-4 mb-4">
            <h3 className="font-semibold text-secondary mb-2 flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Your AI-Generated Profile:
            </h3>
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-primary text-white text-sm px-3 py-1 rounded-full font-medium">
                {getUserTypeLabel()}
              </span>
              <span className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full font-medium">
                {profile.aiTrainingData.preferences.preferenceStrength || 'High'} Confidence
              </span>
            </div>
            <p className="text-charcoal text-sm leading-relaxed">
              {getPersonalizedSummary()}
            </p>
          </div>

          {/* AI Insights */}
          <div className="mb-4">
            <h4 className="font-medium text-secondary mb-2 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              AI Insights:
            </h4>
            <div className="space-y-2">
              {getAIInsights().map((insight, index) => (
                <div key={index} className="text-sm text-charcoal bg-white/50 rounded-lg p-2">
                  {insight}
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Tags */}
          {profile.suggestedTags.length > 0 && (
            <div>
              <h4 className="font-medium text-secondary mb-2">AI-Generated Recommendation Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {profile.suggestedTags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* What's Next */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-primary" />
            Your Personalized Experience:
          </h3>
          
          <div className="space-y-3 mb-6">
            {getRecommendations().map((recommendation, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-bold">{index + 1}</span>
                </div>
                <span className="text-charcoal">{recommendation}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onGetStarted}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center animate-gold-glow"
            >
              <Bot className="w-5 h-5 mr-2" />
              <span>Start My AI-Powered Experience</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              {profile.userType === 'customer' && (
                <>
                  <button className="flex items-center justify-center py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors">
                    <Calendar className="w-5 h-5 mr-2" />
                    Browse Events
                  </button>
                  <button className="flex items-center justify-center py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors">
                    <Music className="w-5 h-5 mr-2" />
                    Find Concerts
                  </button>
                </>
              )}
              
              {profile.userType === 'organizer' && (
                <>
                  <button className="flex items-center justify-center py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors">
                    <Users className="w-5 h-5 mr-2" />
                    Find Vendors
                  </button>
                  <button className="flex items-center justify-center py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors">
                    <Calendar className="w-5 h-5 mr-2" />
                    Plan Event
                  </button>
                </>
              )}
              
              {profile.userType === 'vendor' && (
                <>
                  <button className="flex items-center justify-center py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors">
                    <Users className="w-5 h-5 mr-2" />
                    Create Profile
                  </button>
                  <button className="flex items-center justify-center py-3 px-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-xl font-medium transition-colors">
                    <MapPin className="w-5 h-5 mr-2" />
                    Find Opportunities
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-pearl border-t border-platinum text-center">
          <p className="text-sm text-charcoal flex items-center justify-center">
            <Bot className="w-4 h-4 mr-2" />
            AI will continue learning your preferences to improve recommendations
          </p>
        </div>
      </div>
    </div>
  );
};