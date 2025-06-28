import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Plus,
  Minus,
  CreditCard,
  Smartphone,
  Shield,
  Check,
  QrCode,
  Download,
  Mail,
  X,
  Ticket,
  Heart,
  Share2
} from 'lucide-react';

export const TicketPurchase: React.FC = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState('general');
  const [quantities, setQuantities] = useState<Record<string, number>>({
    general: 1,
    vip: 0,
    earlybird: 0
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('stripe');

  // Mock event data - in real app this would come from API
  const eventData = {
    id: eventId || '1',
    title: 'Summer Music Festival 2025',
    date: 'July 15-17, 2025',
    time: '2:00 PM - 11:00 PM',
    location: 'Golden Gate Park, San Francisco',
    venue: 'Main Stage Amphitheater',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    attendees: '15K+',
    description: 'Three days of incredible music featuring top artists across multiple genres. Experience the best in live music with food trucks, art installations, and unforgettable performances.',
    lineup: ['The Electric Waves', 'Sunset Collective', 'Urban Pulse', 'Midnight Echo'],
    amenities: ['Food & Beverages', 'VIP Lounges', 'Art Installations', 'Merchandise Stands'],
    organizer: 'Festival Productions Inc.',
    tags: ['Outdoor', 'Multi-day', 'Food & Drinks', '21+']
  };

  const ticketTiers = [
    {
      id: 'earlybird',
      name: 'Early Bird',
      price: 89,
      originalPrice: 129,
      description: 'Limited time offer - save $40!',
      features: ['General Admission', 'Festival Map', 'Welcome Drink'],
      available: 50,
      color: 'bg-green-500',
      popular: false
    },
    {
      id: 'general',
      name: 'General Admission',
      price: 129,
      originalPrice: null,
      description: 'Full festival access',
      features: ['3-Day Access', 'All Stages', 'Festival Map', 'Mobile App Access'],
      available: 500,
      color: 'bg-primary',
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP Experience',
      price: 299,
      originalPrice: null,
      description: 'Premium festival experience',
      features: ['VIP Lounge Access', 'Premium Viewing Areas', 'Complimentary Drinks', 'VIP Parking', 'Artist Meet & Greet'],
      available: 100,
      color: 'bg-gold',
      popular: false
    }
  ];

  const paymentMethods = [
    { id: 'stripe', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, Amex' },
    { id: 'apple', name: 'Apple Pay', icon: Smartphone, description: 'Pay with Touch ID' },
    { id: 'google', name: 'Google Pay', icon: Smartphone, description: 'Quick & secure' },
    { id: 'paypal', name: 'PayPal', icon: CreditCard, description: 'Pay with PayPal balance' }
  ];

  const updateQuantity = (tierId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [tierId]: Math.max(0, Math.min(10, prev[tierId] + change))
    }));
  };

  const getTotalPrice = () => {
    return ticketTiers.reduce((total, tier) => {
      return total + (tier.price * quantities[tier.id]);
    }, 0);
  };

  const getTotalTickets = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  const getProcessingFee = () => {
    return Math.round(getTotalPrice() * 0.029 + 0.30);
  };

  const getFinalTotal = () => {
    return getTotalPrice() + getProcessingFee();
  };

  const handlePurchase = () => {
    // Simulate payment processing
    setTimeout(() => {
      setShowConfirmation(true);
    }, 2000);
  };

  const handleTravelPlanning = () => {
    navigate('/travel-planning', { 
      state: { 
        eventData,
        ticketData: {
          quantities,
          totalPrice: getFinalTotal(),
          totalTickets: getTotalTickets()
        }
      }
    });
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tickets Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Your tickets for {eventData.title} have been successfully purchased.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center mb-4">
              <QrCode className="w-16 h-16 text-gray-600" />
            </div>
            <p className="text-sm text-gray-600">
              Confirmation #: EVZ-{Date.now().toString().slice(-6)}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <button className="w-full bg-primary hover:bg-purple-dark text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Tickets
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-medium transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Email Tickets
            </button>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleTravelPlanning}
              className="w-full bg-accent hover:bg-coral-dark text-white py-3 rounded-xl font-medium transition-colors"
            >
              Plan Your Trip
            </button>
            <Link
              to="/customer-dashboard"
              className="block w-full bg-white hover:bg-gray-50 text-gray-900 py-3 rounded-xl font-medium transition-colors border border-gray-200"
            >
              View My Tickets
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/event-discovery"
            className="flex items-center text-gray-600 hover:text-primary transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2">
            {/* Event Info */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6">
              <img 
                src={eventData.image} 
                alt={eventData.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{eventData.title}</h1>
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        {eventData.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        {eventData.time}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      {eventData.location}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-accent transition-colors">
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{eventData.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-5 h-5 mr-1" />
                    {eventData.attendees} attending
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{eventData.description}</p>

                <div className="flex flex-wrap gap-2">
                  {eventData.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket Selection */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Tickets</h2>
              
              <div className="space-y-4">
                {ticketTiers.map((tier) => (
                  <div 
                    key={tier.id}
                    className={`border-2 rounded-xl p-4 transition-all duration-300 ${
                      quantities[tier.id] > 0 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                          {tier.popular && (
                            <span className="ml-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{tier.description}</p>
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex items-center">
                            <span className="text-2xl font-bold text-gray-900">${tier.price}</span>
                            {tier.originalPrice && (
                              <span className="text-lg text-gray-500 line-through ml-2">
                                ${tier.originalPrice}
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-600">
                            {tier.available} available
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {tier.features.map((feature) => (
                            <span key={feature} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 ml-4">
                        <button
                          onClick={() => updateQuantity(tier.id, -1)}
                          disabled={quantities[tier.id] === 0}
                          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{quantities[tier.id]}</span>
                        <button
                          onClick={() => updateQuantity(tier.id, 1)}
                          disabled={quantities[tier.id] >= 10}
                          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary & Payment */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                {ticketTiers.map((tier) => (
                  quantities[tier.id] > 0 && (
                    <div key={tier.id} className="flex justify-between">
                      <div>
                        <span className="text-gray-900">{tier.name}</span>
                        <span className="text-gray-600 text-sm ml-2">x{quantities[tier.id]}</span>
                      </div>
                      <span className="font-medium">${(tier.price * quantities[tier.id]).toLocaleString()}</span>
                    </div>
                  )
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Processing Fee</span>
                  <span>${getProcessingFee()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${getFinalTotal().toLocaleString()}</span>
                </div>
              </div>

              {getTotalTickets() > 0 && (
                <>
                  {/* Payment Methods */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Payment Method</h4>
                    <div className="space-y-2">
                      {paymentMethods.map((method) => {
                        const IconComponent = method.icon;
                        return (
                          <button
                            key={method.id}
                            onClick={() => setSelectedPayment(method.id)}
                            className={`w-full flex items-center p-3 rounded-xl border-2 transition-all duration-300 ${
                              selectedPayment === method.id
                                ? 'border-primary bg-primary/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <IconComponent className="w-5 h-5 mr-3 text-gray-600" />
                            <div className="flex-1 text-left">
                              <div className="font-medium text-gray-900">{method.name}</div>
                              <div className="text-sm text-gray-600">{method.description}</div>
                            </div>
                            {selectedPayment === method.id && (
                              <Check className="w-5 h-5 text-primary" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-purple-dark hover:to-coral-dark text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg mt-6 flex items-center justify-center"
                  >
                    <Ticket className="w-5 h-5 mr-2" />
                    Purchase {getTotalTickets()} Ticket{getTotalTickets() !== 1 ? 's' : ''}
                  </button>

                  <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
                    <Shield className="w-4 h-4 mr-2" />
                    Secure payment powered by Stripe
                  </div>
                </>
              )}

              {getTotalTickets() === 0 && (
                <div className="mt-6 text-center text-gray-500">
                  Select tickets to continue
                </div>
              )}
            </div>

            {/* Event Highlights */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Event Highlights</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Featured Artists</h4>
                  <div className="space-y-1">
                    {eventData.lineup.map((artist) => (
                      <div key={artist} className="text-sm text-gray-600">• {artist}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Amenities</h4>
                  <div className="space-y-1">
                    {eventData.amenities.map((amenity) => (
                      <div key={amenity} className="text-sm text-gray-600">• {amenity}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};