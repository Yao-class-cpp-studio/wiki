Terminal.applyAddon(fit);

class WorkerAPI {
  constructor(term) {
    this.term = term;
    this.nextResponseId = 0;
    this.responseCBs = new Map();
    this.worker = new Worker('/assets/js/wasm-clang/worker.js');
    const channel = new MessageChannel();
    this.port = channel.port1;
    this.port.onmessage = this.onmessage.bind(this);

    const remotePort = channel.port2;
    this.worker.postMessage({id: 'constructor', data: remotePort},
                            [remotePort]);
  }

  terminate() {
    this.worker.terminate();
  }

  compileLinkRun(contents) {
    this.port.postMessage({id: 'compileLinkRun', data: contents});
  }

  onmessage(event) {
    switch (event.data.id) {
      case 'write':
        this.term.write(event.data.data);
        break;
    }
  }
}

function make_play_button() {
  const el = document.createElement('span');
  el.classList.add('twemoji');
  el.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M8 5.14v14l11-7-11-7Z" fill=""></path>
  </svg>
  `;
  return el;
}

function createRunner(code_el) {
  code_el.parentElement.querySelectorAll('button').forEach(function(el) {
    // remove el from tree
    el.remove();
  });
  let fontSize = 18;
  let term = null, api = null;
  const run = debounceLazy(() => {
    if (term === null) {
      createTerm();
    }
    if (api === null) {
      api = new WorkerAPI(term);
    }
    api.compileLinkRun(editor.getValue());
  }, 100);

  const editor = ace.edit(code_el);
  editor.session.setMode('ace/mode/c_cpp');
  editor.setOption("maxLines", 100);
  editor.renderer.setShowGutter(false);
  editor.clearSelection();
  editor.commands.addCommand({
    name: 'run',
    bindKey: {win: 'Ctrl+Enter', mac: 'Command+Enter'},
    exec: run
  });

  function createTerm() {
    term = new Terminal({convertEol: true, disableStdin: true, fontSize});
    let term_el = document.createElement('div');
    code_el.after(term_el);
    term.open(term_el);
    setFontSize(fontSize);
  }

  function setFontSize(sz) {
    fontSize = sz;
    editor.setFontSize(`${fontSize}px`);
    if (term !== null) {
      term.setOption('fontSize', fontSize);
      term.fit();
    }
  };
  setFontSize(fontSize);

  const onResize = debounceLazy(() => {
    editor.resize();
    if (term !== null) {
      term.fit();
    }
  }, 20);
  window.addEventListener('resize', onResize);

  const pre_el = code_el.parentElement;
  const div_el = pre_el.parentElement;

  const button_el = document.createElement('button');
  button_el.appendChild(make_play_button());

  const span = document.createElement('span');
  span.innerHTML = 'Run this code (<kbd>Ctrl</kbd>+<kbd>Enter</kbd>)';
  button_el.appendChild(span);

  button_el.style.marginTop = pre_el.style.marginTop;
  pre_el.style.marginTop = '0';
  button_el.style.color = 'var(--md-typeset-color)';
  div_el.insertBefore(button_el, pre_el);

  button_el.addEventListener('click', run);
  button_el.style.cursor = 'pointer';
  button_el.addEventListener('mouseover', () => {
    button_el.querySelector('svg').style.fill = 'green';
  });
  button_el.addEventListener('mouseout', () => {
    button_el.querySelector('svg').style.fill = '';
  });
}
