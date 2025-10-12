// function toggleMenu() {
//     const nav = document.getElementById("navLinks");
//     nav.classList.toggle("active");
  
   // --- Navbar Toggle Logic ---
   const menuToggle = document.getElementById("menuToggle");
   const menuClose = document.getElementById("menuClose");
   const nav = document.getElementById("navLinks");
 
   function toggleMenu() {
     nav.classList.toggle("active");
     menuToggle.style.display = nav.classList.contains("active") ? "none" : "flex";
     menuClose.style.display = nav.classList.contains("active") ? "flex" : "none";
   }
 
   menuToggle.addEventListener("click", toggleMenu);
   menuClose.addEventListener("click", toggleMenu);
  
  function showDoctors(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.category-btn[onclick="showDoctors('${category}')"]`).classList.add('active');
  
    const doctorsList = document.getElementById('doctorsList');
    doctorsList.innerHTML = '';
  
    const selectedDoctors = category === 'All' ? Object.values(doctors).flat() : doctors[category] || [];
    selectedDoctors.forEach(doctor => {
      const card = document.createElement('div');
      card.className = 'doctor-card';
      card.innerHTML = `
        <img src="${doctor.img}" alt="${doctor.name}">
        <h3>${doctor.name}</h3>
        <p>${doctor.qual}</p>
      `;
      doctorsList.appendChild(card);
    });
  }
  
  // Initialize with default category
  document.addEventListener('DOMContentLoaded', () => showDoctors('All'));



  // // --- Navbar Toggle Logic ---
  // const menuToggle = document.getElementById("menuToggle");
  // const menuClose = document.getElementById("menuClose");
  // const nav = document.getElementById("navLinks");

  // function toggleMenu() {
  //   nav.classList.toggle("active");
  //   menuToggle.style.display = nav.classList.contains("active") ? "none" : "flex";
  //   menuClose.style.display = nav.classList.contains("active") ? "flex" : "none";
  // }

  // menuToggle.addEventListener("click", toggleMenu);
  // menuClose.addEventListener("click", toggleMenu);

  // // --- Doctor Category Logic ---
  // function showDoctors(category) {
  //   const buttons = document.querySelectorAll('.category-btn');
  //   buttons.forEach(btn => btn.classList.remove('active'));
  //   document.querySelector(`.category-btn[onclick="showDoctors('${category}')"]`).classList.add('active');

  //   const doctorsList = document.getElementById('doctorsList');
  //   doctorsList.innerHTML = '';

  //   const selectedDoctors = category === 'All' ? Object.values(doctors).flat() : doctors[category] || [];
  //   selectedDoctors.forEach(doctor => {
  //     const card = document.createElement('div');
  //     card.className = 'doctor-card';
  //     card.innerHTML = `
  //       <img src="${doctor.img}" alt="${doctor.name}">
  //       <h3>${doctor.name}</h3>
  //       <p>${doctor.qual}</p>
  //     `;
  //     doctorsList.appendChild(card);
  //   });
  // }

  // // Initialize default doctors on load
  // document.addEventListener('DOMContentLoaded', () => showDoctors('All'));
