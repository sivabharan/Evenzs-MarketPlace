import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Bell, User, Menu, LogOut, Settings, ChevronDown, Ticket, Users, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, signOut } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isDashboard = location.pathname.includes('-dashboard');

  const handleSignOut = () => {
    signOut();
    setShowUserMenu(false);
    setShowMobileMenu(false);
    navigate('/');
  };

  const getUserDashboard = () => {
    if (user?.role === 'organizer') return '/organizer-dashboard';
    if (user?.role === 'vendor') return '/vendor-dashboard';
    return '/customer-dashboard';
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="group flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-200">
              <Logo size="sm" animated={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {!isDashboard && !isAuthenticated && (
                <>
                  <Link 
                    to="/event-discovery" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Discover Events
                  </Link>
                  <Link 
                    to="/vendor-discovery" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Find Vendors
                  </Link>
                  <Link 
                    to="/travel" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Travel
                  </Link>
                  <Link 
                    to="/create-event" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Plan Event
                  </Link>
                </>
              )}
              {isAuthenticated && !isDashboard && (
                <>
                  <Link 
                    to="/event-discovery" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Discover Events
                  </Link>
                  <Link 
                    to="/vendor-discovery" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Find Vendors
                  </Link>
                  <Link 
                    to="/travel" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Travel
                  </Link>
                  <Link 
                    to="/create-event" 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Plan Event
                  </Link>
                  <Link 
                    to={getUserDashboard()} 
                    className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {isDashboard && isAuthenticated && (
                <button className="relative p-2 text-gray-700 hover:text-primary transition-colors cursor-pointer hover:bg-gray-50 rounded-lg transform hover:scale-110 transition-all duration-200">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    3
                  </span>
                </button>
              )}
              
              {!isAuthenticated ? (
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Link 
                    to="/event-discovery"
                    className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-primary px-3 py-2 rounded-full transition-colors cursor-pointer hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                  >
                    <Ticket size={16} />
                    <span className="font-medium text-sm">Buy Tickets</span>
                  </Link>
                  <Link 
                    to="/signin" 
                    className="flex items-center space-x-1 sm:space-x-2 bg-sunset-gradient hover:shadow-coral-glow text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-coral-glow text-sm sm:text-base cursor-pointer transform active:scale-95"
                  >
                    <User size={16} />
                    <span className="font-medium">Sign In</span>
                  </Link>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 sm:space-x-3 bg-white hover:bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:shadow-md cursor-pointer transform hover:scale-105 active:scale-95"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-700 capitalize">{user.role}</div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {/* User Menu Dropdown */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 sm:w-64 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50 animate-mobile-safe">
                      <div className="px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-700">{user.email}</div>
                            <div className="text-xs text-primary capitalize font-medium">{user.role}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="py-2">
                        <Link
                          to={getUserDashboard()}
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer hover:text-primary transform hover:translate-x-1 transition-all duration-200"
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
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer hover:text-primary transform hover:translate-x-1 transition-all duration-200"
                            >
                              <Ticket className="w-4 h-4 mr-3" />
                              My Tickets
                            </Link>
                            <Link
                              to="/event-discovery"
                              onClick={() => setShowUserMenu(false)}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer hover:text-primary transform hover:translate-x-1 transition-all duration-200"
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
                            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer hover:text-primary transform hover:translate-x-1 transition-all duration-200"
                          >
                            <Settings className="w-4 h-4 mr-3" />
                            Profile Settings
                          </Link>
                        )}
                        
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-colors cursor-pointer transform hover:translate-x-1 transition-all duration-200"
                        >
                          <LogOut className="w-4 h-4 mr-3" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors cursor-pointer hover:bg-gray-50 rounded-lg transform hover:scale-110 transition-all duration-200"
              >
                {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-mobile-safe">
            <div className="px-4 py-4 space-y-3">
              {!isDashboard && !isAuthenticated && (
                <>
                  <Link 
                    to="/event-discovery" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Discover Events
                  </Link>
                  <Link 
                    to="/vendor-discovery" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Find Vendors
                  </Link>
                  <Link 
                    to="/travel" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Travel
                  </Link>
                  <Link 
                    to="/create-event" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Plan Event
                  </Link>
                </>
              )}
              {isAuthenticated && !isDashboard && (
                <>
                  <Link 
                    to="/event-discovery" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Discover Events
                  </Link>
                  <Link 
                    to="/vendor-discovery" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Find Vendors
                  </Link>
                  <Link 
                    to="/travel" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Travel
                  </Link>
                  <Link 
                    to="/create-event" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Plan Event
                  </Link>
                  <Link 
                    to={getUserDashboard()} 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors font-medium cursor-pointer transform hover:translate-x-2 transition-all duration-200"
                  >
                    Dashboard
                  </Link>
                </>
              )}
              
              {!isAuthenticated && (
                <div className="pt-3 border-t border-gray-200">
                  <Link 
                    to="/signin" 
                    onClick={closeMobileMenu}
                    className="block w-full bg-sunset-gradient text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 shadow-lg animate-coral-glow cursor-pointer transform active:scale-95"
                  >
                    Sign In / Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Overlay to close menus */}
      {(showUserMenu || showMobileMenu) && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 cursor-pointer" 
          onClick={() => {
            setShowUserMenu(false);
            setShowMobileMenu(false);
          }}
        />
      )}
    </>
  );
};