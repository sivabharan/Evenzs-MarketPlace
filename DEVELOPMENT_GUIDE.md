# Evenzs Development Guide

## 🚀 Quick Setup for VS Code

### 1. Prerequisites Check
```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git
git --version
```

### 2. Clone and Setup
```bash
# Clone the repository
git clone https://github.com/your-username/evenzs-marketplace.git
cd evenzs-marketplace

# Open in VS Code
code .

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. VS Code Extensions (Essential)
Install these extensions for the best experience:

1. **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
2. **TypeScript Importer** (`pmneo.tsimporter`)
3. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
4. **Prettier - Code formatter** (`esbenp.prettier-vscode`)
5. **ESLint** (`dbaeumer.vscode-eslint`)

Quick install via command palette (`Ctrl+Shift+P`):
```
ext install dsznajder.es7-react-js-snippets pmneo.tsimporter bradlc.vscode-tailwindcss esbenp.prettier-vscode dbaeumer.vscode-eslint
```

## 🛠️ Development Workflow

### Daily Development Routine
```bash
# 1. Start development server
npm run dev

# 2. Open browser to http://localhost:5173

# 3. Make changes to files in src/

# 4. Check for linting issues
npm run lint

# 5. Build for production (optional)
npm run build
```

### File Structure Navigation
```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Main navigation
│   ├── Footer.tsx      # Site footer
│   └── Layout.tsx      # Page wrapper
├── pages/              # Route components
│   ├── Home.tsx        # Landing page
│   ├── EventDiscovery.tsx  # Customer event browsing
│   ├── TicketPurchase.tsx  # Ticket buying flow
│   ├── CustomerDashboard.tsx # Customer management
│   ├── OrganizerDashboard.tsx # Organizer management
│   └── VendorDashboard.tsx    # Vendor management
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication state
└── App.tsx            # Main app with routing
```

## 🎯 User Flows & Features

### Customer Flow
1. **Discovery**: Browse events on `/event-discovery`
2. **Purchase**: Buy tickets on `/ticket-purchase/:eventId`
3. **Travel**: Plan trip on `/travel-planning`
4. **Management**: View tickets on `/customer-dashboard`

### Organizer Flow
1. **Creation**: Create events on `/create-event`
2. **Vendors**: Find vendors on `/vendor-discovery`
3. **Packages**: Build packages on `/package-builder`
4. **Management**: Track events on `/organizer-dashboard`

### Vendor Flow
1. **Profile**: Manage profile on `/vendor-profile`
2. **Opportunities**: View bids on `/vendor-dashboard`
3. **Bidding**: Submit bids on `/submit-bid/:eventId`
4. **Management**: Track bookings on `/vendor-dashboard`

## 🔧 Common Development Tasks

### Adding a New Page
1. Create component in `src/pages/NewPage.tsx`:
```tsx
import React from 'react';

export const NewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900">New Page</h1>
      </div>
    </div>
  );
};
```

2. Add route in `src/App.tsx`:
```tsx
import { NewPage } from './pages/NewPage';

// In the Routes component:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Header.tsx`:
```tsx
<Link to="/new-page" className="text-gray-700 hover:text-primary transition-colors font-medium">
  New Page
</Link>
```

### Adding a New Component
1. Create component in `src/components/NewComponent.tsx`:
```tsx
import React from 'react';

interface NewComponentProps {
  title: string;
  children?: React.ReactNode;
}

export const NewComponent: React.FC<NewComponentProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
};
```

2. Import and use in other components:
```tsx
import { NewComponent } from '../components/NewComponent';

// In your JSX:
<NewComponent title="My Component">
  <p>Content goes here</p>
</NewComponent>
```

### Styling with Tailwind CSS
Common patterns used in the project:

```tsx
// Card layout
<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

// Button primary
<button className="bg-primary hover:bg-purple-dark text-white px-6 py-3 rounded-xl font-medium transition-colors">

// Button secondary
<button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-medium transition-colors">

// Grid layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Responsive text
<h1 className="text-4xl lg:text-5xl font-bold text-gray-900">

// Icon with text
<div className="flex items-center">
  <Icon className="w-5 h-5 mr-2" />
  <span>Text</span>
</div>
```

## 🎨 Design System Usage

### Colors
```tsx
// Primary brand colors
className="text-primary bg-primary border-primary"
className="text-accent bg-accent border-accent"
className="text-gold bg-gold border-gold"

// Hover states
className="hover:bg-primary hover:text-white"
className="hover:bg-purple-dark"
className="hover:bg-coral-dark"
```

