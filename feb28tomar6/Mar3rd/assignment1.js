
function hidePopup() {
    var unsub = document.getElementById("unsubscribe");
    unsub.classList.remove("d-initial");
    unsub.classList.add("d-none");
   
}


function displayPopup() {
    var disp = document.getElementById("unsubscribe");
   disp.classList.remove("d-none");
    disp.classList.add("d-initial");
   
}
