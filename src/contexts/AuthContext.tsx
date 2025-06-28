import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'organizer' | 'vendor' | 'customer';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string, role: 'organizer' | 'vendor' | 'customer') => Promise<void>;
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on role
    const mockUser: User = {
      id: role === 'organizer' ? 'org_123' : role === 'vendor' ? 'vendor_456' : 'customer_789',
      name: role === 'organizer' ? 'Jessica Smith' : role === 'vendor' ? 'Mike Chen' : 'Alex Johnson',
      email: email,
      role: role,
      avatar: role === 'organizer' 
        ? 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
        : role === 'vendor'
        ? 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
        : 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    };

    setUser(mockUser);
    localStorage.setItem('evenzs_user', JSON.stringify(mockUser));
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
    signOut,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};