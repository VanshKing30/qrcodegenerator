let imgbox = document.getElementsByClassName('image-box');
let qrimage = document.getElementById('qrImage');

let qrtext = document.getElementById('text');

function qrgenrator(){
    qrimage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
}