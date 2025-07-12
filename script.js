// Modern JavaScript functionality

// Profile Modal
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal on outside click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('profileModal');
    if (e.target === modal) {
        closeProfileModal();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Chatbot functionality
let chatbotVisible = false;

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    
    if (chatbotVisible) {
        chatbot.style.display = 'none';
        chatbotVisible = false;
    } else {
        chatbot.style.display = 'flex';
        chatbotVisible = true;
    }
}

function selectOption(option) {
    const messagesContainer = document.getElementById('chatMessages');
    
    // Add user selection
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = `<p>Selected: ${option.charAt(0).toUpperCase() + option.slice(1)}</p>`;
    userMessage.style.cssText = 'background: #ED1C24; color: white; padding: 10px 15px; border-radius: 15px; border-bottom-right-radius: 5px; margin-left: auto; max-width: 80%;';
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
        'health': 'Our health insurance provides comprehensive coverage including hospitalization, pre & post hospitalization expenses, daycare procedures, ambulance charges, and cashless treatment at 15,000+ network hospitals across India. Premium starts from ₹5,000 annually with coverage up to ₹50 lakhs.',
        'benefits': 'As an HDFC ERGO advisor, you get: Monthly payouts based on performance, Monthly contests with prizes, Club membership benefits, Early closure bonuses, Foreign trips & conferences, Lifetime renewal income, and Hereditary commission.',
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
    userMessage.style.cssText = 'background: #ED1C24; color: white; padding: 10px 15px; border-radius: 15px; border-bottom-right-radius: 5px; margin-left: auto; max-width: 80%; margin-bottom: 15px;';
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
        'health': 'Our health insurance covers hospitalization, pre/post hospitalization, daycare procedures, and ambulance charges with cashless treatment at 15,000+ hospitals.',
        'benefits': 'Advisor benefits include monthly payouts, contests, foreign trips, lifetime renewal income, and hereditary commission!',
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
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Health Insurance Modal
function openHealthModal() {
    const modal = document.getElementById('healthModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeHealthModal() {
    const modal = document.getElementById('healthModal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close health modal on outside click
document.addEventListener('click', function(e) {
    const healthModal = document.getElementById('healthModal');
    if (e.target === healthModal) {
        closeHealthModal();
    }
});

// Video hover functionality
function playVideo(card) {
    const iframe = card.querySelector('iframe');
    const src = iframe.src;
    
    if (src.includes('autoplay=0') || !src.includes('autoplay')) {
        iframe.src = src.includes('?') ? src + '&autoplay=1' : src + '?autoplay=1';
    }
}

function pauseVideo(card) {
    const iframe = card.querySelector('iframe');
    const src = iframe.src;
    
    if (src.includes('autoplay=1')) {
        iframe.src = src.replace('&autoplay=1', '').replace('?autoplay=1', '');
    }
}

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
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

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .benefit-card, .comparison-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize page
    document.body.style.opacity = '1';
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
});

// Initialize
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
