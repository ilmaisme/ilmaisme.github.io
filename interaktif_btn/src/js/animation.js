console.clear();
gsap.registerPlugin(ScrollTrigger);
gsap.config({
	force3D: false,
	nullTargetWarn: false,
	trialWarn: false,
	units: {
		left: "%",
		top: "%",
		rotation: "rad"
	}
});
let vp = gsap.matchMedia();
// let sections2tl1 = gsap.utils.toArray(".panelTL2");

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);





vp.add("(max-width: 700px)", () => {
	// const section1 = gsap.timeline({
	// 	scrollTrigger: {
	// 	trigger: "#HorScrollTL1",
	// 	pin: "#HorScrollTL1",
	// 	start: "top top",
	// 	scrub: 1,
	// 	}
	// });
	// section1
	// .from("#cover", {
	// 	autoAlpha: 0, 
	// })
	// .fromTo("#openPanel", {
	// 	autoAlpha: 0, 
	// 	duration:2
	// }, {
	// 	autoAlpha: 1, 
	// },"-=5");


	// Section 4 Mobile
	const preloader = gsap.timeline({
		defaults: {
			ease: "power1.out"
		}
	});

	preloader
		.to('.preloader', {
			autoAlpha: 0
		}, '+=1.3')
		.from('#content', {
			autoAlpha: 0
		}, '-=1.3');

	// gsap
	// .fromTo(".cover .section-left .txt1", {
	// 	autoAlpha: 0,
	// 	y:50,
	// }, {
	// 	autoAlpha: 1,
	// 	y:0
	// });
	// gsap.fromTo(".cover .section-left .txt2", {
	// 	autoAlpha: 0,
	// 	y:20
	// }, {
	// 	autoAlpha: 1,
	// 	y:0
	// })
	// gsap.fromTo(".cover .section-left .txt3", {
	// 	autoAlpha: 0,
	// 	y:10
	// }, {
	// 	autoAlpha: 1,
	// 	y:0
	// });

	const section4 = gsap.timeline({
		scrollTrigger: {
			trigger: "#content",
			start: "top top",
			scrub: 1,
		}
	});
	section4
		.from(".cover", {
			autoAlpha: 1,
		})
		.fromTo("#beginHorizonScroll", {
			autoAlpha: 0,
		}, {
			autoAlpha: 1,
		}, "-=2");

	let sectionssecfour = gsap.utils.toArray(".panel");

	let scrollTweenSec4 = gsap.to(sectionssecfour, {
		xPercent: -100 * (sectionssecfour.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: "#beginHorizonScroll",
			pin: true,
			scrub: 1,
			end: "5000px"
		}
	});
	// gsap.to(".wheel", {
	// scrollTrigger: {
	// 	trigger: "#content",
	// 	scrub: 1,
	// 	start: 'center 50%',
	// 	end: '+=5000',
	// },
	// rotation: 360*10,
	// duration: 1,
	// ease: "linear",
	// });


	gsap.fromTo(".p1-txt", {
		autoAlpha: 0,
		y: 40,
	}, {
		autoAlpha: 1,
		y: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".p1-txt",
			start: "center 80%",
			end: "center 20%",


		}
	});


	gsap.fromTo(".p3-txt", {
		autoAlpha: 0,
		y: 40,
	}, {
		autoAlpha: 1,
		y: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".p3-txt",
			containerAnimation: scrollTweenSec4,
			start: "center 80%",
			end: "center 20%",
			id: "1",


		}
	});


	gsap.fromTo(".mob-p3-txt", {
		autoAlpha: 0,
		y: 40,
	}, {
		autoAlpha: 1,
		y: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".mob-p3-txt",
			containerAnimation: scrollTweenSec4,
			start: "center 80%",
			end: "center 20%",
			id: "2",


		}
	});


	gsap.fromTo(".p4-txt", {
		autoAlpha: 0,
		y: 40,
	}, {
		autoAlpha: 1,
		y: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".p4-txt",
			containerAnimation: scrollTweenSec4,
			start: "center 80%",
			end: "center 20%",
			id: "3",


		}
	});




});



