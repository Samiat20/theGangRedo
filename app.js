var popup = document.getElementById("popup")
var clickin= document.getElementById("clickin")
clickin.addEventListener('click',function(e){
    popup.style.display= "block"
})
var close = document.getElementById("close")
close.addEventListener("click", function(e){
    popup.style.display="none"
})