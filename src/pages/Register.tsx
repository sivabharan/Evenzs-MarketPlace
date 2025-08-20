import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Building2, 
  Phone, 
  CheckCircle, 
  Loader2,
  Ticket,
  Calendar,
  Users,
  Sparkles,
  Bot,
  ArrowRight
} from 'lucide-react';
import { userApi } from '../services/userApi';
import { useAuth } from '../contexts/AuthContext';
import { RegistrationData } from '../types/user';

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();
  
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: (location.state?.role as 'customer' | 'organizer' | 'vendor') || 'customer',
    company: '',
    phone: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState<'registration' | 'verification' | 'onboarding'>('registration');
  const [registeredUser, setRegisteredUser] = useState<any>(null);

  const handleInputChange = (field: keyof RegistrationData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error when user types
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return false;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms of Service');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      // Register the user
      const newUser = await userApi.registerUser(formData);
      setRegisteredUser(newUser);
      
      // Send verification email (mocked)
      await userApi.sendVerificationEmail(formData.email);
      
      // Move to verification step
      setStep('verification');
      
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerificationComplete = () => {
    // In production, this would verify the email token
    setStep('onboarding');
  };

  const handleOnboardingComplete = async (aiProfile: any) => {
    try {
      // Complete onboarding and update user profile
      const updatedUser = await userApi.completeOnboarding(registeredUser.id, aiProfile);
      
      // Set user in auth context
      setUser(updatedUser);
      
      // Navigate to appropriate dashboard
      if (updatedUser.role === 'organizer') {
        navigate('/organizer-dashboard');
      } else if (updatedUser.role === 'vendor') {
        navigate('/vendor-dashboard');
      } else {
        navigate('/customer-dashboard');
      }
    } catch (error) {
      console.error('Error completing onboarding:', error);
      setError('Failed to complete onboarding. Please try again.');
    }
  };

  const getRoleInfo = (role: string) => {
    switch (role) {
      case 'customer':
        return {
          icon: Ticket,
          title: 'Event Attendee',
          description: 'Discover and attend amazing events',
          benefits: ['Find personalized events', 'Book tickets easily', 'Plan travel', 'Connect with others']
        };
      case 'organizer':
        return {
          icon: Calendar,
          title: 'Event Organizer',
          description: 'Plan and create memorable events',
          benefits: ['Access vendor network', 'Event planning tools', 'Guest management', 'Analytics dashboard']
        };
      case 'vendor':
        return {
          icon: Users,
          title: 'Event Vendor',
          description: 'Offer services to event organizers',
          benefits: ['Showcase portfolio', 'Receive qualified leads', 'Manage bookings', 'Grow your business']
        };
      default:
        return {
          icon: User,
          title: 'User',
          description: 'Join the Evenzs community',
          benefits: []
        };
    }
  };

  const roleInfo = getRoleInfo(formData.role);
  const RoleIcon = roleInfo.icon;

  // Registration Step
  if (step === 'registration') {
    return (
      <div className="min-h-screen bg-midnight-gradient flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Role Selection */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-primary/20">
            <p className="text-white text-sm text-center mb-3">I want to join as:</p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleInputChange('role', 'customer')}
                className={`flex flex-col items-center space-y-2 py-3 px-2 rounded-xl transition-all duration-300 ${
                  formData.role === 'customer'
                    ? 'bg-primary text-white shadow-lg transform scale-105 animate-coral-glow'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Ticket size={18} />
                <span className="font-semibold text-xs">Customer</span>
              </button>
              <button
                onClick={() => handleInputChange('role', 'organizer')}
                className={`flex flex-col items-center space-y-2 py-3 px-2 rounded-xl transition-all duration-300 ${
                  formData.role === 'organizer'
                    ? 'bg-primary text-white shadow-lg transform scale-105 animate-coral-glow'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Calendar size={18} />
                <span className="font-semibold text-xs">Organizer</span>
              </button>
              <button
                onClick={() => handleInputChange('role', 'vendor')}
                className={`flex flex-col items-center space-y-2 py-3 px-2 rounded-xl transition-all duration-300 ${
                  formData.role === 'vendor'
                    ? 'bg-primary text-white shadow-lg transform scale-105 animate-coral-glow'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Users size={18} />
                <span className="font-semibold text-xs">Vendor</span>
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sunset-gradient rounded-2xl mb-4">
                <RoleIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Join as {roleInfo.title}
              </h2>
              <p className="text-gray-700">{roleInfo.description}</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Company (for organizers and vendors) */}
              {(formData.role === 'organizer' || formData.role === 'vendor') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.role === 'organizer' ? 'Company/Organization' : 'Business Name'}
                    {formData.role === 'vendor' ? ' *' : ''}
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required={formData.role === 'vendor'}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder={formData.role === 'organizer' ? 'Optional' : 'Your business name'}
                    />
                  </div>
                </div>
              )}

              {/* Phone (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                    className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Create a secure password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    required
                    className="w-full pl-11 pr-11 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="space-y-3">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    required
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary hover:text-purple-dark font-medium">
                      Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="text-primary hover:text-purple-dark font-medium">
                      Privacy Policy
                    </Link>
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.agreeToMarketing}
                    onChange={(e) => handleInputChange('agreeToMarketing', e.target.checked)}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    I'd like to receive updates about new events and features (optional)
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sunset-gradient hover:shadow-coral-glow text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 animate-coral-glow"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </form>

            {/* Role Benefits */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="text-sm font-medium text-gray-900 mb-2">As a {roleInfo.title}, you'll get:</h4>
              <div className="space-y-1">
                {roleInfo.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-6">
              <Link
                to="/signin"
                className="text-primary hover:text-coral-dark font-medium transition-colors"
              >
                Already have an account? Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Email Verification Step
  if (step === 'verification') {
    return (
      <div className="min-h-screen bg-midnight-gradient flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Check Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a verification link to <strong>{formData.email}</strong>. 
              Please check your email and click the link to verify your account.
            </p>

            <div className="space-y-4">
              <button
                onClick={handleVerificationComplete}
                className="w-full bg-primary hover:bg-purple-dark text-white py-3 rounded-xl font-medium transition-colors"
              >
                I've Verified My Email
              </button>
              
              <button
                onClick={() => userApi.sendVerificationEmail(formData.email)}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-medium transition-colors"
              >
                Resend Verification Email
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Didn't receive the email? Check your spam folder or try resending.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // AI Onboarding Step
  if (step === 'onboarding') {
    return (
      <div className="min-h-screen bg-midnight-gradient flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-coral-glow">
              <Bot className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Evenzs, {registeredUser?.name}!
            </h2>
            <p className="text-gray-600 mb-6">
              Let's personalize your experience with our AI assistant. This will only take 2-3 minutes 
              and will help us recommend the perfect events and services for you.
            </p>

            <div className="bg-primary/5 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center mb-3">
                <Bot className="w-6 h-6 text-primary mr-2" />
                <span className="font-semibold text-gray-900">AI Personalization</span>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Personalized recommendations
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Smart matching algorithms
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Tailored user experience
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  // Import and show AI onboarding
                  import('../components/AIOnboardingAgent').then(({ AIOnboardingAgent }) => {
                    // This would trigger the AI onboarding flow
                    // For now, we'll simulate completion
                    const mockAIProfile = {
                      userType: formData.role,
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
                    };
                    handleOnboardingComplete(mockAIProfile);
                  });
                }}
                className="w-full bg-sunset-gradient hover:shadow-coral-glow text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center animate-coral-glow"
              >
                <Bot className="w-5 h-5 mr-2" />
                Start AI Personalization
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button
                onClick={() => handleOnboardingComplete({
                  userType: formData.role,
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
                })}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-medium transition-colors"
              >
                Skip for Now
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              You can always complete personalization later in your account settings
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};