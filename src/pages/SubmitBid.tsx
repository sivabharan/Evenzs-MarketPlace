import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Clock, 
  FileText, 
  Upload, 
  Send,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';

export const SubmitBid: React.FC = () => {
  const { eventId } = useParams();
  const [bidAmount, setBidAmount] = useState('');
  const [message, setMessage] = useState('');
  const [timeline, setTimeline] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);

  // Mock event data - in real app this would come from API
  const eventData = {
    id: eventId || '1',
    title: 'Anniversary Party',
    type: 'Birthday Celebration',
    date: 'February 14, 2025',
    location: 'Downtown San Francisco',
    guests: '50-75 people',
    budget: '$2,000 - $3,000',
    description: 'Looking for a professional photographer to capture our 25th wedding anniversary celebration. We want both candid moments and formal family portraits. The event will be held at a beautiful rooftop venue with city views.',
    requirements: [
      'Professional photography equipment',
      'Experience with evening/low-light photography',
      'Ability to capture both candid and posed shots',
      'Delivery of edited photos within 2 weeks',
      'High-resolution digital gallery'
    ],
    organizer: 'Maria Rodriguez',
    postedDate: 'January 15, 2025',
    bidsCount: 3
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle bid submission
    console.log({
      eventId,
      bidAmount,
      message,
      timeline,
      attachments
    });
    // Show success message or redirect
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Submit Your Bid</h1>
            <p className="text-xl text-gray-600">Propose your services for this event</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Event Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{eventData.title}</h3>
                  <p className="text-sm text-gray-600">{eventData.type}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{eventData.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{eventData.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{eventData.guests}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium text-accent">{eventData.budget}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-700">{eventData.description}</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {eventData.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200 text-sm text-gray-600">
                  <p>Posted by <span className="font-medium">{eventData.organizer}</span></p>
                  <p>{eventData.postedDate}</p>
                  <p className="text-accent font-medium">{eventData.bidsCount} bids submitted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bid Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pricing */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Your Proposal</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Bid Amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="number"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="2500"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Enter your total service fee</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Timeline
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="1-week">1 week</option>
                        <option value="2-weeks">2 weeks</option>
                        <option value="3-weeks">3 weeks</option>
                        <option value="1-month">1 month</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Message</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proposal Details
                  </label>
                  <textarea
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your approach, experience with similar events, what's included in your service, and why you're the best choice for this event..."
                  />
                </div>
              </div>

              {/* Attachments */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Samples</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-lg font-medium text-gray-900 mb-2">
                    Upload relevant work samples
                  </div>
                  <div className="text-gray-600 mb-4">
                    Share photos from similar events to showcase your style
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-colors cursor-pointer inline-block"
                  >
                    Choose Files
                  </label>
                </div>

                {attachments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Uploaded Files:</h4>
                    <div className="space-y-2">
                      {attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Your Credentials */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Credentials</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">4.9 Rating</div>
                    <div className="text-sm text-gray-600">127 reviews</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-xl">
                    <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">8+ Years</div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                  <div className="text-center p-4 bg-gold/5 rounded-xl">
                    <CheckCircle className="w-8 h-8 text-gold-dark mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Booking rate</div>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end space-x-4">
                <Link
                  to="/vendor-dashboard"
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Save as Draft
                </Link>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:from-purple-dark hover:to-coral-dark text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg flex items-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Bid
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};