vp.add("(min-width: 700px)", () => {


	// Section 4 Desktop
	const preloader = gsap.timeline({
		defaults: {
			ease: "power1.out"
		}
	});

	preloader
		.to('.preloader', {
			autoAlpha: 0
		}, '+=1.3')
		.from('#content', {
			autoAlpha: 0
		}, '-=1.3');

	preloader.from('.coverTitleSub', {
		autoAlpha: 0,
		y: 50
	});
	preloader.from('.coverTitle', {
		scale: 0,
		duration: 0.5,
		autoAlpha: 0,
		ease: 'expo.easeOut'
	});

	// gsap.from(".coverTitleSub", {
	// 	scale: 0.5, 
	// 	duration: 1, 
	// 	ease: 'expo.easeOut'
	// })

	gsap
		.fromTo(".coverTitleSub", {
			autoAlpha: 0,
			y: 50,
		}, {
			autoAlpha: 1,
			y: 0
		}, '-=30');
	gsap.fromTo(".coverTitle", {
		autoAlpha: 0,
		y: 20
	}, {
		autoAlpha: 1,
		y: 0
	}, '-=3');

	let sections = gsap.utils.toArray(".panel");

	let scrollTween = gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: "#beginHorizonScroll",
			pin: true,
			scrub: 2,
			end: "5000px"
		}
	});
	// gsap.to(".wheel", {
	// scrollTrigger: {
	// 	trigger: "#content",
	// 	scrub: 1,
	// 	start: 'center 50%',
	// 	end: '+=5000',
	// },
	// rotation: 360*10,
	// duration: 1,
	// ease: "linear",
	// });


	gsap.fromTo(".p3-txt", {
		autoAlpha: 0,
		y: 40,
	}, {
		autoAlpha: 1,
		y: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".p3-txt",
			containerAnimation: scrollTween,
			start: "center 80%",
			end: "center 20%",
			id: "1",


		}
	});


	gsap.fromTo(".p4-txt", {
		autoAlpha: 0,
		y: 40,
	}, {
		autoAlpha: 1,
		y: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".p4-txt",
			containerAnimation: scrollTween,
			start: "left 50%",
			end: "center 80%",
			id: "1",


		}
	});
	gsap.from(".panel-pie-item1", {
		autoAlpha: 0,
		scale: 0,
		duration: 0.5,
		delay: 0,
		ease: 'expo.easeOut',
		scrollTrigger: {
			trigger: ".p4-txt",
			containerAnimation: scrollTween,
			start: "center 80%",
			end: "center 20%",
			id: "1",


		}
	});
	gsap.from(".panel-pie-item2", {
		autoAlpha: 0,
		scale: 0,
		duration: 0.5,
		delay: 0.5,
		ease: 'expo.easeOut',
		scrollTrigger: {
			trigger: ".p4-txt",
			containerAnimation: scrollTween,
			start: "center 80%",
			end: "center 20%",
			id: "1",


		}
	});
	gsap.from(".panel-pie-item3", {
		autoAlpha: 0,
		scale: 0,
		duration: 0.5,
		delay: 1,
		ease: 'expo.easeOut',
		scrollTrigger: {
			trigger: ".p4-txt",
			containerAnimation: scrollTween,
			start: "center 80%",
			end: "center 20%",
			id: "1",


		}
	});
	gsap.from(".panel-pie-item4", {
		autoAlpha: 0,
		scale: 0,
		duration: 0.5,
		delay: 1.5,
		ease: 'expo.easeOut',
		scrollTrigger: {
			trigger: ".p4-txt",
			containerAnimation: scrollTween,
			start: "center 80%",
			end: "center 20%",
			id: "1",


		}
	});
	gsap.fromTo(".p5-txt", {
		autoAlpha: 0,
		y: 40,
	}, {
		autoAlpha: 1,
		y: -10,
		ease: "none",
		scrollTrigger: {
			trigger: ".panel-strat",
			containerAnimation: scrollTween,
			start: "left 50%",
			end: "center 80%",
			id: "1",


		}
	});
	gsap.from(".p5-num", {
		autoAlpha: 0,
		scale: 0,
		duration: 0.5,
		delay: 0,
		ease: 'expo.easeOut',
		scrollTrigger: {
			trigger: ".panel-strat",
			containerAnimation: scrollTween,
			start: "center 80%",
			end: "center 20%",
			id: "1",


		}
	});

	const section4 = gsap.timeline({
		scrollTrigger: {
			trigger: "#content",
			start: "top top",
			scrub: 1,
		}
	});
	section4
		.from(".cover", {
			autoAlpha: 1,
		})
		.fromTo("#beginHorizonScroll", {
			autoAlpha: 0,
		}, {
			autoAlpha: 1,
		}, "-=2");



	// Section 5 Desktop

	gsap.from(".section5__timeline1 .eachMenu", {
		scale: 0.5,
		duration: 1,
		ease: 'expo.easeOut'
	})

	const section5TL1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".section5",
			start: "top top",
			end: "100px",
			scrub: 1,
			pin: true
		}
	});
	section5TL1
		.fromTo(".section5__timeline1 .next-btn", {
			autoAlpha: 0
		}, {
			autoAlpha: 1
		})








});












// const stickyEls = document.querySelectorAll('.sticky-wrap');

// stickyEls.forEach(el => {
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: el,
//       start: 'top top',
//       end: '100px',
//       ,
//       toggleActions: 'play none reverse none',
//       scrub: 1,
//     }
//   });
//   tl.to(el, {opacity: 0, yPercent: -10})
// });


// const coverCov1 = gsap.timeline({
//   scrollTrigger: {
//   trigger: ".cover__cov1",
//   start: "top top",
//   end: "bottom bottom",
//   scrub: 1,
//   pin:true
//   }
// });

// const section1TL1 = gsap.timeline({
//   scrollTrigger: {
//   trigger: ".container-content-1",
//   start: "top top",
//   pin:true,
//   scrub:1,
//   }
// });
// section1TL1
// .from(".container-content-1", {
//   xPercent:-100
// })