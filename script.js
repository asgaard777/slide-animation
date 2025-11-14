// Vanilla-JS version for the slide-animation code

window.addEventListener('load', function () {
    const slideWindow = document.querySelector("#slider");
    const slide = document.querySelector("#slider ul");
    const SLIDE_WIDTH = document.querySelector('img').offsetWidth;
    const imgList = document.querySelectorAll('#slider ul li');


    class Slider {
        constructor(slideElement, currentOffset = 0) {
            this.slide = slideElement;
            this.currentOffset = currentOffset;
        }

        move(distance) {
            const from = this.currentOffset;
            const to = this.currentOffset + distance;

            this.slide.animate(
                [
                    { transform: `translateX(${from}px)` },
                    { transform: `translateX(${to}px)` }
                ],
                {
                    duration: 600,
                    fill: "forwards",
                    easing: "ease-out"
                }
            );
            this.currentOffset = to;
        }
    }

    let mySlider = new Slider(slide);               
    let firstChild = slide.firstElementChild;

    function moveSlide() {
        mySlider.move(-SLIDE_WIDTH);     
        firstChild.remove();
        slide.appendChild(firstChild);
        firstChild = slide.firstElementChild;         
        mySlider = new Slider(slide);
    }

    let interval = setInterval(moveSlide, 900);    
})





