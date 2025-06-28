import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { OrganizerDashboard } from './pages/OrganizerDashboard';
import { VendorDashboard } from './pages/VendorDashboard';
import { CreateEvent } from './pages/CreateEvent';
import { PackageBuilder } from './pages/PackageBuilder';
import { VendorDiscovery } from './pages/VendorDiscovery';
import { TravelIntegrations } from './pages/TravelIntegrations';
import { VendorProfile } from './pages/VendorProfile';
import { SubmitBid } from './pages/SubmitBid';
import { EventDiscovery } from './pages/EventDiscovery';
import { TicketPurchase } from './pages/TicketPurchase';
import { TravelPlanning } from './pages/TravelPlanning';
import { CustomerDashboard } from './pages/CustomerDashboard';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Support } from './pages/Support';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/package-builder" element={<PackageBuilder />} />
            <Route path="/vendor-discovery" element={<VendorDiscovery />} />
            <Route path="/travel" element={<TravelIntegrations />} />
            <Route path="/vendor-profile" element={<VendorProfile />} />
            <Route path="/submit-bid/:eventId?" element={<SubmitBid />} />
            <Route path="/event-discovery" element={<EventDiscovery />} />
            <Route path="/ticket-purchase/:eventId" element={<TicketPurchase />} />
            <Route path="/travel-planning" element={<TravelPlanning />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;