const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

// scroll down color changer code
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// the hum navbar code
window.onload = function(){
    const menu__btn = document.querySelector(".hamburger");
    const mobile__menu = document.querySelector(".mobile-nav")

    menu__btn.addEventListener("click", function(){
        menu__btn.classList.toggle('is-active');
        mobile__menu.classList.toggle('is-active');
    })  
}



starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
      updateRating(index);
    });
  });
  
  function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
      if (idx < index + 1) {
        starEl.classList.add("active");
      } else {
        starEl.classList.remove("active");
      }
    });
  
    emojisEl.forEach((emojiEl) => {
      emojiEl.style.transform = `translateX(-${index * 50}px)`;
      emojiEl.style.color = colorsArray[index];
    });
  }




  function toggleText(){
    var x = document.getElementById("Myid");
    if (x.style.display === "none") { 
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



