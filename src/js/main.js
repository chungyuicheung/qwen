/**
 * Main JavaScript file for West Lake Travel Itinerary
 * Using ES6 modules for better organization
 */

import { Navigation } from './navigation.js';
import { Animation } from './animation.js';
import { Lightbox } from './lightbox.js';
import { BackToTop } from './back-to-top.js';
import { ProgressBar } from './progress-bar.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
    Animation.init();
    Lightbox.init();
    BackToTop.init();
    ProgressBar.init();
});