### Typography
```tsx
// Headings
className="text-4xl lg:text-5xl font-bold"  // Page titles
className="text-2xl font-bold"             // Section titles
className="text-xl font-semibold"          // Subsection titles
className="text-lg font-medium"            // Card titles

// Body text
className="text-gray-700"                  // Primary text
className="text-gray-600"                  // Secondary text
className="text-gray-500"                  // Tertiary text
```

### Spacing & Layout
```tsx
// Container
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"

// Card spacing
className="p-6"        // Standard card padding
className="p-8"        // Large card padding
className="space-y-6"  // Vertical spacing between elements
className="gap-6"      // Grid gap
```

## 🔐 Authentication System

### Using Auth Context
```tsx
import { useAuth } from '../contexts/AuthContext';

const MyComponent: React.FC = () => {
  const { user, isAuthenticated, signIn, signOut } = useAuth();

  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <p>Welcome, {user?.name}!</p>
      <p>Role: {user?.role}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
```

### Protected Routes
```tsx
import { ProtectedRoute } from '../components/ProtectedRoute';

// Protect a route for any authenticated user
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

// Protect a route for specific role
<Route path="/vendor-dashboard" element={
  <ProtectedRoute requiredRole="vendor">
    <VendorDashboard />
  </ProtectedRoute>
} />
```

## 🧪 Testing & Debugging

### Demo Accounts
Use these for testing different user flows:

```typescript
// Customer
email: 'alex@example.com'
password: 'demo123'

// Organizer  
email: 'jessica@example.com'
password: 'demo123'

// Vendor
email: 'mike@example.com'
password: 'demo123'
```

### Browser DevTools
1. **Console**: Check for JavaScript errors
2. **Network**: Monitor API calls (when backend is added)
3. **Application**: Check localStorage for auth state
4. **Elements**: Inspect and modify CSS

### VS Code Debugging
1. Set breakpoints by clicking line numbers
2. Use `console.log()` for quick debugging
3. Use React DevTools browser extension
4. Check TypeScript errors in Problems panel

## 📱 Responsive Design Testing

### Testing Different Screen Sizes
1. Open Chrome DevTools (`F12`)
2. Click device toggle icon
3. Test these breakpoints:
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1024px+ (Laptop)

### Common Responsive Patterns
```tsx
// Hide on mobile, show on desktop
className="hidden md:block"

// Show on mobile, hide on desktop  
className="block md:hidden"

// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Responsive text size
className="text-2xl md:text-3xl lg:text-4xl"

// Responsive padding
className="px-4 md:px-6 lg:px-8"
```

## 🚀 Performance Tips

### Optimization Best Practices
1. **Lazy Loading**: Use `React.lazy()` for large components
2. **Image Optimization**: Use appropriate image sizes
3. **Bundle Analysis**: Run `npm run build` and check bundle size
4. **Memoization**: Use `React.memo()` for expensive components

### Build Optimization
```bash
# Analyze bundle size
npm run build
npm run preview

# Check for unused dependencies
npx depcheck

# Update dependencies
npm update
```

## 🐛 Common Issues & Solutions

### TypeScript Errors
```bash
# Check all TypeScript errors
npx tsc --noEmit

# Common fixes:
# 1. Add proper type annotations
# 2. Import types correctly
# 3. Check tsconfig.json settings
```

### Tailwind CSS Issues
```bash
# If styles aren't applying:
# 1. Check tailwind.config.js content paths
# 2. Restart development server
# 3. Clear browser cache
```

### Import/Export Issues
```tsx
// Use named exports
export const MyComponent: React.FC = () => { ... };

// Use default exports for pages
export default MyPage;

// Import correctly
import { MyComponent } from './MyComponent';
import MyPage from './MyPage';
```

## 📦 Adding New Dependencies

### Installing Packages
```bash
# Add runtime dependency
npm install package-name

# Add development dependency  
npm install --save-dev package-name

# Add type definitions
npm install --save-dev @types/package-name
```

### Recommended Packages
```bash
# UI Components
npm install @headlessui/react @heroicons/react

# Forms
npm install react-hook-form @hookform/resolvers yup

# Date handling
npm install date-fns

# HTTP client
npm install axios

# State management (if needed)
npm install zustand
```

## 🔄 Git Workflow

### Daily Git Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Add new feature"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main
```

### Feature Development
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Implement new feature"

# Push feature branch
git push origin feature/new-feature

# Create pull request on GitHub
```

## 📚 Additional Resources

### Documentation Links
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)

### VS Code Tips
- `Ctrl+Shift+P`: Command palette
- `Ctrl+`` `: Toggle terminal
- `Ctrl+B`: Toggle sidebar
- `Ctrl+Shift+E`: Explorer
- `Ctrl+Shift+F`: Search across files
- `F2`: Rename symbol
- `Ctrl+D`: Select next occurrence

---

Happy coding! 🚀