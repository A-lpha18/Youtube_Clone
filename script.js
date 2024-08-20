function show(){
    var menu= document.querySelector(".menu_icon");
    var sidebar=document.querySelector(".sidebar");
    var maincontainer=document.querySelector(".content");
    sidebar.classList.toggle("smaller_sidebar");
    maincontainer.classList.toggle("large_maincontainer");
} 