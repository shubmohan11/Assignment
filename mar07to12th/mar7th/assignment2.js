
function searchClick(){
    let homepage=  document.getElementById("home-page");
    homepage.classList.remove("d-initial");
    homepage.classList.add("d-none");
   
    let reelspage=document.getElementById("reelspageid");
    reelspage.classList.remove("d-initial");
    reelspage.classList.add("d-none");

    let likespage=document.getElementById("likespageid");
    likespage.classList.remove("d-initial");
    likespage.classList.add("d-none");

    let profilepage=document.getElementById("profilepageid");
    profilepage.classList.remove("d-initial");
    profilepage.classList.add("d-none");
     
    let searchpage=document.getElementById("main-searchpageid"); 
    searchpage.classList.add("d-initial");

}


function homePage(){
    let searchpage=document.getElementById("main-searchpageid"); 
    searchpage.classList.remove("d-initial");
    searchpage.classList.add("d-none");


    let reelspage=document.getElementById("reelspageid");
    reelspage.classList.remove("d-initial");
    reelspage.classList.add("d-none");

    let likespage=document.getElementById("likespageid");
    likespage.classList.remove("d-initial");
    likespage.classList.add("d-none");

    let profilepage=document.getElementById("profilepageid");
    profilepage.classList.remove("d-initial");
    profilepage.classList.add("d-none");

    let homepage=  document.getElementById("home-page");
    homepage.classList.add("d-initial")
   
}


function reelsdisplay(){
    let homepage=  document.getElementById("home-page");
    homepage.classList.remove("d-initial");
    homepage.classList.add("d-none");

    let searchpage=document.getElementById("main-searchpageid"); 
    searchpage.classList.remove("d-initial");
    searchpage.classList.add("d-none");

    let likespage=document.getElementById("likespageid");
    likespage.classList.remove("d-initial");
    likespage.classList.add("d-none");

    let profilepage=document.getElementById("profilepageid");
    profilepage.classList.remove("d-initial");
    profilepage.classList.add("d-none");

    let reelspage=document.getElementById("reelspageid");
    reelspage.classList.remove("reelspage")  
    reelspage.classList.add("d-initial")
}


function likesdisplay(){

    let homepage=  document.getElementById("home-page");
    homepage.classList.remove("d-initial");
    homepage.classList.add("d-none");

    let searchpage=document.getElementById("main-searchpageid"); 
    searchpage.classList.remove("d-initial");
    searchpage.classList.add("d-none");


    let reelspage=document.getElementById("reelspageid");
    reelspage.classList.remove("d-initial");
    reelspage.classList.add("d-none");

    let profilepage=document.getElementById("profilepageid");
    profilepage.classList.remove("d-initial");
    profilepage.classList.add("d-none");

    let likespage=document.getElementById("likespageid");
    likespage.classList.remove("likespage");
    likespage.classList.add("d-initial")

}


function profiledisplay(){
    let homepage=  document.getElementById("home-page");
    homepage.classList.remove("d-initial");
    homepage.classList.add("d-none");

    let searchpage=document.getElementById("main-searchpageid"); 
    searchpage.classList.remove("d-initial");
    searchpage.classList.add("d-none");


    let reelspage=document.getElementById("reelspageid");
    reelspage.classList.remove("d-initial");
    reelspage.classList.add("d-none");

    let likespage=document.getElementById("likespageid");
    likespage.classList.remove("d-initial");
    likespage.classList.add("d-none");


    let profilepage=document.getElementById("profilepageid");
    profilepage.classList.remove("profile-page");
    profilepage.classList.add("d-initial");
}


