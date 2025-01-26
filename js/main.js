
 document.addEventListener("DOMContentLoaded",function(){

     document.querySelector("#red").onclick = function(){
         document.querySelector("#dom1").style.color = "red";
     }
    
    
    
     document.querySelector("#blue").onclick = function(){
    document.querySelector("#dom1").style.color = "blue";
     }
    
     document.querySelector("#green").onclick = function(){
         document.querySelector("#dom1").style.color = "green";
     }

 })
    
document.querySelector("#ex1").style.pading="5px"
document.querySelectorAll(".bttn").forEach( function(mor) {
    mor.onclick = function(){
            document.querySelector("#dom").style.color = mor.dataset.moh; 
            document.querySelector("#dom").style.backgroundColor = mor.dataset.mm; 
    }
});
//=======================================================================

function worklist(){
    var work = document.querySelector("#work").value;
    var list = document.querySelector("#list-works");
    if(work==""){
        return false;
    }else{
        var myLi = document.createElement("li");
        
        myLi.innerHTML = work;
        list.append(myLi);
        
        document.querySelector("#work").value = "";
        return false;
    }
}
