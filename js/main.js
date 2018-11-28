;
(function () {
    'use strict';
    var inputArea = document.getElementById('text-editor');
    var baEditorHtml = document.getElementById('ba-editor-hide');
    inputArea.style.display = 'none';
    document.addEventListener('keydown', keyListener);


    function keyListener(event) {
        let clickedKey = event.key;
        let ifCtrlClicked = event.ctrlKey;
        switch (clickedKey) {
            case 'e':
                if (ifCtrlClicked) {
                    inputArea.value = baEditorHtml.textContent.trim();
                    inputArea.style.display = 'block';
                    baEditorHtml.style.display = 'none';
                    inputArea.focus();
                    event.preventDefault();
                }
                break;
            case 's':
                if (ifCtrlClicked) {
                    event.preventDefault();
                    baEditorHtml.textContent += inputArea.value.replace(baEditorHtml.textContent.trim(), '');
                    inputArea.style.display = 'none';
                    baEditorHtml.style.display = 'block';
                }
                break;
            case 'Escape':
                inputArea.style.display = 'none';
                baEditorHtml.style.display = 'block';
                inputArea.value = '';
                break;

        }
    }





})();