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
  Search
} from 'lucide-react';
import { Logo } from '../components/Logo';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-indigo-light to-violet-elegant min-h-screen flex items-center">
        <div className="absolute inset-0 bg-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-8">
                <Logo size="lg" variant="white" animated={true} />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Make Every Event
                <span className="text-accent block animate-pulse-slow">Unforgettable</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                Discover amazing events, plan seamlessly, and celebrate in style. 
                From intimate gatherings to grand celebrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/event-discovery"
                  className="inline-flex items-center justify-center bg-accent hover:bg-amber-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <Ticket className="mr-2 w-5 h-5" />
                  Find Events
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/signin"
                  state={{ role: 'organizer' }}
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Plan Event
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 animate-float">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Ticket className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-white font-semibold">Buy Tickets</h3>
                  <p className="text-white/80 text-sm">Discover events</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500 mt-8">
                  <Building2 className="w-8 h-8 text-gold-elegant mb-3" />
                  <h3 className="text-white font-semibold">Corporate</h3>
                  <p className="text-white/80 text-sm">Professional events</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Heart className="w-8 h-8 text-rose-elegant mb-3" />
                  <h3 className="text-white font-semibold">Weddings</h3>
                  <p className="text-white/80 text-sm">Dream ceremonies</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Music className="w-8 h-8 text-emerald-elegant mb-3" />
                  <h3 className="text-white font-semibold">Concerts</h3>
                  <p className="text-white/80 text-sm">Live entertainment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">evenzs</span>?
            </h2>
            <p className="text-xl text-slate-light max-w-3xl mx-auto">
              We make event planning and discovery effortless with our intelligent platform, 
              trusted network, and seamless booking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-indigo-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Smart Discovery</h3>
              <p className="text-slate-light">Find the perfect events and vendors with our intelligent search and matching.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-amber-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Trusted Network</h3>
              <p className="text-slate-light">All events and vendors are verified, insured, and rated by real customers.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-elegant to-amber-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Save Time</h3>
              <p className="text-slate-light">Book everything in one place - from tickets to travel to event planning.</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-elegant to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Best Value</h3>
              <p className="text-slate-light">Transparent pricing with no hidden fees. Get the most for your budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-indigo-light to-violet-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
              <div className="text-white/90 text-lg">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/90 text-lg">Trusted Vendors</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500K+</div>
              <div className="text-white/90 text-lg">Tickets Sold</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.9</div>
              <div className="text-white/90 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 fill-current mr-1" />
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Ready for Your Next Event?
          </h2>
          <p className="text-xl text-slate-light mb-10">
            Join thousands of happy customers who trust evenzs for their special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/event-discovery"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-indigo-light hover:from-indigo-dark hover:to-primary text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Ticket className="mr-3 w-6 h-6" />
              Find Events & Buy Tickets
            </Link>
            <Link 
              to="/signin"
              state={{ role: 'organizer' }}
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Plan an Event
            </Link>
          </div>
          <div className="mt-8">
            <Link 
              to="/signin"
              state={{ role: 'vendor' }}
              className="inline-flex items-center justify-center text-slate-light hover:text-primary px-6 py-2 rounded-full font-medium transition-colors"
            >
              <Users className="mr-2 w-5 h-5" />
              Join as a Vendor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};