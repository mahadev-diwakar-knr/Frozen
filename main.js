gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#s1",
        start: "top 100%",
        end: "top 50%",
        scrub: true
    }
});

tl.to(".hero-center-image", {
    top: "136%",
    left: "52.5%",
    width: "15vw",
    rotate: 0,
    immediateRender: false
});



var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#s2",
        start: "top 80%",
        end: "top 50%",
        scrub: true
    }
});

tl1.to(".hero-center-image", {
    top: "195%",
    left: "26%",
    width: "11vw",
    rotate: 0,
    immediateRender: false
});

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#s3",
        start: "top 65%",
        end: "top 50%",
        scrub: true
    }
});

tl2.to(".hero-center-image", {
    top: "235%",
    left: "29%",
    width: "19vw",
    rotate: -54,
    immediateRender: false
});