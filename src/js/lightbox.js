/**
 * Lightbox module for West Lake Travel Itinerary
 */
export class Lightbox {
    static init() {
        const galleryImages = document.querySelectorAll('.gallery-container img, .media-container img');
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            
            img.addEventListener('click', function() {
                Lightbox.createLightbox(this);
            });
        });
    }

    static createLightbox(imgElement) {
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
    }
}