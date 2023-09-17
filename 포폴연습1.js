// 토글 버튼과 body 요소 참조
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// 토글 버튼 클릭 시 다크 모드 토글
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});


const bars = document.querySelectorAll(".progress-bar .progress");

bars.forEach((bar) => {
    const totalMinwon = parseFloat(bar.getAttribute("data-percent"));

    let t = 0;
    let animationInterval;

    bar.addEventListener("mouseover", () => {
        if (!animationInterval) {
            animationInterval = setInterval(() => {
                if (t > totalMinwon) {
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