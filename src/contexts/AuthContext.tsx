import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/user';
import { userApi } from '../services/userApi';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string, role: 'organizer' | 'vendor' | 'customer') => Promise<void>;
  signInWithGoogle: (role: 'organizer' | 'vendor' | 'customer') => Promise<void>;
  signInWithFacebook: (role: 'organizer' | 'vendor' | 'customer') => Promise<void>;
  setUser: (user: User | null) => void;
  signOut: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock user data for different providers and roles
  const mockUsers = {
    google: {
      customer: {
        id: 'google_customer_123',
        name: 'Alex Thompson',
        email: 'alex.thompson@gmail.com',
        role: 'customer' as const,
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'google' as const,
        verified: true
      },
      organizer: {
        id: 'google_organizer_456',
        name: 'Sarah Williams',
        email: 'sarah.williams@gmail.com',
        role: 'organizer' as const,
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'google' as const,
        verified: true
      },
      vendor: {
        id: 'google_vendor_789',
        name: 'David Rodriguez',
        email: 'david.rodriguez@gmail.com',
        role: 'vendor' as const,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'google' as const,
        verified: true
      }
    },
    facebook: {
      customer: {
        id: 'fb_customer_321',
        name: 'Emma Johnson',
        email: 'emma.johnson@facebook.com',
        role: 'customer' as const,
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'facebook' as const,
        verified: true
      },
      organizer: {
        id: 'fb_organizer_654',
        name: 'Michael Chen',
        email: 'michael.chen@facebook.com',
        role: 'organizer' as const,
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'facebook' as const,
        verified: true
      },
      vendor: {
        id: 'fb_vendor_987',
        name: 'Lisa Martinez',
        email: 'lisa.martinez@facebook.com',
        role: 'vendor' as const,
        avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'facebook' as const,
        verified: true
      }
    },
    email: {
      customer: {
        id: 'customer_789',
        name: 'Alex Johnson',
        email: 'alex@example.com',
        role: 'customer' as const,
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'email' as const,
        verified: false
      },
      organizer: {
        id: 'org_123',
        name: 'Jessica Smith',
        email: 'jessica@example.com',
        role: 'organizer' as const,
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'email' as const,
        verified: false
      },
      vendor: {
        id: 'vendor_456',
        name: 'Mike Chen',
        email: 'mike@example.com',
        role: 'vendor' as const,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        provider: 'email' as const,
        verified: false
      }
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('evenzs_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        localStorage.removeItem('evenzs_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string, role: 'organizer' | 'vendor' | 'customer') => {
    setLoading(true);
    
    try {
      const user = await userApi.loginUser(email, password);
      setUser(user);
      localStorage.setItem('evenzs_user', JSON.stringify(user));
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  const signInWithGoogle = async (role: 'organizer' | 'vendor' | 'customer') => {
    setLoading(true);
    
    try {
      const user = await userApi.socialLogin('google', role);
      setUser(user);
      localStorage.setItem('evenzs_user', JSON.stringify(user));
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  const signInWithFacebook = async (role: 'organizer' | 'vendor' | 'customer') => {
    setLoading(true);
    
    try {
      const user = await userApi.socialLogin('facebook', role);
      setUser(user);
      localStorage.setItem('evenzs_user', JSON.stringify(user));
    } catch (error) {
      throw error;
    }
    setLoading(false);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('evenzs_user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    setUser,
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};