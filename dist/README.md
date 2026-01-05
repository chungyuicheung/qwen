Your site is live at https://chungyuicheung.github.io/qwen/ (Main page) and https://chungyuicheung.github.io/qwen/travel/west_lake_trip.html (West Lake Trip page)
# West Lake Travel Itinerary - Refactored

This is a responsive travel itinerary website for a 4-day West Lake trip in Hangzhou, China. The project has been refactored for better maintainability and performance.

## Project Structure

```
/workspace/
├── index.html                 # Main HTML file
├── master_index.html          # Master index page for all projects
├── PROJECTS_GUIDE.md          # Guide for project management
├── README.md                  # This file
├── src/                       # Source files
│   ├── css/
│   │   └── styles.css         # Modular CSS styles
│   ├── js/
│   │   └── main.js            # Modular JavaScript functionality
│   ├── assets/                # Images and other assets
│   └── components/            # Reusable components
└── server.log                 # Server log file
```

## Features

- Responsive design that works on mobile and desktop
- Interactive navigation with smooth scrolling
- Daily itinerary sections with detailed schedules
- Image gallery with lightbox functionality
- Progress bar showing scroll position
- Back-to-top button for easy navigation
- Accessible navigation and interactive elements

## Refactoring Improvements

- **Modular CSS**: Organized styles into logical sections with improved maintainability
- **Modular JavaScript**: Implemented module pattern for better code organization
- **Accessibility**: Added ARIA labels and improved focus management
- **Performance**: Optimized code structure for better loading times
- **Maintainability**: Separated concerns and documented code

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Responsive design principles

## How to Run

1. Clone or download this repository
2. Open `index.html` in a web browser, or
3. Use a local server to serve the files (recommended for full functionality):

```bash
cd /workspace
python3 -m http.server 8000
```

Then visit `http://localhost:8000` to view the project.
