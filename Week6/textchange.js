//with JQuery
// $(function(){
//     $(".text").hover(function(){
//         $(this).css({
//             "color": "cyan",
//             "font-family": "Roboto",
//             "font-size": "17px",
//             "position": "absolute",
//             "left": "300px",
//             "top": "300px"
//         });
//     }, function(){
//         $(this).css({
//             "color": "magenta",
//             "font-family": "Comic Sans MS",
//             "font-size": "30px",
//             "position": "static"
//         });
//     });
// });

//with vanilla Javascript
const elementToChange = document.getElementById("text");

elementToChange.addEventListener("mouseover", mouseOver);
elementToChange.addEventListener("mouseout", mouseOut);


function mouseOver() {
    elementToChange.style.color = "cyan";
    elementToChange.style.fontSize = "17px";
    elementToChange.style.textAlign = "center";
    elementToChange.style.fontFamily = "Times New Roman";

}
function mouseOut() {
    elementToChange.style.color = "magenta";
    elementToChange.style.fontSize = "30px";
    elementToChange.style.fontFamily = "Comic Sans MS";
    elementToChange.style.textAlign = "left";
}