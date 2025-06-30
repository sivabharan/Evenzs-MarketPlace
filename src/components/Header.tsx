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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-platinum shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="group flex-shrink-0">
              <Logo size="sm" animated={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {!isDashboard && !isAuthenticated && (
                <>
                  <Link to="/event-discovery" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Discover Events
                  </Link>
                  <Link to="/vendor-discovery" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Find Vendors
                  </Link>
                  <Link to="/travel" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Travel
                  </Link>
                  <Link to="/create-event" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Plan Event
                  </Link>
                </>
              )}
              {isAuthenticated && !isDashboard && (
                <>
                  <Link to="/event-discovery" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Discover Events
                  </Link>
                  <Link to="/vendor-discovery" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Find Vendors
                  </Link>
                  <Link to="/travel" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Travel
                  </Link>
                  <Link to="/create-event" className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Plan Event
                  </Link>
                  <Link to={getUserDashboard()} className="text-charcoal hover:text-primary transition-colors font-medium text-sm xl:text-base">
                    Dashboard
                  </Link>
                </>
              )}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {isDashboard && isAuthenticated && (
                <button className="relative p-2 text-charcoal hover:text-primary transition-colors">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              )}
              
              {!isAuthenticated ? (
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Link 
                    to="/event-discovery"
                    className="hidden sm:flex items-center space-x-2 text-charcoal hover:text-primary px-3 py-2 rounded-full transition-colors"
                  >
                    <Ticket size={16} />
                    <span className="font-medium text-sm">Buy Tickets</span>
                  </Link>
                  <Link 
                    to="/signin" 
                    className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-primary to-accent hover:from-gold-dark hover:to-gold-elegant text-secondary px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-gold-glow text-sm sm:text-base"
                  >
                    <User size={16} />
                    <span className="font-medium">Sign In</span>
                  </Link>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 sm:space-x-3 bg-white hover:bg-pearl border border-platinum px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:shadow-md"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <div className="hidden md:block text-left">
                      <div className="text-sm font-medium text-secondary">{user.name}</div>
                      <div className="text-xs text-charcoal capitalize">{user.role}</div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-charcoal transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
                  </button>

                  {/* User Menu Dropdown */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-56 sm:w-64 bg-white rounded-2xl shadow-xl border border-platinum py-2 z-50 animate-mobile-safe">
                      <div className="px-4 py-3 border-b border-platinum">
                        <div className="flex items-center space-x-3">
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-secondary">{user.name}</div>
                            <div className="text-sm text-charcoal">{user.email}</div>
                            <div className="text-xs text-primary capitalize font-medium">{user.role}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="py-2">
                        <Link
                          to={getUserDashboard()}
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center px-4 py-3 text-charcoal hover:bg-pearl transition-colors"
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
                              className="flex items-center px-4 py-3 text-charcoal hover:bg-pearl transition-colors"
                            >
                              <Ticket className="w-4 h-4 mr-3" />
                              My Tickets
                            </Link>
                            <Link
                              to="/event-discovery"
                              onClick={() => setShowUserMenu(false)}
                              className="flex items-center px-4 py-3 text-charcoal hover:bg-pearl transition-colors"
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
                            className="flex items-center px-4 py-3 text-charcoal hover:bg-pearl transition-colors"
                          >
                            <Settings className="w-4 h-4 mr-3" />
                            Profile Settings
                          </Link>
                        )}
                        
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
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
                className="lg:hidden p-2 text-charcoal hover:text-primary transition-colors"
              >
                {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t border-platinum shadow-lg animate-mobile-safe">
            <div className="px-4 py-4 space-y-3">
              {!isDashboard && !isAuthenticated && (
                <>
                  <Link 
                    to="/event-discovery" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Discover Events
                  </Link>
                  <Link 
                    to="/vendor-discovery" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Find Vendors
                  </Link>
                  <Link 
                    to="/travel" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Travel
                  </Link>
                  <Link 
                    to="/create-event" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
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
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Discover Events
                  </Link>
                  <Link 
                    to="/vendor-discovery" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Find Vendors
                  </Link>
                  <Link 
                    to="/travel" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Travel
                  </Link>
                  <Link 
                    to="/create-event" 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Plan Event
                  </Link>
                  <Link 
                    to={getUserDashboard()} 
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-charcoal hover:text-primary hover:bg-pearl rounded-xl transition-colors font-medium"
                  >
                    Dashboard
                  </Link>
                </>
              )}
              
              {!isAuthenticated && (
                <div className="pt-3 border-t border-platinum">
                  <Link 
                    to="/signin" 
                    onClick={closeMobileMenu}
                    className="block w-full bg-gradient-to-r from-primary to-accent text-secondary py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105 shadow-lg animate-gold-glow"
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
          className="fixed inset-0 z-40 bg-black/20" 
          onClick={() => {
            setShowUserMenu(false);
            setShowMobileMenu(false);
          }}
        />
      )}
    </>
  );
};