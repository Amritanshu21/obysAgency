function loadinganimation(){
    var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,
});
tl.from("#linep1",{
    opacity:0,
    onStart:function(){
        var h5=document.querySelector("#h5");
        var cnt=0;
        setInterval(function(){
            if(cnt<100){
                h5.innerHTML=cnt++;
            }
            else{
                h5.innerHTML=cnt;
            }
        },33)
    },
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4,
});

tl.from("#page1",{
    delay:0.2,
y:1200,
opacity:0
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero h1",{
    y:120,
    stagger:0.2
})
tl.from(".hero h2",{
    y:120,
    stagger:0.1
})
}
loadinganimation();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
         left:dets.x,
         top:dets.y
        })
     })
     
     Shery.makeMagnet("#navp2 h4", {
     
       });
}
cursorAnimation();
