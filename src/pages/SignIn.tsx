import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Users, Mail, Lock, Eye, EyeOff, Sparkles, Loader2, Ticket } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const SignIn: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'organizer' | 'vendor'>('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, loading } = useAuth();

  // Set active tab based on location state
  React.useEffect(() => {
    if (location.state?.role) {
      setActiveTab(location.state.role);
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all required fields');
      return;
    }

    if (isSignUp && !name) {
      setError('Please enter your name');
      return;
    }

    try {
      await signIn(email, password, activeTab);
      
      // Navigate to appropriate dashboard
      if (activeTab === 'organizer') {
        navigate('/organizer-dashboard');
      } else if (activeTab === 'vendor') {
        navigate('/vendor-dashboard');
      } else {
        navigate('/customer-dashboard');
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  // Demo credentials helper
  const fillDemoCredentials = (role: 'customer' | 'organizer' | 'vendor') => {
    if (role === 'customer') {
      setEmail('alex@example.com');
      setPassword('demo123');
      setName('Alex Johnson');
    } else if (role === 'organizer') {
      setEmail('jessica@example.com');
      setPassword('demo123');
      setName('Jessica Smith');
    } else {
      setEmail('mike@example.com');
      setPassword('demo123');
      setName('Mike Chen');
      setCompany('Mike Chen Photography');
    }
    setActiveTab(role);
  };

  return (
    <div className="min-h-screen bg-midnight-gradient flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Demo Credentials Helper */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-primary/20">
          <p className="text-white text-sm text-center mb-3">Quick Demo Access:</p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => fillDemoCredentials('customer')}
              className="bg-white/20 hover:bg-primary/30 text-white text-xs py-2 px-2 rounded-lg transition-colors border border-primary/20"
            >
              Demo Customer
            </button>
            <button
              onClick={() => fillDemoCredentials('organizer')}
              className="bg-white/20 hover:bg-primary/30 text-white text-xs py-2 px-2 rounded-lg transition-colors border border-primary/20"
            >
              Demo Organizer
            </button>
            <button
              onClick={() => fillDemoCredentials('vendor')}
              className="bg-white/20 hover:bg-primary/30 text-white text-xs py-2 px-2 rounded-lg transition-colors border border-primary/20"
            >
              Demo Vendor
            </button>
          </div>
        </div>

        {/* Role Selection */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 mb-8 border border-primary/20">
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActiveTab('customer')}
              className={`flex items-center justify-center space-x-2 py-4 px-4 rounded-xl transition-all duration-300 ${
                activeTab === 'customer'
                  ? 'bg-primary text-white shadow-lg transform scale-105 animate-coral-glow'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Ticket size={18} />
              <span className="font-semibold text-sm">Customer</span>
            </button>
            <button
              onClick={() => setActiveTab('organizer')}
              className={`flex items-center justify-center space-x-2 py-4 px-4 rounded-xl transition-all duration-300 ${
                activeTab === 'organizer'
                  ? 'bg-primary text-white shadow-lg transform scale-105 animate-coral-glow'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Calendar size={18} />
              <span className="font-semibold text-sm">Organizer</span>
            </button>
            <button
              onClick={() => setActiveTab('vendor')}
              className={`flex items-center justify-center space-x-2 py-4 px-4 rounded-xl transition-all duration-300 ${
                activeTab === 'vendor'
                  ? 'bg-primary text-white shadow-lg transform scale-105 animate-coral-glow'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <Users size={18} />
              <span className="font-semibold text-sm">Vendor</span>
            </button>
          </div>
        </div>

        {/* Sign In Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sunset-gradient rounded-2xl mb-4">
              {activeTab === 'customer' ? (
                <Ticket className="w-8 h-8 text-white" />
              ) : activeTab === 'organizer' ? (
                <Calendar className="w-8 h-8 text-white" />
              ) : (
                <Users className="w-8 h-8 text-white" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isSignUp ? 'Join' : 'Welcome'} {activeTab === 'customer' ? 'Customer' : activeTab === 'organizer' ? 'Organizer' : 'Vendor'}!
            </h2>
            <p className="text-gray-700">
              {isSignUp ? 'Create your account to get started' : 'Sign in to your account'}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={isSignUp}
                  className="w-full px-4 py-3 border border-neutral rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-neutral rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-11 py-3 border border-neutral rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-primary"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {isSignUp && (activeTab === 'organizer' || activeTab === 'vendor') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {activeTab === 'organizer' ? 'Company/Organization' : 'Business Name'}
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 border border-neutral rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={activeTab === 'organizer' ? 'Optional' : 'Your business name'}
                />
              </div>
            )}

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
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                </>
              )}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-700">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center py-3 px-4 border border-neutral rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-neutral transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2">Google</span>
              </button>

              <button className="w-full inline-flex justify-center py-3 px-4 border border-neutral rounded-xl shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-neutral transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>

          {/* Toggle Sign Up/In */}
          <div className="text-center mt-8">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-primary hover:text-coral-dark font-medium transition-colors"
            >
              {isSignUp 
                ? 'Already have an account? Sign in' 
                : "Don't have an account? Sign up"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};