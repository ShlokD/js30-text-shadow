const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 100;

const shadow = ev => {
  const { offsetWidth : width, offsetHeight : height } = hero;
  let { offsetX: x, offsetY: y } = ev;
  if (ev.target !== hero) {
    x = x + ev.target.offsetLeft;
    y = y + ev.target.offsetTop;
  }
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 15px yellow,
    ${yWalk}px ${xWalk}px 25px blue,
    ${xWalk * -1}px ${yWalk}px 55px green 
  `;
  
}

hero.addEventListener('mousemove', shadow);