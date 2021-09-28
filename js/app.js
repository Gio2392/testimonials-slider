const d = document,
      $slidesImg = d.querySelectorAll(".slide"),
      $slidesText = d.querySelectorAll(".card__text"),
      $btnPrev = d.querySelector(".prev");

let i = 0;
let j = 0;

d.addEventListener("DOMContentLoaded", (e) => {
    d.addEventListener("click", (e) => {
        if(e.target.matches(".prev") || e.target.matches(`.prev *`)){
            $slidesImg[i].classList.remove("active");
            i = (i - 1 + $slidesImg.length) % $slidesImg.length;
            $slidesImg[i].classList.add("active");

            $slidesText[j].classList.remove("active");
            j = (j - 1 + $slidesText.length) % $slidesText.length;
            $slidesText[j].classList.add("active");
        
        }
        if(e.target.matches(".next") || e.target.matches(`.next *`)){
            $slidesImg[i].classList.remove("active");
            i = (i + 1) % $slidesImg.length;
            $slidesImg[i].classList.add("active");

            $slidesText[j].classList.remove("active");
            j = (j + 1) % $slidesText.length;
            $slidesText[j].classList.add("active")
            
        }
    })
})