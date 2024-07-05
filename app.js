const flightPath = {
    
    autoRotate: true,
    values:[{x: 100,y: -20}, 
        {x: 30,y: 100}, 
        {x: 40, y: 200},
        {x: 50, y: 300},
        {x: 60, y: 400},
        {x: 70, y: 500},
        {x: 80, y: 510},
        {x: 90, y: 520},
        {x: 100, y: 530},
        {x: 110, y: 540},
        {x: 120, y: 550},
        {x: 130, y: 560},
        {x: 10, y: 700},
        {x: window.innerWidth, y: -250 }
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".bunny", 5, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
triggerElement: ".animation",
duration: 1000,
triggerHook: 0
})
.setTween(tween)
.addIndicators()
.setPin(".animation")
.addTo(controller);