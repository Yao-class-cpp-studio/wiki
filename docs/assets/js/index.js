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

// Load cpp_runner

document$.subscribe(() => {
  ace.config.set('basePath', 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/ace/1.4.14/');
  document.querySelectorAll('.run code').forEach(createRunner);
});
