const progressBar = document.querySelector(".bar");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight - window.innerHeight;

    per = percent(scrollNum, documentHeight) + "%";

    progressBar.style.width = per;
});

const percent = (num, totalNum) => {
    return ((num / totalNum) * 100).toFixed(0);
};