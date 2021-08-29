import React, {useEffect} from 'react';
import ScrollMagic from 'scrollmagic';
import { TweenLite as Tween, TimelineMax as Timeline } from 'gsap';

const HorizontalSection = () => {
    require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
    useEffect(() => {
        const controller:any = new ScrollMagic.Controller();

      const horizontalSlide: any = new TimelineMax()
      .to("#js-slideContainer", 1,   {x: "-20%"})
      .to("#js-slideContainer", 1,   {x: "-40%"})
      .to("#js-slideContainer", 1,   {x: "-60%"})
      .to("#js-slideContainer", 1,   {x: "-80%"})

      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: "400%"
      })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
    });
    return (
        <div className="wrapper" id="js-wrapper">
            <div className="sections" id="js-slideContainer">
                <section className="section">
                    <span className="section__title" id="title1">Section One</span>
                    <span id="trigger--title1"></span>
                </section>
                <section className="section">
                    <span className="section__title" id="title2">Section Two</span>
                    <span id="trigger--title2"></span>
                </section>
                <section className="section">
                    <span className="section__title" id="title3">Section Three</span>
                    <span id="trigger--title3"></span>
                </section>
                <section className="section">
                    <span className="section__title" id="title4">Section Four</span>
                    <span id="trigger--title4"></span>
                </section>
                <section className="section">
                    <span className="section__title" id="title5">Section Five</span>
                    <span id="trigger--title5"></span>
                </section>
            </div>
        </div>
    )
}

export default HorizontalSection;