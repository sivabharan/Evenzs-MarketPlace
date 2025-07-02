import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  FileText, 
  Presentation, 
  Palette,
  Layout,
  Image,
  BarChart3,
  Users,
  Calendar,
  Sparkles,
  CheckCircle
} from 'lucide-react';

export const PPTTemplate: React.FC = () => {
  const handleDownload = () => {
    // In a real implementation, this would generate and download the actual PPT file
    // For now, we'll create a mock download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Evenzs-PowerPoint-Template.pptx';
    
    // Show download notification
    alert('PowerPoint template download started! (This is a demo - in production, the actual .pptx file would download)');
  };

  const templateFeatures = [
    {
      icon: Palette,
      title: 'Brand Colors',
      description: 'Coral pink (#FF4F6A) and mango orange (#FFA533) color scheme'
    },
    {
      icon: Layout,
      title: '15+ Slide Layouts',
      description: 'Title slides, content layouts, charts, and more'
    },
    {
      icon: Image,
      title: 'Image Placeholders',
      description: 'Pre-designed spaces for your event photos'
    },
    {
      icon: BarChart3,
      title: 'Chart Templates',
      description: 'Data visualization slides with brand styling'
    },
    {
      icon: Users,
      title: 'Team Slides',
      description: 'Introduce your event planning team'
    },
    {
      icon: Calendar,
      title: 'Timeline Layouts',
      description: 'Event planning and execution timelines'
    }
  ];

  const slideLayouts = [
    {
      title: 'Title Slide',
      description: 'Event name, date, and branding',
      preview: 'bg-gradient-to-br from-primary to-accent'
    },
    {
      title: 'Agenda',
      description: 'Event schedule and timeline',
      preview: 'bg-white border-2 border-primary'
    },
    {
      title: 'Speaker Introduction',
      description: 'Presenter profiles and bios',
      preview: 'bg-gradient-to-r from-accent/20 to-primary/20'
    },
    {
      title: 'Content Slide',
      description: 'Main presentation content',
      preview: 'bg-neutral border border-gray-200'
    },
    {
      title: 'Image Gallery',
      description: 'Event photos and highlights',
      preview: 'bg-gradient-to-br from-mango/30 to-coral/30'
    },
    {
      title: 'Thank You',
      description: 'Closing slide with contact info',
      preview: 'bg-gradient-to-br from-secondary to-midnight'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link 
            to="/"
            className="flex items-center text-gray-600 hover:text-[#FF4F6A] transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">PowerPoint Template</h1>
            <p className="text-xl text-gray-600">Professional presentation template with Evenzs branding</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 sm:p-12 text-white mb-8">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                <Presentation className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Evenzs PowerPoint Template</h2>
                <p className="text-white/90 text-lg">Professional presentation template with our signature coral and mango design</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">15+ Slides</div>
                <div className="text-sm text-white/80">Ready to use</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Palette className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Brand Colors</div>
                <div className="text-sm text-white/80">Coral & Mango</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <Sparkles className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Professional</div>
                <div className="text-sm text-white/80">Event ready</div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center text-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Template (.pptx)
            </button>
          </div>
        </div>

        {/* Template Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Template Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide Layouts Preview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Slide Layouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slideLayouts.map((layout, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-32 ${layout.preview} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-8 h-1 bg-white/50 rounded mb-2 mx-auto"></div>
                    <div className="w-12 h-1 bg-white/30 rounded mb-2 mx-auto"></div>
                    <div className="w-6 h-1 bg-white/30 rounded mx-auto"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{layout.title}</h3>
                  <p className="text-sm text-gray-600">{layout.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-full h-20 bg-[#FF4F6A] rounded-xl mb-3"></div>
              <div className="font-medium text-gray-900">Coral Pink</div>
              <div className="text-sm text-gray-600">#FF4F6A</div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-[#FFA533] rounded-xl mb-3"></div>
              <div className="font-medium text-gray-900">Mango Orange</div>
              <div className="text-sm text-gray-600">#FFA533</div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-[#1E2A38] rounded-xl mb-3"></div>
              <div className="font-medium text-gray-900">Midnight Blue</div>
              <div className="text-sm text-gray-600">#1E2A38</div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-[#F4F5F7] rounded-xl mb-3 border border-gray-200"></div>
              <div className="font-medium text-gray-900">Neutral Gray</div>
              <div className="text-sm text-gray-600">#F4F5F7</div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">15+ professionally designed slide layouts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Evenzs brand colors and fonts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Image placeholders and layouts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Chart and graph templates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Icon library and graphics</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Perfect For:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">Event planning presentations</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">Client proposals and pitches</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">Event analytics and reports</span>
                </div>
                <div className="flex items-center">
                  <Presentation className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">Team meetings and updates</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">Marketing presentations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Stunning Presentations?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Download our professional PowerPoint template and start creating beautiful presentations that match the Evenzs brand.
            </p>
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary to-accent hover:from-[#E63946] hover:to-[#E6941A] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center mx-auto text-lg"
            >
              <Download className="w-6 h-6 mr-3" />
              Download PowerPoint Template
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Compatible with PowerPoint 2016+ and Google Slides
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};