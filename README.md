# 🌌 Registration Form

A simple, responsive registration form with seamless validation, animations, and state management using React and Redux. Built with a galaxy-themed design that provides an engaging user experience across all devices.

## 🚀 Features

- **Responsive Design**: Seamlessly adapts to different screen sizes (Desktop, Tablet, Mobile)
- **Form Validation**: Real-time field validation with error messages
- **Redux Integration**: Centralized state management for form data
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **Reusable Components**: Modular architecture with custom components
- **Toast Notifications**: User-friendly success/error messages

## 💻 Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Framer Motion
- Tailwind CSS
- Shadcn/ui Components

## 🛠️ Implementation Details

### Responsive Design Approach
- Mobile-first design methodology
- Flexible layouts using Tailwind CSS grid and flex
- Responsive typography and spacing
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Form Validation Rules
1. **Full Name**
   - Alphabets only
   - Minimum 2 characters
   - No numbers or special characters

2. **Email**
   - Valid email format
   - Required field

3. **Phone Number**
   - Numbers only
   - Minimum 10 digits
   - No special characters

4. **Age**
   - Numbers only
   - Range: 18-120
   - Required field

5. **Occupation**
   - Minimum 2 characters
   - Required field

6. **Address**
   - Minimum 5 characters
   - Required field

### Reusable Components
- `Button`: Custom button component with loading states
- `Card`: Wrapper component for content sections
- `FormField`: Input field with integrated validation
- `Toast`: Notification component
- `Container`: Layout wrapper component
- `LoadingSpinner`: Loading indicator

### Redux Implementation
- Centralized state management for form data
- Validation state management
- Action creators for field updates
- Error handling
- State persistence

### Animations
- Form field entrance animations
- Submit button hover effects
- Toast notifications
- Page transitions
- Loading states

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ZanDave/simple-responsive-form.git
```

2. Install dependencies
```bash
cd simple-responsive-form
npm install
```

3. Start the development server
```bash
npm run dev
```

## 📱 Deployment to Vercel

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com) and sign in with GitHub

3. Click "Import Project"

4. Select your repository

5. Configure project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. Click "Deploy"

The project will be automatically deployed and you'll receive a production URL.

## 📂 Project Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Toast.jsx
│   │   └── LoadingSpinner.jsx
│   ├── form/
│   │   └── FormField.jsx
│   └── layout/
│       └── Container.jsx
├── pages/
│   ├── FormPage.jsx
│   └── SummaryPage.jsx
├── redux/
│   ├── store.js
│   └── formSlice.js
├── utils/
│   └── validation.js
└── App.jsx
```

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [ShadcN UI](https://ui.shadcn.com)