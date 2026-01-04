// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 添加平滑滾動到導航連結
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加滾動動畫效果
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

    // 圖片懸停效果
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 添加時間軸動畫
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

    // 添加回到頂部按鈕
    const topButton = document.createElement('button');
    topButton.textContent = '↑';
    topButton.id = 'topButton';
    topButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #1a6dcc;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, background 0.3s;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(topButton);

    // 監聽滾動事件以顯示/隱藏按鈕
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            topButton.style.opacity = '1';
        } else {
            topButton.style.opacity = '0';
        }
    });

    // 點擊按鈕回到頂部
    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 添加燈箱效果到圖片
    const galleryImages = document.querySelectorAll('.gallery-container img, .media-container img');
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', function() {
            // 創建燈箱
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                cursor: pointer;
            `;
            
            const largeImg = document.createElement('img');
            largeImg.src = this.src.replace('w=800', 'w=1200').replace('q=80', 'q=95');
            largeImg.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border: 2px solid white;
                border-radius: 4px;
            `;
            
            lightbox.appendChild(largeImg);
            document.body.appendChild(lightbox);
            
            // 點擊燈箱關閉
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });

    // 添加進度條功能
    const progressBar = document.createElement('div');
    progressBar.id = 'progressBar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #1a6dcc, #0d4a9e);
        z-index: 1001;
        transition: width 0.1s;
    `;
    
    document.body.appendChild(progressBar);
    
    // 監聽滾動事件更新進度條
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });
});