// Load Mathjax

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})

// Load Asciinema

document$.subscribe(() => {
  document.querySelectorAll('div[data-asciinema]').forEach((el) => {
    console.log(el);
    AsciinemaPlayer.create(el.getAttribute('data-asciinema'), el);
  })
});
