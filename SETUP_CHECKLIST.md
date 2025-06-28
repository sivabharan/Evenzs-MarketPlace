# Evenzs Local Setup Checklist

## ✅ Prerequisites Installation

### 1. Node.js & npm
- [ ] Download and install Node.js 18+ from [nodejs.org](https://nodejs.org/)
- [ ] Verify installation:
  ```bash
  node --version  # Should show v18.x.x or higher
  npm --version   # Should show 8.x.x or higher
  ```

### 2. Git
- [ ] Download and install Git from [git-scm.com](https://git-scm.com/)
- [ ] Verify installation:
  ```bash
  git --version  # Should show git version 2.x.x
  ```

### 3. Visual Studio Code
- [ ] Download and install VS Code from [code.visualstudio.com](https://code.visualstudio.com/)
- [ ] Launch VS Code to ensure it works

## 🚀 Project Setup

### 1. Clone Repository
```bash
# Clone the project
git clone https://github.com/your-username/evenzs-marketplace.git

# Navigate to project directory
cd evenzs-marketplace
```

### 2. Open in VS Code
```bash
# Open project in VS Code
code .
```

### 3. Install Dependencies
```bash
# Install all project dependencies
npm install
```

### 4. Start Development Server
```bash
# Start the development server
npm run dev
```

### 5. Verify Setup
- [ ] Open browser to `http://localhost:5173`
- [ ] See Evenzs homepage loading correctly
- [ ] No console errors in browser DevTools

## 🔧 VS Code Configuration

### 1. Install Recommended Extensions
Open VS Code and install these extensions:

- [ ] **ES7+ React/Redux/React-Native snippets** (`dsznajder.es7-react-js-snippets`)
- [ ] **TypeScript Importer** (`pmneo.tsimporter`)
- [ ] **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- [ ] **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- [ ] **ESLint** (`dbaeumer.vscode-eslint`)

Quick install via Command Palette (`Ctrl+Shift+P`):
```
Extensions: Install Extensions
```
Search for each extension name and click Install.

### 2. Verify VS Code Settings
- [ ] Auto-formatting on save is working
- [ ] TypeScript IntelliSense is working
- [ ] Tailwind CSS autocomplete is working
- [ ] ESLint is showing errors/warnings

## 🧪 Test Demo Accounts

### Customer Account
- [ ] Go to Sign In page
- [ ] Click "Demo Customer" button
- [ ] Verify login redirects to Customer Dashboard
- [ ] Test event discovery and ticket purchasing flow

### Organizer Account  
- [ ] Sign out and return to Sign In page
- [ ] Click "Demo Organizer" button
- [ ] Verify login redirects to Organizer Dashboard
- [ ] Test event creation and vendor discovery

### Vendor Account
- [ ] Sign out and return to Sign In page
- [ ] Click "Demo Vendor" button  
- [ ] Verify login redirects to Vendor Dashboard
- [ ] Test profile management and bid submission

## 📱 Responsive Testing

### Browser DevTools
- [ ] Open Chrome DevTools (`F12`)
- [ ] Click device toggle icon
- [ ] Test mobile view (375px width)
- [ ] Test tablet view (768px width)
- [ ] Test desktop view (1024px+ width)
- [ ] Verify all layouts look good on different screen sizes

## 🛠️ Development Workflow Test

### 1. Make a Simple Change
- [ ] Open `src/pages/Home.tsx`
- [ ] Change the main heading text
- [ ] Save the file
- [ ] Verify hot reload updates the browser automatically

### 2. Test Build Process
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```
- [ ] Build completes without errors
- [ ] Preview shows the built application

### 3. Test Linting
```bash
# Run ESLint
npm run lint
```
- [ ] Linting runs without critical errors

## 🎯 Feature Testing

### Navigation
- [ ] Header navigation works on all pages
- [ ] Footer links work correctly
- [ ] User menu dropdown functions properly
- [ ] Mobile menu works (if implemented)

### Authentication
- [ ] Sign in/out functionality works
- [ ] Role-based redirects work correctly
- [ ] Protected routes block unauthorized access
- [ ] User session persists on page refresh

### Core Features
- [ ] Event discovery page loads and filters work
- [ ] Ticket purchase flow completes
- [ ] Travel planning integration works
- [ ] Dashboard pages show relevant data
- [ ] Vendor profile management functions

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

#### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### VS Code Extensions Not Working
- [ ] Reload VS Code window: `Ctrl+Shift+P` → "Developer: Reload Window"
- [ ] Check extension is enabled in Extensions panel
- [ ] Restart VS Code completely

#### TypeScript Errors
```bash
# Check TypeScript compilation
npx tsc --noEmit
```

#### Tailwind CSS Not Working
- [ ] Check `tailwind.config.js` content paths
- [ ] Verify `@tailwind` directives in `src/index.css`
- [ ] Restart development server

## ✅ Final Verification

### Development Environment Ready
- [ ] All prerequisites installed
- [ ] Project cloned and dependencies installed
- [ ] Development server runs without errors
- [ ] VS Code configured with recommended extensions
- [ ] Demo accounts tested successfully
- [ ] Responsive design verified
- [ ] Build process works
- [ ] Ready to start development!

## 📚 Next Steps

### Learning Resources
- [ ] Read through `README.md` for full project overview
- [ ] Review `DEVELOPMENT_GUIDE.md` for detailed development instructions
- [ ] Explore the codebase structure in `src/` folder
- [ ] Check out React, TypeScript, and Tailwind CSS documentation

### Development Tasks
- [ ] Familiarize yourself with the component structure
- [ ] Understand the authentication flow
- [ ] Learn the design system and styling patterns
- [ ] Practice making small changes and testing

---

## 🎉 Congratulations!

Your Evenzs development environment is now set up and ready to go! 

If you encounter any issues, refer to the troubleshooting section or check the detailed guides in `README.md` and `DEVELOPMENT_GUIDE.md`.

Happy coding! 🚀