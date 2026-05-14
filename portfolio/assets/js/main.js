document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Cursor Glow Effect
    const cursorGlow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    // Mobile Nav Toggle (Simple implementation)
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Project Data
    const projectData = {
        'trading': {
            title: 'Forex & Stock Prediction System',
            tags: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'yfinance'],
            description: 'A high-end financial dashboard that leverages deep learning to predict market trends.',
            details: [
                'Implemented LSTM (Long Short-Term Memory) neural networks for time-series forecasting.',
                'Integrated real-time data fetching using the yfinance API.',
                'Developed a custom interactive dashboard with Streamlit for data visualization.',
                'Included technical indicators like RSI, SMA, and EMA for comprehensive market analysis.',
                'Achieved automated price movement classification (Increase/Decrease) for the next 30 days.'
            ]
        },
        'ai-search': {
            title: 'AI Search Algorithms & Planning',
            tags: ['Python', 'Algorithms', 'AI', 'Heuristics'],
            description: 'A deep dive into state-space search and automated planning systems.',
            details: [
                'Built optimized implementations of DFS, BFS, and A* search algorithms.',
                'Applied algorithms to solve the 8-puzzle problem and complex maze navigation.',
                'Developed custom heuristics (Manhattan Distance) to optimize search efficiency.',
                'Created a modular search agent framework for testing various algorithmic strategies.',
                'Focused on computational complexity and state-space management.'
            ]
        },
        'auth': {
            title: 'Certificate Authentication Platform',
            tags: ['PHP', 'MySQL', 'Bootstrap 5', 'Security'],
            description: 'A professional-grade system for academic credential verification.',
            details: [
                'Engineered a secure full-stack platform for certificate issuance and verification.',
                'Designed a robust relational database schema with complex constraints and indexing.',
                'Implemented secure administrative workflows for document approval.',
                'Integrated PHPMailer for automated notification systems.',
                'Achieved an A Grade for this capstone project at Unity University.'
            ]
        },
        'ybs': {
            title: 'YBS Business Solution',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
            description: 'A modern, responsive web system for business services.',
            details: [
                'Designed a premium UI/UX with smooth scrolling and interactive components.',
                'Implemented a custom responsive grid system for cross-device compatibility.',
                'Developed interactive service showcases and portfolio modals.',
                'Integrated a PHP-based contact and lead generation system.',
                'Focused on high-end visual aesthetics and performance optimization.'
            ]
        }
    };

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.querySelector('.btn-view').addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];
            
            modalBody.innerHTML = `
                <div class="modal-header">
                    <h2>${data.title}</h2>
                    <div class="modal-tags">
                        ${data.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-desc">
                    <h3>Project Overview</h3>
                    <p>${data.description}</p>
                    <h3>Technical Implementation</h3>
                    <ul>
                        ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Simple Reveal Animation on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .project-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // CSS for reveal animation (added dynamically)
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
