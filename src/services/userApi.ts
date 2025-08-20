import { User, RegistrationData, AIUserProfile } from '../types/user';

// Mock user storage
let mockUsers: User[] = [
  {
    id: 'customer_789',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'customer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    provider: 'email',
    verified: false,
    createdAt: '2024-12-01T10:00:00Z',
    updatedAt: '2024-12-01T10:00:00Z',
    onboardingCompleted: true
  },
  {
    id: 'org_123',
    name: 'Jessica Smith',
    email: 'jessica@example.com',
    role: 'organizer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    provider: 'email',
    verified: false,
    createdAt: '2024-12-01T10:00:00Z',
    updatedAt: '2024-12-01T10:00:00Z',
    onboardingCompleted: true
  },
  {
    id: 'vendor_456',
    name: 'Mike Chen',
    email: 'mike@example.com',
    role: 'vendor',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    provider: 'email',
    verified: false,
    createdAt: '2024-12-01T10:00:00Z',
    updatedAt: '2024-12-01T10:00:00Z',
    onboardingCompleted: true,
    company: 'Mike Chen Photography'
  }
];

export const userApi = {
  // User Registration
  async registerUser(registrationData: RegistrationData): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    // Check if email already exists
    const existingUser = mockUsers.find(user => user.email === registrationData.email);
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Validate password strength
    if (registrationData.password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    if (registrationData.password !== registrationData.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    // Create new user
    const newUser: User = {
      id: `${registrationData.role}_${Date.now()}`,
      name: registrationData.name,
      email: registrationData.email,
      role: registrationData.role,
      avatar: getDefaultAvatar(registrationData.role),
      provider: 'email',
      verified: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      onboardingCompleted: false,
      company: registrationData.company,
      phone: registrationData.phone
    };

    mockUsers.push(newUser);
    console.log('👤 New user registered:', newUser);
    
    return newUser;
  },

  // User Login
  async loginUser(email: string, password: string): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 800));

    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // In production, you'd verify the password hash
    console.log('✅ User logged in:', user);
    return user;
  },

  // Update User Profile
  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const userIndex = mockUsers.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };

    return mockUsers[userIndex];
  },

  // Complete AI Onboarding
  async completeOnboarding(userId: string, aiProfile: AIUserProfile): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 500));

    const userIndex = mockUsers.findIndex(user => user.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      onboardingCompleted: true,
      aiProfile,
      updatedAt: new Date().toISOString()
    };

    console.log('🤖 AI Onboarding completed for user:', mockUsers[userIndex]);
    return mockUsers[userIndex];
  },

  // Get User by ID
  async getUser(userId: string): Promise<User | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockUsers.find(user => user.id === userId) || null;
  },

  // Send Verification Email (Mock)
  async sendVerificationEmail(email: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('📧 Verification email sent to:', email);
    return true;
  },

  // Verify Email (Mock)
  async verifyEmail(token: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log('✅ Email verified with token:', token);
    return true;
  },

  // Password Reset (Mock)
  async requestPasswordReset(email: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('🔑 Password reset requested for:', email);
    return true;
  },

  // Social Login (Mock)
  async socialLogin(provider: 'google' | 'facebook', role: 'customer' | 'organizer' | 'vendor'): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockSocialUser: User = {
      id: `${provider}_${role}_${Date.now()}`,
      name: `${provider === 'google' ? 'Google' : 'Facebook'} User`,
      email: `user@${provider}.com`,
      role,
      avatar: getDefaultAvatar(role),
      provider,
      verified: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      onboardingCompleted: false
    };

    mockUsers.push(mockSocialUser);
    return mockSocialUser;
  }
};

// Helper function to get default avatar based on role
function getDefaultAvatar(role: string): string {
  const avatars = {
    customer: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    organizer: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    vendor: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
  };
  return avatars[role as keyof typeof avatars] || avatars.customer;
}