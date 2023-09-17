const darkmode = document.getElementById("dark-mode");
const body = document.body;

darkmode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// ----------------------------------------------
const bars = document.querySelectorAll(".skill-persent-bar .persent");

bars.forEach((bar) => {
    const skillsTotal = parseFloat(bar.getAttribute("data-persent"));

    let t = 0;
    let animationInterval;

    bar.addEventListener("mouseover", () => {
        if(!animationInterval) {
            animationInterval = setInterval(() => {
                if(t > skillsTotal) {
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