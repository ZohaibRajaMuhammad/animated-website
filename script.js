// // gsap.to("#box", {
// //     x:1000,
// //     duration:10,
// //     backgroundColor:"black",
// //     borderRadius:"50%",
// //     rotate:1440,
// //     scale:0.2
// // });

// // gsap.from("#box", {
// //     x:500,
// //     duration:5,
// //     delay:1,
// //     // backgroundColor:"grey",
// //     borderRadius:"50%",
// //     // rotate:1440,
// //     scale:0.5,
// //     repeat:1,
// //     yoyo:true,
// //     Stagger:1
// // });

// // gsap.to("#box2", {
// //     x:1000,
// //     duration:10,
// //     // backgroundColor:"black",
// //     borderRadius:"50%",
// //     // rotate:1440,
// //     scale:0.2,
// //     Stagger:1
// // });
// // gsap.from("#box3", {
// //     x:500,
// //     y:-100,
// //     duration:15,
// //     delay:1,
// //     Stagger:1
// //     // backgroundColor:"red",
// //     // rotate:1440,
// //     // scale:
// // });



// var zohaib = gsap.timeline();

// zohaib.from("#box", {
//     x:500,
//     duration:5,
//     delay:1,
//     // backgroundColor:"grey",
//     borderRadius:"50%",
//     // rotate:1440,
//     scale:0.5,
//     repeat:1,
//     yoyo:true,
//     Stagger:1
// });
// zohaib.to("#box1", {
//     x:500,
//     duration:5,
//     delay:1,
//     // backgroundColor:"grey",
//     borderRadius:"50%",
//     // rotate:1440,
//     scale:0.5,
//     repeat:1,
//     yoyo:true,
//     Stagger:1
// });



// var hover  = gsap.timeline();

// hover.from("h2", {
//    y:-20,
//    duration:1,
//    delay:1,
//    opacity:0
// });
// hover.from("#options", {
//     y:-30,
//     opacity:0,
//     Stagger:2
//  });
//  hover.from("h1", {
//     y:-50,
//     opacity:0
//  });



// <!-- SVG ANIMATION -->
// var path = "M 10 100 Q 500 100 990 100"
// var finalPath = "M 10 100 Q 500 100 990 100"


// var string = document.querySelector("#string");

// string.addEventListener("mousemove", function (dets){
//    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

//    gsap.to("svg path", {
//       attr: {d:path},
//       duration:0.3,
//       ease:"power.out" 
//    })
// })

// string.addEventListener("mouseleave", function(){
//    gsap.to("svg path",{
//       attr : {d:finalPath},
//       duration:1.5,
//       ease:"elastic.out(1,0.2)"
//    })
// })





// <!-- Image hover sursor animation -->
// var main = document.querySelector('#main');
// var cursor = document.querySelector('#cursor');
// var imageDiv = document.querySelector('#image');

// main.addEventListener('mousemove', function(dets) {
//    gsap.to(cursor,{
//       x:dets.x,
//       y:dets.y,
//       duration:0.6
//    })
// })

// imageDiv.addEventListener("mouseenter", function() {
//    cursor.innerHTML = "View More"
//    gsap.to(cursor, {
//       scale:4,
//       backgroundColor:"#ffffff8a"
//    })
// })

// imageDiv.addEventListener("mouseleave", function() {
//      cursor.innerHTML = ""

//      gsap.to(cursor,{
//       scale:1,
//       backgroundColor:"#ffffff"
//      })
//    })



// <!-- menu -->    
// var menu = document.querySelector("#nav i")
// var cross = document.querySelector("#full i")

// var tl = gsap.timeline()

// tl.to("#full",{
//     right:0,
//     duration:0.5
// })
// tl.from("#full h4",{
//     x:150,
//     duration:0.6,
//     stagger:0.2,
//     opacity:0
// })
// tl.from("#full i",{
//     opacity:0
// })

// tl.pause()

// menu.addEventListener("click", function() {
//     tl.play()
// })
// cross.addEventListener("click", function() {
//     tl.reverse()
// })




// // text Animation

// function breakTheText() {
//     var h1 = document.querySelector("h1")
//     var h1Text = h1.textContent

//     var splittedText = h1Text.split("")
//     var halfValue = splittedText.length/2

//     var clutter = ""

// splittedText.forEach(function (elem ,idx){
//         if(idx<halfValue){
//             clutter += `<span class="a">${elem}</span>`
//         }else{
//           clutter += `<span class="b">${elem}</span>`
//         }}
//     )

//     h1.innerHTML = clutter
// }

// breakTheText()

// gsap.from("h1 .a",{
//     y:80,
//     duration:0.6,
//     delay:0.5,
//     stagger:0.15,
//     opacity:0
// })

// gsap.from("h1 .b",{
//     y:80,
//     duration:0.6,
//     delay:0.5,
//     stagger:-0.15,
//     opacity:0
// })


// animated marqee
// function marqueeAnimation(){
// window.addEventListener("wheel",function(dets) {
//   if(dets.deltaY>0){
//     gsap.to(".marquee",{
//         transform:"translateX(-200%)",
//         repeat:-1,
//         duration:4,
//         ease:"none"
//     })

//     gsap.to(" img",{
//        rotate:180
//     })
//   }else{
//     gsap.to(".marquee",{
//         transform:"translateX(0%)",
//         repeat:-1,
//         duration:4,
//         ease:"none"
//     })

//     gsap.to(" img",{
//        rotate:0
//     })
//   }

// })
// }

// marqueeAnimation()



// Animated Website code 

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()