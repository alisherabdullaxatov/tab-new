// let tabs = document.querySelectorAll(".tab");
// let text = document.querySelectorAll(".text");


// tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () =>{
//           text.forEach((texts) => {
//           texts.classList.remove("active");
//           });
//           tabs.forEach((tab) => {
//               tab.classList.remove("active");
//           });
//           text[index].classList.add("active");
//           tabs[index].classList.add("active");


//     });
// });
let tab;
let text;


window.onload = function(){
    tab = document.querySelectorAll(".tab");
    text = document.querySelectorAll(".text");
    tabsHide()
}


function tabsHide(){
    for(let i=0; i<text.length; i++){
        tab[i].classList.remove("active");
        text[i].classList.add("hide")
        text[i].classList.remove("show")

    }

}


document.getElementById("tabs").onclick = function(e){
    let tar = e.target;

   //  console.log(tar);

      for(let i=0; i<tab.length; i++){
               if(tab[i] == tar){
                tabsHide();
                   text[i].classList.add("show");
                   text[i].classList.remove("hide");
                   tab[i].classList.add("active");
               }
      }
}
