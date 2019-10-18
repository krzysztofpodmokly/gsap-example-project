const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const intro = document.querySelector('.intro');
const listItem = document.querySelector('.list');
const img = document.querySelector('img');
const buttons = document.querySelectorAll('button');
const dot = document.querySelectorAll('.dot');
const loader = document.querySelector('#loader');

const tl = new TimelineMax({ paused: true });
const tlLoader = new TimelineMax({ repeat: 2, onComplete: loadContent });

tl.set(header, { autoAlpha: 1 })
  .from(h1, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
  .add('intro')
  .from(intro, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
  .from(img, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
  .from(h2, 0.3, { y: -15, autoAlpha: 0, ease: Power1.easeOut })
  .from(listItem, 0.3, {
    y: -15,
    autoAlpha: 0,
    ease: Power1.easeOut
  })
  // .staggerFromTo(
  //   buttons,
  //   0.2,
  //   { autoAlpha: 0, x: 10 },
  //   { x: -20, autoAlpha: 1, ease: Power1.easeOut },
  //   0.1
  // )
  // .staggerTo(buttons, 0.2, { x: -40, ease: Power1.easeOut }, 0.1);
  .staggerFrom(
    buttons,
    0.2,
    {
      cycle: { x: [50, -50], scale: [2, 0.5] },
      autoAlpha: 0,
      ease: Power1.easeOut
    },
    0.1
  );

// Loader TimeLine
tlLoader
  .staggerFromTo(
    dot,
    0.3,
    { y: 0, autoAlpha: 0 },
    { y: 20, autoAlpha: 1, ease: Back.easeInOut },
    0.05
  )
  .fromTo(
    loader,
    0.3,
    { autoAlpha: 1, scale: 1.3 },
    { autoAlpha: 0, scale: 1, ease: Power0.easeNone },
    0.9
  );

function loadContent() {
  const tlLoaderOut = new TimelineMax({ onComplete: contentIn });
  tlLoaderOut
    .set(dot, { backgroundColor: '#2b4d66' })
    .to(loader, 0.3, {
      autoAlpha: 1,
      scale: 1.3,
      ease: Power0.easeNone
    })
    .staggerFromTo(
      dot,
      0.3,
      { y: 0, autoAlpha: 0 },
      { y: 20, autoAlpha: 1, ease: Back.easeInOut },
      0.05,
      0
    )
    .to(loader, 0.3, { y: -150, autoAlpha: 0, ease: Back.easeIn }, '+=0.3');
}

function contentIn() {
  tl.play();
}

document.querySelector('#btnPlay').addEventListener('click', () => {
  tl.play();
});
document.querySelector('#btnPause').addEventListener('click', () => {
  tl.pause();
});
document.querySelector('#btnResume').addEventListener('click', () => {
  tl.resume();
});
document.querySelector('#btnReverse').addEventListener('click', () => {
  tl.reverse();
});
document.querySelector('#btnSpeedUp').addEventListener('click', () => {
  tl.timeScale(8);
});
document.querySelector('#btnSlowDown').addEventListener('click', () => {
  tl.timeScale(0.5);
});
document.querySelector('#btnSeek').addEventListener('click', () => {
  tl.seek(1);
});
document.querySelector('#btnProgress').addEventListener('click', () => {
  tl.progress(0.5);
});
document.querySelector('#btnRestart').addEventListener('click', () => {
  tl.restart();
});
