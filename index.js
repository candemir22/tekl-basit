function initMap() {
  const m = document.querySelector("gmp-advanced-marker");
  
  m.gmpDraggable = true;

  // returns void
  m.addEventListener("gmp-click", (evt) => {
    console.log('addEventListener gmp-click event', evt);
  });
    
   // returns void
  m.addListener("dragend", (evt) => {
    console.log('dragend evt', evt);
  });
}
