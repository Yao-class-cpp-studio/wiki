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

  setShowTiming(value) {
    this.port.postMessage({id: 'setShowTiming', data: value});
  }

  terminate() {
    this.worker.terminate();
  }

  async runAsync(id, options) {
    const responseId = this.nextResponseId++;
    const responsePromise = new Promise((resolve, reject) => {
      this.responseCBs.set(responseId, {resolve, reject});
    });
    this.port.postMessage({id, responseId, data : options});
    return await responsePromise;
  }

  async compileToAssembly(options) {
    return this.runAsync('compileToAssembly', options);
  }

  async compileTo6502(options) {
    return this.runAsync('compileTo6502', options);
  }

  compileLinkRun(contents) {
    this.port.postMessage({id: 'compileLinkRun', data: contents});
  }

  postCanvas(offscreenCanvas) {
    this.port.postMessage({id : 'postCanvas', data : offscreenCanvas},
                          [ offscreenCanvas ]);
  }

  onmessage(event) {
    switch (event.data.id) {
      case 'write':
        this.term.write(event.data.data);
        break;

      case 'runAsync': {
        const responseId = event.data.responseId;
        const promise = this.responseCBs.get(responseId);
        if (promise) {
          this.responseCBs.delete(responseId);
          promise.resolve(event.data.data);
        }
        break;
      }
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
