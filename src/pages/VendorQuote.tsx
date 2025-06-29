import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Clock, 
  Send,
  Star,
  Award,
  CheckCircle,
  Camera,
  Music,
  ChefHat,
  Flower,
  Car,
  Sparkles
} from 'lucide-react';

export const VendorQuote: React.FC = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [budget, setBudget] = useState('');
  const [eventType, setEventType] = useState('');
  const [message, setMessage] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  // Mock vendor data - in real app this would come from API
  const vendorData = {
    id: vendorId || '1',
    name: 'Sarah Chen Photography',
    category: 'Photography',
    location: 'San Francisco, CA',
    rating: 4.9,
    reviews: 127,
    startingPrice: 2500,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    specialties: ['Weddings', 'Portraits', 'Events'],
    responseTime: '2 hours',
    bookingRate: '95%',
    description: 'Professional photographer with over 8 years of experience specializing in weddings, corporate events, and portraits.',
    services: [
      { name: 'Wedding Photography', price: 2500, duration: '8 hours' },
      { name: 'Portrait Session', price: 500, duration: '2 hours' },
      { name: 'Corporate Event', price: 1200, duration: '4 hours' },
      { name: 'Engagement Shoot', price: 800, duration: '3 hours' }
    ]
  };

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Graduation',
    'Baby Shower',
    'Holiday Party',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!contactName || !contactEmail || !eventDate || !eventType || !guestCount) {
      alert('Please fill in all required fields');
      return;
    }

    // Create quote request data
    const quoteRequest = {
      vendorId,
      contactName,
      contactEmail,
      contactPhone,
      eventDate,
      eventLocation,
      eventType,
      guestCount,
      budget,
      message,
      requestedAt: new Date().toISOString()
    };

    // Save to localStorage (in real app, this would be an API call)
    const existingRequests = JSON.parse(localStorage.getItem('quote_requests') || '[]');
    existingRequests.push({ ...quoteRequest, id: Date.now().toString() });
    localStorage.setItem('quote_requests', JSON.stringify(existingRequests));

    // Show success and redirect
    alert('Quote request sent successfully! The vendor will contact you within 2 hours.');
    navigate('/vendor-discovery');
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'photography': return Camera;
      case 'music': return Music;
      case 'catering': return ChefHat;
      case 'florals': return Flower;
      case 'transport': return Car;
      default: return Sparkles;
    }
  };

  const IconComponent = getCategoryIcon(vendorData.category);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/vendor-discovery"
            className="flex items-center text-charcoal hover:text-primary transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Vendors
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-secondary mb-2">Request Quote</h1>
            <p className="text-xl text-charcoal">Get a personalized quote for your event</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vendor Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6 sticky top-8">
              <div className="text-center mb-6">
                <img 
                  src={vendorData.image} 
                  alt={vendorData.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h2 className="text-xl font-bold text-secondary mb-2">{vendorData.name}</h2>
                <div className="flex items-center justify-center mb-2">
                  <IconComponent className="w-5 h-5 text-primary mr-2" />
                  <span className="text-charcoal">{vendorData.category}</span>
                </div>
                <div className="flex items-center justify-center text-charcoal mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{vendorData.location}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{vendorData.rating} ({vendorData.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Starting Price</span>
                  <span className="font-medium text-primary">${vendorData.startingPrice.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Response Time</span>
                  <span className="font-medium text-green-600">{vendorData.responseTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Booking Rate</span>
                  <span className="font-medium text-blue-600">{vendorData.bookingRate}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-secondary mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {vendorData.specialties.map((specialty) => (
                    <span key={specialty} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span className="text-sm">Verified & Insured</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Award className="w-5 h-5 mr-3" />
                  <span className="text-sm">Top Rated Vendor</span>
                </div>
                <div className="flex items-center text-purple-600">
                  <Clock className="w-5 h-5 mr-3" />
                  <span className="text-sm">Quick Response Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                <h2 className="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                <h2 className="text-2xl font-bold text-secondary mb-6">Event Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Event Type *
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Event Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-5 h-5" />
                      <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-11 pr-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Event Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-5 h-5" />
                      <input
                        type="text"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="City, venue, or address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Number of Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-5 h-5" />
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select guest count</option>
                        <option value="1-25">1-25 guests</option>
                        <option value="26-50">26-50 guests</option>
                        <option value="51-100">51-100 guests</option>
                        <option value="101-200">101-200 guests</option>
                        <option value="200+">200+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal w-5 h-5" />
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                <h2 className="text-2xl font-bold text-secondary mb-6">Additional Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-platinum rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Tell us more about your event, specific requirements, or any questions you have..."
                  />
                </div>
              </div>

              {/* Services Preview */}
              <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                <h2 className="text-2xl font-bold text-secondary mb-6">Available Services</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vendorData.services.map((service, index) => (
                    <div key={index} className="border border-platinum rounded-xl p-4">
                      <h3 className="font-semibold text-secondary mb-2">{service.name}</h3>
                      <div className="flex items-center justify-between text-sm text-charcoal">
                        <span>Starting at ${service.price.toLocaleString()}</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end space-x-4">
                <Link
                  to="/vendor-discovery"
                  className="px-8 py-3 border border-platinum text-charcoal rounded-xl font-medium hover:bg-pearl transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center animate-gold-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};