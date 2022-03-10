var counter = [0,0,0,0,0,0,0,0,0,0]; 
function like(e,id) {
  counter[e] += 1;
    render(e,id);

}


function dislike(e,id) {
  counter[e] -= 1;
  render(e,id);
}


function render(e,id){
  var disp=  document.getElementById(id);
  
  disp.innerText="likes"+ counter[e];

 

}


function zoomImage(nsa){
  console.log("image clicked")
   var imageClickfn=  document.getElementById(nsa);

   imageClickfn.classList.add("zoom");

   const rems=document.getElementById("button-close");
   rems.classList.remove("button-closer");
   rems.classList.add("d-initial");
 

}
