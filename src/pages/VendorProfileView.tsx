import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Award,
  Calendar,
  DollarSign,
  Users,
  Heart,
  Share2,
  MessageSquare,
  CheckCircle,
  Clock,
  Camera,
  Music,
  ChefHat,
  Flower,
  Car,
  Sparkles,
  Eye,
  ThumbsUp
} from 'lucide-react';

export const VendorProfileView: React.FC = () => {
  const { vendorId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock vendor data - in real app this would come from API
  const vendorData = {
    id: vendorId || '1',
    name: 'Sarah Chen Photography',
    tagline: 'Capturing life\'s most precious moments',
    description: 'Professional photographer with over 8 years of experience specializing in weddings, corporate events, and portraits. Known for creative compositions and natural lighting techniques that bring out the best in every moment.',
    category: 'Photography',
    location: 'San Francisco, CA',
    phone: '(555) 123-4567',
    email: 'sarah@sarahchenphotography.com',
    website: 'www.sarahchenphotography.com',
    rating: 4.9,
    reviews: 127,
    startingPrice: 2500,
    experience: '8+ years',
    responseTime: '2 hours',
    bookingRate: '95%',
    completedEvents: 250,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    coverImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    specialties: ['Weddings', 'Corporate Events', 'Portraits', 'Product Photography'],
    languages: ['English', 'Mandarin', 'Spanish'],
    certifications: ['Professional Photographers of America', 'Wedding Photography Certified'],
    services: [
      { 
        name: 'Wedding Photography Package', 
        price: 2500, 
        duration: '8 hours',
        description: 'Complete wedding day coverage including ceremony, reception, and portraits',
        includes: ['8 hours coverage', '500+ edited photos', 'Online gallery', 'Print release']
      },
      { 
        name: 'Portrait Session', 
        price: 500, 
        duration: '2 hours',
        description: 'Professional portrait session for individuals, couples, or families',
        includes: ['2 hours session', '50+ edited photos', 'Online gallery', 'Print release']
      },
      { 
        name: 'Corporate Event Coverage', 
        price: 1200, 
        duration: '4 hours',
        description: 'Professional documentation of corporate events and conferences',
        includes: ['4 hours coverage', '200+ edited photos', 'Same-day preview', 'Commercial license']
      },
      { 
        name: 'Engagement Shoot', 
        price: 800, 
        duration: '3 hours',
        description: 'Romantic engagement session at location of your choice',
        includes: ['3 hours session', '100+ edited photos', 'Online gallery', 'Print release']
      }
    ]
  };

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
    },
    {
      id: 5,
      title: 'Engagement Session',
      category: 'Engagement',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Romantic sunset engagement photos'
    },
    {
      id: 6,
      title: 'Corporate Headshots',
      category: 'Portrait',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional headshots for executive team'
    }
  ];

  const reviews = [
    {
      id: 1,
      client: 'Sarah Johnson',
      rating: 5,
      date: 'November 2024',
      comment: 'Sarah captured our wedding perfectly! Her attention to detail and creative eye made our special day even more memorable. The photos are absolutely stunning and we couldn\'t be happier.',
      event: 'Wedding Photography',
      helpful: 12
    },
    {
      id: 2,
      client: 'Tech Corp',
      rating: 5,
      date: 'October 2024',
      comment: 'Professional, reliable, and delivered exceptional results for our corporate event. Sarah was unobtrusive yet captured all the important moments. Highly recommended for business events!',
      event: 'Corporate Event',
      helpful: 8
    },
    {
      id: 3,
      client: 'Maria Rodriguez',
      rating: 4,
      date: 'September 2024',
      comment: 'Great experience working with Sarah. The family portraits turned out beautiful and she was very patient with our kids. The only minor issue was the delivery took a bit longer than expected.',
      event: 'Family Portraits',
      helpful: 5
    },
    {
      id: 4,
      client: 'David Kim',
      rating: 5,
      date: 'August 2024',
      comment: 'Sarah did our engagement photos and they exceeded our expectations. She made us feel comfortable and the photos captured our personalities perfectly. Can\'t wait to book her for our wedding!',
      event: 'Engagement Session',
      helpful: 15
    }
  ];

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/vendor-discovery"
            className="flex items-center text-charcoal hover:text-primary transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Vendors
          </Link>
        </div>

        {/* Cover Image */}
        <div className="relative h-64 bg-gradient-to-r from-secondary to-charcoal rounded-2xl overflow-hidden mb-8">
          <img 
            src={vendorData.coverImage} 
            alt="Cover"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-end justify-between">
              <div className="flex items-end space-x-4">
                <img 
                  src={vendorData.image} 
                  alt={vendorData.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white"
                />
                <div className="text-white">
                  <h1 className="text-3xl font-bold mb-1">{vendorData.name}</h1>
                  <p className="text-white/90">{vendorData.tagline}</p>
                  <div className="flex items-center mt-2">
                    <IconComponent className="w-5 h-5 text-primary mr-2" />
                    <span>{vendorData.category}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{vendorData.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`p-3 rounded-full transition-colors ${
                    isFavorited ? 'bg-accent text-white' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
                <button className="p-3 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center border border-platinum">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <div className="text-2xl font-bold text-secondary">{vendorData.rating}</div>
            <div className="text-sm text-charcoal">{vendorData.reviews} reviews</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-platinum">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-secondary">{vendorData.completedEvents}</div>
            <div className="text-sm text-charcoal">Events completed</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-platinum">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-secondary">{vendorData.responseTime}</div>
            <div className="text-sm text-charcoal">Response time</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-platinum">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-secondary">{vendorData.bookingRate}</div>
            <div className="text-sm text-charcoal">Booking rate</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            to={`/vendor-quote/${vendorData.id}`}
            className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center animate-gold-glow"
          >
            Get Quote
          </Link>
          <button className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-secondary px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Message Vendor
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-platinum p-2 mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'overview'
                  ? 'bg-primary text-secondary shadow-lg'
                  : 'text-charcoal hover:bg-pearl'
              }`}
            >
              <Eye className="w-5 h-5 mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'portfolio'
                  ? 'bg-primary text-secondary shadow-lg'
                  : 'text-charcoal hover:bg-pearl'
              }`}
            >
              <Camera className="w-5 h-5 mr-2" />
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-primary text-secondary shadow-lg'
                  : 'text-charcoal hover:bg-pearl'
              }`}
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Services & Pricing
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'reviews'
                  ? 'bg-primary text-secondary shadow-lg'
                  : 'text-charcoal hover:bg-pearl'
              }`}
            >
              <Star className="w-5 h-5 mr-2" />
              Reviews
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                  <h2 className="text-2xl font-bold text-secondary mb-4">About</h2>
                  <p className="text-charcoal leading-relaxed mb-6">{vendorData.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Specialties</h3>
                      <div className="flex flex-wrap gap-2">
                        {vendorData.specialties.map((specialty) => (
                          <span key={specialty} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {vendorData.languages.map((language) => (
                          <span key={language} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                  <h2 className="text-2xl font-bold text-secondary mb-4">Certifications & Awards</h2>
                  <div className="space-y-3">
                    {vendorData.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center">
                        <Award className="w-5 h-5 text-primary mr-3" />
                        <span className="text-charcoal">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === 'portfolio' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-platinum overflow-hidden group hover:shadow-xl transition-shadow">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-secondary text-xs font-medium px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-secondary mb-2">{item.title}</h3>
                        <p className="text-sm text-charcoal">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                {vendorData.services.map((service, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-secondary mb-2">{service.name}</h3>
                        <p className="text-charcoal mb-4">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">${service.price.toLocaleString()}</div>
                        <div className="text-sm text-charcoal">{service.duration}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-center text-charcoal">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-secondary">Customer Reviews</h2>
                    <div className="flex items-center">
                      <div className="flex items-center mr-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">{vendorData.rating}</span>
                      <span className="ml-2 text-charcoal">({vendorData.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-platinum pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-secondary">{review.client}</h3>
                            <p className="text-sm text-charcoal">{review.event}</p>
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
                            <p className="text-sm text-charcoal mt-1">{review.date}</p>
                          </div>
                        </div>
                        <p className="text-charcoal mb-3">{review.comment}</p>
                        <div className="flex items-center">
                          <button className="flex items-center text-sm text-charcoal hover:text-primary transition-colors">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-charcoal">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href={`tel:${vendorData.phone}`} className="hover:text-primary transition-colors">
                    {vendorData.phone}
                  </a>
                </div>
                <div className="flex items-center text-charcoal">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href={`mailto:${vendorData.email}`} className="hover:text-primary transition-colors">
                    {vendorData.email}
                  </a>
                </div>
                <div className="flex items-center text-charcoal">
                  <Globe className="w-5 h-5 mr-3" />
                  <a href={`https://${vendorData.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    {vendorData.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal">Experience</span>
                  <span className="font-medium">{vendorData.experience}</span>
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
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-platinum p-6">
              <h3 className="text-lg font-bold text-secondary mb-4">Trust & Safety</h3>
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
        </div>
      </div>
    </div>
  );
};