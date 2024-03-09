const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;
let autoSlideInterval;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

function nextSlide() {
    n = (n + 1) % imgs.length;
    changeSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 2000); // Change slide every 2000 milliseconds (2 seconds)
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

changeSlide();
startAutoSlide();

prev_btn.addEventListener('click', (e)=>{
    stopAutoSlide();
    if (n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
    startAutoSlide();
});

next_btn.addEventListener('click', (e)=>{
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
})
