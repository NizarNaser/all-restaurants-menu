document.addEventListener("DOMContentLoaded", () => {
    // 🎯 عرض الشرائح التلقائي وزر يدوي
    let slides = document.querySelectorAll(".slide");
    let current = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
      });
    }
  
    document.querySelector(".next").addEventListener("click", () => {
      current = (current + 1) % slides.length;
      showSlide(current);
    });
  
    document.querySelector(".prev").addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      showSlide(current);
    });
  
    // ⏱️ تشغيل تلقائي كل 5 ثوانٍ
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);
  
    // 🔘 التحكم بقائمة الهامبرغر في الأجهزة الصغيرة
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // 🔗 تنقل سلس للروابط
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
          });
          navLinks.classList.remove('active');
        }
      });
    });
  
  
    // 🖱️ Scroll by mouse drag for Team Slider
    const teamSlider = document.querySelector('.team-slider');
    let isDownTeam = false;
    let startXTeam, scrollLeftTeam;
  
    teamSlider.addEventListener('mousedown', (e) => {
      isDownTeam = true;
      teamSlider.classList.add('active');
      startXTeam = e.pageX - teamSlider.offsetLeft;
      scrollLeftTeam = teamSlider.scrollLeft;
    });
  
    teamSlider.addEventListener('mouseleave', () => {
      isDownTeam = false;
      teamSlider.classList.remove('active');
    });
  
    teamSlider.addEventListener('mouseup', () => {
      isDownTeam = false;
      teamSlider.classList.remove('active');
    });
  
    teamSlider.addEventListener('mousemove', (e) => {
      if (!isDownTeam) return;
      e.preventDefault();
      const x = e.pageX - teamSlider.offsetLeft;
      const walk = (x - startXTeam) * 2;
      teamSlider.scrollLeft = scrollLeftTeam - walk;
    });
  
    // 🔄 Auto scroll team slider with reset when reaching end
    setInterval(() => {
      if (teamSlider.scrollLeft + teamSlider.clientWidth >= teamSlider.scrollWidth) {
        teamSlider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        teamSlider.scrollBy({ left: 250, behavior: 'smooth' });
      }
    }, 3000);
  });
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("form-status").textContent = "✅ Your message has been sent successfully!";
      this.reset();
    });
  }
  
    

  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  document.querySelector('.reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your reservation has been submitted!");
  });

  const revealElements = document.querySelectorAll('.scroll-reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // تشغيل عند تحميل الصفحة


 
  function renderFavoriteToppings(food_list) {
    const favoritesContainer = document.getElementById("favorites-track");
  
    // تفريغ المحتوى القديم
    favoritesContainer.innerHTML = "";
  
    // استخراج 10 عناصر topping: true عشوائيًا
    const toppings = food_list
      .filter(item => item.topping === true)
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
  
    // إنشاء العناصر وعرضها
    toppings.forEach(item => {
      const div = document.createElement("div");
      div.className = "favorite-item";
      div.onclick = () => location.href = `all-restaurants-menu/dish-details.html?id=${item._id}`;

      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="price">
          <span class="original-price">€${item.price}</span>
          <span class="discounted-price">€${item.price - item.price/10}</span>
        </div>
      `;
  
      favoritesContainer.appendChild(div);
    });
  }
  
  // استدعاء الدالة عند تحميل الصفحة
  window.addEventListener("DOMContentLoaded", () => {
    renderFavoriteToppings(food_list);
  });
  
  //استخراج 10 عناصر bar
  function renderBarToppings(food_list) {
    const favoritesContainer = document.getElementById("bar-track");
  
    // تفريغ المحتوى القديم
    favoritesContainer.innerHTML = "";
  
    // استخراج 10 عناصر topping: true عشوائيًا
    const toppings = food_list
      .filter(item => item.addel === "Bar"&& item.topping === true)
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
  
    // إنشاء العناصر وعرضها
    toppings.forEach(item => {
      const div = document.createElement("div");
      div.className = "bar-item";
      div.onclick = () => location.href = `all-restaurants-menu/dish-details.html?id=${item._id}`;
  
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="price">
          <span class="original-price">€${item.price}</span>
          <span class="discounted-price">€${item.price - item.price/10}</span>
        </div>
      `;
  
      favoritesContainer.appendChild(div);
    });
  }
  
  // استدعاء الدالة عند تحميل الصفحة
  window.addEventListener("DOMContentLoaded", () => {
    renderBarToppings(food_list);
  });

    //استخراج 10 عناصر kitchen
    function renderKitchenToppings(food_list) {
      const favoritesContainer = document.getElementById("kitchen-track");
    
      // تفريغ المحتوى القديم
      favoritesContainer.innerHTML = "";
    
      // استخراج 10 عناصر topping: true عشوائيًا
      const toppings = food_list
        .filter(item => item.addel === "kitchen"&& item.topping === true)
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
    
      // إنشاء العناصر وعرضها
      toppings.forEach(item => {
        const div = document.createElement("div");
        div.className = "bar-item";
        div.onclick = () => location.href = `all-restaurants-menu/dish-details.html?id=${item._id}`;
    
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <div class="price">
            <span class="original-price">€${item.price}</span>
            <span class="discounted-price">€${item.price - item.price/10}</span>
          </div>
        `;
    
        favoritesContainer.appendChild(div);
      });
    }
    
    // استدعاء الدالة عند تحميل الصفحة
    window.addEventListener("DOMContentLoaded", () => {
      renderKitchenToppings(food_list);
    });
  
  