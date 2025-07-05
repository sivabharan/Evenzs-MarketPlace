import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Mail, 
  Plus, 
  Download, 
  Send, 
  Trash2, 
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  UserPlus,
  FileDown
} from 'lucide-react';
import { Event, Guest } from '../types/events';
import { mockApi, exportGuestListToCSV } from '../services/mockApi';

interface GuestManagementProps {
  event: Event;
  onEventUpdate: (updatedEvent: Event) => void;
}

export const GuestManagement: React.FC<GuestManagementProps> = ({ event, onEventUpdate }) => {
  const [guests, setGuests] = useState<Guest[]>(event.guestList);
  const [showAddGuests, setShowAddGuests] = useState(false);
  const [newGuestEmails, setNewGuestEmails] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'accepted' | 'declined'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [sendingInvites, setSendingInvites] = useState<Set<string>>(new Set());

  useEffect(() => {
    setGuests(event.guestList);
  }, [event.guestList]);

  const filteredGuests = guests.filter(guest => {
    const matchesFilter = filterStatus === 'all' || guest.rsvpStatus === filterStatus;
    const matchesSearch = searchQuery === '' || 
      guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guest.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusCounts = () => {
    return {
      total: guests.length,
      accepted: guests.filter(g => g.rsvpStatus === 'accepted').length,
      declined: guests.filter(g => g.rsvpStatus === 'declined').length,
      pending: guests.filter(g => g.rsvpStatus === 'pending').length
    };
  };

  const handleAddGuests = async () => {
    if (!newGuestEmails.trim()) return;

    setLoading(true);
    try {
      const emailList = newGuestEmails
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.includes('@'));

      const newGuests = emailList.map(email => {
        const name = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return {
          name,
          email,
          rsvpStatus: 'pending' as const,
          invitedAt: new Date().toISOString()
        };
      });

      const updatedEvent = await mockApi.addGuestsToEvent(event.id, newGuests);
      setGuests(updatedEvent.guestList);
      onEventUpdate(updatedEvent);
      setNewGuestEmails('');
      setShowAddGuests(false);
    } catch (error) {
      console.error('Error adding guests:', error);
      alert('Failed to add guests. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendInvite = async (guestId: string) => {
    setSendingInvites(prev => new Set(prev).add(guestId));
    try {
      await mockApi.sendEvite(guestId);
      alert('Invite sent successfully!');
    } catch (error) {
      console.error('Error sending invite:', error);
      alert('Failed to send invite. Please try again.');
    } finally {
      setSendingInvites(prev => {
        const newSet = new Set(prev);
        newSet.delete(guestId);
        return newSet;
      });
    }
  };

  const handleRemoveGuest = async (guestId: string) => {
    if (!confirm('Are you sure you want to remove this guest?')) return;

    try {
      const updatedEvent = await mockApi.removeGuest(event.id, guestId);
      setGuests(updatedEvent.guestList);
      onEventUpdate(updatedEvent);
    } catch (error) {
      console.error('Error removing guest:', error);
      alert('Failed to remove guest. Please try again.');
    }
  };

  const handleExportGuestList = () => {
    exportGuestListToCSV(guests, event.title);
  };

  const getStatusIcon = (status: Guest['rsvpStatus']) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'declined':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusBadge = (status: Guest['rsvpStatus']) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case 'accepted':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'declined':
        return `${baseClasses} bg-red-100 text-red-800`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
    }
  };

  const statusCounts = getStatusCounts();

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Users className="w-6 h-6 text-primary mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Guest Management</h2>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleExportGuestList}
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Export CSV
          </button>
          <button
            onClick={() => setShowAddGuests(true)}
            className="flex items-center bg-primary hover:bg-purple-dark text-white px-4 py-2 rounded-xl transition-colors"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add Guests
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-gray-900">{statusCounts.total}</div>
          <div className="text-sm text-gray-600">Total Invited</div>
        </div>
        <div className="bg-green-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{statusCounts.accepted}</div>
          <div className="text-sm text-gray-600">Accepted</div>
        </div>
        <div className="bg-red-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-red-600">{statusCounts.declined}</div>
          <div className="text-sm text-gray-600">Declined</div>
        </div>
        <div className="bg-yellow-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600">{statusCounts.pending}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guests by name or email..."
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="all">All Guests</option>
            <option value="accepted">Accepted</option>
            <option value="declined">Declined</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Guest List */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Guest</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">RSVP Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-900">Invited</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGuests.map((guest) => (
              <tr key={guest.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    {getStatusIcon(guest.rsvpStatus)}
                    <span className="ml-3 font-medium text-gray-900">{guest.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{guest.email}</td>
                <td className="py-4 px-4">
                  <span className={getStatusBadge(guest.rsvpStatus)}>
                    {guest.rsvpStatus.charAt(0).toUpperCase() + guest.rsvpStatus.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600">
                  {new Date(guest.invitedAt).toLocaleDateString()}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => handleResendInvite(guest.id)}
                      disabled={sendingInvites.has(guest.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                      title="Resend Invite"
                    >
                      {sendingInvites.has(guest.id) ? (
                        <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => handleRemoveGuest(guest.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove Guest"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredGuests.length === 0 && (
          <div className="text-center py-8">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              {searchQuery || filterStatus !== 'all' 
                ? 'No guests match your search criteria.' 
                : 'No guests added yet. Click "Add Guests" to get started.'}
            </p>
          </div>
        )}
      </div>

      {/* Add Guests Modal */}
      {showAddGuests && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Add Guests</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guest Emails (one per line)
                </label>
                <textarea
                  value={newGuestEmails}
                  onChange={(e) => setNewGuestEmails(e.target.value)}
                  placeholder="john@example.com&#10;jane@example.com&#10;mike@example.com"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Enter one email address per line. Names will be auto-generated from email addresses.
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowAddGuests(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddGuests}
                  disabled={loading || !newGuestEmails.trim()}
                  className="flex-1 bg-primary hover:bg-purple-dark text-white px-4 py-3 rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Invites
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};