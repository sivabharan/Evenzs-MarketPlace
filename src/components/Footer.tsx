import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-light rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  evenzs
                </span>
                <span className="text-xs text-gray-400 -mt-1">events made easy</span>
              </div>
            </Link>
            <p className="text-gray-400 text-lg mb-6 max-w-md">
              Making unforgettable events effortless. Connect with top vendors, plan seamlessly, and celebrate in style.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-dark rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-dark rounded-full hover:bg-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-dark rounded-full hover:bg-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:hello@evenzs.com"
                className="p-3 bg-slate-dark rounded-full hover:bg-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* For Event Attendees */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Event Attendees</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/event-discovery" className="hover:text-white transition-colors">
                  Discover Events
                </Link>
              </li>
              <li>
                <Link to="/customer-dashboard" className="hover:text-white transition-colors">
                  My Tickets
                </Link>
              </li>
              <li>
                <Link to="/travel-planning" className="hover:text-white transition-colors">
                  Travel Planning
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">
                  Event Support
                </Link>
              </li>
            </ul>
          </div>

          {/* For Event Professionals */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Event Professionals</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/create-event" className="hover:text-white transition-colors">
                  Plan Events
                </Link>
              </li>
              <li>
                <Link to="/vendor-discovery" className="hover:text-white transition-colors">
                  Find Vendors
                </Link>
              </li>
              <li>
                <Link 
                  to="/signin" 
                  state={{ role: 'vendor' }}
                  className="hover:text-white transition-colors"
                >
                  Join as Vendor
                </Link>
              </li>
              <li>
                <Link to="/package-builder" className="hover:text-white transition-colors">
                  Event Packages
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-dark mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-gray-400">© 2024 evenzs. All rights reserved.</p>
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <img 
                src="https://bolt.new/badge.svg" 
                alt="Built with Bolt.new" 
                className="h-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/support" className="text-gray-400 hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};