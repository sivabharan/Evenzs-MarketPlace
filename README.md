# Evenzs - Event Planning Made Easy

A modern, full-featured event planning marketplace that connects event organizers with top-rated vendors and provides customers with seamless event discovery and ticket purchasing. Built with React, TypeScript, and Tailwind CSS.

![Evenzs Platform](https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200)

## ✨ Features

### 🎫 **For Event Attendees/Customers**
- **Event Discovery** - Browse concerts, conferences, festivals, and more with advanced filtering
- **Ticket Purchasing** - Secure ticket booking with multiple payment options (Apple Pay, Google Pay, Stripe, PayPal)
- **Travel Integration** - Book flights, hotels, and car rentals with exclusive event attendee discounts
- **Customer Dashboard** - Manage tickets, view QR codes, track travel itinerary
- **Mobile Tickets** - Digital tickets with QR codes for easy venue entry

### 🎯 **For Event Organizers**
- **Smart Event Creation** - AI-powered vendor matching based on event type, budget, and preferences
- **Vendor Discovery** - Browse curated network of verified vendors with ratings and portfolios
- **Package Builder** - Create custom event packages with recommended vendor combinations
- **Travel Integration** - Book flights, hotels, and car rentals with group discounts
- **Real-time Dashboard** - Track events, bookings, and vendor communications

### 🏢 **For Vendors**
- **Professional Profiles** - Showcase portfolios, specialties, and business information
- **Bid Management** - Submit proposals for event opportunities with detailed pricing
- **Booking Dashboard** - Manage bookings, track revenue, and view performance metrics
- **Portfolio Management** - Upload and organize work samples by category
- **Review System** - Build reputation through customer feedback and ratings

### 🌟 **Platform Features**
- **Triple Authentication** - Separate sign-in flows for customers, organizers, and vendors
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Advanced Search** - Filter events and vendors by location, category, price, and availability
- **Secure Payments** - Integrated payment processing with multiple options
- **24/7 Support** - Comprehensive help center with live chat and FAQ

## 🚀 Getting Started with VS Code

### Prerequisites
Before you begin, ensure you have the following installed on your system:

