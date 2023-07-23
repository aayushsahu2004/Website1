var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -3%",
        scrub:2
    }
})

tl.to("#nav svg",{
    scale:0.15,
    y:-50
},"anim")

tl.to("#nav",{
    height:"75px",
    paddingTop:"0"
},"anim")