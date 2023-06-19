window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        if(document.querySelector("nav ul").style.display == 'none'){
            document.querySelector("nav ul").style.display = 'flex';
        }else {
            document.querySelector("nav ul").style.display = 'none';
        }
    });
};