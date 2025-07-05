import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { VendorCalendar } from '../components/VendorCalendar';
import { useAuth } from '../contexts/AuthContext';

export const VendorCalendarPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/vendor-dashboard"
            className="flex items-center text-gray-600 hover:text-primary transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Calendar Management</h1>
            <p className="text-xl text-gray-600">Manage your availability and bookings</p>
          </div>
        </div>

        {/* Calendar Component */}
        <VendorCalendar vendorId={user?.id || 'vendor_456'} />
      </div>
    </div>
  );
};