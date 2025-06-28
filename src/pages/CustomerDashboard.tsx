import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Ticket, 
  MapPin, 
  Clock, 
  Star,
  Download,
  QrCode,
  Plane,
  Hotel,
  Car,
  Plus,
  Eye,
  Share2,
  Heart,
  Bell,
  Settings,
  CreditCard,
  User,
  ArrowRight
} from 'lucide-react';

export const CustomerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tickets');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Summer Music Festival 2025',
      date: 'July 15-17, 2025',
      time: '2:00 PM - 11:00 PM',
      location: 'Golden Gate Park, San Francisco',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketType: 'General Admission',
      quantity: 2,
      totalPaid: 258,
      confirmationCode: 'EVZ-789123',
      status: 'confirmed',
      qrCode: true,
      travelBooked: true
    },
    {
      id: 2,
      title: 'Tech Innovation Summit',
      date: 'March 22, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Moscone Center, San Francisco',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      ticketType: 'VIP Pass',
      quantity: 1,
      totalPaid: 599,
      confirmationCode: 'EVZ-456789',
      status: 'confirmed',
      qrCode: true,
      travelBooked: false
    }
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'Jazz Under the Stars',
      date: 'December 5, 2024',
      location: 'Napa Valley, CA',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      reviewed: true
    },
    {
      id: 4,
      title: 'Art & Wine Gallery Night',
      date: 'November 28, 2024',
      location: 'SOMA District, San Francisco',
      image: 'https://images.pexels.com/photos/1153069/pexels-photo-1153069.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 0,
      reviewed: false
    }
  ];

  const travelItinerary = [
    {
      id: 1,
      eventId: 1,
      eventTitle: 'Summer Music Festival 2025',
      type: 'flight',
      details: {
        airline: 'Delta Airlines',
        departure: 'LAX 8:30 AM',
        arrival: 'SFO 9:45 AM',
        date: 'July 15, 2025',
        confirmation: 'DL789ABC'
      }
    },
    {
      id: 2,
      eventId: 1,
      eventTitle: 'Summer Music Festival 2025',
      type: 'hotel',
      details: {
        name: 'Grand Festival Hotel',
        checkIn: 'July 15, 2025',
        checkOut: 'July 18, 2025',
        nights: 3,
        confirmation: 'HTL456DEF'
      }
    },
    {
      id: 3,
      eventId: 1,
      eventTitle: 'Summer Music Festival 2025',
      type: 'car',
      details: {
        type: 'Economy Car',
        pickup: 'SFO Airport',
        dropoff: 'SFO Airport',
        dates: 'July 15-18, 2025',
        confirmation: 'CAR123GHI'
      }
    }
  ];

  const favoriteEvents = [
    {
      id: 5,
      title: 'Winter Wonderland Concert',
      date: 'December 20, 2025',
      location: 'Lake Tahoe, CA',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 89,
      available: true
    },
    {
      id: 6,
      title: 'Spring Food Festival',
      date: 'April 15, 2025',
      location: 'Napa Valley, CA',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 65,
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">My Events</h1>
              <p className="text-xl text-gray-600">Manage your tickets and travel plans</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-3 text-gray-700 hover:text-primary transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
              <Link
                to="/event-discovery"
                className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Find Events
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Ticket className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{upcomingEvents.length}</h3>
            <p className="text-gray-600">Upcoming Events</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{pastEvents.length}</h3>
            <p className="text-gray-600">Events Attended</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gold/10 rounded-xl">
                <Heart className="w-6 h-6 text-gold-dark" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{favoriteEvents.length}</h3>
            <p className="text-gray-600">Saved Events</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-light/10 rounded-xl">
                <Plane className="w-6 h-6 text-purple-light" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{travelItinerary.length}</h3>
            <p className="text-gray-600">Travel Bookings</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 mb-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'tickets'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Ticket className="w-5 h-5 mr-2" />
              My Tickets
            </button>
            <button
              onClick={() => setActiveTab('travel')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'travel'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Plane className="w-5 h-5 mr-2" />
              Travel Plans
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'favorites'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Heart className="w-5 h-5 mr-2" />
              Saved Events
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 'history'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Event History
            </button>
          </div>
        </div>

        {/* Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="flex">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-48 h-48 object-cover"
                  />
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-5 h-5 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-5 h-5 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-5 h-5 mr-2" />
                            {event.location}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                            {event.ticketType}
                          </span>
                          <span className="text-gray-600">
                            {event.quantity} ticket{event.quantity !== 1 ? 's' : ''}
                          </span>
                          <span className="text-gray-600">
                            Total: ${event.totalPaid}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === 'confirmed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Confirmation: {event.confirmationCode}
                        </div>
                        {event.travelBooked && (
                          <div className="text-sm text-blue-600 mb-4 flex items-center">
                            <Plane className="w-4 h-4 mr-1" />
                            Travel booked
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button className="bg-primary hover:bg-purple-dark text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                          <QrCode className="w-4 h-4 mr-2" />
                          View Tickets
                        </button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!event.travelBooked && (
                          <Link
                            to="/travel-planning"
                            state={{ eventData: event }}
                            className="text-accent hover:text-coral-dark font-medium flex items-center"
                          >
                            Plan Travel
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        )}
                        <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Travel Tab */}
        {activeTab === 'travel' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Travel Itinerary</h2>
            {travelItinerary.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.eventTitle}</h3>
                  <div className="flex items-center">
                    {item.type === 'flight' && <Plane className="w-5 h-5 text-blue-500 mr-2" />}
                    {item.type === 'hotel' && <Hotel className="w-5 h-5 text-green-500 mr-2" />}
                    {item.type === 'car' && <Car className="w-5 h-5 text-purple-500 mr-2" />}
                    <span className="text-sm font-medium text-gray-600 capitalize">{item.type}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.type === 'flight' && (
                    <>
                      <div>
                        <div className="text-sm text-gray-600">Flight</div>
                        <div className="font-medium">{item.details.airline}</div>
                        <div className="text-sm text-gray-600">{item.details.departure} → {item.details.arrival}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Confirmation</div>
                        <div className="font-medium">{item.details.confirmation}</div>
                        <div className="text-sm text-gray-600">{item.details.date}</div>
                      </div>
                    </>
                  )}
                  
                  {item.type === 'hotel' && (
                    <>
                      <div>
                        <div className="text-sm text-gray-600">Hotel</div>
                        <div className="font-medium">{item.details.name}</div>
                        <div className="text-sm text-gray-600">{item.details.nights} nights</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Stay Dates</div>
                        <div className="font-medium">{item.details.checkIn}</div>
                        <div className="text-sm text-gray-600">to {item.details.checkOut}</div>
                      </div>
                    </>
                  )}
                  
                  {item.type === 'car' && (
                    <>
                      <div>
                        <div className="text-sm text-gray-600">Vehicle</div>
                        <div className="font-medium">{item.details.type}</div>
                        <div className="text-sm text-gray-600">{item.details.dates}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Pickup/Dropoff</div>
                        <div className="font-medium">{item.details.pickup}</div>
                        <div className="text-sm text-gray-600">Confirmation: {item.details.confirmation}</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Saved Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-primary">
                        ${event.price}
                      </div>
                      <Link
                        to={`/ticket-purchase/${event.id}`}
                        className="bg-primary hover:bg-purple-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Event History</h2>
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center space-x-6">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-600 mb-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    {event.reviewed ? (
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Your rating:</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < event.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <button className="text-primary hover:text-purple-dark font-medium text-sm">
                        Rate this event
                      </button>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                      <Download className="w-5 h-5" />
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