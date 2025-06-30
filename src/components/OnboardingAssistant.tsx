import React, { useState } from 'react';
import { MessageSquare, User, Calendar, Music, MapPin, Heart, Sparkles, ArrowRight, X } from 'lucide-react';

interface UserProfile {
  userType: 'attendee' | 'vendor' | 'organizer' | null;
  interests: string[];
  favoriteArtists: string[];
  preferredVibe: string;
  locationPreference: string;
  suggestedTags: string[];
  services?: string[];
  eventTypes?: string[];
  budget?: string;
}

interface OnboardingAssistantProps {
  onComplete: (profile: UserProfile) => void;
  onClose: () => void;
}

export const OnboardingAssistant: React.FC<OnboardingAssistantProps> = ({ onComplete, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    userType: null,
    interests: [],
    favoriteArtists: [],
    preferredVibe: '',
    locationPreference: '',
    suggestedTags: [],
  });

  const questions = [
    {
      id: 'userType',
      question: "Hi there! Welcome to Evenzs! 👋 I'm here to help personalize your experience. Are you looking to attend events, organize them, or provide services as a vendor?",
      type: 'choice',
      options: [
        { value: 'attendee', label: 'Attend Events', icon: '🎫', description: 'I want to discover and attend amazing events' },
        { value: 'organizer', label: 'Organize Events', icon: '📅', description: 'I want to plan and create memorable events' },
        { value: 'vendor', label: 'Provide Services', icon: '🎯', description: 'I want to offer my services to event organizers' }
      ]
    },
    // Attendee questions
    {
      id: 'interests',
      question: "Great! What types of events get you most excited?",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'attendee',
      options: [
        { value: 'live-music', label: 'Live Music & Concerts' },
        { value: 'food-drink', label: 'Food & Drink Events' },
        { value: 'art-culture', label: 'Art & Cultural Events' },
        { value: 'sports-fitness', label: 'Sports & Fitness' },
        { value: 'networking', label: 'Networking & Professional' },
        { value: 'festivals', label: 'Festivals & Outdoor Events' },
        { value: 'nightlife', label: 'Nightlife & Parties' },
        { value: 'workshops', label: 'Workshops & Learning' }
      ]
    },
    {
      id: 'favoriteArtists',
      question: "I see you're into music! Who are some of your favorite artists or what genres do you love?",
      type: 'text',
      condition: (profile: UserProfile) => profile.userType === 'attendee' && profile.interests.includes('live-music'),
      placeholder: "e.g., Bad Bunny, The Weeknd, Taylor Swift, Jazz, Electronic..."
    },
    {
      id: 'preferredVibe',
      question: "What kind of vibe are you usually looking for at events?",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'attendee',
      options: [
        { value: 'high-energy', label: 'High Energy', description: 'Loud, exciting, dance-worthy' },
        { value: 'intimate', label: 'Intimate & Cozy', description: 'Small venues, personal connections' },
        { value: 'sophisticated', label: 'Sophisticated', description: 'Elegant, upscale experiences' },
        { value: 'casual-fun', label: 'Casual & Fun', description: 'Relaxed, friendly atmosphere' },
        { value: 'unique-quirky', label: 'Unique & Quirky', description: 'Unusual, creative experiences' }
      ]
    },
    {
      id: 'locationPreference',
      question: "How far are you willing to travel for the perfect event?",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'attendee',
      options: [
        { value: 'local-only', label: 'Local Only', description: 'Within my city' },
        { value: 'regional', label: 'Regional', description: 'Within my state/region' },
        { value: 'national', label: 'National', description: 'Anywhere in the country' },
        { value: 'international', label: 'International', description: 'I love to travel for events!' }
      ]
    },
    // Organizer questions
    {
      id: 'eventTypes',
      question: "What types of events are you most interested in organizing?",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'organizer',
      options: [
        { value: 'weddings', label: 'Weddings' },
        { value: 'corporate', label: 'Corporate Events' },
        { value: 'birthday-parties', label: 'Birthday Parties' },
        { value: 'conferences', label: 'Conferences & Seminars' },
        { value: 'fundraisers', label: 'Fundraisers & Galas' },
        { value: 'festivals', label: 'Festivals & Large Events' },
        { value: 'private-parties', label: 'Private Parties' },
        { value: 'product-launches', label: 'Product Launches' }
      ]
    },
    {
      id: 'budget',
      question: "What's your typical event planning budget range?",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'organizer',
      options: [
        { value: 'under-5k', label: 'Under $5,000', description: 'Small, intimate gatherings' },
        { value: '5k-15k', label: '$5,000 - $15,000', description: 'Medium-sized events' },
        { value: '15k-50k', label: '$15,000 - $50,000', description: 'Large events & weddings' },
        { value: '50k-plus', label: '$50,000+', description: 'Premium & luxury events' }
      ]
    },
    {
      id: 'organizerStyle',
      question: "What's your event planning style?",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'organizer',
      options: [
        { value: 'hands-on', label: 'Hands-On', description: 'I like to be involved in every detail' },
        { value: 'collaborative', label: 'Collaborative', description: 'I work closely with vendors' },
        { value: 'delegator', label: 'Delegator', description: 'I prefer to hire experts and trust them' },
        { value: 'creative-visionary', label: 'Creative Visionary', description: 'I focus on the big picture and creativity' }
      ]
    },
    // Vendor questions
    {
      id: 'services',
      question: "What services do you provide for events?",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'vendor',
      options: [
        { value: 'photography', label: 'Photography' },
        { value: 'videography', label: 'Videography' },
        { value: 'catering', label: 'Catering' },
        { value: 'dj-music', label: 'DJ & Music' },
        { value: 'florals', label: 'Florals & Decor' },
        { value: 'planning', label: 'Event Planning' },
        { value: 'venue', label: 'Venue' },
        { value: 'transportation', label: 'Transportation' }
      ]
    },
    {
      id: 'vendorExperience',
      question: "How long have you been in the event industry?",
      type: 'choice',
      condition: (profile: UserProfile) => profile.userType === 'vendor',
      options: [
        { value: 'new', label: 'Just Starting', description: 'Less than 1 year' },
        { value: 'emerging', label: 'Emerging', description: '1-3 years' },
        { value: 'experienced', label: 'Experienced', description: '3-8 years' },
        { value: 'veteran', label: 'Veteran', description: '8+ years' }
      ]
    },
    {
      id: 'vendorGoals',
      question: "What are your main goals on our platform?",
      type: 'multiChoice',
      condition: (profile: UserProfile) => profile.userType === 'vendor',
      options: [
        { value: 'find-clients', label: 'Find New Clients' },
        { value: 'showcase-work', label: 'Showcase My Work' },
        { value: 'network', label: 'Network with Other Vendors' },
        { value: 'grow-business', label: 'Grow My Business' },
        { value: 'premium-events', label: 'Book Premium Events' }
      ]
    }
  ];

  const currentQuestion = questions.find(q => {
    if (q.condition) {
      return q.condition(userProfile) && !userProfile.hasOwnProperty(q.id);
    }
    return !userProfile.hasOwnProperty(q.id);
  });

  const handleAnswer = (questionId: string, answer: any) => {
    const updatedProfile = { ...userProfile, [questionId]: answer };
    setUserProfile(updatedProfile);

    // Check if we have all required answers
    const remainingQuestions = questions.filter(q => {
      if (q.condition) {
        return q.condition(updatedProfile) && !updatedProfile.hasOwnProperty(q.id);
      }
      return !updatedProfile.hasOwnProperty(q.id);
    });

    if (remainingQuestions.length === 0) {
      // Generate final profile with suggestions
      const finalProfile = generateFinalProfile(updatedProfile);
      onComplete(finalProfile);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const generateFinalProfile = (profile: UserProfile): UserProfile => {
    let suggestedTags: string[] = [];

    if (profile.userType === 'attendee') {
      // Generate tags based on interests and preferences
      if (profile.interests.includes('live-music')) {
        suggestedTags.push('concerts', 'festivals', 'live-music');
        if (profile.favoriteArtists.length > 0) {
          const artists = profile.favoriteArtists.join(', ').toLowerCase();
          if (artists.includes('bad bunny') || artists.includes('reggaeton') || artists.includes('latin')) {
            suggestedTags.push('latin-music', 'reggaeton');
          }
          if (artists.includes('jazz')) {
            suggestedTags.push('jazz-clubs', 'intimate-venues');
          }
          if (artists.includes('electronic') || artists.includes('edm')) {
            suggestedTags.push('electronic', 'dance-music', 'nightlife');
          }
        }
      }
      if (profile.interests.includes('food-drink')) {
        suggestedTags.push('food-festivals', 'wine-tasting', 'culinary-events');
      }
      if (profile.interests.includes('nightlife')) {
        suggestedTags.push('nightlife', 'parties', 'clubs');
      }
      if (profile.preferredVibe === 'high-energy') {
        suggestedTags.push('high-energy', 'dance', 'upbeat');
      }
      if (profile.preferredVibe === 'intimate') {
        suggestedTags.push('intimate-venues', 'small-groups', 'acoustic');
      }
      if (profile.locationPreference === 'local-only') {
        suggestedTags.push('local-events');
      } else if (profile.locationPreference === 'international') {
        suggestedTags.push('destination-events', 'travel');
      }
    } else if (profile.userType === 'organizer') {
      if (profile.eventTypes?.includes('weddings')) {
        suggestedTags.push('wedding-planning', 'bridal', 'romantic');
      }
      if (profile.eventTypes?.includes('corporate')) {
        suggestedTags.push('corporate-events', 'professional', 'networking');
      }
      if (profile.budget === '50k-plus') {
        suggestedTags.push('luxury-events', 'premium-vendors');
      }
    } else if (profile.userType === 'vendor') {
      if (profile.services?.includes('photography')) {
        suggestedTags.push('photography', 'visual-storytelling');
      }
      if (profile.services?.includes('catering')) {
        suggestedTags.push('catering', 'culinary', 'food-service');
      }
      if (profile.services?.includes('dj-music')) {
        suggestedTags.push('music', 'entertainment', 'dj-services');
      }
    }

    return { ...profile, suggestedTags };
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-platinum">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">Evenzs Assistant</h2>
              <p className="text-sm text-charcoal">Let's personalize your experience</p>
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
            <span>Question {currentStep + 1}</span>
            <span>{Math.round(((currentStep + 1) / 5) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-platinum rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-secondary mb-2 leading-relaxed">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Answer Options */}
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
                    const artists = e.target.value.split(',').map(s => s.trim()).filter(s => s.length > 0);
                    setUserProfile({ ...userProfile, [currentQuestion.id]: artists });
                  }}
                />
                <button
                  onClick={() => handleAnswer(currentQuestion.id, userProfile[currentQuestion.id as keyof UserProfile] || [])}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg animate-gold-glow"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-pearl border-t border-platinum">
          <div className="flex items-center justify-center text-sm text-charcoal">
            <Sparkles className="w-4 h-4 mr-2" />
            Your answers help us create a personalized experience just for you
          </div>
        </div>
      </div>
    </div>
  );
};