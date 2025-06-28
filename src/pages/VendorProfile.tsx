import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Edit3, 
  Save, 
  X, 
  Plus, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Award,
  Calendar,
  DollarSign,
  Users,
  Upload,
  Trash2
} from 'lucide-react';

export const VendorProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const [profileData, setProfileData] = useState({
    name: 'Mike Chen Photography',
    tagline: 'Capturing life\'s most precious moments',
    description: 'Professional photographer with over 8 years of experience specializing in weddings, corporate events, and portraits. Known for creative compositions and natural lighting techniques.',
    location: 'San Francisco, CA',
    phone: '(555) 123-4567',
    email: 'mike@mikechenphotography.com',
    website: 'www.mikechenphotography.com',
    specialties: ['Weddings', 'Corporate Events', 'Portraits', 'Product Photography'],
    startingPrice: 2500,
    experience: '8+ years',
    languages: ['English', 'Mandarin', 'Spanish']
  });

  const portfolioItems = [
    {
      id: 1,
      title: 'Sarah & John Wedding',
      category: 'Wedding',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful outdoor ceremony at Napa Valley'
    },
    {
      id: 2,
      title: 'Tech Corp Annual Gala',
      category: 'Corporate',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Corporate event photography for 500+ attendees'
    },
    {
      id: 3,
      title: 'Family Portrait Session',
      category: 'Portrait',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Lifestyle family portraits in Golden Gate Park'
    },
    {
      id: 4,
      title: 'Product Launch Event',
      category: 'Corporate',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Product photography and event coverage'
    }
  ];

  const reviews = [
    {
      id: 1,
      client: 'Sarah Johnson',
      rating: 5,
      date: 'November 2024',
      comment: 'Mike captured our wedding perfectly! His attention to detail and creative eye made our special day even more memorable.',
      event: 'Wedding Photography'
    },
    {
      id: 2,
      client: 'Tech Corp',
      rating: 5,
      date: 'October 2024',
      comment: 'Professional, reliable, and delivered exceptional results for our corporate event. Highly recommended!',
      event: 'Corporate Event'
    },
    {
      id: 3,
      client: 'Maria Rodriguez',
      rating: 4,
      date: 'September 2024',
      comment: 'Great experience working with Mike. The family portraits turned out beautiful and he was very patient with our kids.',
      event: 'Family Portraits'
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Saving profile data:', profileData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset any unsaved changes
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Vendor Profile</h1>
            <p className="text-xl text-gray-600">Manage your business profile and portfolio</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/vendor-dashboard"
              className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-xl border border-gray-200 font-medium transition-colors"
            >
              Back to Dashboard
            </Link>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center"
              >
                <Edit3 className="w-5 h-5 mr-2" />
                Edit Profile
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center"
                >
                  <X className="w-5 h-5 mr-2" />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'profile'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Edit3 className="w-5 h-5 mr-2" />
              Profile Info
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'portfolio'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Camera className="w-5 h-5 mr-2" />
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'reviews'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Star className="w-5 h-5 mr-2" />
              Reviews
            </button>
          </div>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    ) : (
                      <p className="text-lg font-semibold text-gray-900">{profileData.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tagline
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.tagline}
                        onChange={(e) => setProfileData({...profileData, tagline: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-600">{profileData.tagline}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    {isEditing ? (
                      <textarea
                        rows={4}
                        value={profileData.description}
                        onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-700">{profileData.description}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.location}
                          onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center text-gray-700">
                          <MapPin className="w-5 h-5 mr-2" />
                          {profileData.location}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Starting Price
                      </label>
                      {isEditing ? (
                        <input
                          type="number"
                          value={profileData.startingPrice}
                          onChange={(e) => setProfileData({...profileData, startingPrice: parseInt(e.target.value)})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center text-gray-700">
                          <DollarSign className="w-5 h-5 mr-2" />
                          ${profileData.startingPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center text-gray-700">
                          <Phone className="w-5 h-5 mr-2" />
                          {profileData.phone}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center text-gray-700">
                          <Mail className="w-5 h-5 mr-2" />
                          {profileData.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    {isEditing ? (
                      <input
                        type="url"
                        value={profileData.website}
                        onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center text-gray-700">
                        <Globe className="w-5 h-5 mr-2" />
                        <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-purple-dark">
                          {profileData.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.specialties.map((specialty) => (
                    <span key={specialty} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <button className="mt-3 text-primary hover:text-purple-dark font-medium text-sm flex items-center">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Specialty
                  </button>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">{profileData.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-medium">{profileData.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-medium text-green-600">2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Booking Rate</span>
                    <span className="font-medium text-blue-600">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Portfolio</h2>
              <button className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Add New Item
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}

              {/* Add New Item Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 border-dashed flex items-center justify-center h-64 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Add New Portfolio Item</p>
                  <p className="text-sm text-gray-500">Upload images to showcase your work</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-semibold">4.9</span>
                  <span className="ml-2 text-gray-600">({reviews.length} reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.client}</h3>
                      <p className="text-sm text-gray-600">{review.event}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};