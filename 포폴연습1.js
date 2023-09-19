const whiteMode = document.getElementById("white-mode");
const body = document.body;

whiteMode.addEventListener("click", () => {
    body.classList.toggle("white-mode");
});

// -----------------------------------
const bars = document.querySelectorAll(".percent-bar .percent");

bars.forEach((bar) => {
    const totalPercent = parseFloat(bar.getAttribute("data-percent"));

    let t = 0;
    let animationInterval;

    bar.addEventListener("mouseover", () => {
        if(!animationInterval) {
            animationInterval = setInterval(() => {
                if( t > totalPercent) {
                    clearInterval(animationInterval);
                    animationInterval = null;
                    t = 0;
                } else {
                    bar.style.width = (t++) + "%";
                }    
            }, 10);
        }
    });
});