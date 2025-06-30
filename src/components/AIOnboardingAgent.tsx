import React, { useState } from 'react';
import { MessageSquare, User, Calendar, Music, MapPin, Heart, Sparkles, ArrowRight, X, Bot, Zap, Brain } from 'lucide-react';

interface UserProfile {
  userType: 'customer' | 'vendor' | 'organizer' | null;
  interests: string[];
  favoriteArtists: string[];
  preferredVibe: string;
  locationPreference: string;
  purpose: string;
  services?: string[];
  eventTypes?: string[];
  organizerEventTypes?: string[];
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

interface AIOnboardingAgentProps {
  onComplete: (profile: UserProfile) => void;
  onClose: () => void;
}

export const AIOnboardingAgent: React.FC<AIOnboardingAgentProps> = ({ onComplete, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [aiThinking, setAiThinking] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userType: null,
    interests: [],
    favoriteArtists: [],
    preferredVibe: '',
    locationPreference: '',
    purpose: '',
    suggestedTags: [],
    aiTrainingData: {
      responses: [],
      preferences: {},
      behaviorPatterns: []
    }
  });

  const questions = [
    {
      id: 'userType',
      question: "Hi there! 👋 I'm your AI assistant at Evenzs. I'm here to create a personalized experience just for you. Are you signing up as a Customer, Vendor, or Organizer?",
      type: 'choice',
      aiAnalysis: "Analyzing user intent and role preference...",
      options: [
        { 
          value: 'customer', 
          label: 'Customer', 
          icon: '🎫', 
          description: 'I want to discover and attend amazing events' 
        },
        { 
          value: 'organizer', 
          label: 'Organizer', 
          icon: '📅', 
          description: 'I want to plan and create memorable events' 
        },
        { 
          value: 'vendor', 
          label: 'Vendor', 
          icon: '🎯', 
          description: 'I want to offer my services to event organizers' 
        }
      ]
    },
    
    // Customer Questions
    {
      id: 'interests',
      question: "Perfect! What types of events make your heart race? ✨",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'customer',
      aiAnalysis: "AI is analyzing your event preferences to build your interest profile...",
      options: [
        { value: 'concerts', label: 'Concerts & Live Music' },
        { value: 'food-festivals', label: 'Food Festivals' },
        { value: 'comedy-shows', label: 'Comedy Shows' },
        { value: 'nightlife', label: 'Nightlife & Parties' },
        { value: 'art-culture', label: 'Art & Cultural Events' },
        { value: 'sports', label: 'Sports Events' },
        { value: 'workshops', label: 'Workshops & Learning' },
        { value: 'outdoor-adventures', label: 'Outdoor Adventures' }
      ]
    },
    {
      id: 'favoriteArtists',
      question: "I see you love music! 🎵 Tell me about your favorite artists or genres - this helps me find events you'll absolutely love!",
      type: 'text',
      condition: (profile: UserProfile) => profile.userType === 'customer' && profile.interests.includes('concerts'),
      aiAnalysis: "AI is processing your music preferences to identify patterns and genres...",
      placeholder: "e.g., Billie Eilish, Coldplay, Jazz, Electronic, Bad Bunny..."
    },
    {
      id: 'preferredVibe',
      question: "What kind of vibe are you usually looking for? 🌟",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'customer',
      aiAnalysis: "AI is determining your event atmosphere preferences...",
      options: [
        { value: 'chill-outdoor', label: 'Chill and Outdoor', description: 'Relaxed, nature-focused events' },
        { value: 'high-energy', label: 'High Energy', description: 'Loud, exciting, dance-worthy' },
        { value: 'intimate-cozy', label: 'Intimate & Cozy', description: 'Small venues, personal connections' },
        { value: 'sophisticated', label: 'Sophisticated', description: 'Elegant, upscale experiences' },
        { value: 'unique-quirky', label: 'Unique & Quirky', description: 'Unusual, creative experiences' }
      ]
    },
    {
      id: 'locationPreference',
      question: "How far would you travel for the perfect event? 🗺️",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'customer',
      aiAnalysis: "AI is mapping your travel willingness and geographic preferences...",
      options: [
        { value: 'austin-tx', label: 'Austin, TX', description: 'Keep it local' },
        { value: 'texas', label: 'Open to travel within Texas', description: 'State-wide adventures' },
        { value: 'national', label: 'Anywhere in the US', description: 'National event explorer' },
        { value: 'international', label: 'International', description: 'Global event adventurer' }
      ]
    },
    {
      id: 'purpose',
      question: "What brings you to Evenzs? 🎯",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'customer',
      aiAnalysis: "AI is understanding your primary motivation and goals...",
      options: [
        { value: 'discover-events', label: 'Discover Events', description: 'Find new experiences' },
        { value: 'join-community', label: 'Join Community', description: 'Connect with like-minded people' },
        { value: 'explore-travel', label: 'Explore Travel', description: 'Combine events with travel' },
        { value: 'date-nights', label: 'Date Nights', description: 'Romantic experiences' }
      ]
    },

    // Vendor Questions
    {
      id: 'services',
      question: "Awesome! What services do you provide for events? 🎨",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'vendor',
      aiAnalysis: "AI is cataloging your service offerings and expertise areas...",
      options: [
        { value: 'dj', label: 'DJ Services' },
        { value: 'photography', label: 'Photography' },
        { value: 'drone-videography', label: 'Drone Videography' },
        { value: 'catering', label: 'Catering' },
        { value: 'florals', label: 'Florals & Decor' },
        { value: 'planning', label: 'Event Planning' },
        { value: 'venue', label: 'Venue' },
        { value: 'transportation', label: 'Transportation' }
      ]
    },
    {
      id: 'eventTypes',
      question: "What types of events do you love working on? 💫",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'vendor',
      aiAnalysis: "AI is identifying your event specializations and target markets...",
      options: [
        { value: 'weddings', label: 'Weddings' },
        { value: 'luxury-retreats', label: 'Luxury Retreats' },
        { value: 'corporate', label: 'Corporate Events' },
        { value: 'nightlife', label: 'Nightlife Events' },
        { value: 'festivals', label: 'Festivals' },
        { value: 'private-parties', label: 'Private Parties' }
      ]
    },
    {
      id: 'coverageArea',
      question: "What's your coverage area? 📍",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'vendor',
      aiAnalysis: "AI is mapping your service coverage and geographic reach...",
      options: [
        { value: 'texas-usa', label: 'Texas, USA', description: 'Statewide coverage' },
        { value: 'southwest-usa', label: 'Southwest USA', description: 'Multi-state region' },
        { value: 'national-usa', label: 'National USA', description: 'Coast to coast' },
        { value: 'international', label: 'International', description: 'Global services' }
      ]
    },
    {
      id: 'targetAudience',
      question: "What's your unique selling point or specialty? ✨",
      type: 'text',
      condition: (profile: UserProfile) => profile.userType === 'vendor',
      aiAnalysis: "AI is processing your unique value proposition and market positioning...",
      placeholder: "e.g., Natural light-focused luxury photography, Authentic Mexican cuisine, Vintage-style DJ sets..."
    },

    // Organizer Questions
    {
      id: 'organizerEventTypes',
      question: "Fantastic! What types of events do you organize? 🎪",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'organizer',
      aiAnalysis: "AI is categorizing your event planning expertise and focus areas...",
      options: [
        { value: 'corporate-conferences', label: 'Corporate Conferences' },
        { value: 'product-launches', label: 'Product Launches' },
        { value: 'tech-conferences', label: 'Tech Conferences' },
        { value: 'weddings', label: 'Weddings' },
        { value: 'fundraisers', label: 'Fundraisers' },
        { value: 'festivals', label: 'Festivals' },
        { value: 'retreats', label: 'Retreats' },
        { value: 'networking-events', label: 'Networking Events' }
      ]
    },
    {
      id: 'vendorNeeds',
      question: "What vendor services do you typically need? 🛠️",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'organizer',
      aiAnalysis: "AI is analyzing your vendor requirements and service dependencies...",
      options: [
        { value: 'av-equipment', label: 'AV Equipment' },
        { value: 'catering', label: 'Catering' },
        { value: 'security', label: 'Security' },
        { value: 'photography', label: 'Photography' },
        { value: 'transportation', label: 'Transportation' },
        { value: 'florals-decor', label: 'Florals & Decor' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'lighting', label: 'Lighting' }
      ]
    },
    {
      id: 'region',
      question: "Which regions do you serve? 🌎",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'organizer',
      aiAnalysis: "AI is mapping your operational territory and market reach...",
      options: [
        { value: 'austin-dallas', label: 'Austin & Dallas', description: 'Major Texas cities' },
        { value: 'texas-statewide', label: 'Texas Statewide', description: 'All of Texas' },
        { value: 'southwest-region', label: 'Southwest Region', description: 'Multi-state coverage' },
        { value: 'national', label: 'National', description: 'Nationwide events' }
      ]
    },
    {
      id: 'supportNeeds',
      question: "What platform features would help you most? 🚀",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'organizer',
      aiAnalysis: "AI is identifying your technology needs and platform preferences...",
      options: [
        { value: 'ticketing', label: 'Ticketing System' },
        { value: 'vendor-portal', label: 'Vendor Management Portal' },
        { value: 'travel-booking', label: 'Travel Booking Integration' },
        { value: 'payment-processing', label: 'Payment Processing' },
        { value: 'marketing-tools', label: 'Marketing Tools' },
        { value: 'analytics', label: 'Event Analytics' }
      ]
    }
  ];

