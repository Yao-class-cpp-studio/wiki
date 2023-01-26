// Load Katex
document$.subscribe(() => { 
  document.querySelectorAll('.arithmatex').forEach((el) => {
    const tex = el.textContent || el.innerText;
    if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
      katex.render(tex.slice(2, -2), el, { 'displayMode': false });
    } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
      katex.render(tex.slice(2, -2), el, { 'displayMode': true });
    }
  });
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
