// ===== PRELOADER =====
const hidePreloader = () => {
  const preloader = document.querySelector('.preloader');
  if (preloader && !preloader.classList.contains('hidden')) {
    preloader.classList.add('hidden');
  }
};

// Hide preloader when everything is loaded
window.addEventListener('load', hidePreloader);

// Safety net: Hide preloader after a maximum of 1.5 seconds so slowly loading heavy images don't block the user
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(hidePreloader, 1500);
});

// ===== NAVBAR =====
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Scroll effect
let lastScrollY = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }

  // Scroll-to-top button
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    if (scrollY > 400) {
      scrollTop.classList.add('show');
    } else {
      scrollTop.classList.remove('show');
    }
  }

  // Active nav link
  updateActiveNavLink();
  lastScrollY = scrollY;
});

// Hamburger menu
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu?.classList.toggle('active');
  document.body.style.overflow = navMenu?.classList.contains('active') ? 'hidden' : '';
});

// Close nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close nav on click outside
document.addEventListener('click', (e) => {
  if (navMenu?.classList.contains('active') &&
      !navMenu.contains(e.target) &&
      !hamburger?.contains(e.target)) {
    hamburger?.classList.remove('active');
    navMenu?.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Active nav link on scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href*="#${id}"]`);

    if (scrollY >= top && scrollY < top + height) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link?.classList.add('active');
    }
  });
}

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.count-up');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      counter.textContent = current.toLocaleString('en-IN') + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString('en-IN') + suffix;
      }
    }

    requestAnimationFrame(update);
  });
}

// Trigger counters when in view
const counterSection = document.querySelector('.trust-badges');
if (counterSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  counterObserver.observe(counterSection);
}

// ===== PREMIUM CALCULATOR =====
const calcForm = document.getElementById('calcForm');
calcForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const age = parseInt(document.getElementById('calcAge').value);
  const gender = document.getElementById('calcGender').value;
  const coverage = parseInt(document.getElementById('calcCoverage').value);
  const term = parseInt(document.getElementById('calcTerm').value);

  if (!age || !gender || !coverage || !term) {
    alert('Please fill all fields');
    return;
  }

  // Simplified premium calculation formula (approximation)
  let baseRate = 0;

  if (age <= 25) baseRate = 5;
  else if (age <= 30) baseRate = 7;
  else if (age <= 35) baseRate = 9;
  else if (age <= 40) baseRate = 13;
  else if (age <= 45) baseRate = 18;
  else if (age <= 50) baseRate = 25;
  else if (age <= 55) baseRate = 35;
  else baseRate = 50;

  // Gender factor
  const genderFactor = gender === 'female' ? 0.9 : 1;

  // Term factor
  const termFactor = term <= 10 ? 1.2 : term <= 20 ? 1 : 0.9;

  // Annual premium
  const annualPremium = Math.round((coverage / 1000) * baseRate * genderFactor * termFactor);
  const monthlyPremium = Math.round(annualPremium / 12);

  // Show result with animation
  const result = document.getElementById('calcResult');
  const monthly = document.getElementById('monthlyPremium');
  const annual = document.getElementById('annualPremium');

  if (monthly) monthly.textContent = '₹' + monthlyPremium.toLocaleString('en-IN');
  if (annual) annual.textContent = '₹' + annualPremium.toLocaleString('en-IN') + '/year';

  result?.classList.add('show');

  // Smooth scroll to result
  result?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });

    // Open clicked
    if (!isActive) {
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ===== CONTACT FORM VALIDATION & SUBMISSION =====
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Clear previous errors
  contactForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

  // Validate name
  const name = contactForm.querySelector('#contactName');
  if (name && !name.value.trim()) {
    name.closest('.form-group').classList.add('error');
    valid = false;
  }

  // Validate phone
  const phone = contactForm.querySelector('#contactPhone');
  if (phone && !/^[6-9]\d{9}$/.test(phone.value.trim())) {
    phone.closest('.form-group').classList.add('error');
    valid = false;
  }

  // Validate email
  const email = contactForm.querySelector('#contactEmail');
  if (email && email.value.trim() && !/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    email.closest('.form-group').classList.add('error');
    valid = false;
  }

  if (valid) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const nameVal = name.value.trim();
    const phoneVal = phone.value.trim();
    const emailVal = email ? email.value.trim() : '';
    const planVal = contactForm.querySelector('#contactPlan')?.value || 'Other / Not Sure';
    const messageVal = contactForm.querySelector('#contactMessage')?.value.trim() || 'No message provided';

    // 1. Submit to agent's email via FormSubmit API
    fetch("https://formsubmit.co/ajax/pvnarayana2014@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New LIC Inquiry from ${nameVal} (${planVal})`,
        Name: nameVal,
        "Phone Number": phoneVal,
        "Email Address": emailVal || 'N/A',
        "Plan Interest": planVal,
        Message: messageVal
      })
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      contactForm.style.display = 'none';
      const success = contactForm.parentElement.querySelector('.form-success');
      if (success) success.classList.add('show');

      // 2. Open WhatsApp link with pre-filled message
      const waMsg = `Hi Venkata Narayana Garu,

I am interested in LIC insurance plans. Here are my details:
• Name: ${nameVal}
• Phone: ${phoneVal}
• Email: ${emailVal || 'N/A'}
• Plan Interest: ${planVal}
• Message: ${messageVal}

Please guide me with the details!`;
      const waUrl = `https://wa.me/919441412924?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');

      // Reset after showing success
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        success?.classList.remove('show');
      }, 5000);
    });
  }
});

// ===== QUICK QUOTE MODAL VALIDATION & SUBMISSION =====
function openQuoteModal() {
  document.getElementById('quoteModal')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  document.getElementById('quoteModal')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('quoteModal')?.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeQuoteModal();
  }
});

// Quote form submission
const quoteForm = document.getElementById('quoteForm');
quoteForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  quoteForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

  const quoteName = quoteForm.querySelector('#quoteName');
  const quoteAge = quoteForm.querySelector('#quoteAge');
  const quotePhone = quoteForm.querySelector('#quotePhone');
  const quoteCoverage = quoteForm.querySelector('#quoteCoverage');

  if (quoteName && !quoteName.value.trim()) {
    quoteName.closest('.form-group').classList.add('error');
    valid = false;
  }
  if (quoteAge && (!quoteAge.value || quoteAge.value < 18 || quoteAge.value > 65)) {
    quoteAge.closest('.form-group').classList.add('error');
    valid = false;
  }
  if (quotePhone && !/^[6-9]\d{9}$/.test(quotePhone.value.trim())) {
    quotePhone.closest('.form-group').classList.add('error');
    valid = false;
  }

  if (valid) {
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Requesting...';

    const nameVal = quoteName.value.trim();
    const ageVal = quoteAge.value;
    const phoneVal = quotePhone.value.trim();
    const coverageVal = quoteCoverage?.value || 'Not Sure';

    // 1. Submit to agent's email via FormSubmit API
    fetch("https://formsubmit.co/ajax/pvnarayana2014@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New LIC Quick Quote Request from ${nameVal}`,
        Name: nameVal,
        Age: ageVal,
        "Phone Number": phoneVal,
        "Coverage Needed": coverageVal
      })
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      quoteForm.style.display = 'none';
      const success = document.getElementById('quoteSuccess');
      if (success) success.classList.add('show');

      // 2. Open WhatsApp link with pre-filled message
      const waMsg = `Hi Venkata Narayana Garu,

I want a quick quote for an LIC policy. Here are my details:
• Name: ${nameVal}
• Age: ${ageVal} years
• Phone: ${phoneVal}
• Coverage Needed: ${coverageVal}

Please suggest the best options!`;
      const waUrl = `https://wa.me/919441412924?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');

      setTimeout(() => {
        quoteForm.reset();
        quoteForm.style.display = 'block';
        success?.classList.remove('show');
        closeQuoteModal();
      }, 3000);
    });
  }
});

// ===== APPOINTMENT FORM VALIDATION & SUBMISSION =====
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  appointmentForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

  const aptName = appointmentForm.querySelector('#aptName');
  const aptPhone = appointmentForm.querySelector('#aptPhone');
  const aptDate = appointmentForm.querySelector('#aptDate');
  const aptTime = appointmentForm.querySelector('#aptTime');

  if (aptName && !aptName.value.trim()) {
    aptName.closest('.form-group').classList.add('error');
    valid = false;
  }
  if (aptPhone && !/^[6-9]\d{9}$/.test(aptPhone.value.trim())) {
    aptPhone.closest('.form-group').classList.add('error');
    valid = false;
  }
  if (aptDate && !aptDate.value) {
    aptDate.closest('.form-group').classList.add('error');
    valid = false;
  }
  if (aptTime && !aptTime.value) {
    aptTime.closest('.form-group').classList.add('error');
    valid = false;
  }

  if (valid) {
    const submitBtn = appointmentForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';

    const nameVal = aptName.value.trim();
    const phoneVal = aptPhone.value.trim();
    const dateVal = aptDate.value;
    const timeVal = aptTime.value;

    // 1. Submit to agent's email via FormSubmit API
    fetch("https://formsubmit.co/ajax/pvnarayana2014@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New LIC Appointment Booking from ${nameVal}`,
        Name: nameVal,
        "Phone Number": phoneVal,
        "Appointment Date": dateVal,
        "Appointment Time": timeVal
      })
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      appointmentForm.style.display = 'none';
      const success = appointmentForm.parentElement.querySelector('.form-success');
      if (success) success.classList.add('show');

      // 2. Open WhatsApp link with pre-filled message
      const waMsg = `Hi Venkata Narayana Garu,

I would like to book an LIC advisory appointment:
• Name: ${nameVal}
• Phone: ${phoneVal}
• Requested Date: ${dateVal}
• Requested Time: ${timeVal}

Please confirm if this slot is available!`;
      const waUrl = `https://wa.me/919441412924?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');

      setTimeout(() => {
        appointmentForm.reset();
        appointmentForm.style.display = 'block';
        success?.classList.remove('show');
      }, 5000);
    });
  }
});

// ===== ONLINE SERVICE FORM VALIDATION & SUBMISSION =====
const serviceForm = document.getElementById('serviceForm');
serviceForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  serviceForm.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

  const srvName = serviceForm.querySelector('#srvName');
  const srvPhone = serviceForm.querySelector('#srvPhone');
  const srvPolicy = serviceForm.querySelector('#srvPolicy');
  const srvEmail = serviceForm.querySelector('#srvEmail');
  const srvType = serviceForm.querySelector('#srvType');
  const srvMessage = serviceForm.querySelector('#srvMessage');

  if (srvName && !srvName.value.trim()) {
    srvName.closest('.form-group').classList.add('error');
    valid = false;
  }
  if (srvPhone && !/^[6-9]\d{9}$/.test(srvPhone.value.trim())) {
    srvPhone.closest('.form-group').classList.add('error');
    valid = false;
  }
  if (srvPolicy && !srvPolicy.value.trim()) {
    srvPolicy.closest('.form-group').classList.add('error');
    valid = false;
  }

  if (valid) {
    const submitBtn = serviceForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    const nameVal = srvName.value.trim();
    const phoneVal = srvPhone.value.trim();
    const policyVal = srvPolicy.value.trim();
    const emailVal = srvEmail ? srvEmail.value.trim() : '';
    const typeVal = srvType?.value || 'Other Query';
    const msgVal = srvMessage?.value.trim() || 'No additional details provided';

    // 1. Submit to agent's email via FormSubmit API
    fetch("https://formsubmit.co/ajax/pvnarayana2014@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `New LIC Policy Service Request from ${nameVal} (${typeVal})`,
        Name: nameVal,
        "Phone Number": phoneVal,
        "Policy Number": policyVal,
        "Email Address": emailVal || 'N/A',
        "Service Request Type": typeVal,
        "Message/Request Details": msgVal
      })
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      serviceForm.style.display = 'none';
      const success = serviceForm.parentElement.querySelector('.form-success');
      if (success) success.classList.add('show');

      // 2. Open WhatsApp link with pre-filled message
      const waMsg = `Hi Venkata Narayana Garu,