- **Node.js 18+** - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download from git-scm.com](https://git-scm.com/)
- **Visual Studio Code** - [Download from code.visualstudio.com](https://code.visualstudio.com/)

### Step 1: Clone the Repository

Open your terminal/command prompt and run:

```bash
# Clone the repository
git clone https://github.com/your-username/evenzs-marketplace.git

# Navigate to the project directory
cd evenzs-marketplace
```

### Step 2: Open in VS Code

```bash
# Open the project in VS Code
code .
```

Alternatively, you can:
1. Open VS Code
2. Go to `File > Open Folder`
3. Select the `evenzs-marketplace` folder

### Step 3: Install Dependencies

In VS Code, open the integrated terminal (`Terminal > New Terminal` or `Ctrl+`` `) and run:

```bash
# Install all project dependencies
npm install
```

This will install all the required packages listed in `package.json`.

### Step 4: Start the Development Server

```bash
# Start the development server
npm run dev
```

You should see output similar to:
```
  VITE v5.4.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 5: Open in Browser

1. Open your web browser
2. Navigate to `http://localhost:5173`
3. You should see the Evenzs homepage

## 🛠️ VS Code Setup & Extensions

### Recommended Extensions

Install these VS Code extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - Provides useful React snippets
2. **TypeScript Importer** - Auto imports TypeScript modules
3. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
4. **Prettier - Code formatter** - Automatic code formatting
5. **ESLint** - JavaScript/TypeScript linting
6. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
7. **Bracket Pair Colorizer** - Color matching brackets
8. **GitLens** - Enhanced Git capabilities
9. **Thunder Client** - API testing (alternative to Postman)
10. **Live Server** - For static file serving (if needed)

### Installing Extensions

1. Open VS Code
2. Click the Extensions icon in the sidebar (or press `Ctrl+Shift+X`)
3. Search for each extension name
4. Click "Install" for each one

### VS Code Settings

Create a `.vscode/settings.json` file in your project root with these recommended settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "css.validate": false,
  "tailwindCSS.experimental.classRegex": [
    "className\\s*=\\s*[\"']([^\"']*)[\"']"
  ]
}
```

## 📁 Project Structure

```
evenzs-marketplace/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx    # Navigation header with auth
│   │   ├── Footer.tsx    # Site footer with links
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   └── ProtectedRoute.tsx # Route protection
│   ├── contexts/         # React context providers
│   │   └── AuthContext.tsx # Authentication state
│   ├── pages/            # Main application pages
│   │   ├── Home.tsx      # Landing page
│   │   ├── SignIn.tsx    # Authentication page
│   │   ├── EventDiscovery.tsx # Event browsing (customers)
│   │   ├── TicketPurchase.tsx # Ticket buying flow
│   │   ├── TravelPlanning.tsx # Travel booking
│   │   ├── CustomerDashboard.tsx # Customer dashboard
│   │   ├── CreateEvent.tsx # Event creation form
│   │   ├── PackageBuilder.tsx # Package customization
│   │   ├── VendorDiscovery.tsx # Vendor browsing
│   │   ├── OrganizerDashboard.tsx # Organizer dashboard
│   │   ├── VendorDashboard.tsx # Vendor dashboard
│   │   ├── VendorProfile.tsx # Vendor profile management
│   │   ├── SubmitBid.tsx # Vendor bidding interface
│   │   ├── TravelIntegrations.tsx # Travel booking
│   │   ├── Privacy.tsx   # Privacy policy
│   │   ├── Terms.tsx     # Terms of service
│   │   └── Support.tsx   # Help and support
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── package.json          # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite build configuration
└── README.md            # This file
```

## 🎮 Demo Accounts

The application includes demo accounts for testing all user types:

### Customer Account
- **Email**: `alex@example.com`
- **Password**: `demo123`
- **Features**: Browse events, buy tickets, plan travel

### Event Organizer Account
- **Email**: `jessica@example.com`
- **Password**: `demo123`
- **Features**: Create events, find vendors, manage bookings

### Vendor Account
- **Email**: `mike@example.com`
- **Password**: `demo123`
- **Features**: Manage profile, submit bids, track bookings

## 🔧 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server on `http://localhost:5173`
- Hot reload enabled
- TypeScript compilation
- Tailwind CSS processing

### `npm run build`
Builds the app for production to the `dist` folder
- Optimizes the build for best performance
- Minifies files and optimizes assets

### `npm run preview`
Serves the production build locally for testing
- Useful for testing the production build before deployment

### `npm run lint`
Runs ESLint to check for code quality issues
- Checks TypeScript and React best practices
- Reports errors and warnings

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary: #6C4AB6;      /* Purple - Main brand color */
--accent: #FF6B6B;       /* Coral - Call-to-action elements */
--gold: #F7C948;         /* Gold - Premium features */
--background: #FDF9F6;   /* Warm White - Page backgrounds */

/* Secondary Colors */
--purple-light: #8B6FBD;
--purple-dark: #5A3B9F;
--coral-light: #FF8E8E;
--coral-dark: #FF4747;
--gold-light: #F9D96E;
--gold-dark: #F5C52B;
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Scaling**: Fluid typography across devices

### Component Guidelines
- **Rounded Corners**: 12px-24px border radius
- **Shadows**: Layered shadow system for depth
- **Animations**: Smooth transitions and micro-interactions
- **Spacing**: 8px grid system for consistent layouts

## 🔐 Authentication Flow

### Sign-In Process
1. User selects role (Customer, Organizer, or Vendor)
2. Enters credentials or uses demo account
3. System authenticates and redirects to appropriate dashboard
4. Session persisted in localStorage

### Role-Based Access
- **Customers**: Event discovery, ticket purchasing, travel planning
- **Organizers**: Event creation, vendor discovery, package building
- **Vendors**: Profile management, bid submission, booking tracking

### Protected Routes
Routes are protected based on authentication status and user role:
```typescript
// Example protected route usage
<ProtectedRoute requiredRole="organizer">
  <OrganizerDashboard />
</ProtectedRoute>
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

### Testing Responsiveness
1. Open Chrome DevTools (`F12`)
2. Click the device toggle icon
3. Test different screen sizes
4. Verify layouts work on mobile, tablet, and desktop

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your Git repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## 🧪 Development Workflow

### Daily Development
1. **Start the day**: `npm run dev`
2. **Make changes** to files in `src/`
3. **Check browser** - changes auto-reload
4. **Run linting**: `npm run lint`
5. **Test build**: `npm run build`

### Adding New Features
1. **Create new component** in `src/components/` or `src/pages/`
2. **Import and use** in appropriate parent component
3. **Add routing** if it's a new page (in `App.tsx`)
4. **Test thoroughly** across different screen sizes
5. **Update this README** if needed

### Code Style Guidelines
- Use **TypeScript** for all new files
- Follow **React functional components** with hooks
- Use **Tailwind CSS** for styling
- Keep components **small and focused**
- Add **proper TypeScript types**
- Use **meaningful variable names**

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# If port 5173 is busy, Vite will automatically use the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

#### Node Modules Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

#### Tailwind CSS Not Working
1. Ensure `tailwind.config.js` is properly configured
2. Check that `@tailwind` directives are in `src/index.css`
3. Restart the development server

### VS Code Issues

#### IntelliSense Not Working
1. Reload VS Code window: `Ctrl+Shift+P` → "Developer: Reload Window"
2. Check TypeScript version: `Ctrl+Shift+P` → "TypeScript: Select TypeScript Version"
3. Ensure all recommended extensions are installed

#### Auto-formatting Not Working
1. Check Prettier extension is installed and enabled
2. Verify `editor.formatOnSave` is true in settings
3. Right-click in editor → "Format Document With..." → Choose Prettier

## 📚 Learning Resources

### React & TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI](https://headlessui.com/)

### Vite
- [Vite Documentation](https://vitejs.dev/)
- [Vite React Plugin](https://github.com/vitejs/vite-plugin-react)

## 🤝 Contributing

### Getting Started
1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your feature: `git checkout -b feature/amazing-feature`
4. **Make changes** and test thoroughly
5. **Commit** with descriptive messages: `git commit -m 'Add amazing feature'`
6. **Push** to your fork: `git push origin feature/amazing-feature`
7. **Create a Pull Request**

### Code Standards
- Follow existing code style and patterns
- Add TypeScript types for all new code
- Include responsive design considerations
- Test across different browsers and devices
- Update documentation as needed

### Pull Request Guidelines
- Provide clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass
- Keep PRs focused and atomic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Community

### Getting Help
- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas
- **Documentation**: Check this README and inline code comments

### Contact
- **Email**: support@evenzs.com
- **Website**: [evenzs.com](https://evenzs.com)
- **Twitter**: [@evenzs](https://twitter.com/evenzs)

---

## 🎉 Quick Start Checklist

- [ ] Node.js 18+ installed
- [ ] VS Code installed with recommended extensions
- [ ] Repository cloned and opened in VS Code
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Browser opened to `http://localhost:5173`
- [ ] Demo accounts tested
- [ ] Ready to start developing! 🚀

---

**Made with ❤️ by the Evenzs Team**

*Transforming event planning and discovery, one celebration at a time.*