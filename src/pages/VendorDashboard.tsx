import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Star, 
  Eye,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Camera,
  Music,
  ChefHat,
  Flower
} from 'lucide-react';

export const VendorDashboard: React.FC = () => {
  const bookings = [
    {
      id: 1,
      event: "Sarah's Wedding",
      date: "Dec 15, 2024",
      client: "Jessica Smith",
      amount: 3500,
      status: "confirmed"
    },
    {
      id: 2,
      event: "Corporate Gala",
      date: "Jan 20, 2025",
      client: "Tech Corp",
      amount: 5000,
      status: "pending"
    }
  ];

  const opportunities = [
    {
      id: 1,
      event: "Anniversary Party",
      date: "Feb 14, 2025",
      budget: "$2,000 - $3,000",
      location: "Downtown",
      bids: 5
    },
    {
      id: 2,
      event: "Birthday Celebration",
      date: "Mar 10, 2025",
      budget: "$1,500 - $2,500",
      location: "Suburbs",
      bids: 3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Mike!</h1>
              <p className="text-xl text-gray-600">Your photography business is thriving</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/vendor-profile"
                className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-xl border border-gray-200 font-medium transition-colors"
              >
                Edit Profile
              </Link>
              <Link
                to="/vendor-profile"
                className="bg-gradient-to-r from-primary to-accent hover:from-purple-dark hover:to-coral-dark text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">+15%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">12</h3>
            <p className="text-gray-600">This Month's Bookings</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <DollarSign className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">+22%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">$8,500</h3>
            <p className="text-gray-600">Monthly Revenue</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gold/10 rounded-xl">
                <Star className="w-6 h-6 text-gold-dark" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">+0.1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">4.9</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-light/10 rounded-xl">
                <Eye className="w-6 h-6 text-purple-light" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">+8%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">234</h3>
            <p className="text-gray-600">Profile Views</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Bookings</h2>
                <button className="text-primary hover:text-purple-dark font-medium flex items-center">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{booking.event}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span>{booking.date}</span>
                        <span>•</span>
                        <span>{booking.client}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">
                          ${booking.amount.toLocaleString()}
                        </div>
                        <button className="text-primary hover:text-purple-dark text-sm font-medium">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* New Opportunities */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">New Opportunities</h2>
                <button className="text-primary hover:text-purple-dark font-medium flex items-center">
                  Browse All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="space-y-4">
                {opportunities.map((opportunity) => (
                  <div key={opportunity.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{opportunity.event}</h3>
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {opportunity.bids} bids
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600">{opportunity.date} • {opportunity.location}</div>
                        <div className="font-medium text-accent">{opportunity.budget}</div>
                      </div>
                      <Link
                        to={`/submit-bid/${opportunity.id}`}
                        className="bg-primary hover:bg-purple-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Submit Bid
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">This Month</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bookings</span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Bids Submitted</span>
                  <span className="font-semibold text-gray-900">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Win Rate</span>
                  <span className="font-semibold text-green-600">75%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-blue-600">2.3 hrs</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/vendor-profile"
                  className="w-full flex items-center p-3 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Camera className="w-5 h-5 text-primary" />
                  </div>
                  <span className="ml-3 font-medium text-gray-900 group-hover:text-primary">Update Portfolio</span>
                </Link>

                <button className="w-full flex items-center p-3 bg-accent/5 hover:bg-accent/10 rounded-xl transition-colors group">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </div>
                  <span className="ml-3 font-medium text-gray-900 group-hover:text-accent">Messages</span>
                </button>

                <button className="w-full flex items-center p-3 bg-gold/5 hover:bg-gold/10 rounded-xl transition-colors group">
                  <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <Calendar className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="ml-3 font-medium text-gray-900 group-hover:text-gold-dark">
                    <Link to="/vendor-calendar">Manage Calendar</Link>
                  </span>
                </button>
              </div>
            </div>

            {/* Category Performance */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Top Categories</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Camera className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">Photography</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">8 bookings</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Music className="w-5 h-5 text-accent mr-2" />
                    <span className="text-gray-700">DJ Services</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">3 bookings</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ChefHat className="w-5 h-5 text-gold-dark mr-2" />
                    <span className="text-gray-700">Catering</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">1 booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};