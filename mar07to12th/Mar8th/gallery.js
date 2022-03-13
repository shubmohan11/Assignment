function showImg(id){
  document.getElementById("zoom-img-container").classList.replace("hide","show");
  document.getElementById("zoom-img").src=id;
   document.getElementById("back-container").classList.add("hide");
  console.log("hlw");
}
const close_Img=function (){
  document.getElementById("zoom-img-container").classList.add("hide");
  document.getElementById("back-container").classList.remove("hide");

}
document.getElementById("btn").addEventListener('click',close_Img);

//  document.addEventListener('click',function(e){
//     let result=document.getElementsByClassName("zoom-img-container");
//      if(e.target != result){
//         document.getElementById("zoom-img-container").classList.add("hide");
//          document.getElementById("back-container").classList.remove("hide");   
//      }
//  });


window.addEventListener('mouseup', function(event) {
//var container = document.getElementById('container');
var result=document.getElementById("zoom-img-container");
if (event.target != result && event.target.parentNode != result) {
result.classList.add("hide");
document.getElementById("back-container").classList.remove("hide");
}
});
