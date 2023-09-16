// 토글 버튼과 body 요소 참조
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// 토글 버튼 클릭 시 다크 모드 토글
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});


document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(function (skill) {
        const skillLevel = skill.querySelector(".skill-level");
        const skillValue = skillLevel.getAttribute("data-level");

        skillLevel.style.width = skillValue;
    });
});
