const canvas = document.querySelector('canvas');
const form = document.querySelector('.signature-pad-form');
const clearBtn = document.querySelector('.clear-btn');

const ctx = canvas.getContext('2d')
let writingMode = false;
let lastX, lastY; // storing previous position

const handlePointerDown = (event) => {
     writingMode = true;
     ctx.beginPath();
     const [positionX, positionY] = getCursorPosition(event)
     ctx.moveTo(positionX, positionY);
     lastX = positionX;
     lastY = positionY;
}

const handlePointerUp = () => {
     writingMode = false;
}

const handlePointerMove = (event) => {
     if (!writingMode) return;
     const [positionX, positionY] = getCursorPosition(event)
     ctx.lineTo(positionX, positionY);
     ctx.stroke()
     lastX = positionX;
     lastY = positionY;
}

const getCursorPosition = (event) => {
     const rect = canvas.getBoundingClientRect();
     const positionX = event.clientX - rect.left;
     const positionY = event.clientY - rect.top;
     return [positionX, positionY];
}

canvas.addEventListener('pointerdown', handlePointerDown, { passive: true });
canvas.addEventListener('pointerup', handlePointerUp, { passive: true });
canvas.addEventListener('pointermove', handlePointerMove, { passive: true });


ctx.lineWidth = 2;
ctx.lineJoin = ctx.lineCap = 'round';

// Display & download sign

form.addEventListener('submit', (event) => {
     event.preventDefault();
     const imageUrl = canvas.toDataURL();
     const image = document.createElement('img');
     image.src = imageUrl;
     image.height = canvas.height;
     image.weight = canvas.weight;
     image.style.display = 'block';
     form.appendChild(image);
     const downloadLink = document.createElement('a')
     downloadLink.href = imageUrl;
     //set file name
     downloadLink.download = 'signature.png';
     downloadLink.textContent = 'Download Signature'
     form.appendChild(downloadLink);

     clearPad();
});

const clearPad = () => {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clearBtn.addEventListener('click', (event) => {
     event.preventDefault();
     clearPad();
});
