$(document).ready(function () {
    $('button').click(() => {
        html2canvas(document.querySelector("#capture")).then(canvas => {
            document.body.appendChild(canvas);

            let data = canvas.toDataURL();
            let anchor = document.querySelector('#testCardLink');
            anchor.href = data;
            anchor.click();
        });
    });
});