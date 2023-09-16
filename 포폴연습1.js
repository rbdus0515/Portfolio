// 토글 버튼과 body 요소 참조
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

document.addEventListener("DOMContentLoaded", function () {
    const bar = document.querySelector(".bar");
    const maxValue = 200; // 최대 그래프 막대 크기 (px)
    const percentage = bar.getAttribute("data-value");
    const width = (parseFloat(percentage) / 100) * maxValue;
    bar.style.width = width + "px";
});