I am submitting an LIC policy service request:
• Name: ${nameVal}
• Phone: ${phoneVal}
• Policy Number: ${policyVal}
• Email: ${emailVal || 'N/A'}
• Service Needed: ${typeVal}
• Details: ${msgVal}

Please assist me with this!`;
      const waUrl = `https://wa.me/919441412924?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, '_blank');

      setTimeout(() => {
        serviceForm.reset();
        serviceForm.style.display = 'block';
        success?.classList.remove('show');
      }, 5000);
    });
  }
});

// ===== SCROLL TO TOP =====
document.querySelector('.scroll-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== PLANS ACCORDION (Plans page) =====
document.querySelectorAll('.plan-header').forEach(header => {
  header.addEventListener('click', () => {
    const details = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Close all
    document.querySelectorAll('.plan-header').forEach(h => {
      h.classList.remove('active');
      h.nextElementSibling.style.maxHeight = null;
    });

    // Open clicked
    if (!isActive) {
      header.classList.add('active');
      details.style.maxHeight = details.scrollHeight + 'px';
    }
  });
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== SET MIN DATE FOR APPOINTMENT =====
const aptDateInput = document.getElementById('aptDate');
if (aptDateInput) {
  const today = new Date().toISOString().split('T')[0];
  aptDateInput.setAttribute('min', today);
}

// ===== ESC KEY TO CLOSE MODAL =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeQuoteModal();
  }
});

// ===== PARALLAX EFFECT ON HERO (subtle) =====
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      const heroPattern = hero.querySelector('.hero-pattern');
      if (heroPattern) {
        heroPattern.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    }
  }, { passive: true });
}

// ===== TYPING EFFECT FOR HERO BADGE (optional, subtle) =====
// Adds focus ring removal for mouse users only
document.addEventListener('mousedown', () => {
  document.body.classList.add('using-mouse');
});
document.addEventListener('keydown', () => {
  document.body.classList.remove('using-mouse');
});

// ===== GALLERY FILTER =====
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            item.style.display = '';
          } else {
            item.classList.add('hidden');
            // Use timeout to allow CSS transition
            setTimeout(() => {
              if (item.classList.contains('hidden')) {
                item.style.display = 'none';
              }
            }, 400);
          }
        });
      });
    });
  }
});

