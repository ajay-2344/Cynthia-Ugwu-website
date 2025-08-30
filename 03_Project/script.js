document.addEventListener("DOMContentLoaded", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
    });
});
// text animation through gsap
function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav", {
        y: '-10', 
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
       
    })
    t1.from("#herofooter", {
        y: '-10', 
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}
firstPageAnim();

//Mouce hober code
const coords = { x: 0, y: 0};
const circles = document.querySelectorAll(".circle");

//const colors =["#a24f9c", "#c34c95", "#df4d86", "#f55572", "#ff665a", "#ff7e3d", "#ff9913"];
//const colors =[ "#003f5b", "#01646a", "#027962", "#03884d", "#049732", "#06a610", "#28b407", "#5ac309", "#94d20b", "#d3e10e", "#f0c710", "#ff9913"];
const colors =[ "#0d0918", "#251a27", "#3d2834", "#56383e", "#6c4a45", "#7d604d", "#897857", "#8f9268", "#8fac81", "#8dc7a4", "#8de0cf", "#97f7ff"];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];

});

window.addEventListener("mousemove", function(e){
    coords.x = e.clientX;
    coords.y = e.clientY;

    //animateCircle();
    
    
});

function animateCircle() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index){
        circle.style.left = x - 10 + "px";
        circle.style.top = y - 10 + "px";

        circle.style.scale = (circles.length-index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

    });

    requestAnimationFrame(animateCircle);
}

animateCircle();


//f teeno element ko sleect karo, uske baad teeno par ek mousemove lagao,
//jab mouseomve ho to ye pata karo ki mouse kaha par hai, jiska matlab hai
//mouse ki x and y position pata karo, ab mouse ki x y position ke badle us
//image ko show karo and us image ko move karo, move karte waqt rotate karo,
//and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

      elem.addEventListener("mouseleave", function(details) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        
    });
 });

    elem.addEventListener("mousemove", function(details) {
     var diff = details.clientY - elem.getBoundingClientRect().top;
     diffrot = details.clientX - rotate; 
     rotate = details.clientX;
     

      gsap.to(elem.querySelector("img"), {
        opacity: 2,
        ease: Power3,
        top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20,20, diffrot * 0.5),

      });
    });
});

