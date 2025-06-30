import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Sparkles, 
  Heart, 
  Building2, 
  Music, 
  Cake,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Ticket,
  Search,
  Bot
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-charcoal to-charcoal-light min-h-screen-mobile flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Make Every Event
                <span className="text-primary block animate-pulse-slow">Unforgettable</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
                Discover amazing events, plan seamlessly, and celebrate in style. 
                From intimate gatherings to grand celebrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link 
                  to="/event-discovery"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl animate-gold-glow"
                >
                  <Ticket className="mr-2 w-5 h-5" />
                  Find Events
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/signin"
                  state={{ role: 'organizer' }}
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Plan Event
                </Link>
              </div>
              
              {/* AI Onboarding CTA */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <Link 
                  to="/ai-onboarding-demo"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  <Bot className="mr-2 w-4 h-4" />
                  Experience AI Onboarding
                  <Sparkles className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 animate-float">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-primary/20">
                  <Ticket className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2 sm:mb-3" />
                  <h3 className="text-white font-semibold text-sm sm:text-base">Buy Tickets</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Discover events</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500 mt-6 sm:mt-8 border border-accent/20">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent mb-2 sm:mb-3" />
                  <h3 className="text-white font-semibold text-sm sm:text-base">Corporate</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Professional events</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-rose-gold/20">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-gold mb-2 sm:mb-3" />
                  <h3 className="text-white font-semibold text-sm sm:text-base">Weddings</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Dream ceremonies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-bronze/20">
                  <Music className="w-6 h-6 sm:w-8 sm:h-8 text-bronze mb-2 sm:mb-3" />
                  <h3 className="text-white font-semibold text-sm sm:text-base">Concerts</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Live entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Platform</span>?
            </h2>
            <p className="text-lg sm:text-xl text-charcoal max-w-3xl mx-auto">
              We make event planning and discovery effortless with our intelligent platform, 
              trusted network, and seamless booking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-gold-elegant rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-gold-glow">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Smart Discovery</h3>
              <p className="text-charcoal text-sm sm:text-base">Find the perfect events and vendors with our intelligent search and matching.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-champagne rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-gold-glow">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Trusted Network</h3>
              <p className="text-charcoal text-sm sm:text-base">All events and vendors are verified, insured, and rated by real customers.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gold-elegant to-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-gold-glow">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Save Time</h3>
              <p className="text-charcoal text-sm sm:text-base">Book everything in one place - from tickets to travel to event planning.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-bronze to-copper rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:animate-gold-glow">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">Best Value</h3>
              <p className="text-charcoal text-sm sm:text-base">Transparent pricing with no hidden fees. Get the most for your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-secondary via-charcoal to-charcoal-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:animate-pulse">50K+</div>
              <div className="text-white/90 text-sm sm:text-lg">Events Hosted</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-gold-elegant bg-clip-text text-transparent group-hover:animate-pulse">10K+</div>
              <div className="text-white/90 text-sm sm:text-lg">Trusted Vendors</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-gold-elegant to-primary bg-clip-text text-transparent group-hover:animate-pulse">500K+</div>
              <div className="text-white/90 text-sm sm:text-lg">Tickets Sold</div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:animate-pulse">4.9</div>
              <div className="text-white/90 text-sm sm:text-lg flex items-center justify-center">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current mr-1 text-primary" />
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6">
            Ready for Your Next Event?
          </h2>
          <p className="text-lg sm:text-xl text-charcoal mb-8 sm:mb-10">
            Join thousands of happy customers who trust us for their special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link 
              to="/event-discovery"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg animate-gold-glow"
            >
              <Ticket className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Find Events & Buy Tickets
            </Link>
            <Link 
              to="/signin"
              state={{ role: 'organizer' }}
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-secondary px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
            >
              <Calendar className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              Plan an Event
            </Link>
          </div>
          <div className="mt-6 sm:mt-8">
            <Link 
              to="/signin"
              state={{ role: 'vendor' }}
              className="inline-flex items-center justify-center text-charcoal hover:text-primary px-4 sm:px-6 py-2 rounded-full font-medium transition-colors"
            >
              <Users className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Join as a Vendor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};