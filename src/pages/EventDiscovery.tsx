import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Filter, 
  Music, 
  Briefcase, 
  Trophy, 
  Palette,
  Star,
  Clock,
  Users,
  DollarSign,
  Heart,
  Ticket,
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';

export const EventDiscovery: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', label: 'All Events', icon: Calendar },
    { id: 'music', label: 'Music & Concerts', icon: Music },
    { id: 'business', label: 'Business & Tech', icon: Briefcase },
    { id: 'sports', label: 'Sports & Fitness', icon: Trophy },
    { id: 'culture', label: 'Arts & Culture', icon: Palette },
  ];

  const events = [
    {
      id: 1,
      title: 'Summer Music Festival 2025',
      category: 'music',
      date: 'July 15-17, 2025',
      time: '2:00 PM - 11:00 PM',
      location: 'Golden Gate Park, San Francisco',
      venue: 'Main Stage Amphitheater',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$89 - $299',
      startingPrice: 89,
      attendees: '15K+',
      rating: 4.8,
      featured: true,
      tags: ['Outdoor', 'Multi-day', 'Food & Drinks'],
      description: 'Three days of incredible music featuring top artists across multiple genres.'
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      category: 'business',
      date: 'March 22, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Moscone Center, San Francisco',
      venue: 'Hall A',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$199 - $599',
      startingPrice: 199,
      attendees: '2K+',
      rating: 4.9,
      featured: false,
      tags: ['Networking', 'Professional', 'Lunch Included'],
      description: 'Leading tech innovators share insights on the future of technology.'
    },
    {
      id: 3,
      title: 'Marathon Championship',
      category: 'sports',
      date: 'April 10, 2025',
      time: '6:00 AM - 2:00 PM',
      location: 'Downtown Los Angeles',
      venue: 'City Streets',
      image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$45 - $125',
      startingPrice: 45,
      attendees: '8K+',
      rating: 4.7,
      featured: true,
      tags: ['Athletic', 'Charity', 'Medal Included'],
      description: 'Annual marathon supporting local charities with scenic city route.'
    },
    {
      id: 4,
      title: 'Art & Wine Gallery Night',
      category: 'culture',
      date: 'February 28, 2025',
      time: '7:00 PM - 11:00 PM',
      location: 'SOMA District, San Francisco',
      venue: 'Modern Art Gallery',
      image: 'https://images.pexels.com/photos/1153069/pexels-photo-1153069.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$65 - $150',
      startingPrice: 65,
      attendees: '500+',
      rating: 4.6,
      featured: false,
      tags: ['Wine Tasting', 'Art Exhibition', '21+'],
      description: 'Exclusive evening showcasing local artists with wine pairings.'
    },
    {
      id: 5,
      title: 'Jazz Under the Stars',
      category: 'music',
      date: 'June 5, 2025',
      time: '8:00 PM - 12:00 AM',
      location: 'Napa Valley, CA',
      venue: 'Vineyard Amphitheater',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$95 - $250',
      startingPrice: 95,
      attendees: '1.2K+',
      rating: 4.9,
      featured: true,
      tags: ['Outdoor', 'Premium', 'Dinner Included'],
      description: 'Intimate jazz performance in a beautiful vineyard setting.'
    },
    {
      id: 6,
      title: 'Startup Pitch Competition',
      category: 'business',
      date: 'May 18, 2025',
      time: '1:00 PM - 8:00 PM',
      location: 'Silicon Valley, CA',
      venue: 'Innovation Hub',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: '$25 - $75',
      startingPrice: 25,
      attendees: '800+',
      rating: 4.5,
      featured: false,
      tags: ['Networking', 'Competition', 'Refreshments'],
      description: 'Watch emerging startups pitch to top investors and VCs.'
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find concerts, conferences, festivals, and more. Book tickets and plan your complete experience.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, artists, or venues..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                placeholder="City or ZIP code"
                className="w-full lg:w-48 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Date Range */}
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full lg:w-48 pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                <option value="">Any date</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="this-week">This week</option>
                <option value="this-month">This month</option>
                <option value="next-month">Next month</option>
              </select>
            </div>

            {/* Advanced Filters */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Any price</option>
                    <option>Free</option>
                    <option>Under $50</option>
                    <option>$50 - $100</option>
                    <option>$100 - $200</option>
                    <option>$200+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>All types</option>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                    <option>Virtual</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Any duration</option>
                    <option>1-2 hours</option>
                    <option>Half day</option>
                    <option>Full day</option>
                    <option>Multi-day</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
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
              {filteredEvents.length} Events Found
            </h2>
            <p className="text-gray-600">
              {selectedCategory === 'all' ? 'All categories' : categories.find(c => c.id === selectedCategory)?.label}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Sort by: Date</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Popularity</option>
              <option>Sort by: Rating</option>
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {event.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      FEATURED
                    </span>
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-accent" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    {event.priceRange}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900 ml-1">{event.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Starting from</span>
                    <div className="text-xl font-bold text-primary">
                      ${event.startingPrice}
                    </div>
                  </div>
                  <Link
                    to={`/ticket-purchase/${event.id}`}
                    className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center"
                  >
                    <Ticket className="w-5 h-5 mr-2" />
                    Book Tickets
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-xl border border-gray-200 font-medium transition-colors">
            Load More Events
          </button>
        </div>
      </div>
    </div>
  );
};