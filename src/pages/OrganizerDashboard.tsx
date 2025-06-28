import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Plus, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Users,
  DollarSign,
  MapPin,
  Sparkles,
  Star,
  ArrowRight
} from 'lucide-react';

export const OrganizerDashboard: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: "Sarah's Wedding",
      date: "Dec 15, 2024",
      location: "Grand Hotel",
      status: "confirmed",
      budget: 25000,
      vendors: 8
    },
    {
      id: 2,
      name: "Corporate Gala",
      date: "Jan 20, 2025",
      location: "Convention Center",
      status: "planning",
      budget: 50000,
      vendors: 12
    }
  ];

  const recentActivity = [
    { id: 1, action: "Photographer confirmed booking", time: "2 hours ago", type: "success" },
    { id: 2, action: "New vendor bid received", time: "4 hours ago", type: "info" },
    { id: 3, action: "Catering proposal approved", time: "1 day ago", type: "success" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Jessica!</h1>
              <p className="text-xl text-gray-600">Let's make your next event extraordinary</p>
            </div>
            <Link
              to="/create-event"
              className="inline-flex items-center bg-gradient-to-r from-primary to-accent hover:from-purple-dark hover:to-coral-dark text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Plus className="w-6 h-6 mr-2" />
              Plan New Event
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">8</h3>
            <p className="text-gray-600">Active Events</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">+8%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">34</h3>
            <p className="text-gray-600">Vendors Booked</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gold/10 rounded-xl">
                <DollarSign className="w-6 h-6 text-gold-dark" />
              </div>
              <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">-5%</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">$125K</h3>
            <p className="text-gray-600">Total Budget</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-light/10 rounded-xl">
                <Star className="w-6 h-6 text-purple-light" />
              </div>
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">New</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">4.9</h3>
            <p className="text-gray-600">Avg. Rating</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Events</h2>
                <Link to="/events" className="text-primary hover:text-purple-dark font-medium flex items-center">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.status === 'confirmed' ? 'Confirmed' : 'Planning'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">
                          Budget: <span className="font-medium">${event.budget.toLocaleString()}</span>
                        </span>
                        <span className="text-sm text-gray-600">
                          Vendors: <span className="font-medium">{event.vendors}</span>
                        </span>
                      </div>
                      <button className="text-primary hover:text-purple-dark font-medium">
                        Manage →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/vendor-discovery"
                  className="flex items-center p-3 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="ml-3 font-medium text-gray-900 group-hover:text-primary">Find Vendors</span>
                </Link>

                <Link
                  to="/package-builder"
                  className="flex items-center p-3 bg-accent/5 hover:bg-accent/10 rounded-xl transition-colors group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <span className="ml-3 font-medium text-gray-900 group-hover:text-accent">Build Package</span>
                </Link>

                <Link
                  to="/travel"
                  className="flex items-center p-3 bg-gold/5 hover:bg-gold/10 rounded-xl transition-colors group"
                >
                  <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                    <MapPin className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="ml-3 font-medium text-gray-900 group-hover:text-gold-dark">Book Travel</span>
                </Link>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {activity.type === 'success' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};