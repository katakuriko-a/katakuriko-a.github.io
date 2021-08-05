'use strict';

{
  const targets = document.querySelectorAll('h3');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);

    });

  }

  const options = {
    threshold: 0.6,
  }

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });


  const menu = document.getElementById('menu');
  const humberger = document.getElementById('humberger');

  menu.addEventListener('click', () => {
    humberger.classList.add('show');
    humberger.classList.remove('humberger');
  });


}