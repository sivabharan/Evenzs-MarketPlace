import React from 'react';
import { CheckCircle, Sparkles, ArrowRight, Calendar, Users, Music, MapPin } from 'lucide-react';

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

interface OnboardingCompleteProps {
  profile: UserProfile;
  onGetStarted: () => void;
}

export const OnboardingComplete: React.FC<OnboardingCompleteProps> = ({ profile, onGetStarted }) => {
  const getUserTypeLabel = () => {
    switch (profile.userType) {
      case 'attendee': return 'Event Attendee';
      case 'organizer': return 'Event Organizer';
      case 'vendor': return 'Event Vendor';
      default: return 'User';
    }
  };

  const getPersonalizedMessage = () => {
    if (profile.userType === 'attendee') {
      const interests = profile.interests.slice(0, 2).join(' and ');
      return `Based on your love for ${interests} and ${profile.preferredVibe} vibes, we've curated the perfect event recommendations for you!`;
    } else if (profile.userType === 'organizer') {
      const eventTypes = profile.eventTypes?.slice(0, 2).join(' and ') || 'events';
      return `Perfect! We'll help you plan amazing ${eventTypes} with our network of trusted vendors.`;
    } else if (profile.userType === 'vendor') {
      const services = profile.services?.slice(0, 2).join(' and ') || 'services';
      return `Great! We'll connect you with organizers looking for ${services} to make their events unforgettable.`;
    }
    return "Welcome to Evenzs! We're excited to help you create amazing event experiences.";
  };

  const getRecommendations = () => {
    if (profile.userType === 'attendee') {
      return [
        'Discover curated events matching your interests',
        'Get notified about new events in your area',
        'Connect with like-minded event-goers',
        'Access exclusive early-bird pricing'
      ];
    } else if (profile.userType === 'organizer') {
      return [
        'Browse our network of verified vendors',
        'Get AI-powered vendor recommendations',
        'Access event planning templates and tools',
        'Manage all your events in one place'
      ];
    } else if (profile.userType === 'vendor') {
      return [
        'Create a stunning business profile',
        'Receive qualified leads from organizers',
        'Showcase your portfolio and reviews',
        'Grow your business with our tools'
      ];
    }
    return [];
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-gold-glow">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-2">Welcome to Evenzs!</h2>
          <p className="text-lg text-charcoal">Your personalized experience is ready</p>
        </div>

        {/* Profile Summary */}
        <div className="p-6 border-b border-platinum">
          <div className="bg-pearl rounded-xl p-4 mb-4">
            <h3 className="font-semibold text-secondary mb-2">Your Profile Summary:</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-primary text-white text-sm px-3 py-1 rounded-full font-medium">
                {getUserTypeLabel()}
              </span>
            </div>
            <p className="text-charcoal text-sm leading-relaxed">
              {getPersonalizedMessage()}
            </p>
          </div>

          {/* Interests/Services */}
          {(profile.interests.length > 0 || profile.services?.length || profile.eventTypes?.length) && (
            <div className="mb-4">
              <h4 className="font-medium text-secondary mb-2">
                {profile.userType === 'attendee' ? 'Your Interests:' : 
                 profile.userType === 'vendor' ? 'Your Services:' : 
                 'Event Types:'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(profile.interests || profile.services || profile.eventTypes || []).map((item) => (
                  <span key={item} className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full">
                    {item.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Suggested Tags */}
          {profile.suggestedTags.length > 0 && (
            <div>
              <h4 className="font-medium text-secondary mb-2">Personalized Recommendations:</h4>
              <div className="flex flex-wrap gap-2">
                {profile.suggestedTags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {tag.replace('-', ' ')}
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
            What's Next for You:
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
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              {profile.userType === 'attendee' && (
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
          <p className="text-sm text-charcoal">
            You can always update your preferences in your account settings
          </p>
        </div>
      </div>
    </div>
  );
};