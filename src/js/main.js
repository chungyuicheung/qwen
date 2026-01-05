/**
 * Main JavaScript file for West Lake Travel Itinerary
 * Organized in modules for better maintainability
 */

// Navigation module
const Navigation = (() => {
    const init = () => {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
    };

    const handleNavClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return {
        init
    };
})();

// Animation module
const Animation = (() => {
    const init = () => {
        animateSections();
        animateTimeSlots();
        setupImageHoverEffects();
    };

    const animateSections = () => {
        const sections = document.querySelectorAll('.section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    };

    const animateTimeSlots = () => {
        const timeSlots = document.querySelectorAll('.time-slot');
        timeSlots.forEach((slot, index) => {
            slot.style.opacity = '0';
            slot.style.transform = 'translateX(-30px)';
            slot.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                slot.style.opacity = '1';
                slot.style.transform = 'translateX(0)';
            }, 200 * index);
        });
    };

    const setupImageHoverEffects = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    };

    return {
        init
    };
})();

// Lightbox module
const Lightbox = (() => {
    const init = () => {
        const galleryImages = document.querySelectorAll('.gallery-container img, .media-container img');
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            
            img.addEventListener('click', function() {
                createLightbox(this);
            });
        });
    };

    const createLightbox = (imgElement) => {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'lightbox';
        
        // Create image element
        const largeImg = document.createElement('img');
        largeImg.src = imgElement.src.replace('w=800', 'w=1200').replace('q=80', 'q=95');
        largeImg.className = 'lightbox-img';
        
        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);
        
        // Close lightbox on click
        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });
    };

    return {
        init
    };
})();

// Back to top button module
const BackToTop = (() => {
    let topButton;

    const init = () => {
        createButton();
        setupScrollListener();
        setupClickHandler();
    };

    const createButton = () => {
        topButton = document.createElement('button');
        topButton.textContent = '↑';
        topButton.id = 'topButton';
        topButton.setAttribute('aria-label', 'Back to top');
        topButton.title = 'Back to top';

        document.body.appendChild(topButton);
    };

    const setupScrollListener = () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                topButton.style.opacity = '1';
            } else {
                topButton.style.opacity = '0';
            }
        });
    };

    const setupClickHandler = () => {
        topButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    return {
        init
    };
})();

// Progress bar module
const ProgressBar = (() => {
    let progressBar;

    const init = () => {
        createProgressBar();
        setupScrollListener();
    };

    const createProgressBar = () => {
        progressBar = document.createElement('div');
        progressBar.id = 'progressBar';
        
        document.body.appendChild(progressBar);
    };

    const setupScrollListener = () => {
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = `${scrollPercent}%`;
        });
    };

    return {
        init
    };
})();

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    Navigation.init();
    Animation.init();
    Lightbox.init();
    BackToTop.init();
    ProgressBar.init();
});