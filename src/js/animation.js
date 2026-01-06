/**
 * Animation module for West Lake Travel Itinerary
 */
export class Animation {
    static init() {
        this.animateSections();
        this.animateTimeSlots();
        this.setupImageHoverEffects();
    }

    static animateSections() {
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
    }

    static animateTimeSlots() {
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
    }

    static setupImageHoverEffects() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
}