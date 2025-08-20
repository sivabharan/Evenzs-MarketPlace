export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'organizer' | 'vendor';
  avatar?: string;
  provider?: 'email' | 'google' | 'facebook';
  verified?: boolean;
  createdAt: string;
  updatedAt: string;
  onboardingCompleted?: boolean;
  aiProfile?: AIUserProfile;
  company?: string;
  phone?: string;
  location?: string;
}

export interface AIUserProfile {
  userType: 'customer' | 'vendor' | 'organizer';
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

export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'customer' | 'organizer' | 'vendor';
  company?: string;
  phone?: string;
  agreeToTerms: boolean;
  agreeToMarketing: boolean;
}