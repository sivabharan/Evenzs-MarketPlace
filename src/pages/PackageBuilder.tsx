import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  RefreshCw, 
  Camera, 
  Music, 
  ChefHat, 
  Flower,
  Car,
  MapPin,
  DollarSign,
  Star,
  Users
} from 'lucide-react';

export const PackageBuilder: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('smart');
  const [customizing, setCustomizing] = useState(false);

  const packageTiers = [
    {
      id: 'basic',
      name: 'Basic',
      price: 12000,
      description: 'Essential services for your event',
      features: ['Professional Photography', 'Basic DJ Setup', 'Simple Catering', 'Standard Decorations'],
      vendors: 4
    },
    {
      id: 'smart',
      name: 'Smart',
      price: 18000,
      description: 'Our most popular package',
      features: ['Premium Photography + Video', 'Professional DJ with Lighting', 'Full-Service Catering', 'Custom Decorations', 'Event Coordinator'],
      vendors: 6,
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 28000,
      description: 'Luxury experience with all the extras',
      features: ['Cinematic Photo/Video Package', 'Live Band + DJ', 'Gourmet Catering + Bar', 'Designer Florals', 'Full Event Planning', 'Transportation'],
      vendors: 8
    }
  ];

  const vendorServices = [
    {
      id: 'photography',
      name: 'Photography',
      icon: Camera,
      current: 'Sarah Chen Photography',
      rating: 4.9,
      price: 2500,
      alternatives: ['Mike Studio', 'Elite Captures', 'Dream Shots']
    },
    {
      id: 'music',
      name: 'DJ Services',
      icon: Music,
      current: 'Beat Masters DJ',
      rating: 4.8,
      price: 1200,
      alternatives: ['Party Pro DJ', 'Sound Wave', 'Mix Masters']
    },
    {
      id: 'catering',
      name: 'Catering',
      icon: ChefHat,
      current: 'Gourmet Delights',
      rating: 4.9,
      price: 8500,
      alternatives: ['Tasteful Events', 'Culinary Arts', 'Fine Dining Co']
    },
    {
      id: 'florals',
      name: 'Florals',
      icon: Flower,
      current: 'Bloom & Blossom',
      rating: 4.7,
      price: 1800,
      alternatives: ['Petal Perfect', 'Garden Dreams', 'Floral Fantasy']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Perfect Event Package
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI has curated the perfect vendors for your wedding based on your preferences, budget, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Selection */}
          <div className="lg:col-span-2">
            {/* Package Tiers */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Package</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packageTiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedTier === tier.id
                        ? 'border-primary bg-primary/5 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-1">
                        ${tier.price.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-600">{tier.description}</p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <span className="text-sm text-gray-600">{tier.vendors} Vendors Included</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vendor Services */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Vendor Team</h2>
                <button
                  onClick={() => setCustomizing(!customizing)}
                  className="flex items-center text-primary hover:text-purple-dark font-medium transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  {customizing ? 'Done Customizing' : 'Customize'}
                </button>
              </div>

              <div className="space-y-6">
                {vendorServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={service.id} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="p-3 bg-primary/10 rounded-xl mr-4">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                            <div className="flex items-center space-x-2">
                              <span className="text-primary font-medium">{service.current}</span>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600 ml-1">{service.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900">
                            ${service.price.toLocaleString()}
                          </div>
                          {customizing && (
                            <button className="text-sm text-primary hover:text-purple-dark font-medium mt-1">
                              Change Vendor
                            </button>
                          )}
                        </div>
                      </div>

                      {customizing && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Other Options:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.alternatives.map((alt) => (
                              <button
                                key={alt}
                                className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white text-sm rounded-full transition-colors"
                              >
                                {alt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Package Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Package Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Photography</span>
                  <span className="font-medium">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">DJ Services</span>
                  <span className="font-medium">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Catering</span>
                  <span className="font-medium">$8,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Florals</span>
                  <span className="font-medium">$1,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coordination</span>
                  <span className="font-medium">$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee</span>
                  <span className="font-medium">$500</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-primary">$16,500</span>
                </div>
                <div className="text-sm text-green-600 mt-1">
                  You saved $1,500 vs booking separately!
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  150 guests included
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Grand Hotel, Downtown
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Payment plans available
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-accent hover:from-purple-dark hover:to-coral-dark text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center">
                Book This Package
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <div className="text-center mt-4">
                <button className="text-primary hover:text-purple-dark font-medium transition-colors">
                  Get Quote First
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose This Package?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-700">All vendors are verified & insured</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-700">24/7 event support included</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-700">Satisfaction guarantee</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm text-gray-700">Flexible payment options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};