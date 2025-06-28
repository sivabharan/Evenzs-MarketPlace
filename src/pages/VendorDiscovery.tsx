import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Star, 
  Filter, 
  Camera, 
  Music, 
  ChefHat, 
  Flower,
  Car,
  Sparkles,
  Heart,
  MessageSquare,
  Eye,
  Calendar,
  DollarSign,
  Award,
  Clock
} from 'lucide-react';

export const VendorDiscovery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', label: 'All Categories', icon: Sparkles },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'music', label: 'Music & DJ', icon: Music },
    { id: 'catering', label: 'Catering', icon: ChefHat },
    { id: 'florals', label: 'Florals', icon: Flower },
    { id: 'transport', label: 'Transportation', icon: Car },
  ];

  const vendors = [
    {
      id: 1,
      name: 'Sarah Chen Photography',
      category: 'photography',
      location: 'San Francisco, CA',
      rating: 4.9,
      reviews: 127,
      startingPrice: 2500,
      featured: true,
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Weddings', 'Portraits', 'Events'],
      responseTime: '2 hours',
      bookingRate: '95%'
    },
    {
      id: 2,
      name: 'Beat Masters DJ',
      category: 'music',
      location: 'Los Angeles, CA',
      rating: 4.8,
      reviews: 89,
      startingPrice: 1200,
      featured: false,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Weddings', 'Corporate', 'Parties'],
      responseTime: '1 hour',
      bookingRate: '92%'
    },
    {
      id: 3,
      name: 'Gourmet Delights Catering',
      category: 'catering',
      location: 'New York, NY',
      rating: 4.9,
      reviews: 156,
      startingPrice: 45,
      featured: true,
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Fine Dining', 'Corporate', 'Weddings'],
      responseTime: '30 mins',
      bookingRate: '98%'
    },
    {
      id: 4,
      name: 'Bloom & Blossom Florals',
      category: 'florals',
      location: 'Seattle, WA',
      rating: 4.7,
      reviews: 74,
      startingPrice: 800,
      featured: false,
      image: 'https://images.pexels.com/photos/1153069/pexels-photo-1153069.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Bridal', 'Corporate', 'Seasonal'],
      responseTime: '4 hours',
      bookingRate: '89%'
    },
    {
      id: 5,
      name: 'Elite Transport Services',
      category: 'transport',
      location: 'Miami, FL',
      rating: 4.6,
      reviews: 92,
      startingPrice: 300,
      featured: false,
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Luxury Cars', 'Buses', 'Shuttles'],
      responseTime: '1 hour',
      bookingRate: '87%'
    },
    {
      id: 6,
      name: 'Live Wire Productions',
      category: 'music',
      location: 'Austin, TX',
      rating: 4.8,
      reviews: 103,
      startingPrice: 2000,
      featured: true,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Live Bands', 'Sound Systems', 'Lighting'],
      responseTime: '2 hours',
      bookingRate: '94%'
    }
  ];

  const filteredVendors = activeCategory === 'all' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Vendors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our curated network of top-rated event professionals, ready to make your event extraordinary.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vendors, services, or locations..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location"
                className="w-full lg:w-48 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filters */}
            <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredVendors.length} Vendors Found
            </h2>
            <p className="text-gray-600">
              {activeCategory === 'all' ? 'All categories' : categories.find(c => c.id === activeCategory)?.label}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Sort by: Rating</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Reviews</option>
            </select>
          </div>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative">
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {vendor.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      FEATURED
                    </span>
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-accent" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {vendor.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900 ml-1">{vendor.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({vendor.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{vendor.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {vendor.specialties.map((specialty) => (
                    <span key={specialty} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1 text-green-500" />
                    <span>Responds in {vendor.responseTime}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1 text-blue-500" />
                    <span>{vendor.bookingRate} booking rate</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Starting from</span>
                    <div className="text-xl font-bold text-primary">
                      ${vendor.startingPrice.toLocaleString()}
                      {vendor.category === 'catering' && <span className="text-sm text-gray-600">/person</span>}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-primary hover:bg-purple-dark text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Get Quote
                  </button>
                  <button className="flex-1 border border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-xl border border-gray-200 font-medium transition-colors">
            Load More Vendors
          </button>
        </div>
      </div>
    </div>
  );
};