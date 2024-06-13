function locomotiveanimation(){
    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);
    
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
        });
    
        // Each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);
    
        // Tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("#main", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            // We don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all!
            // So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile.
            pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });
    
        // Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
        // After everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    });
    

}


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
tl.from("#hero1 h1,#hero2 h1,#hero4 h1",{
    y:120,
    stagger:0.2
})
tl.from("#hero3",{
    opacity:0,
    y:120,
    stagger:0.3,
    duration:0.5
})

}


function cursorAnimation(){
   Shery.mouseFollower({
    skew:true,
    ease:"cubic-bezier(0.23,1,0.320,1)",
    duration:1,
   });
     
     Shery.makeMagnet("#navp2 h4");
   var vd=  document.querySelector("#videocontainer");
   var video = document.querySelector("#videocontainer video")
   vd.addEventListener("mouseenter",function(){
       vd.addEventListener("mousemove",function(dets){
       gsap.to(".mousefollower",{
          opacity:0
       })
        gsap.to("#videocursor",{
            left:dets.x - 570,
            y:dets.y - 300
        })
       })
     });
     vd.addEventListener("mouseleave",function(){
        gsap.to(".mousefollower",{
            opacity:1
        })
        gsap.to("#videocursor",{
            left:"70%",
            top:"-25%"
        })
     });
      var flag=0 
     vd.addEventListener("click",function(){
        if(flag==0){
        video.play()
        video.style.opacity=1
        document.querySelector("#videocursor").innerHTML=`<i class="ri-pause-line"></i>`
        gsap.to("#videocursor",{
            scale:0.5
        })
        flag=1
    }else{
        video.pause()
        video.style.opacity=0
        document.querySelector("#videocursor").innerHTML=`<i class="ri-play-fill"></i>`
        gsap.to("#videocursor",{
            scale:1
        })
        flag=0
    }
     })

}
function sheryAnimation(){
    Shery.imageEffect(".imgdiv",{
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.758608068425526},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.83,"range":[0,10]},"metaball":{"value":0.46,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":15.27,"range":[0,100]}},
    gooey:true
    
    });
    }
  
loadinganimation();
cursorAnimation();
locomotiveanimation();
sheryAnimation();


document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      x: dets.x,
      y:dets.y 
    })
})
document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})