function runCode() {
    const code = document.getElementById('code-editor').value;
    const iframe = document.getElementById('result-frame');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    iframeDocument.open();
    iframeDocument.write(code);
    iframeDocument.close();
}
