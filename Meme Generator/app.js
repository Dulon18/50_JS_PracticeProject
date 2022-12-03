const img = document.querySelector("#image");
const topText = document.querySelector("#top");
const bottomText = document.querySelector("#bottom");
const canvas = document.querySelector("#meme");

let image;

img.addEventListener("change", () => {
  const imgUrl = URL.createObjectURL(img.files[0]);

  image = new Image();
  image.src = imgUrl;
  image.addEventListener(
    "load",
    () => {
      updateCanvas(canvas, image, topText.value, bottomText.value);
    },
    { once: true }
  );
});

function updateCanvas(canvas, image, top, bottom) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 15);
  const yOffset = height / 10;
  
  //update canvas background

  canvas.height = height;
  canvas.width = width;
  ctx.drawImage(image, 0, 0);

  //text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 5);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px  sans-serif`;

  ctx.textBaseline = "top";
  ctx.strokeText(top, width / 2, yOffset);
  ctx.fillText(top, width / 2, yOffset);

  ctx.textBaseline = "bottom";
  ctx.strokeText(bottom, width / 2, height - yOffset);
  ctx.fillText(bottom, width / 2, height - yOffset);
}
