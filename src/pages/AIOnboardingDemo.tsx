import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Sparkles, Users, Calendar, Music, Zap, Target, Brain } from 'lucide-react';
import { AIOnboardingAgent } from '../components/AIOnboardingAgent';
import { AIOnboardingComplete } from '../components/AIOnboardingComplete';

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

export const AIOnboardingDemo: React.FC = () => {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setShowOnboarding(false);
    setShowComplete(true);
  };

  const handleGetStarted = () => {
    setShowComplete(false);
    // In a real app, this would navigate to the appropriate dashboard
    alert('🤖 Welcome to your AI-powered Evenzs experience! Your personalized recommendations are now active.');
  };

  const exampleProfiles = [
    {
      type: 'customer',
      name: 'Music Lover (AI-Generated)',
      description: 'AI detected: Music enthusiast who loves Billie Eilish and Coldplay, prefers chill outdoor vibes',
      profile: {
        userType: 'customer' as const,
        interests: ['concerts', 'food-festivals'],
        favoriteArtists: ['Billie Eilish', 'Coldplay'],
        preferredVibe: 'chill-outdoor',
        locationPreference: 'texas',
        purpose: 'discover-events',
        suggestedTags: ['Live Music', 'Indie', 'Festival', 'Indie Pop', 'Alternative', 'Stadium Rock', 'Outdoor Events'],
        aiTrainingData: {
          responses: [],
          preferences: { preferenceStrength: 'high', completionRate: 100 },
          behaviorPatterns: ['music-enthusiast', 'outdoor-lover']
        }
      }
    },
    {
      type: 'vendor',
      name: 'Luxury Photographer (AI-Generated)',
      description: 'AI detected: Photography specialist focusing on luxury retreats with natural light expertise',
      profile: {
        userType: 'vendor' as const,
        interests: [],
        favoriteArtists: [],
        preferredVibe: '',
        locationPreference: '',
        purpose: '',
        services: ['photography', 'drone-videography'],
        eventTypes: ['luxury-retreats', 'weddings'],
        targetAudience: 'Natural light-focused luxury photography',
        coverageArea: 'texas-usa',
        suggestedTags: ['Wedding Photographer', 'Premium', 'Cinematic', 'Natural Light Photography', 'Luxury Events'],
        aiTrainingData: {
          responses: [],
          preferences: { preferenceStrength: 'high', completionRate: 100 },
          behaviorPatterns: ['visual-artist', 'luxury-specialist', 'tech-savvy-creative']
        }
      }
    },
    {
      type: 'organizer',
      name: 'Tech Event Organizer (AI-Generated)',
      description: 'AI detected: Corporate conference organizer focused on tech events with advanced platform needs',
      profile: {
        userType: 'organizer' as const,
        interests: [],
        favoriteArtists: [],
        preferredVibe: '',
        locationPreference: '',
        purpose: '',
        organizerEventTypes: ['corporate-conferences', 'product-launches'],
        vendorNeeds: ['av-equipment', 'catering'],
        region: 'austin-dallas',
        supportNeeds: ['ticketing', 'analytics'],
        suggestedTags: ['Corporate Events', 'Professional', 'Product Launch', 'AV Production', 'Event Management'],
        aiTrainingData: {
          responses: [],
          preferences: { preferenceStrength: 'high', completionRate: 100 },
          behaviorPatterns: ['business-focused', 'marketing-savvy', 'tech-adopter']
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/"
            className="flex items-center text-charcoal hover:text-primary transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-secondary mb-2 flex items-center">
              AI Onboarding System
              <Zap className="w-8 h-8 ml-3 text-primary" />
            </h1>
            <p className="text-xl text-charcoal">Intelligent user profiling and personalized recommendations</p>
          </div>
        </div>

        {/* AI System Overview */}
        <div className="bg-white rounded-2xl shadow-lg border border-platinum p-8 mb-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-gold-glow">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4 flex items-center justify-center">
              AI-Powered Onboarding Agent
              <Brain className="w-6 h-6 ml-2 text-primary" />
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Our intelligent system asks adaptive questions, analyzes user responses, and generates 
              personalized recommendation tags for enhanced user experiences and AI training datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-pearl rounded-xl">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">Smart User Detection</h3>
              <p className="text-sm text-charcoal">AI identifies user type and adapts questioning flow dynamically</p>
            </div>
            <div className="text-center p-6 bg-pearl rounded-xl">
              <Brain className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">Intelligent Analysis</h3>
              <p className="text-sm text-charcoal">Natural language processing generates behavior patterns and preferences</p>
            </div>
            <div className="text-center p-6 bg-pearl rounded-xl">
              <Sparkles className="w-12 h-12 text-gold-dark mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">Personalized Tags</h3>
              <p className="text-sm text-charcoal">AI creates custom recommendation tags for enhanced matching</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowOnboarding(true)}
              className="bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-gold-glow flex items-center mx-auto"
            >
              <Bot className="w-6 h-6 mr-2" />
              Experience AI Onboarding
              <Zap className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* AI Training Data Output */}
        <div className="bg-white rounded-2xl shadow-lg border border-platinum p-8 mb-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-primary" />
            AI Training Data Structure
          </h2>
          <p className="text-charcoal mb-6">
            Our system generates structured JSON data for AI training and personalization:
          </p>

          <div className="bg-charcoal rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`{
  "role": "Customer",
  "interests": ["Concerts", "Comedy Shows"],
  "favoriteArtists": ["Billie Eilish", "Coldplay"],
  "vibe": "Chill and Outdoor",
  "location": "Austin, TX",
  "discoveryTags": ["Live Music", "Indie", "Festival", "Outdoor Events"],
  "aiMetadata": {
    "completionRate": 100,
    "behaviorPatterns": ["music-enthusiast", "outdoor-lover"],
    "responseConfidence": 0.92,
    "timestamp": "2024-12-19T10:30:00Z"
  }
}`}</pre>
          </div>
        </div>

        {/* Example AI-Generated Profiles */}
        <div className="bg-white rounded-2xl shadow-lg border border-platinum p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-primary" />
            AI-Generated User Profiles
          </h2>
          <p className="text-charcoal mb-6">
            Examples of intelligent user profiles created by our AI onboarding system:
          </p>

          <div className="space-y-6">
            {exampleProfiles.map((example, index) => (
              <div key={index} className="border border-platinum rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-2 flex items-center">
                      {example.name}
                      <Bot className="w-4 h-4 ml-2 text-primary" />
                    </h3>
                    <p className="text-charcoal mb-4">{example.description}</p>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {example.profile.userType}
                  </span>
                </div>

                <div className="space-y-3">
                  {example.profile.interests.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-charcoal">Interests: </span>
                      <div className="inline-flex flex-wrap gap-2 mt-1">
                        {example.profile.interests.map((interest) => (
                          <span key={interest} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                            {interest.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {example.profile.favoriteArtists.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-charcoal">AI-Detected Artists: </span>
                      <span className="text-sm text-charcoal">{example.profile.favoriteArtists.join(', ')}</span>
                    </div>
                  )}

                  {example.profile.services && example.profile.services.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-charcoal">Services: </span>
                      <div className="inline-flex flex-wrap gap-2 mt-1">
                        {example.profile.services.map((service) => (
                          <span key={service} className="bg-gold/10 text-gold-dark text-xs px-2 py-1 rounded-full">
                            {service.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="text-sm font-medium text-charcoal">AI Behavior Patterns: </span>
                    <div className="inline-flex flex-wrap gap-2 mt-1">
                      {example.profile.aiTrainingData.behaviorPatterns.map((pattern) => (
                        <span key={pattern} className="bg-bronze/10 text-bronze text-xs px-2 py-1 rounded-full">
                          {pattern.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-charcoal">AI-Generated Tags: </span>
                    <div className="inline-flex flex-wrap gap-2 mt-1">
                      {example.profile.suggestedTags.map((tag) => (
                        <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-platinum p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-primary" />
            AI System Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                For Customers:
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>• AI analyzes music preferences and favorite artists</li>
                <li>• Detects preferred event vibes and atmospheres</li>
                <li>• Determines travel willingness and location preferences</li>
                <li>• Generates personalized event recommendation tags</li>
                <li>• Creates behavior patterns for future ML training</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                For Vendors:
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Catalogs services and specializations intelligently</li>
                <li>• AI processes unique selling points and expertise</li>
                <li>• Matches coverage areas with event opportunities</li>
                <li>• Generates business growth recommendations</li>
                <li>• Creates vendor-specific behavior patterns</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                For Organizers:
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>• AI identifies event types and planning preferences</li>
                <li>• Analyzes vendor needs and service requirements</li>
                <li>• Matches platform features with organizer goals</li>
                <li>• Generates intelligent vendor recommendations</li>
                <li>• Creates organizer behavior profiles for matching</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                AI Technology:
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Adaptive questioning based on user responses</li>
                <li>• Natural language processing for preferences</li>
                <li>• Intelligent tag generation algorithms</li>
                <li>• Behavior pattern recognition and classification</li>
                <li>• Structured data output for ML training pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AI Onboarding Agent */}
      {showOnboarding && (
        <AIOnboardingAgent
          onComplete={handleOnboardingComplete}
          onClose={() => setShowOnboarding(false)}
        />
      )}

      {/* AI Onboarding Complete */}
      {showComplete && userProfile && (
        <AIOnboardingComplete
          profile={userProfile}
          onGetStarted={handleGetStarted}
        />
      )}
    </div>
  );
};