export interface Guest {
  id: string;
  name: string;
  email: string;
  rsvpStatus: 'pending' | 'accepted' | 'declined';
  invitedAt: string;
  respondedAt?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizerId: string;
  guestList: Guest[];
  createdAt: string;
  updatedAt: string;
}

export interface CalendarEvent {
  id: string;
  vendorId: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'available' | 'booked' | 'tentative' | 'unavailable';
  type: 'booking' | 'availability' | 'imported';
  clientName?: string;
  description?: string;
  createdAt: string;
}

export interface VendorAvailability {
  vendorId: string;
  events: CalendarEvent[];
  lastImported?: string;
  importSource?: 'google' | 'outlook' | 'manual';
}