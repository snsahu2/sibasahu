// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to services function
function scrollToServices() {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.mobile || !data.interested) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Mobile validation (basic)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(data.mobile.replace(/\s+/g, ''))) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Chatbot functionality
let chatbotVisible = false;

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const toggle = document.querySelector('.chatbot-toggle');
    
    if (chatbotVisible) {
        chatbot.style.display = 'none';
        toggle.innerHTML = '<i class="fas fa-comments"></i>';
        chatbotVisible = false;
    } else {
        chatbot.style.display = 'flex';
        toggle.innerHTML = '<i class="fas fa-times"></i>';
        chatbotVisible = true;
    }
}

function selectOption(option) {
    const messagesContainer = document.getElementById('chatMessages');
    
    // Add user selection
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = `<p>Selected: ${option.charAt(0).toUpperCase() + option.slice(1)}</p>`;
    messagesContainer.appendChild(userMessage);
    
    // Add bot response
    setTimeout(() => {
        const botResponse = getOptionResponse(option);
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerHTML = `<p>${botResponse}</p>`;
        messagesContainer.appendChild(botMessage);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getOptionResponse(option) {
    const responses = {
        'health': 'Our health insurance provides comprehensive coverage including hospitalization, pre & post hospitalization expenses, daycare procedures, ambulance charges, and cashless treatment at 10,000+ network hospitals across India. Premium starts from ₹5,000 annually with coverage up to ₹50 lakhs.',
        'benefits': 'As an HDFC ERGO advisor, you get: Monthly payouts based on performance, Monthly contests with prizes, Club membership benefits, Early closure bonuses, Foreign trips & conferences, Lifetime renewal income (earn forever on policies sold), and Hereditary commission (family continues earning after retirement).',
        'process': 'Enrollment Process: 1) Fill the application form, 2) Clear IRDAI exam (₹800 first attempt, ₹500 re-attempt), 3) Get your advisor ID and password for business after clearing the exam. Minimum eligibility: 10th pass, Aadhar & PAN card, 18+ years age.',
        'contact': 'Contact Siba Narayana Sahu - Assistant Agency Manager at 82490 61900 or siba.sahu1@hdfcergo.com. Office: 1st Floor, Subham Sai Arcade, Khalasahi, Berhampur - 760001. Employee ID: 32473'
    };
    
    return responses[option] || 'Thank you for your interest! Please contact us for more information.';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const messagesContainer = document.getElementById('chatMessages');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(userMessage);
    
    // Clear input
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message.toLowerCase());
        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerHTML = `<p>${botResponse}</p>`;
        messagesContainer.appendChild(botMessage);
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'hello': 'Hello! How can I help you with HDFC ERGO insurance today?',
        'hi': 'Hi there! What would you like to know about our insurance services?',
        'health': 'Our health insurance covers hospitalization, pre/post hospitalization, daycare procedures, and ambulance charges with cashless treatment at 10,000+ hospitals.',
        'benefits': 'Advisor benefits include monthly payouts, contests, foreign trips, lifetime renewal income, and hereditary commission!',
        'join': 'To join: Fill form → Clear IRDAI exam (₹800) → Get advisor credentials. Need 10th pass, Aadhar, PAN, 18+ age.',
        'contact': 'Contact Siba at 82490 61900 or siba.sahu1@hdfcergo.com',
        'default': 'For detailed information, please select from the options above or contact us at 82490 61900.'
    };
    
    for (let key in responses) {
        if (message.includes(key)) {
            return responses[key];
        }
    }
    
    return responses['default'];
}

// Allow Enter key to send message in chatbot
document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.benefit-card, .service-card, .update-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});



// Initialize
document.body.style.opacity = '0';