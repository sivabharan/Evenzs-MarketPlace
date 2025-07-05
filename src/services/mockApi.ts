import { Event, Guest, CalendarEvent, VendorAvailability } from '../types/events';

// Mock data storage
let mockEvents: Event[] = [
  {
    id: '1',
    title: "Sarah's Wedding",
    description: 'Beautiful outdoor ceremony',
    date: '2025-06-15',
    time: '16:00',
    location: 'Grand Hotel, San Francisco',
    organizerId: 'org_123',
    guestList: [
      {
        id: 'guest_1',
        name: 'John Smith',
        email: 'john@example.com',
        rsvpStatus: 'accepted',
        invitedAt: '2024-12-01T10:00:00Z',
        respondedAt: '2024-12-02T14:30:00Z'
      },
      {
        id: 'guest_2',
        name: 'Emily Johnson',
        email: 'emily@example.com',
        rsvpStatus: 'pending',
        invitedAt: '2024-12-01T10:00:00Z'
      },
      {
        id: 'guest_3',
        name: 'Michael Brown',
        email: 'michael@example.com',
        rsvpStatus: 'declined',
        invitedAt: '2024-12-01T10:00:00Z',
        respondedAt: '2024-12-03T09:15:00Z'
      }
    ],
    createdAt: '2024-12-01T09:00:00Z',
    updatedAt: '2024-12-01T09:00:00Z'
  }
];

let mockCalendarEvents: CalendarEvent[] = [
  {
    id: 'cal_1',
    vendorId: 'vendor_456',
    title: 'Wedding Photography - Johnson',
    date: '2024-12-25',
    startTime: '14:00',
    endTime: '22:00',
    status: 'booked',
    type: 'booking',
    clientName: 'Sarah Johnson',
    description: 'Wedding ceremony and reception photography',
    createdAt: '2024-12-01T10:00:00Z'
  },
  {
    id: 'cal_2',
    vendorId: 'vendor_456',
    title: 'Available for Bookings',
    date: '2024-12-26',
    startTime: '10:00',
    endTime: '18:00',
    status: 'available',
    type: 'availability',
    description: 'Open for portrait sessions or events',
    createdAt: '2024-12-01T10:00:00Z'
  },
  {
    id: 'cal_3',
    vendorId: 'vendor_456',
    title: 'Corporate Event - Tech Corp',
    date: '2024-12-28',
    startTime: '09:00',
    endTime: '17:00',
    status: 'tentative',
    type: 'booking',
    clientName: 'Tech Corp',
    description: 'Annual company meeting photography',
    createdAt: '2024-12-01T10:00:00Z'
  }
];

// Mock API functions
export const mockApi = {
  // Event & Guest Management
  async getEvents(organizerId: string): Promise<Event[]> {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return mockEvents.filter(event => event.organizerId === organizerId);
  },

  async getEvent(eventId: string): Promise<Event | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockEvents.find(event => event.id === eventId) || null;
  },

  async updateEvent(eventId: string, updates: Partial<Event>): Promise<Event> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const eventIndex = mockEvents.findIndex(event => event.id === eventId);
    if (eventIndex === -1) throw new Error('Event not found');
    
    mockEvents[eventIndex] = {
      ...mockEvents[eventIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    return mockEvents[eventIndex];
  },

  async addGuestsToEvent(eventId: string, guests: Omit<Guest, 'id'>[]): Promise<Event> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const event = mockEvents.find(e => e.id === eventId);
    if (!event) throw new Error('Event not found');

    const newGuests: Guest[] = guests.map(guest => ({
      ...guest,
      id: `guest_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }));

    event.guestList.push(...newGuests);
    event.updatedAt = new Date().toISOString();

    // Mock sending invites
    console.log('📧 Sending invites to:', newGuests.map(g => g.email));
    
    return event;
  },

  async sendEvite(guestId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log(`📧 Evite sent to guest ${guestId}`);
    return true;
  },

  async updateRSVP(guestId: string, status: 'accepted' | 'declined'): Promise<Guest> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    for (const event of mockEvents) {
      const guest = event.guestList.find(g => g.id === guestId);
      if (guest) {
        guest.rsvpStatus = status;
        guest.respondedAt = new Date().toISOString();
        return guest;
      }
    }
    throw new Error('Guest not found');
  },

  async removeGuest(eventId: string, guestId: string): Promise<Event> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const event = mockEvents.find(e => e.id === eventId);
    if (!event) throw new Error('Event not found');

    event.guestList = event.guestList.filter(g => g.id !== guestId);
    event.updatedAt = new Date().toISOString();
    return event;
  },

  // Calendar Management
  async getVendorCalendar(vendorId: string): Promise<CalendarEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockCalendarEvents.filter(event => event.vendorId === vendorId);
  },

  async addCalendarEvent(event: Omit<CalendarEvent, 'id' | 'createdAt'>): Promise<CalendarEvent> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newEvent: CalendarEvent = {
      ...event,
      id: `cal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString()
    };
    mockCalendarEvents.push(newEvent);
    return newEvent;
  },

  async updateCalendarEvent(eventId: string, updates: Partial<CalendarEvent>): Promise<CalendarEvent> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const eventIndex = mockCalendarEvents.findIndex(event => event.id === eventId);
    if (eventIndex === -1) throw new Error('Calendar event not found');
    
    mockCalendarEvents[eventIndex] = {
      ...mockCalendarEvents[eventIndex],
      ...updates
    };
    return mockCalendarEvents[eventIndex];
  },

  async deleteCalendarEvent(eventId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const eventIndex = mockCalendarEvents.findIndex(event => event.id === eventId);
    if (eventIndex === -1) return false;
    
    mockCalendarEvents.splice(eventIndex, 1);
    return true;
  },

  async importExternalCalendar(vendorId: string, source: 'google' | 'outlook'): Promise<CalendarEvent[]> {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate longer import process
    
    // Mock imported events
    const importedEvents: CalendarEvent[] = [
      {
        id: `imported_${Date.now()}_1`,
        vendorId,
        title: `${source === 'google' ? 'Google' : 'Outlook'} Meeting - Client Consultation`,
        date: '2024-12-30',
        startTime: '14:00',
        endTime: '15:00',
        status: 'booked',
        type: 'imported',
        description: `Imported from ${source} Calendar`,
        createdAt: new Date().toISOString()
      },
      {
        id: `imported_${Date.now()}_2`,
        vendorId,
        title: `${source === 'google' ? 'Google' : 'Outlook'} Event - Personal Appointment`,
        date: '2025-01-02',
        startTime: '10:00',
        endTime: '12:00',
        status: 'unavailable',
        type: 'imported',
        description: `Imported from ${source} Calendar`,
        createdAt: new Date().toISOString()
      }
    ];

    mockCalendarEvents.push(...importedEvents);
    console.log(`📅 Imported ${importedEvents.length} events from ${source}`);
    return importedEvents;
  }
};

// Utility functions
export const exportGuestListToCSV = (guests: Guest[], eventTitle: string): void => {
  const headers = ['Name', 'Email', 'RSVP Status', 'Invited At', 'Responded At'];
  const csvContent = [
    headers.join(','),
    ...guests.map(guest => [
      guest.name,
      guest.email,
      guest.rsvpStatus,
      new Date(guest.invitedAt).toLocaleDateString(),
      guest.respondedAt ? new Date(guest.respondedAt).toLocaleDateString() : 'N/A'
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${eventTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_guest_list.csv`;
  link.click();
  window.URL.revokeObjectURL(url);
};