let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

const content = document.querySelector(".txt p");
console.log(content);

window.addEventListener("mousemove", (event) => {
  x = event.pageX - window.innerWidth / 2;
  y = event.pageY - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  content.style.transform = `translate3d(${targetX / 35}px, ${targetY / 35}px, ${0}px)`;
  window.requestAnimationFrame(loop);
};
loop();