// -----FullScreen
const body = document.getElementsByTagName("body")[0];
if (!body.classList.contains("tv")) {
  if (document.fullscreenEnabled !== undefined) {
    body.addEventListener(
      "click",
      function () {
        if (!document.fullscreenElement) {
          this.requestFullscreen();
        } else {
          showToast();
          //document.exitFullscreen();
        }
      },
      false
    );
  }
}

// -----Toast message
const toast = document.getElementById("toast");
function showToast() {
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// -----Rotate imgs
const canva = document.getElementById("canva");
const carpeta = canva.dataset.device;
const imgid1 = document.getElementById("imagen1");
const imgid2 = document.getElementById("imagen2");
let oldimg = "";
let par = false;

function actualizarimg() {
  fetch("./actualimg.json")
    .then((response) => response.json())
    .then((data) => {
      if (oldimg !== data.imagen) {
        if (par) {
          imgid1.src = `./imagenes/${carpeta}/${data.imagen}`;
          imgid2.classList.remove("opaque");
          if (carpeta === "tv") {
            setTimeout(() => {
              imgid1.classList.add("opaque");
            }, 1000);
          } else {
            setTimeout(() => {
              imgid1.classList.add("opaque");
            }, Math.floor(Math.random() * (10000 - 5001)) + 3000);
          }
          par = false;
          setTimeout(() => {
            imgid2.src = "./imagenes/black.svg";
          }, 1000);
        } else {
          imgid2.src = `./imagenes/${carpeta}/${data.imagen}`;
          imgid1.classList.remove("opaque");
          if (carpeta === "tv") {
            setTimeout(() => {
              imgid2.classList.add("opaque");
            }, 1000);
          } else {
            setTimeout(() => {
              imgid2.classList.add("opaque");
            }, Math.floor(Math.random() * (10000 - 5001)) + 3000);
          }
          par = true;
          setTimeout(() => {
            imgid1.src = "./imagenes/black.svg";
          }, 1000);
        }
      }
      oldimg = data.imagen;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

let intervalID;
if (carpeta === "tv") {
  intervalID = setInterval(actualizarimg, 500);
} else {
  intervalID = setInterval(
    actualizarimg,
    Math.floor(Math.random() * (6000 - 2001)) + 2000
  );
}
