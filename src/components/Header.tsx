import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Bell, User, Menu, LogOut, Settings, ChevronDown, Ticket, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const isDashboard = location.pathname.includes('-dashboard');

  const handleSignOut = () => {
    signOut();
    setShowUserMenu(false);
    navigate('/');
  };

  const getUserDashboard = () => {
    if (user?.role === 'organizer') return '/organizer-dashboard';
    if (user?.role === 'vendor') return '/vendor-dashboard';
    return '/customer-dashboard';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Updated logo to match evenzs.com style */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-light rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-light bg-clip-text text-transparent">
                evenzs
              </span>
              <span className="text-xs text-slate-light -mt-1">events made easy</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isDashboard && !isAuthenticated && (
              <>
                <Link to="/event-discovery" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Discover Events
                </Link>
                <Link to="/vendor-discovery" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Find Vendors
                </Link>
                <Link to="/travel" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Travel
                </Link>
                <Link to="/create-event" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Plan Event
                </Link>
              </>
            )}
            {isAuthenticated && !isDashboard && (
              <>
                <Link to="/event-discovery" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Discover Events
                </Link>
                <Link to="/vendor-discovery" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Find Vendors
                </Link>
                <Link to="/travel" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Travel
                </Link>
                <Link to="/create-event" className="text-slate-light hover:text-primary transition-colors font-medium">
                  Plan Event
                </Link>
                <Link to={getUserDashboard()} className="text-slate-light hover:text-primary transition-colors font-medium">
                  Dashboard
                </Link>
              </>
            )}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {isDashboard && isAuthenticated && (
              <button className="relative p-2 text-slate-light hover:text-primary transition-colors">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            )}
            
            {!isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link 
                  to="/event-discovery"
                  className="flex items-center space-x-2 text-slate-light hover:text-primary px-4 py-2 rounded-full transition-colors"
                >
                  <Ticket size={18} />
                  <span className="font-medium">Buy Tickets</span>
                </Link>
                <Link 
                  to="/signin" 
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary to-purple-light hover:from-purple-dark hover:to-primary text-white px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <User size={18} />
                  <span className="font-medium">Sign In</span>
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-3 bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-full transition-all duration-300 hover:shadow-md"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-secondary">{user.name}</div>
                    <div className="text-xs text-slate-light capitalize">{user.role}</div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-light transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* User Menu Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-secondary">{user.name}</div>
                          <div className="text-sm text-slate-light">{user.email}</div>
                          <div className="text-xs text-primary capitalize font-medium">{user.role}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2">
                      <Link
                        to={getUserDashboard()}
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center px-4 py-2 text-slate-light hover:bg-gray-50 transition-colors"
                      >
                        <User className="w-4 h-4 mr-3" />
                        Dashboard
                      </Link>

                      {/* Customer-specific menu items */}
                      {(!user.role || user.role === 'customer') && (
                        <>
                          <Link
                            to="/customer-dashboard"
                            onClick={() => setShowUserMenu(false)}
                            className="flex items-center px-4 py-2 text-slate-light hover:bg-gray-50 transition-colors"
                          >
                            <Ticket className="w-4 h-4 mr-3" />
                            My Tickets
                          </Link>
                          <Link
                            to="/event-discovery"
                            onClick={() => setShowUserMenu(false)}
                            className="flex items-center px-4 py-2 text-slate-light hover:bg-gray-50 transition-colors"
                          >
                            <Calendar className="w-4 h-4 mr-3" />
                            Find Events
                          </Link>
                        </>
                      )}
                      
                      {user.role === 'vendor' && (
                        <Link
                          to="/vendor-profile"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center px-4 py-2 text-slate-light hover:bg-gray-50 transition-colors"
                        >
                          <Settings className="w-4 h-4 mr-3" />
                          Profile Settings
                        </Link>
                      )}
                      
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <button className="md:hidden p-2 text-slate-light hover:text-primary transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </header>
  );
};