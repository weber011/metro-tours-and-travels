document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            });
        });
    }

    // --- Subtle Scroll Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible to keep it faded in
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    
    
    // --- Functional Form Submissions (WhatsApp Integration) ---
    const PHONE_NUMBER = "919031056691";
    
    // Quick Book Form
    const bookForm = document.querySelector('.quick-book-form');
    if (bookForm) {
        bookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bookForm.querySelector('button');
            const originalText = btn.textContent;
            
            const pickup = document.getElementById('qb-pickup') ? document.getElementById('qb-pickup').value : '';
            const drop = document.getElementById('qb-drop') ? document.getElementById('qb-drop').value : '';
            const phone = document.getElementById('qb-phone') ? document.getElementById('qb-phone').value : '';
            
            let message = `Hi Metro Tours & Travels, I would like to request a ride.

*Pickup Location:* ${pickup}
*Drop Location:* ${drop}
*Phone:* ${phone}`;
            
            window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
            
            btn.textContent = 'Redirecting...';
            btn.style.backgroundColor = '#10b981'; // Green
            btn.style.color = '#fff';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                bookForm.reset();
            }, 3000);
        });
    }

    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            const name = document.getElementById('name') ? document.getElementById('name').value : '';
            const phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
            const msg = document.getElementById('message') ? document.getElementById('message').value : '';
            
            let message = `Hi Metro Tours & Travels,

*Name:* ${name}
*Phone:* ${phone}
*Message:* ${msg}`;
            
            window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
            
            btn.textContent = 'Redirecting...';
            btn.style.backgroundColor = '#10b981'; 
            btn.style.color = '#fff';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                contactForm.reset();
            }, 3000);
        });
    }



    // --- Sticky Navbar with Scrolled Class ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

});
