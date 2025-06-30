import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Sparkles, Users, Calendar, Music } from 'lucide-react';
import { OnboardingAssistant } from '../components/OnboardingAssistant';
import { OnboardingComplete } from '../components/OnboardingComplete';

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

export const OnboardingDemo: React.FC = () => {
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
    alert('Welcome to Evenzs! Your personalized experience is now ready.');
  };

  const exampleProfiles = [
    {
      type: 'attendee',
      name: 'Music Lover',
      description: 'Loves live music, especially Latin artists like Bad Bunny, prefers high-energy events',
      profile: {
        userType: 'attendee' as const,
        interests: ['live-music', 'nightlife', 'festivals'],
        favoriteArtists: ['Bad Bunny', 'The Weeknd', 'Rosalía'],
        preferredVibe: 'high-energy',
        locationPreference: 'regional',
        suggestedTags: ['latin-concerts', 'festivals', 'nightlife', 'high-energy', 'reggaeton']
      }
    },
    {
      type: 'organizer',
      name: 'Wedding Planner',
      description: 'Organizes weddings and corporate events with premium budgets',
      profile: {
        userType: 'organizer' as const,
        interests: [],
        favoriteArtists: [],
        preferredVibe: '',
        locationPreference: '',
        eventTypes: ['weddings', 'corporate'],
        budget: '50k-plus',
        suggestedTags: ['wedding-planning', 'luxury-events', 'premium-vendors', 'corporate-events']
      }
    },
    {
      type: 'vendor',
      name: 'Photographer',
      description: 'Professional photographer specializing in weddings and portraits',
      profile: {
        userType: 'vendor' as const,
        interests: [],
        favoriteArtists: [],
        preferredVibe: '',
        locationPreference: '',
        services: ['photography', 'videography'],
        suggestedTags: ['photography', 'visual-storytelling', 'wedding-photography']
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
            <h1 className="text-4xl font-bold text-secondary mb-2">Onboarding Assistant Demo</h1>
            <p className="text-xl text-charcoal">Experience our intelligent onboarding flow</p>
          </div>
        </div>

        {/* Demo Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-platinum p-8 mb-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-gold-glow">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Intelligent Onboarding Assistant</h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Our AI-powered assistant asks personalized questions to understand user preferences and generates 
              tailored event and vendor recommendations for the perfect Evenzs experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-pearl rounded-xl">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">User Type Detection</h3>
              <p className="text-sm text-charcoal">Identifies if user is an attendee, organizer, or vendor</p>
            </div>
            <div className="text-center p-6 bg-pearl rounded-xl">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">Smart Questions</h3>
              <p className="text-sm text-charcoal">Adaptive questioning based on previous answers</p>
            </div>
            <div className="text-center p-6 bg-pearl rounded-xl">
              <Calendar className="w-12 h-12 text-gold-dark mx-auto mb-4" />
              <h3 className="font-semibold text-secondary mb-2">Personalized Tags</h3>
              <p className="text-sm text-charcoal">Generates custom recommendation tags</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowOnboarding(true)}
              className="bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-gold-glow"
            >
              Start Onboarding Demo
            </button>
          </div>
        </div>

        {/* Example Profiles */}
        <div className="bg-white rounded-2xl shadow-lg border border-platinum p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Example User Profiles</h2>
          <p className="text-charcoal mb-6">
            Here are some example profiles generated by our onboarding assistant:
          </p>

          <div className="space-y-6">
            {exampleProfiles.map((example, index) => (
              <div key={index} className="border border-platinum rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{example.name}</h3>
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
                      <span className="text-sm font-medium text-charcoal">Favorite Artists: </span>
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

                  {example.profile.eventTypes && example.profile.eventTypes.length > 0 && (
                    <div>
                      <span className="text-sm font-medium text-charcoal">Event Types: </span>
                      <div className="inline-flex flex-wrap gap-2 mt-1">
                        {example.profile.eventTypes.map((type) => (
                          <span key={type} className="bg-bronze/10 text-bronze text-xs px-2 py-1 rounded-full">
                            {type.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="text-sm font-medium text-charcoal">Generated Tags: </span>
                    <div className="inline-flex flex-wrap gap-2 mt-1">
                      {example.profile.suggestedTags.map((tag) => (
                        <span key={tag} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {tag.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-platinum p-8">
          <h2 className="text-2xl font-bold text-secondary mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary">For Event Attendees:</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Discovers music preferences and favorite artists</li>
                <li>• Identifies preferred event vibes and atmospheres</li>
                <li>• Determines travel willingness for events</li>
                <li>• Generates personalized event recommendation tags</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary">For Event Organizers:</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Identifies types of events they want to organize</li>
                <li>• Determines budget ranges and planning style</li>
                <li>• Matches with appropriate vendor categories</li>
                <li>• Suggests relevant planning tools and resources</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary">For Vendors:</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Catalogs services and specializations</li>
                <li>• Assesses experience level and goals</li>
                <li>• Connects with relevant event opportunities</li>
                <li>• Provides business growth recommendations</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-secondary">Smart Technology:</h3>
              <ul className="space-y-2 text-charcoal">
                <li>• Adaptive questioning based on user type</li>
                <li>• Natural language processing for preferences</li>
                <li>• Intelligent tag generation algorithm</li>
                <li>• Seamless user experience with progress tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Assistant */}
      {showOnboarding && (
        <OnboardingAssistant
          onComplete={handleOnboardingComplete}
          onClose={() => setShowOnboarding(false)}
        />
      )}

      {/* Onboarding Complete */}
      {showComplete && userProfile && (
        <OnboardingComplete
          profile={userProfile}
          onGetStarted={handleGetStarted}
        />
      )}
    </div>
  );
};