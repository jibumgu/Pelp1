window.onload = () => {
  const box = document.querySelector(".butterfly");
  //console.log(h1);

  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let speed = 0.1;

  window.addEventListener("mousemove", (event) => {
    //console.log(event.pageY, event.clientY);
    x = event.pageX + 50;
    y = event.pageY + 50;
  });

  const loop = () => {
    // console.log(1);

    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    //console.log(targetX.toFixed(2), targetY.toFixed(2));
    box.style.top = targetY.toFixed(2) + "px";
    box.style.left = targetX.toFixed(2) + "px";

    window.requestAnimationFrame(loop);
  };
  loop();
};
