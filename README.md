# J'pura D7 Leos Website

A modern, responsive website for the J'pura D7 Leo Club - dedicated to social services and community development at the University of Jaffna.

## Project Overview

This is a React-based website showcasing the activities, projects, board members, and initiatives of the J'pura D7 Leos club. The site is built with modern web technologies including TypeScript, Tailwind CSS, and React Router.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **PostCSS** - CSS processing

## Features

- **Home Page** - Hero section with upcoming projects
- **About Page** - Club mission, activities, and values
- **Projects Page** - Display of past and upcoming projects
- **Board Page** - Meet the club leadership
- **Contact Page** - Contact information and inquiry form

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building for Production

```bash
npm run build
```

Creates a production-ready build in the `build` folder.

## Project Structure

```
src/
├── pages/
│   ├── HomePage.tsx         # Home page with hero and upcoming projects
│   ├── About.tsx            # Club information
│   ├── Projects.tsx         # Projects showcase
│   ├── Board.tsx            # Board members
│   └── Contact.tsx          # Contact form
├── components/
│   ├── Navbar.jsx           # Navigation bar
│   └── Footer.jsx           # Footer
├── App.tsx                  # Main app component
├── index.tsx                # Entry point
└── index.css               # Global styles
```

## Customization

To customize the website for your club:

1. **Update Club Information** - Edit team names, descriptions, and contact details in respective page files
2. **Add Project Data** - Update project information in `Projects.tsx`
3. **Board Members** - Add real member information and photos in `Board.tsx`
4. **Contact Details** - Update email and phone in `Contact.tsx` and `Footer.jsx`
5. **Styling** - Modify colors and styles using Tailwind CSS class utilities

## Deployment

The website can be deployed to various platforms:

- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **Traditional web hosting** (after running `npm run build`)

## License

This project is created for the J'pura D7 Leo Club at the University of Jaffna.
