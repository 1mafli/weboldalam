const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
            }
        });
        //Bureger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();

(function () {
  const lines = [
    "1mafla@server:~$ whoami",
    "Üdvözöllek a weboldalamon! Beke Zsolt vagyok!",
    "",
    "1mafla@server:~$ coffee",
    "Error: A kávégép elromlott! Kérlek nézz vissza később!",
    "",
    "1mafla@server:~$ sudo apt install türelem",
    "Türelem csomag telepítve.",
    "Az oldal épül... becsült idő: hamarosan"
  ];
 
  const target = document.getElementById('terminalText');
  let started = false;
 
  function typeWriter(lineIndex = 0, charIndex = 0) {
    if (lineIndex >= lines.length) return;
    const currentLine = lines[lineIndex];
 
    if (charIndex < currentLine.length) {
      target.textContent += currentLine[charIndex];
      setTimeout(() => typeWriter(lineIndex, charIndex + 1), 35);
    } else {
      target.textContent += "\n";
      setTimeout(() => typeWriter(lineIndex + 1, 0), 300);
    }
  }
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        typeWriter();
      }
    });
  }, { threshold: 0.4 });
 
  observer.observe(document.getElementById('terminalFrame'));
})();