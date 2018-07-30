const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"];
  function init(window) {
    
  if (window.addEventListener) {
  var keys = []
  
  const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"]; }
  
  window.addEventListener("keydown", function(e){
        keys.push(e.keyCode);
        if (keys.toString().indexOf(codes) >= 0) 
            keys = [];
            });
    } true; 
};
  
  
  
  
  
  
  
  
  
  
  
// let index = 0 ;

//function init(codes) {
  //element.addEventListener("codes", function(codes){ alert("Hello World!"); });
  //console.log("finally")

  
  //const key = e.key;
  
  //if (key === codes[index]) {
    //index ++;
    //if (index === codes.length) {
      //alert("Hurray!");
      
      //index = 0;
    //}
  //} else {
    //index = 0;
  }