  // Find the current question based on conditions and what's already answered
  const getCurrentQuestion = () => {
    // First, check if userType is not set
    if (!userProfile.userType) {
      return questions.find(q => q.id === 'userType');
    }

    // Then find the next unanswered question that meets conditions
    for (const question of questions) {
      // Skip userType since it's already answered
      if (question.id === 'userType') continue;
      
      // Check if this question has already been answered
      if (userProfile.hasOwnProperty(question.id)) continue;
      
      // Check if the question's condition is met (if it has one)
      if (question.condition && !question.condition(userProfile)) continue;
      
      // This is our next question
      return question;
    }
    
    // No more questions
    return null;
  };

  const currentQuestion = getCurrentQuestion();

  const recordResponse = (questionId: string, answer: any, confidence: number = 0.9) => {
    const response = {
      question: currentQuestion?.question || '',
      answer,
      timestamp: new Date().toISOString(),
      confidence
    };

    setUserProfile(prev => ({
      ...prev,
      aiTrainingData: {
        ...prev.aiTrainingData,
        responses: [...prev.aiTrainingData.responses, response]
      }
    }));
  };

  const simulateAIProcessing = () => {
    setAiThinking(true);
    setTimeout(() => {
      setAiThinking(false);
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 1500);
    }, 1000);
  };

  const handleAnswer = (questionId: string, answer: any) => {
    recordResponse(questionId, answer);
    
    const updatedProfile = { ...userProfile, [questionId]: answer };
    setUserProfile(updatedProfile);

    // Check if we have more questions
    const nextQuestion = getCurrentQuestion();
    
    if (!nextQuestion) {
      // No more questions, generate final profile
      setAiThinking(true);
      setTimeout(() => {
        const finalProfile = generateAIProfile(updatedProfile);
        onComplete(finalProfile);
      }, 2000);
    } else {
      // More questions available, continue
      simulateAIProcessing();
      setTimeout(() => setCurrentStep(currentStep + 1), 2500);
    }
  };

  const generateAIProfile = (profile: UserProfile): UserProfile => {
    let suggestedTags: string[] = [];
    let behaviorPatterns: string[] = [];

    if (profile.userType === 'customer') {
      // AI-powered tag generation for customers
      if (profile.interests.includes('concerts')) {
        suggestedTags.push('Live Music', 'Indie', 'Festival');
        behaviorPatterns.push('music-enthusiast');
        
        if (profile.favoriteArtists.length > 0) {
          const artists = profile.favoriteArtists.join(', ').toLowerCase();
          if (artists.includes('billie eilish') || artists.includes('indie')) {
            suggestedTags.push('Indie Pop', 'Alternative');
            behaviorPatterns.push('indie-music-lover');
          }
          if (artists.includes('coldplay')) {
            suggestedTags.push('Stadium Rock', 'Anthemic');
            behaviorPatterns.push('mainstream-rock-fan');
          }
          if (artists.includes('bad bunny') || artists.includes('reggaeton')) {
            suggestedTags.push('Latin Music', 'Reggaeton', 'Spanish');
            behaviorPatterns.push('latin-music-enthusiast');
          }
          if (artists.includes('electronic') || artists.includes('edm')) {
            suggestedTags.push('Electronic', 'Dance Music', 'Nightlife');
            behaviorPatterns.push('electronic-music-fan');
          }
          if (artists.includes('jazz')) {
            suggestedTags.push('Jazz', 'Sophisticated', 'Intimate Venues');
            behaviorPatterns.push('jazz-aficionado');
          }
        }
      }
      
      if (profile.interests.includes('food-festivals')) {
        suggestedTags.push('Food & Drink', 'Culinary', 'Local Cuisine');
        behaviorPatterns.push('foodie');
      }
      
      if (profile.interests.includes('nightlife')) {
        suggestedTags.push('Nightlife', 'Parties', 'Social Events');
        behaviorPatterns.push('nightlife-enthusiast');
      }
      
      if (profile.preferredVibe === 'chill-outdoor') {
        suggestedTags.push('Outdoor Events', 'Nature', 'Relaxed');
        behaviorPatterns.push('outdoor-lover');
      }
      
      if (profile.preferredVibe === 'high-energy') {
        suggestedTags.push('High Energy', 'Dance', 'Upbeat');
        behaviorPatterns.push('energy-seeker');
      }
      
      if (profile.preferredVibe === 'sophisticated') {
        suggestedTags.push('Upscale', 'Elegant', 'Premium');
        behaviorPatterns.push('sophistication-seeker');
      }
      
      if (profile.locationPreference === 'international') {
        suggestedTags.push('Destination Events', 'Travel', 'Cultural');
        behaviorPatterns.push('travel-enthusiast');
      }

      if (profile.purpose === 'explore-travel') {
        suggestedTags.push('Travel Events', 'Destination', 'Adventure');
        behaviorPatterns.push('travel-focused');
      }

    } else if (profile.userType === 'vendor') {
      // AI-powered tag generation for vendors
      if (profile.services?.includes('photography')) {
        suggestedTags.push('Wedding Photographer', 'Visual Storytelling');
        behaviorPatterns.push('visual-artist');
      }
      if (profile.services?.includes('drone-videography')) {
        suggestedTags.push('Cinematic', 'Aerial Photography');
        behaviorPatterns.push('tech-savvy-creative');
      }
      if (profile.services?.includes('dj')) {
        suggestedTags.push('Music Entertainment', 'Party Atmosphere');
        behaviorPatterns.push('music-professional');
      }
      if (profile.eventTypes?.includes('luxury-retreats')) {
        suggestedTags.push('Premium', 'Luxury Events');
        behaviorPatterns.push('luxury-specialist');
      }
      if (profile.eventTypes?.includes('weddings')) {
        suggestedTags.push('Wedding Specialist', 'Romantic Events');
        behaviorPatterns.push('wedding-expert');
      }
      if (profile.targetAudience?.toLowerCase().includes('natural light')) {
        suggestedTags.push('Natural Light Photography', 'Authentic Style');
        behaviorPatterns.push('natural-style-specialist');
      }
      if (profile.targetAudience?.toLowerCase().includes('luxury')) {
        suggestedTags.push('Luxury Services', 'High-End Events');
        behaviorPatterns.push('luxury-focused');
      }

    } else if (profile.userType === 'organizer') {
      // AI-powered tag generation for organizers
      if (profile.organizerEventTypes?.includes('corporate-conferences')) {
        suggestedTags.push('Corporate Events', 'Professional');
        behaviorPatterns.push('business-focused');
      }
      if (profile.organizerEventTypes?.includes('product-launches')) {
        suggestedTags.push('Product Launch', 'Marketing Events');
        behaviorPatterns.push('marketing-savvy');
      }
      if (profile.organizerEventTypes?.includes('tech-conferences')) {
        suggestedTags.push('Technology Events', 'Innovation');
        behaviorPatterns.push('tech-industry-focused');
      }
      if (profile.vendorNeeds?.includes('av-equipment')) {
        suggestedTags.push('AV Production', 'Technical Events');
        behaviorPatterns.push('tech-heavy-events');
      }
      if (profile.supportNeeds?.includes('ticketing')) {
        suggestedTags.push('Ticketed Events', 'Event Management');
        behaviorPatterns.push('tech-adopter');
      }
      if (profile.supportNeeds?.includes('analytics')) {
        suggestedTags.push('Data-Driven', 'Performance Tracking');
        behaviorPatterns.push('analytics-focused');
      }
    }

    return {
      ...profile,
      suggestedTags,
      aiTrainingData: {
        ...profile.aiTrainingData,
        behaviorPatterns,
        preferences: {
          userType: profile.userType,
          primaryInterests: profile.interests?.slice(0, 3) || profile.services?.slice(0, 3) || profile.organizerEventTypes?.slice(0, 3),
          preferenceStrength: profile.aiTrainingData.responses.length >= 4 ? 'high' : 'medium',
          completionRate: (profile.aiTrainingData.responses.length / 5) * 100,
          aiConfidence: profile.aiTrainingData.responses.reduce((avg, r) => avg + r.confidence, 0) / profile.aiTrainingData.responses.length
        }
      }
    };
  };

  if (!currentQuestion) {
    return null;
  }

  const getQuestionNumber = () => {
    return profile.aiTrainingData.responses.length + 1;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-platinum">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-gold-glow">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary flex items-center">
                AI Assistant
                <Zap className="w-4 h-4 ml-2 text-primary" />
              </h2>
              <p className="text-sm text-charcoal">Powered by intelligent recommendations</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-charcoal hover:text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress */}
        <div className="px-6 py-4 bg-pearl">
          <div className="flex items-center justify-between text-sm text-charcoal mb-2">
            <span>Question {getQuestionNumber()}</span>
            <span>{Math.round((getQuestionNumber() / 5) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-platinum rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${(getQuestionNumber() / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <div className="mb-6">
            {aiThinking ? (
              <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-xl">
                <Brain className="w-6 h-6 text-primary animate-pulse" />
                <div>
                  <div className="font-medium text-secondary">AI is analyzing your responses...</div>
                  <div className="text-sm text-charcoal">{currentQuestion.aiAnalysis}</div>
                </div>
              </div>
            ) : isTyping ? (
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-charcoal">AI is preparing your next question...</span>
              </div>
            ) : (
              <h3 className="text-lg font-semibold text-secondary mb-2 leading-relaxed">
                {currentQuestion.question}
              </h3>
            )}
          </div>

          {!isTyping && !aiThinking && (
            <div className="space-y-3">
              {currentQuestion.type === 'choice' && currentQuestion.options?.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  className="w-full text-left p-4 border border-platinum rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-3">
                    {option.icon && (
                      <span className="text-2xl">{option.icon}</span>
                    )}
                    <div className="flex-1">
                      <div className="font-medium text-secondary group-hover:text-primary transition-colors">
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="text-sm text-charcoal mt-1">
                          {option.description}
                        </div>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-charcoal group-hover:text-primary transition-colors" />
                  </div>
                </button>
              ))}

              {currentQuestion.type === 'multiChoice' && (
                <div className="space-y-2">
                  {currentQuestion.options?.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center p-3 border border-platinum rounded-xl hover:bg-pearl transition-colors cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-platinum rounded focus:ring-primary"
                        onChange={(e) => {
                          const currentValues = userProfile[currentQuestion.id as keyof UserProfile] as string[] || [];
                          const newValues = e.target.checked
                            ? [...currentValues, option.value]
                            : currentValues.filter(v => v !== option.value);
                          setUserProfile({ ...userProfile, [currentQuestion.id]: newValues });
                        }}
                      />
                      <span className="ml-3 text-secondary">{option.label}</span>
                    </label>
                  ))}
                  <button
                    onClick={() => handleAnswer(currentQuestion.id, userProfile[currentQuestion.id as keyof UserProfile] || [])}
                    className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg animate-gold-glow"
                    disabled={!userProfile[currentQuestion.id as keyof UserProfile] || (userProfile[currentQuestion.id as keyof UserProfile] as string[])?.length === 0}
                  >
                    Continue
                  </button>
                </div>
              )}

              {currentQuestion.type === 'text' && (
                <div className="space-y-4">
                  <textarea
                    placeholder={currentQuestion.placeholder}
                    className="w-full p-4 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    rows={3}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (currentQuestion.id === 'favoriteArtists') {
                        const artists = value.split(',').map(s => s.trim()).filter(s => s.length > 0);
                        setUserProfile({ ...userProfile, [currentQuestion.id]: artists });
                      } else {
                        setUserProfile({ ...userProfile, [currentQuestion.id]: value });
                      }
                    }}
                  />
                  <button
                    onClick={() => handleAnswer(currentQuestion.id, userProfile[currentQuestion.id as keyof UserProfile] || '')}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg animate-gold-glow"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-pearl border-t border-platinum">
          <div className="flex items-center justify-center text-sm text-charcoal">
            <Brain className="w-4 h-4 mr-2" />
            AI is learning your preferences to create personalized recommendations
          </div>
        </div>
      </div>
    </div>
  );
};