import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  DollarSign, 
  Users, 
  Heart, 
  Building2, 
  Cake, 
  Music,
  GraduationCap,
  Baby,
  ArrowRight,
  Upload,
  Sparkles,
  CheckCircle,
  AlertCircle,
  X,
  Image
} from 'lucide-react';

export const CreateEvent: React.FC = () => {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [travelNeeded, setTravelNeeded] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [inspirationImages, setInspirationImages] = useState<File[]>([]);

  const eventTypes = [
    { 
      id: 'wedding', 
      label: 'Wedding', 
      icon: Heart, 
      color: 'text-accent',
      description: 'Celebrate your special day',
      suggestedBudget: '$15,000 - $50,000',
      typicalServices: ['Photography', 'Catering', 'Florals', 'Music', 'Venue']
    },
    { 
      id: 'corporate', 
      label: 'Corporate Event', 
      icon: Building2, 
      color: 'text-primary',
      description: 'Professional business gatherings',
      suggestedBudget: '$5,000 - $25,000',
      typicalServices: ['Catering', 'AV Equipment', 'Photography', 'Venue', 'Transportation']
    },
    { 
      id: 'birthday', 
      label: 'Birthday Party', 
      icon: Cake, 
      color: 'text-gold-dark',
      description: 'Make birthdays memorable',
      suggestedBudget: '$1,000 - $10,000',
      typicalServices: ['Catering', 'Entertainment', 'Decorations', 'Photography', 'Cake']
    },
    { 
      id: 'concert', 
      label: 'Concert/Show', 
      icon: Music, 
      color: 'text-purple-light',
      description: 'Live entertainment events',
      suggestedBudget: '$10,000 - $100,000',
      typicalServices: ['Sound System', 'Lighting', 'Security', 'Venue', 'Catering']
    },
    { 
      id: 'graduation', 
      label: 'Graduation', 
      icon: GraduationCap, 
      color: 'text-green-600',
      description: 'Celebrate achievements',
      suggestedBudget: '$2,000 - $15,000',
      typicalServices: ['Photography', 'Catering', 'Venue', 'Decorations', 'Entertainment']
    },
    { 
      id: 'baby', 
      label: 'Baby Shower', 
      icon: Baby, 
      color: 'text-pink-500',
      description: 'Welcome the new arrival',
      suggestedBudget: '$500 - $5,000',
      typicalServices: ['Catering', 'Decorations', 'Photography', 'Games', 'Venue']
    },
  ];

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    '$50,000+'
  ];

  const selectedEventType = eventTypes.find(type => type.id === eventType);

  const handleEventTypeSelect = (typeId: string) => {
    setEventType(typeId);
    const selectedType = eventTypes.find(type => type.id === typeId);
    if (selectedType) {
      // Auto-suggest budget range based on event type
      setBudgetRange(selectedType.suggestedBudget);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      
      // Validate file types (only images)
      const validFiles = newFiles.filter(file => {
        const isImage = file.type.startsWith('image/');
        const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB limit
        return isImage && isValidSize;
      });

      if (validFiles.length !== newFiles.length) {
        alert('Some files were skipped. Please upload only image files under 10MB.');
      }

      setInspirationImages(prev => [...prev, ...validFiles]);
    }
    
    // Reset the input value so the same file can be selected again
    e.target.value = '';
  };

  const removeImage = (index: number) => {
    setInspirationImages(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!eventType || !eventName || !eventDate || !eventLocation || !budgetRange || !guestCount) {
      alert('Please fill in all required fields');
      return;
    }

    // Create event data object
    const eventData = {
      type: eventType,
      name: eventName,
      date: eventDate,
      location: eventLocation,
      budget: budgetRange,
      guests: guestCount,
      description: eventDescription,
      travelNeeded,
      inspirationImages: inspirationImages.length,
      createdAt: new Date().toISOString()
    };

    // Save to localStorage (in real app, this would be an API call)
    const existingEvents = JSON.parse(localStorage.getItem('user_events') || '[]');
    const newEvent = { ...eventData, id: Date.now().toString() };
    existingEvents.push(newEvent);
    localStorage.setItem('user_events', JSON.stringify(existingEvents));

    // Show success message
    setShowSuccess(true);
    
    // Auto-hide success message and redirect after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/package-builder', { state: { eventData: newEvent } });
    }, 3000);
  };

  const handleQuickRecommendation = () => {
    if (!eventType) {
      alert('Please select an event type first');
      return;
    }
    
    // Navigate to package builder with current data
    const eventData = {
      type: eventType,
      name: eventName || `My ${selectedEventType?.label}`,
      date: eventDate,
      location: eventLocation,
      budget: budgetRange,
      guests: guestCount,
      description: eventDescription,
      travelNeeded,
      inspirationImages: inspirationImages.length
    };
    
    navigate('/package-builder', { state: { eventData } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center animate-bounce">
          <CheckCircle className="w-6 h-6 mr-3" />
          <span className="font-semibold">Event created successfully! Redirecting to package builder...</span>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl mb-6">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Plan Your Perfect Event
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your vision and we'll help you bring it to life with the perfect vendors and services.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Event Type Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What type of event are you planning?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {eventTypes.map((type) => {
                const IconComponent = type.icon;
                const isSelected = eventType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleEventTypeSelect(type.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 text-left ${
                      isSelected
                        ? 'border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20'
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent className={`w-8 h-8 ${type.color}`} />
                      {isSelected && <CheckCircle className="w-6 h-6 text-primary" />}
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">{type.label}</div>
                    <div className="text-sm text-gray-600 mb-2">{type.description}</div>
                    <div className="text-xs text-primary font-medium">{type.suggestedBudget}</div>
                  </button>
                );
              })}
            </div>

            {/* Selected Event Type Details */}
            {selectedEventType && (
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Typical services for {selectedEventType.label}:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEventType.typicalServices.map((service) => (
                    <span key={service} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Name *
                </label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder={selectedEventType ? `My ${selectedEventType.label}` : "Give your event a memorable name"}
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="City, State or Venue"
                  />
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expected Guests *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select guest count</option>
                    <option value="1-25">1-25 guests</option>
                    <option value="26-50">26-50 guests</option>
                    <option value="51-100">51-100 guests</option>
                    <option value="101-200">101-200 guests</option>
                    <option value="200+">200+ guests</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Details</h2>
            
            {/* Event Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Description
              </label>
              <textarea
                rows={4}
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                placeholder="Tell us about your vision, theme, or any special requirements..."
              />
            </div>

            {/* Inspiration Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inspiration Images (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-primary transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <div className="text-lg font-medium text-gray-900 mb-2">
                  Upload inspiration photos
                </div>
                <div className="text-gray-600 mb-4">
                  Share images that capture your event vision (Max 10MB per file)
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="inspiration-upload"
                />
                <label
                  htmlFor="inspiration-upload"
                  className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer inline-block"
                >
                  Choose Files
                </label>
              </div>

              {/* Display uploaded files */}
              {inspirationImages.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Uploaded Images ({inspirationImages.length})
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {inspirationImages.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                          <div className="w-full h-full flex items-center justify-center">
                            <Image className="w-8 h-8 text-gray-400" />
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="mt-2">
                          <p className="text-xs text-gray-600 truncate" title={file.name}>
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Travel Integration Toggle */}
            <div className="flex items-center justify-between p-4 bg-gold/5 rounded-xl">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Need travel arrangements?</h3>
                <p className="text-sm text-gray-600">We can help coordinate hotels, flights, and transportation</p>
              </div>
              <button
                type="button"
                onClick={() => setTravelNeeded(!travelNeeded)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  travelNeeded ? 'bg-primary' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    travelNeeded ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={handleQuickRecommendation}
              disabled={!eventType}
              className={`inline-flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg ${
                eventType 
                  ? 'bg-gradient-to-r from-primary to-accent hover:from-purple-dark hover:to-coral-dark text-white hover:scale-105' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Get Quick Recommendations
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button
              type="submit"
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
            >
              Create Event & Browse Vendors
            </button>
          </div>

          {/* Help Text */}
          {!eventType && (
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <AlertCircle className="w-4 h-4 mr-2" />
              Please select an event type to continue
            </div>
          )}
        </form>
      </div>
    </div>
  );
};