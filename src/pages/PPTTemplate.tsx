import React, { useState } from 'react';
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
  CheckCircle,
  Loader2
} from 'lucide-react';

export const PPTTemplate: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePowerPointTemplate = async () => {
    setIsGenerating(true);
    
    try {
      // Dynamic import to avoid build issues
      const PptxGenJS = (await import('pptxgenjs')).default;
      
      // Create new presentation
      const pres = new PptxGenJS();
      
      // Set presentation properties
      pres.author = 'Evenzs';
      pres.company = 'Evenzs Event Platform';
      pres.subject = 'Event Planning Presentation Template';
      pres.title = 'Evenzs PowerPoint Template';
      
      // Define brand colors
      const colors = {
        primary: 'FF4F6A',    // Coral Pink
        secondary: 'FFA533',  // Mango Orange
        dark: '1E2A38',       // Midnight Blue
        light: 'F4F5F7',      // Neutral Gray
        white: 'FFFFFF'
      };

      // Slide 1: Title Slide
      const slide1 = pres.addSlide();
      slide1.background = { fill: `${colors.primary}` };
      
      slide1.addText('EVENZS', {
        x: 1, y: 2, w: 8, h: 1.5,
        fontSize: 48, bold: true, color: colors.white,
        align: 'center', fontFace: 'Arial'
      });
      
      slide1.addText('Event Planning Made Effortless', {
        x: 1, y: 3.5, w: 8, h: 0.8,
        fontSize: 24, color: colors.white,
        align: 'center', fontFace: 'Arial'
      });
      
      slide1.addText('[Your Event Name Here]', {
        x: 1, y: 5, w: 8, h: 0.8,
        fontSize: 20, color: colors.white,
        align: 'center', fontFace: 'Arial', italic: true
      });

      // Slide 2: Agenda
      const slide2 = pres.addSlide();
      slide2.background = { fill: colors.white };
      
      slide2.addText('AGENDA', {
        x: 1, y: 0.5, w: 8, h: 1,
        fontSize: 36, bold: true, color: colors.dark,
        align: 'center', fontFace: 'Arial'
      });
      
      const agendaItems = [
        '1. Welcome & Introductions',
        '2. Event Overview',
        '3. Timeline & Schedule',
        '4. Vendor Partnerships',
        '5. Budget & Resources',
        '6. Next Steps'
      ];
      
      agendaItems.forEach((item, index) => {
        slide2.addText(item, {
          x: 1.5, y: 2 + (index * 0.7), w: 7, h: 0.6,
          fontSize: 18, color: colors.dark,
          fontFace: 'Arial'
        });
      });

      // Slide 3: Event Overview
      const slide3 = pres.addSlide();
      slide3.background = { fill: colors.light };
      
      slide3.addText('EVENT OVERVIEW', {
        x: 1, y: 0.5, w: 8, h: 1,
        fontSize: 32, bold: true, color: colors.dark,
        align: 'center', fontFace: 'Arial'
      });
      
      slide3.addText('Event Details', {
        x: 1, y: 2, w: 4, h: 0.8,
        fontSize: 20, bold: true, color: colors.primary,
        fontFace: 'Arial'
      });
      
      const eventDetails = [
        'Date: [Event Date]',
        'Time: [Start Time - End Time]',
        'Location: [Venue Name]',
        'Expected Guests: [Number]',
        'Budget: [Amount]'
      ];
      
      eventDetails.forEach((detail, index) => {
        slide3.addText(detail, {
          x: 1, y: 2.8 + (index * 0.5), w: 4, h: 0.4,
          fontSize: 14, color: colors.dark,
          fontFace: 'Arial'
        });
      });

      // Slide 4: Team Introduction
      const slide4 = pres.addSlide();
      slide4.background = { fill: colors.white };
      
      slide4.addText('OUR TEAM', {
        x: 1, y: 0.5, w: 8, h: 1,
        fontSize: 32, bold: true, color: colors.dark,
        align: 'center', fontFace: 'Arial'
      });
      
      // Team member placeholders
      const teamPositions = [
        { x: 1, y: 2, title: 'Event Manager', name: '[Name]' },
        { x: 5, y: 2, title: 'Coordinator', name: '[Name]' },
        { x: 1, y: 4.5, title: 'Vendor Relations', name: '[Name]' },
        { x: 5, y: 4.5, title: 'Marketing Lead', name: '[Name]' }
      ];
      
      teamPositions.forEach(member => {
        // Placeholder for photo
        slide4.addShape(pres.ShapeType.rect, {
          x: member.x, y: member.y, w: 2.5, h: 1.5,
          fill: { color: colors.light },
          line: { color: colors.primary, width: 2 }
        });
        
        slide4.addText('[Photo]', {
          x: member.x, y: member.y + 0.6, w: 2.5, h: 0.3,
          fontSize: 12, color: colors.dark,
          align: 'center', fontFace: 'Arial', italic: true
        });
        
        slide4.addText(member.title, {
          x: member.x, y: member.y + 1.7, w: 2.5, h: 0.3,
          fontSize: 14, bold: true, color: colors.primary,
          align: 'center', fontFace: 'Arial'
        });
        
        slide4.addText(member.name, {
          x: member.x, y: member.y + 2, w: 2.5, h: 0.3,
          fontSize: 12, color: colors.dark,
          align: 'center', fontFace: 'Arial'
        });
      });

      // Slide 5: Timeline
      const slide5 = pres.addSlide();
      slide5.background = { fill: colors.white };
      
      slide5.addText('EVENT TIMELINE', {
        x: 1, y: 0.5, w: 8, h: 1,
        fontSize: 32, bold: true, color: colors.dark,
        align: 'center', fontFace: 'Arial'
      });
      
      const timelineItems = [
        { time: '8:00 AM', activity: 'Setup & Vendor Arrival' },
        { time: '10:00 AM', activity: 'Guest Registration Opens' },
        { time: '11:00 AM', activity: 'Opening Ceremony' },
        { time: '12:30 PM', activity: 'Lunch & Networking' },
        { time: '2:00 PM', activity: 'Main Program' },
        { time: '5:00 PM', activity: 'Closing & Cleanup' }
      ];
      
      timelineItems.forEach((item, index) => {
        const yPos = 2 + (index * 0.7);
        
        slide5.addShape(pres.ShapeType.rect, {
          x: 1, y: yPos, w: 1.5, h: 0.5,
          fill: { color: colors.primary }
        });
        
        slide5.addText(item.time, {
          x: 1, y: yPos, w: 1.5, h: 0.5,
          fontSize: 12, bold: true, color: colors.white,
          align: 'center', valign: 'middle', fontFace: 'Arial'
        });
        
        slide5.addText(item.activity, {
          x: 2.8, y: yPos, w: 5, h: 0.5,
          fontSize: 14, color: colors.dark,
          valign: 'middle', fontFace: 'Arial'
        });
      });

      // Slide 6: Budget Overview
      const slide6 = pres.addSlide();
      slide6.background = { fill: colors.light };
      
      slide6.addText('BUDGET OVERVIEW', {
        x: 1, y: 0.5, w: 8, h: 1,
        fontSize: 32, bold: true, color: colors.dark,
        align: 'center', fontFace: 'Arial'
      });
      
      // Budget chart placeholder
      slide6.addShape(pres.ShapeType.rect, {
        x: 1.5, y: 2, w: 7, h: 4,
        fill: { color: colors.white },
        line: { color: colors.primary, width: 2 }
      });
      
      slide6.addText('[Budget Chart/Graph]', {
        x: 1.5, y: 3.8, w: 7, h: 0.4,
        fontSize: 16, color: colors.dark,
        align: 'center', fontFace: 'Arial', italic: true
      });

      // Slide 7: Vendor Partners
      const slide7 = pres.addSlide();
      slide7.background = { fill: colors.white };
      
      slide7.addText('VENDOR PARTNERS', {
        x: 1, y: 0.5, w: 8, h: 1,
        fontSize: 32, bold: true, color: colors.dark,
        align: 'center', fontFace: 'Arial'
      });
      
      const vendorCategories = [
        'Catering & Food Services',
        'Photography & Videography',
        'Music & Entertainment',
        'Decorations & Florals',
        'Transportation',
        'Security & Logistics'
      ];
      
      vendorCategories.forEach((category, index) => {
        const row = Math.floor(index / 2);
        const col = index % 2;
        const x = 1 + (col * 4);
        const y = 2 + (row * 1.2);
        
        slide7.addShape(pres.ShapeType.rect, {
          x: x, y: y, w: 3.5, h: 0.8,
          fill: { color: colors.secondary },
          line: { color: colors.primary, width: 1 }
        });
        
        slide7.addText(category, {
          x: x, y: y, w: 3.5, h: 0.8,
          fontSize: 12, bold: true, color: colors.white,
          align: 'center', valign: 'middle', fontFace: 'Arial'
        });
      });

      // Slide 8: Contact Information
      const slide8 = pres.addSlide();
      slide8.background = { fill: `${colors.dark}` };
      
      slide8.addText('THANK YOU', {
        x: 1, y: 2, w: 8, h: 1.5,
        fontSize: 42, bold: true, color: colors.white,
        align: 'center', fontFace: 'Arial'
      });
      
      slide8.addText('Questions?', {
        x: 1, y: 3.8, w: 8, h: 0.8,
        fontSize: 24, color: colors.secondary,
        align: 'center', fontFace: 'Arial'
      });
      
      slide8.addText('Contact: [Your Email]\nPhone: [Your Phone]\nWebsite: evenzs.com', {
        x: 1, y: 5, w: 8, h: 1.5,
        fontSize: 16, color: colors.white,
        align: 'center', fontFace: 'Arial'
      });

      // Generate and download the presentation
      await pres.writeFile({ fileName: 'Evenzs-PowerPoint-Template.pptx' });
      
      setIsGenerating(false);
      
    } catch (error) {
      console.error('Error generating PowerPoint:', error);
      setIsGenerating(false);
      alert('Error generating PowerPoint template. Please try again.');
    }
  };

  const templateFeatures = [
    {
      icon: Palette,
      title: 'Brand Colors',
      description: 'Coral pink (#FF4F6A) and mango orange (#FFA533) color scheme'
    },
    {
      icon: Layout,
      title: '8 Professional Slides',
      description: 'Title, agenda, overview, team, timeline, budget, vendors, contact'
    },
    {
      icon: Image,
      title: 'Image Placeholders',
      description: 'Pre-designed spaces for your event photos and team pictures'
    },
    {
      icon: BarChart3,
      title: 'Chart Templates',
      description: 'Budget overview and data visualization slides'
    },
    {
      icon: Users,
      title: 'Team Slides',
      description: 'Professional team introduction layouts'
    },
    {
      icon: Calendar,
      title: 'Timeline Layouts',
      description: 'Event planning and execution timeline templates'
    }
  ];

  const slideLayouts = [
    {
      title: 'Title Slide',
      description: 'Evenzs branding with event name placeholder',
      preview: 'bg-gradient-to-br from-primary to-accent'
    },
    {
      title: 'Agenda',
      description: 'Professional agenda layout with numbered items',
      preview: 'bg-white border-2 border-primary'
    },
    {
      title: 'Event Overview',
      description: 'Event details and key information',
      preview: 'bg-gradient-to-r from-accent/20 to-primary/20'
    },
    {
      title: 'Team Introduction',
      description: 'Team member profiles with photo placeholders',
      preview: 'bg-neutral border border-gray-200'
    },
    {
      title: 'Timeline',
      description: 'Event schedule with time blocks',
      preview: 'bg-gradient-to-br from-mango/30 to-coral/30'
    },
    {
      title: 'Budget Overview',
      description: 'Financial planning and chart placeholder',
      preview: 'bg-neutral border border-gray-200'
    },
    {
      title: 'Vendor Partners',
      description: 'Vendor categories and partnerships',
      preview: 'bg-white border-2 border-secondary'
    },
    {
      title: 'Thank You',
      description: 'Closing slide with contact information',
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
                <div className="font-semibold">8 Slides</div>
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
              onClick={generatePowerPointTemplate}
              disabled={isGenerating}
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Generating Template...
                </>
              ) : (
                <>
                  <Download className="w-6 h-6 mr-3" />
                  Download Template (.pptx)
                </>
              )}
            </button>
            
            {isGenerating && (
              <p className="text-white/80 text-sm mt-3">
                Please wait while we generate your PowerPoint template...
              </p>
            )}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slideLayouts.map((layout, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-24 ${layout.preview} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-8 h-1 bg-white/50 rounded mb-1 mx-auto"></div>
                    <div className="w-12 h-1 bg-white/30 rounded mb-1 mx-auto"></div>
                    <div className="w-6 h-1 bg-white/30 rounded mx-auto"></div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{layout.title}</h3>
                  <p className="text-xs text-gray-600">{layout.description}</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Template Contents:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">8 professionally designed slides</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Evenzs brand colors and styling</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Editable text placeholders</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Professional layouts and graphics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Ready-to-use .pptx file</span>
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
                  <span className="text-gray-700">Budget and timeline reviews</span>
                </div>
                <div className="flex items-center">
                  <Presentation className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">Team meetings and updates</span>
                </div>
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">Professional event documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Professional Presentations?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Download our PowerPoint template and start creating beautiful presentations that match the Evenzs brand. 
              The template includes 8 professional slides ready for your content.
            </p>
            <button
              onClick={generatePowerPointTemplate}
              disabled={isGenerating}
              className="bg-gradient-to-r from-primary to-accent hover:from-[#E63946] hover:to-[#E6941A] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center mx-auto text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  Generating Template...
                </>
              ) : (
                <>
                  <Download className="w-6 h-6 mr-3" />
                  Download PowerPoint Template
                </>
              )}
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Compatible with PowerPoint 2016+, Google Slides, and Keynote
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};