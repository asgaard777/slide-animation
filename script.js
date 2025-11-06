// Vanilla-JS version for the slide-animation code

window.addEventListener('load', function () {
    const previousBtn = document.querySelector('#previous');
    const nextBtn = document.querySelector('#next');
    const slides = document.querySelector("#slider ul");

    const SLIDE_WIDTH = document.querySelector('img').offsetWidth;
    const NUMBER_OF_SLIDES = document.querySelector('#slider > ul').childElementCount;
    let countRight = NUMBER_OF_SLIDES - 1;

    previousBtn.disabled = true;
    previousBtn.style.opacity = 0.4;


    let currentOffset = 0;
    function move(distance) {
        const from = currentOffset;
        const to = currentOffset + distance;
        slides.animate(
            [
                { transform: `translateX(${from}px)` },
                { transform: `translateX(${to}px)` }
            ],
            {
                duration: 800,
                fill: "forwards",
                easing: "ease-out"
            }
        );
        currentOffset = to;
    }

    function setButtonStatus(btn, isDisabled, opacity) {
        btn.disabled = isDisabled;
        btn.style.opacity = opacity;
    }

    nextBtn.addEventListener('click', function () {
        if (countRight >= 1 && countRight <= NUMBER_OF_SLIDES - 1) {
            --countRight;
            move(-SLIDE_WIDTH);
            setButtonStatus(previousBtn, false, 1);

            if (countRight == 0) setButtonStatus(nextBtn, true, 0.4);
        }
    });


    previousBtn.addEventListener('click', function () {
        if (countRight >= 0 && countRight <= NUMBER_OF_SLIDES - 2) {
            countRight++;
            move(SLIDE_WIDTH);
            setButtonStatus(nextBtn, false, 1);

            if (countRight == NUMBER_OF_SLIDES - 1) setButtonStatus(previousBtn, true, 0.4);
        }
    });
})  





// JQuery version for the slide-animation code

/* $(window).on('load', function () {
    const $previousBtn = $('#previous');
    const $nextBtn = $('#next');
    const $slides = $("#slider ul");

    const $SLIDE_WIDTH = $('img').width();
    const $NUMBER_OF_SLIDES = $('#slider > ul').children().length;
    let $countRight = $NUMBER_OF_SLIDES - 1;

    $previousBtn.prop('disabled', true);
    $previousBtn.css('opacity', 0.4);

    function setButtonStatus($btn, $isDisabled, $opacity) {
        $btn.prop('disabled', $isDisabled);
        $btn.css('opacity', $opacity);
    }

    $nextBtn.click(function () {
        if ($countRight >= 1 && $countRight <= $NUMBER_OF_SLIDES - 1) {
            --$countRight;
            let $moveLeft = '-=' + $SLIDE_WIDTH;
            $slides.animate({ left: $moveLeft }, 500);
            setButtonStatus($previousBtn, false, 1);

            if ($countRight == 0) setButtonStatus($nextBtn, true, 0.4);
        }
    });

    $previousBtn.click(function () {
        if ($countRight >= 0 && $countRight <= $NUMBER_OF_SLIDES - 2) {
            $countRight++;
            let $moveRight = '+=' + $SLIDE_WIDTH;
            $slides.animate({ left: $moveRight }, 500);
            setButtonStatus($nextBtn, false, 1);

            if ($countRight == $NUMBER_OF_SLIDES - 1) setButtonStatus($previousBtn, true, 0.4);
        }
    });
})
 */







