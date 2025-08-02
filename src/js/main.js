

const cursor = document.getElementById('cursor'); 

setInterval(() => {
  cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible" : "hidden";
}, 500)