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

  let editor = ace.edit(code_el);
  editor.session.setMode('ace/mode/c_cpp');
  editor.setOption("maxLines", 100);
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
    term.fit();
  }, 20);
  window.addEventListener('resize', onResize);

}

window.addEventListener('load', event => {
  document.querySelectorAll('code.language-runcpp').forEach(createRunner);
});
