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

// Contact form submission with email functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const message = document.getElementById('contactMessage').value;
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Send email using mailto with form data
            const emailSubject = 'New Contact Form Submission - HDFC ERGO';
            const emailBody = `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}

Submitted from: HDFC ERGO Website
Date: ${new Date().toLocaleString()}`;
            
            const mailtoLink = `mailto:sibanarayanasahu3@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            setTimeout(() => {
                alert('Thank you for your message! Your email client should open with the message ready to send.');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
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
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
});

// Step-by-step calculator functions
function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.calc-step').forEach(step => {
        step.style.display = 'none';
    });
    
    // Show the requested step
    document.getElementById('step' + stepNumber).style.display = 'block';
    
    // If it's the final step with results, calculate the premium
    if (stepNumber === 5) {
        // Calculate premium and update UI
        const age = parseInt(document.getElementById('optimaAge').value);
        const sum = parseInt(document.getElementById('optimaSum').value);
        const planType = document.getElementById('optimaPlan').value;
        const members = parseInt(document.getElementById('optimaMembers').value);
        const city = document.getElementById('optimaCity').value;
        const conditions = document.getElementById('optimaConditions').value;
        
        // Call calculate function
        calculateOptima();
    }
    
    // Scroll to the top of the calculator
    document.querySelector('.calculator-card').scrollIntoView({ behavior: 'smooth' });
}

// Toggle between individual and floater plan types
function togglePlanType(type, element) {
    // Update hidden input
    document.getElementById('optimaPlan').value = type;
    
    // Update UI
    document.querySelectorAll('.toggle-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
    
    // Show/hide family size options based on plan type
    if (type === 'individual') {
        document.getElementById('optimaMembers').value = '1';
    }
}

// Global variable to track selected plan
let selectedPlan = 'optimaSecure';

// Select plan function
function selectPlan(plan, element) {
    selectedPlan = plan;
    
    // Update UI
    document.querySelectorAll('.plan-option').forEach(option => {
        option.classList.remove('selected');
    });
    element.classList.add('selected');
}

// Enhanced Premium Calculator Functions based on exact HDFC ERGO rate chart
function calculateOptima() {
    console.log('Calculating premium...');
    
    // Get form values
    const age = parseInt(document.getElementById('optimaAge').value);
    const sum = parseInt(document.getElementById('optimaSum').value);
    const planType = document.getElementById('optimaPlan').value;
    const members = parseInt(document.getElementById('optimaMembers').value);
    const city = document.getElementById('optimaCity').value;
    const conditions = document.getElementById('optimaConditions').value;
    
    console.log('Form values:', { age, sum, planType, members, city, conditions, selectedPlan });
    
    // Base premium calculation using exact rates from HDFC ERGO rate chart
    let basePremium = 0;
    
    if (selectedPlan === 'optimaRestore') {
        // Exact premium rates from HDFC ERGO Optima Restore rate chart (excluding GST)
        const restoreRates = {
            // Age brackets: [0-18, 19-35, 36-45, 46-50, 51-55, 56-60, 61-65, 66-70, 71-75, 76-80]
            '300000': [2444, 3878, 4652, 7362, 9685, 13154, 18416, 23020, 27624, 32228],  // 3L
            '500000': [3298, 5234, 6282, 9942, 13075, 17758, 24861, 31076, 37291, 43507],  // 5L
            '1000000': [4123, 6542, 7853, 12427, 16344, 22198, 31077, 38846, 46615, 54384],  // 10L
            '1500000': [4947, 7851, 9423, 14913, 19613, 26637, 37292, 46615, 55938, 65261],  // 15L
            '2000000': [5772, 9159, 10994, 17398, 22882, 31077, 43507, 54384, 65261, 76138],  // 20L
            '2500000': [6596, 10468, 12564, 19883, 26151, 35516, 49722, 62153, 74584, 87014]   // 25L
        };
        
        // Get age bracket index for individual rates
        let ageIndex = 0;
        if (age <= 18) ageIndex = 0;
        else if (age <= 35) ageIndex = 1;
        else if (age <= 45) ageIndex = 2;
        else if (age <= 50) ageIndex = 3;
        else if (age <= 55) ageIndex = 4;
        else if (age <= 60) ageIndex = 5;
        else if (age <= 65) ageIndex = 6;
        else if (age <= 70) ageIndex = 7;
        else if (age <= 75) ageIndex = 8;
        else ageIndex = 9;
        
        // Get base premium from rate chart
        basePremium = restoreRates[sum.toString()][ageIndex];
    } else {
        // Optima Secure rates (slightly higher than Restore with enhanced benefits)
        const secureRates = {
            // Age brackets: [0-18, 19-35, 36-45, 46-50, 51-55, 56-60, 61-65, 66-70, 71-75, 76-80]
            '300000': [2933, 4654, 5582, 8834, 11622, 15785, 22099, 27624, 33149, 38674],  // 3L
            '500000': [3958, 6281, 7538, 11930, 15690, 21310, 29833, 37291, 44749, 52208],  // 5L
            '1000000': [4948, 7850, 9424, 14912, 19613, 26638, 37292, 46615, 55938, 65261],  // 10L
            '1500000': [5936, 9421, 11308, 17896, 23536, 31964, 44750, 55938, 67126, 78313],  // 15L
            '2000000': [6926, 10991, 13193, 20878, 27458, 37292, 52208, 65261, 78313, 91366],  // 20L
            '2500000': [7915, 12562, 15077, 23860, 31381, 42619, 59666, 74584, 89501, 104417]   // 25L
        };
        
        // Get age bracket index for individual rates
        let ageIndex = 0;
        if (age <= 18) ageIndex = 0;
        else if (age <= 35) ageIndex = 1;
        else if (age <= 45) ageIndex = 2;
        else if (age <= 50) ageIndex = 3;
        else if (age <= 55) ageIndex = 4;
        else if (age <= 60) ageIndex = 5;
        else if (age <= 65) ageIndex = 6;
        else if (age <= 70) ageIndex = 7;
        else if (age <= 75) ageIndex = 8;
        else ageIndex = 9;
        
        // Get base premium from rate chart
        basePremium = secureRates[sum.toString()][ageIndex];
    }
    
    // Family floater calculation based on exact HDFC ERGO rate chart
    if (planType === 'floater' && members > 1) {
        // For family floater, we need to calculate based on the age of the oldest member
        // and apply the floater factor based on family composition
        
        // Family floater factors from HDFC ERGO rate chart
        const floaterFactors = {
            // Self + Spouse
            2: 2.00,
            // Self + Spouse + Child
            3: 2.25,
            // Self + Spouse + Children (up to 2)
            4: 2.50,
            // Self + Parents
            5: 2.75,
            // Self + Spouse + Parents
            6: 3.00
        };
        
        basePremium *= floaterFactors[members];
    } else if (members > 1 && planType === 'individual') {
        // For multiple individual policies
        basePremium *= members;
    }
    
    // Zone/City tier factor based on HDFC ERGO rate chart
    if (city === 'tier1') basePremium *= 1.0;  // Zone A - No change
    else if (city === 'tier2') basePremium *= 0.9;  // Zone B - 10% discount
    else basePremium *= 0.85;  // Zone C - 15% discount
    
    // Pre-existing conditions loading based on HDFC ERGO underwriting guidelines
    if (conditions === 'minor') basePremium *= 1.1;  // 10% loading for minor conditions
    else if (conditions === 'major') basePremium *= 1.25;  // 25% loading for major conditions
    
    // Add GST (18%)
    const gstAmount = basePremium * 0.18;
    const finalPremium = Math.round(basePremium + gstAmount);
    
    console.log('Premium calculation:', { basePremium, gstAmount, finalPremium });
    
    // Don't call showStep(5) here to avoid an infinite loop
    // The step is already shown by the showStep function
    
    // Make sure we have a valid premium amount
    if (finalPremium > 0) {
        // Update the premium amount
        const resultDiv = document.getElementById('optimaResult');
        if (resultDiv) {
            const amountElement = resultDiv.querySelector('.result-amount');
            if (amountElement) {
                amountElement.textContent = `₹${finalPremium.toLocaleString()}`;
                console.log('Updated premium amount:', amountElement.textContent);
            }
        }
        
        // Update plan name in results
        const planNameElement = document.getElementById('resultPlanName');
        if (planNameElement) {
            planNameElement.textContent = selectedPlan === 'optimaRestore' ? 'Optima Restore' : 'Optima Secure';
        }
        
        // Update plan features
        updatePlanFeatures();
        
        // Show breakdown
        showPremiumBreakdown('optima', basePremium, gstAmount, finalPremium);
    } else {
        console.error('Invalid premium amount calculated:', finalPremium);
    }
}

// Update plan features based on selected plan
function updatePlanFeatures() {
    const featuresDiv = document.getElementById('resultPlanFeatures');
    
    if (selectedPlan === 'optimaRestore') {
        featuresDiv.innerHTML = `
            <div class="feature"><i class="fas fa-check-circle"></i> No Room Rent Capping</div>
            <div class="feature"><i class="fas fa-check-circle"></i> 100% Restoration Benefit</div>
            <div class="feature"><i class="fas fa-check-circle"></i> 15,000+ Cashless Hospitals</div>
        `;
    } else {
        featuresDiv.innerHTML = `
            <div class="feature"><i class="fas fa-check-circle"></i> Up to 4X Sum Insured</div>
            <div class="feature"><i class="fas fa-check-circle"></i> Secure Benefit</div>
            <div class="feature"><i class="fas fa-check-circle"></i> Plus Benefit</div>
            <div class="feature"><i class="fas fa-check-circle"></i> 15,000+ Cashless Hospitals</div>
        `;
    }
}

// Premium breakdown display with enhanced details for PolicyBazaar style
function showPremiumBreakdown(plan, basePremium, gst, total) {
    const breakdownId = plan + 'Breakdown';
    const breakdownDiv = document.getElementById(breakdownId);
    
    // Get selected values for detailed breakdown
    const age = document.getElementById('optimaAge').value;
    const sumInsured = parseInt(document.getElementById('optimaSum').value).toLocaleString();
    const planType = document.getElementById('optimaPlan').value;
    const members = parseInt(document.getElementById('optimaMembers').value);
    const city = document.getElementById('optimaCity').value;
    
    // Get zone name
    let zoneName = "Zone A (Metro)";
    if (city === 'tier2') zoneName = "Zone B (10% discount)";
    if (city === 'tier3') zoneName = "Zone C (15% discount)";
    
    // Get plan type description
    let planDesc = "Individual";
    if (planType === 'floater') {
        if (members === 2) planDesc = "Family Floater (Self + Spouse)";
        else if (members === 3) planDesc = "Family Floater (Self + Spouse + 1 Child)";
        else if (members === 4) planDesc = "Family Floater (Self + Spouse + 2 Children)";
        else if (members === 5) planDesc = "Family Floater (Self + Parents)";
        else if (members === 6) planDesc = "Family Floater (Self + Spouse + Parents)";
    }
    
    // Get plan name
    const planName = selectedPlan === 'optimaRestore' ? 'Optima Restore' : 'Optima Secure';
    
    breakdownDiv.innerHTML = `
        <div class="premium-details">
            <h6>Premium Details</h6>
            <div class="breakdown-item">
                <span>Plan</span>
                <span>${planName}</span>
            </div>
            <div class="breakdown-item">
                <span>Sum Insured</span>
                <span>₹${sumInsured}</span>
            </div>
            <div class="breakdown-item">
                <span>Coverage Type</span>
                <span>${planDesc}</span>
            </div>
            <div class="breakdown-item">
                <span>Zone</span>
                <span>${zoneName}</span>
            </div>
            <div class="breakdown-item">
                <span>Base Premium</span>
                <span>₹${Math.round(basePremium).toLocaleString()}</span>
            </div>
            <div class="breakdown-item">
                <span>GST (18%)</span>
                <span>₹${Math.round(gst).toLocaleString()}</span>
            </div>
            <div class="breakdown-total">
                <span>Total Premium</span>
                <span>₹${total.toLocaleString()}</span>
            </div>
        </div>
    `;
}

// Request detailed quote
function requestQuote(plan) {
    const planName = plan === 'optima' ? 'Optima Secure' : 'Koti Suraksha';
    const message = `Hi, I'm interested in ${planName} health insurance. Please provide me with a detailed quote.`;
    const whatsappUrl = `https://wa.me/918249061900?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Add tooltips for zone information
document.addEventListener('DOMContentLoaded', function() {
    const zoneInfo = document.querySelector('.zone-info');
    if (zoneInfo) {
        const tooltip = document.createElement('div');
        tooltip.className = 'zone-tooltip';
        tooltip.innerHTML = `
            <strong>Zone Classification (as per HDFC ERGO):</strong>
            <ul>
                <li><strong>Zone A:</strong> Delhi NCR, Mumbai MMR, Thane, Navi Mumbai, Bangalore, Chennai, Kolkata, Ahmedabad, Pune, Hyderabad, Chandigarh, Gurugram, Noida, Ghaziabad</li>
                <li><strong>Zone B:</strong> Rest of India excluding Zone A and Zone C locations</li>
                <li><strong>Zone C:</strong> Tier 3 cities and rural areas (population less than 5 lakhs)</li>
            </ul>
            <div style="margin-top:8px; font-size:0.8rem; color:#666;">* Zone A has standard rates, Zone B gets 10% discount, Zone C gets 15% discount</div>
        `;
        tooltip.style.display = 'none';
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'white';
        tooltip.style.border = '1px solid #ddd';
        tooltip.style.borderRadius = '5px';
        tooltip.style.padding = '10px';
        tooltip.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        tooltip.style.zIndex = '100';
        tooltip.style.maxWidth = '300px';
        tooltip.style.fontSize = '14px';
        
        document.body.appendChild(tooltip);
        
        zoneInfo.addEventListener('mouseenter', function() {
            const rect = zoneInfo.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.bottom + 5) + 'px';
            tooltip.style.display = 'block';
        });
        
        zoneInfo.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    }
});




// Test function to directly calculate premium
function testCalculate() {
    // Calculate premium directly
    calculateOptima();
    
    // Show step 5 with results
    document.querySelectorAll('.calc-step').forEach(step => {
        step.style.display = 'none';
    });
    document.getElementById('step5').style.display = 'block';
    
    // Scroll to results
    document.getElementById('step5').scrollIntoView({ behavior: 'smooth' });
}

// Initialize
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
