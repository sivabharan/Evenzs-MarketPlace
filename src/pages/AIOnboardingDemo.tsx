import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Sparkles, Users, Calendar, Music, Zap, Target, Brain, Database, TrendingUp } from 'lucide-react';
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
  const [showTrainingData, setShowTrainingData] = useState(false);

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

  // Mock AI training data from previous users
  const mockTrainingData = [
    {
      role: "Customer",
      interests: ["Concerts", "Food Festivals"],
      favoriteArtists: ["Bad Bunny", "The Weeknd", "Rosalía"],
      vibe: "High Energy",
      location: "Open to travel within Texas",
      discoveryTags: ["Latin concerts", "festivals", "nightlife", "high-energy", "reggaeton"],
      aiMetadata: {
        completionRate: 100,
        behaviorPatterns: ["music-enthusiast", "travel-willing", "latin-music-lover"],
        responseConfidence: 0.94,
        timestamp: "2024-12-19T09:15:00Z"
      }
    },
    {
      role: "Vendor",
      services: ["Photography", "Drone Videography"],
      eventTypes: ["Weddings", "Luxury Retreats"],
      coverageArea: "Texas, USA",
      uniqueSellingPoint: "Natural light-focused luxury photography",
      discoveryTags: ["Wedding Photographer", "Premium", "Cinematic", "Natural Light"],
      aiMetadata: {
        completionRate: 100,
        behaviorPatterns: ["visual-artist", "luxury-specialist", "tech-savvy"],
        responseConfidence: 0.91,
        timestamp: "2024-12-19T08:30:00Z"
      }
    },
    {
      role: "Organizer",
      eventTypes: ["Corporate Conferences", "Product Launches"],
      vendorNeeds: ["AV", "Catering", "Security"],
      region: "Austin & Dallas",
      platformFeatures: ["Ticketing", "Vendor Portal"],
      discoveryTags: ["Corporate Events", "Tech Conferences", "Professional", "B2B"],
      aiMetadata: {
        completionRate: 100,
        behaviorPatterns: ["business-focused", "tech-savvy", "efficiency-driven"],
        responseConfidence: 0.89,
        timestamp: "2024-12-19T07:45:00Z"
      }
    }
  ];

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

  const aiCapabilities = [
    {
      title: "Adaptive Questioning",
      description: "AI adjusts questions based on user type and previous responses",
      icon: Target,
      color: "text-primary"
    },
    {
      title: "Behavior Analysis",
      description: "Identifies user patterns and preferences from responses",
      icon: Brain,
      color: "text-accent"
    },
    {
      title: "Smart Tag Generation",
      description: "Creates personalized recommendation tags automatically",
      icon: Sparkles,
      color: "text-gold-dark"
    },
    {
      title: "Training Data Collection",
      description: "Structures responses for machine learning datasets",
      icon: Database,
      color: "text-bronze"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <Zap className="w-8 h-8 ml-3 text-primary animate-pulse" />
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
            <p className="text-lg text-charcoal max-w-3xl mx-auto">
              Our intelligent system asks adaptive questions, analyzes user responses in real-time, and generates 
              personalized recommendation tags for enhanced user experiences and comprehensive AI training datasets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {aiCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="text-center p-6 bg-pearl rounded-xl hover:shadow-lg transition-shadow">
                  <IconComponent className={`w-12 h-12 ${capability.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-secondary mb-2">{capability.title}</h3>
                  <p className="text-sm text-charcoal">{capability.description}</p>
                </div>
              );
            })}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Training Data Output */}
          <div className="bg-white rounded-2xl shadow-lg border border-platinum p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
              <Database className="w-6 h-6 mr-2 text-primary" />
              AI Training Data Structure
            </h2>
            <p className="text-charcoal mb-6">
              Our system generates structured JSON data for AI training and machine learning:
            </p>

            <div className="bg-charcoal rounded-xl p-6 text-green-400 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`{
  "role": "Customer",
  "interests": ["Concerts", "Food Festivals"],
  "favoriteArtists": ["Bad Bunny", "The Weeknd"],
  "vibe": "High Energy",
  "location": "Texas",
  "discoveryTags": [
    "Latin concerts", "festivals", 
    "nightlife", "reggaeton"
  ],
  "aiMetadata": {
    "completionRate": 100,
    "behaviorPatterns": [
      "music-enthusiast",
      "travel-willing"
    ],
    "responseConfidence": 0.94,
    "timestamp": "2024-12-19T10:30:00Z"
  }
}`}</pre>
            </div>

            <button
              onClick={() => setShowTrainingData(!showTrainingData)}
              className="w-full bg-primary/10 hover:bg-primary/20 text-primary py-3 rounded-xl font-medium transition-colors flex items-center justify-center"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              {showTrainingData ? 'Hide' : 'View'} Mock Training Dataset
            </button>

            {showTrainingData && (
              <div className="mt-4 space-y-4">
                <h3 className="font-semibold text-secondary">Sample Training Data (3 users):</h3>
                {mockTrainingData.map((data, index) => (
                  <div key={index} className="bg-pearl rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-secondary">{data.role}</span>
                      <span className="text-sm text-charcoal">
                        Confidence: {data.aiMetadata.responseConfidence}
                      </span>
                    </div>
                    <div className="text-sm text-charcoal">
                      <div className="mb-1">
                        <strong>Patterns:</strong> {data.aiMetadata.behaviorPatterns.join(', ')}
                      </div>
                      <div>
                        <strong>Tags:</strong> {data.discoveryTags.slice(0, 3).join(', ')}...
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* AI Performance Metrics */}
          <div className="bg-white rounded-2xl shadow-lg border border-platinum p-8">
            <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-primary" />
              AI Performance Metrics
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary">94%</div>
                  <div className="text-sm text-charcoal">Avg. Confidence</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-xl">
                  <div className="text-2xl font-bold text-accent">87%</div>
                  <div className="text-sm text-charcoal">Completion Rate</div>
                </div>
                <div className="text-center p-4 bg-gold/5 rounded-xl">
                  <div className="text-2xl font-bold text-gold-dark">15+</div>
                  <div className="text-sm text-charcoal">Behavior Patterns</div>
                </div>
                <div className="text-center p-4 bg-bronze/5 rounded-xl">
                  <div className="text-2xl font-bold text-bronze">2.3s</div>
                  <div className="text-sm text-charcoal">Avg. Response Time</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-3">AI Capabilities:</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-charcoal">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Real-time behavior pattern recognition
                  </div>
                  <div className="flex items-center text-sm text-charcoal">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Dynamic question adaptation
                  </div>
                  <div className="flex items-center text-sm text-charcoal">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Intelligent tag generation
                  </div>
                  <div className="flex items-center text-sm text-charcoal">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Structured data output for ML
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-secondary mb-3">Training Data Uses:</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-charcoal">
                    <Brain className="w-4 h-4 mr-2 text-primary" />
                    Recommendation engine training
                  </div>
                  <div className="flex items-center text-sm text-charcoal">
                    <Target className="w-4 h-4 mr-2 text-accent" />
                    User behavior prediction
                  </div>
                  <div className="flex items-center text-sm text-charcoal">
                    <Sparkles className="w-4 h-4 mr-2 text-gold-dark" />
                    Personalization algorithms
                  </div>
                  <div className="flex items-center text-sm text-charcoal">
                    <Database className="w-4 h-4 mr-2 text-bronze" />
                    ML model fine-tuning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example AI-Generated Profiles */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-platinum p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-primary" />
            AI-Generated User Profiles
          </h2>
          <p className="text-charcoal mb-6">
            Examples of intelligent user profiles created by our AI onboarding system with real-time analysis:
          </p>

          <div className="space-y-6">
            {exampleProfiles.map((example, index) => (
              <div key={index} className="border border-platinum rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-2 flex items-center">
                      {example.name}
                      <Bot className="w-4 h-4 ml-2 text-primary" />
                    </h3>
                    <p className="text-charcoal mb-4">{example.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {example.profile.userType}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      AI Verified
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {example.profile.interests.length > 0 && (
                      <div>
                        <span className="text-sm font-medium text-charcoal">Interests: </span>
                        <div className="flex flex-wrap gap-2 mt-1">
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
                        <div className="flex flex-wrap gap-2 mt-1">
                          {example.profile.services.map((service) => (
                            <span key={service} className="bg-gold/10 text-gold-dark text-xs px-2 py-1 rounded-full">
                              {service.replace('-', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-charcoal">AI Behavior Patterns: </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {example.profile.aiTrainingData.behaviorPatterns.map((pattern) => (
                          <span key={pattern} className="bg-bronze/10 text-bronze text-xs px-2 py-1 rounded-full">
                            {pattern.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-sm font-medium text-charcoal">AI-Generated Tags: </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {example.profile.suggestedTags.slice(0, 4).map((tag) => (
                          <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                        {example.profile.suggestedTags.length > 4 && (
                          <span className="text-xs text-charcoal">+{example.profile.suggestedTags.length - 4} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI System Benefits */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-platinum p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-primary" />
            AI System Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                Enhanced User Experience:
              </h3>
              <ul className="space-y-2 text-charcoal text-sm">
                <li>• Personalized event recommendations</li>
                <li>• Intelligent vendor matching</li>
                <li>• Adaptive user interface</li>
                <li>• Contextual content delivery</li>
                <li>• Reduced onboarding friction</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary flex items-center">
                <Brain className="w-5 h-5 mr-2 text-accent" />
                AI & Machine Learning:
              </h3>
              <ul className="space-y-2 text-charcoal text-sm">
                <li>• Structured training datasets</li>
                <li>• Behavior pattern recognition</li>
                <li>• Preference learning algorithms</li>
                <li>• Continuous model improvement</li>
                <li>• Predictive analytics capabilities</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-gold-dark" />
                Business Intelligence:
              </h3>
              <ul className="space-y-2 text-charcoal text-sm">
                <li>• User behavior insights</li>
                <li>• Market trend analysis</li>
                <li>• Conversion optimization</li>
                <li>• Customer segmentation</li>
                <li>• Performance metrics tracking</li>
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