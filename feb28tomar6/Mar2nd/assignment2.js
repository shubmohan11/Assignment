


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

