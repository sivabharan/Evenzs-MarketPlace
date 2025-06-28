import React, { useState } from 'react';
import { 
  Plane, 
  Hotel, 
  Car, 
  MapPin, 
  Calendar, 
  Users, 
  Star,
  Clock,
  Wifi,
  Coffee,
  Utensils,
  Shield,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const TravelIntegrations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'cars'>('hotels');

  const hotelResults = [
    {
      id: 1,
      name: 'Grand Luxury Hotel',
      rating: 4.8,
      reviews: 1247,
      price: 285,
      originalPrice: 350,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'],
      distance: '0.2 miles from venue',
      partner: 'expedia'
    },
    {
      id: 2,
      name: 'Downtown Business Center',
      rating: 4.6,
      reviews: 892,
      price: 195,
      originalPrice: 245,
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Free WiFi', 'Gym', 'Business Center'],
      distance: '0.8 miles from venue',
      partner: 'kayak'
    },
    {
      id: 3,
      name: 'Boutique Garden Inn',
      rating: 4.7,
      reviews: 654,
      price: 165,
      originalPrice: 220,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Free WiFi', 'Garden', 'Breakfast'],
      distance: '1.2 miles from venue',
      partner: 'priceline'
    }
  ];

  const flightResults = [
    {
      id: 1,
      airline: 'Delta Airlines',
      departure: 'JFK 8:30 AM',
      arrival: 'SFO 11:45 AM',
      duration: '6h 15m',
      stops: 'Nonstop',
      price: 425,
      originalPrice: 580,
      partner: 'expedia'
    },
    {
      id: 2,
      airline: 'United Airlines',
      departure: 'JFK 2:15 PM',
      arrival: 'SFO 5:30 PM',
      duration: '6h 15m',
      stops: 'Nonstop',
      price: 398,
      originalPrice: 495,
      partner: 'kayak'
    },
    {
      id: 3,
      airline: 'American Airlines',
      departure: 'JFK 6:45 PM',
      arrival: 'SFO 10:00 PM',
      duration: '6h 15m',
      stops: 'Nonstop',
      price: 445,
      originalPrice: 520,
      partner: 'priceline'
    }
  ];

  const carResults = [
    {
      id: 1,
      type: 'Economy',
      model: 'Nissan Versa or similar',
      features: ['Automatic', '5 Passengers', 'Unlimited Miles'],
      price: 35,
      originalPrice: 45,
      partner: 'expedia',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      type: 'Midsize',
      model: 'Toyota Camry or similar',
      features: ['Automatic', '5 Passengers', 'Unlimited Miles'],
      price: 48,
      originalPrice: 62,
      partner: 'kayak',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      type: 'Luxury',
      model: 'BMW 3 Series or similar',
      features: ['Automatic', '5 Passengers', 'Premium Features'],
      price: 89,
      originalPrice: 115,
      partner: 'priceline',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const partners = {
    expedia: { name: 'Expedia', color: 'text-blue-600', bg: 'bg-blue-50' },
    kayak: { name: 'Kayak', color: 'text-orange-600', bg: 'bg-orange-50' },
    priceline: { name: 'Priceline', color: 'text-green-600', bg: 'bg-green-50' }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Your Event Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book flights, hotels, and car rentals for your event guests with exclusive rates from our travel partners.
          </p>
        </div>

        {/* Event Info */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Sarah's Wedding</h2>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  December 15, 2024
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Grand Hotel, San Francisco
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  150 guests expected
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Group booking discount</div>
              <div className="text-2xl font-bold text-accent">Save up to 25%</div>
            </div>
          </div>
        </div>

        {/* Search Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'hotels'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Hotel className="w-5 h-5 mr-2" />
              Hotels
            </button>
            <button
              onClick={() => setActiveTab('flights')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'flights'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Plane className="w-5 h-5 mr-2" />
              Flights
            </button>
            <button
              onClick={() => setActiveTab('cars')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'cars'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Car className="w-5 h-5 mr-2" />
              Car Rentals
            </button>
          </div>
        </div>

        {/* Hotels Tab */}
        {activeTab === 'hotels' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {hotelResults.map((hotel) => (
                  <div key={hotel.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="flex">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-48 h-48 object-cover"
                      />
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{hotel.name}</h3>
                            <div className="flex items-center mb-2">
                              <div className="flex items-center mr-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="ml-2 text-sm font-medium">{hotel.rating}</span>
                              </div>
                              <span className="text-sm text-gray-600">({hotel.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600 mb-3">
                              <MapPin className="w-4 h-4 mr-1" />
                              {hotel.distance}
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${partners[hotel.partner].bg} ${partners[hotel.partner].color}`}>
                            {partners[hotel.partner].name}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.amenities.map((amenity) => (
                            <span key={amenity} className="flex items-center bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                              {amenity === 'Free WiFi' && <Wifi className="w-3 h-3 mr-1" />}
                              {amenity === 'Restaurant' && <Utensils className="w-3 h-3 mr-1" />}
                              {amenity === 'Pool' && <Coffee className="w-3 h-3 mr-1" />}
                              {amenity}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-600">per night</div>
                            <div className="flex items-center">
                              <span className="text-2xl font-bold text-primary">${hotel.price}</span>
                              <span className="text-sm text-gray-500 line-through ml-2">${hotel.originalPrice}</span>
                              <span className="text-sm text-green-600 ml-2">
                                {Math.round((1 - hotel.price / hotel.originalPrice) * 100)}% off
                              </span>
                            </div>
                          </div>
                          <button className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center">
                            Book Now
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Group Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Free cancellation up to 24hrs</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-sm text-gray-700">Group rates for 10+ rooms</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-sm text-gray-700">24/7 travel support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Our travel specialists can help coordinate group bookings and special requests.
                </p>
                <button className="w-full bg-accent hover:bg-coral-dark text-white py-3 rounded-xl font-medium transition-colors">
                  Contact Travel Expert
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Flights Tab */}
        {activeTab === 'flights' && (
          <div className="space-y-6">
            {flightResults.map((flight) => (
              <div key={flight.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <div>
                      <div className="font-semibold text-gray-900">{flight.airline}</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${partners[flight.partner].bg} ${partners[flight.partner].color}`}>
                        {partners[flight.partner].name}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{flight.departure}</div>
                        <div className="text-sm text-gray-600">New York JFK</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-gray-300"></div>
                        <Plane className="w-5 h-5 text-gray-400" />
                        <div className="w-8 h-0.5 bg-gray-300"></div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-gray-900">{flight.arrival}</div>
                        <div className="text-sm text-gray-600">San Francisco SFO</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">{flight.duration}</div>
                      <div className="text-sm text-green-600">{flight.stops}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-2">
                      <span className="text-2xl font-bold text-primary">${flight.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${flight.originalPrice}</span>
                    </div>
                    <button className="bg-primary hover:bg-purple-dark text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center">
                      Select Flight
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cars Tab */}
        {activeTab === 'cars' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carResults.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={car.image} 
                  alt={car.model}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{car.type}</h3>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${partners[car.partner].bg} ${partners[car.partner].color}`}>
                      {partners[car.partner].name}
                    </div>
                  </div>
                  <div className="text-gray-600 mb-4">{car.model}</div>
                  <div className="space-y-2 mb-4">
                    {car.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">per day</div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-primary">${car.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">${car.originalPrice}</span>
                      </div>
                    </div>
                    <button className="bg-primary hover:bg-purple-dark text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};