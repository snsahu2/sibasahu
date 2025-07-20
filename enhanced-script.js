// Enhanced animations and transitions for HDFC ERGO website

document.addEventListener('DOMContentLoaded', function() {
    // Add navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    // Add scroll reveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 200,
        easing: 'ease-out',
        reset: false
    });

    // Apply animations to different sections
    sr.reveal('.section-header', { delay: 100 });
    sr.reveal('.optima-card', { interval: 200 });
    sr.reveal('.multiplier-card', { interval: 100 });
    sr.reveal('.coverage-table', { delay: 200 });
    sr.reveal('.plan-option-card', { interval: 100 });
    sr.reveal('.testimonial-card', { interval: 200 });
    sr.reveal('.contact-card', { delay: 100 });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Add hover effects to tables
    const tableRows = document.querySelectorAll('.coverage-table tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'background-color 0.3s ease';
            this.style.backgroundColor = 'rgba(237, 28, 36, 0.05)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        
        if (heroSection) {
            const heroShapes = document.querySelectorAll('.shape');
            heroShapes.forEach((shape, index) => {
                const speed = 0.2 + (index * 0.1);
                shape.style.transform = `translateY(${scrollPosition * speed}px)`;
            });
        }
    });
    
    // Add shine effect to buttons on hover
    const buttons = document.querySelectorAll('.service-btn, .cta-btn, .contact-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 20px rgba(237, 28, 36, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add smooth transition to cards
    const cards = document.querySelectorAll('.optima-card, .benefit-card, .plan-option-card, .testimonial-card');
    cards.forEach(card => {
        card.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    });
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
});

// Function to play videos on hover
function playVideo(element) {
    const iframe = element.querySelector('iframe');
    const src = iframe.src;
    iframe.src = src + '&autoplay=1';
}

// Function to pause videos when not hovering
function pauseVideo(element) {
    const iframe = element.querySelector('iframe');
    const src = iframe.src;
    iframe.src = src.replace('&autoplay=1', '');
}

// Modal functions
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function openHealthModal() {
    const modal = document.getElementById('healthModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeHealthModal() {
    const modal = document.getElementById('healthModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Chatbot functions
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'flex') {
        chatbot.style.display = 'none';
    } else {
        chatbot.style.display = 'flex';
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message !== '') {
        const chatMessages = document.getElementById('chatMessages');
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(userMessage);
        
        // Clear input
        input.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-message';
            botMessage.innerHTML = `<p>Thank you for your message. Our advisor will get back to you shortly. For immediate assistance, please call 82490 61900.</p>`;
            chatMessages.appendChild(botMessage);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

function selectOption(option) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Add user selection
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    
    let userText = '';
    if (option === 'health') {
        userText = 'I want to know more about health insurance';
    } else if (option === 'benefits') {
        userText = 'Tell me about advisor benefits';
    } else if (option === 'contact') {
        userText = 'I need contact information';
    }
    
    userMessage.innerHTML = `<p>${userText}</p>`;
    chatMessages.appendChild(userMessage);
    
    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        
        let botResponse = '';
        if (option === 'health') {
            botResponse = `<p>HDFC ERGO offers comprehensive health insurance plans with features like:</p>
                          <ul>
                              <li>Up to 4X multiplier benefit with Optima Secure</li>
                              <li>No room rent capping</li>
                              <li>Cashless treatment at 15,000+ hospitals</li>
                              <li>99.8% claim settlement ratio</li>
                          </ul>
                          <p>Would you like to know more about a specific plan?</p>`;
        } else if (option === 'benefits') {
            botResponse = `<p>As an HDFC ERGO advisor, you can enjoy:</p>
                          <ul>
                              <li>Regular monthly payouts</li>
                              <li>Performance-based contests and rewards</li>
                              <li>Sponsored international trips</li>
                              <li>Lifetime renewal commissions</li>
                          </ul>
                          <p>Would you like to join our team?</p>`;
        } else if (option === 'contact') {
            botResponse = `<p>You can reach our advisor through:</p>
                          <p><strong>Phone:</strong> 82490 61900</p>
                          <p><strong>Email:</strong> siba.sahu1@hdfcergo.com</p>
                          <p><strong>Location:</strong> Berhampur - 760001</p>
                          <p>Available: Mon-Sat, 9:00 AM - 8:00 PM</p>`;
        }
        
        botMessage.innerHTML = botResponse;
        chatMessages.appendChild(botMessage);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}