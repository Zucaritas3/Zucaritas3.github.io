const video = document.getElementById('mirror');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error al acceder a la cámara:', error);
    });
