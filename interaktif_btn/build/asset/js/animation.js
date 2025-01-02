//console.clear();
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

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);





/*vp.add("(max-width: 700px)", () => {
	// Mobile
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
		y: 0,
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
		y: 0,
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
		y: 0,
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
		y: 0,
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


*/
vp.add("(min-width: 768px)", () => {
	// Desktop
	$(".panel-0").remove();
});

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
preloader.from('.introCta', {
	autoAlpha: 0,
});

// gsap
// 	.fromTo(".coverTitleSub", {
// 		autoAlpha: 0,
// 		y: 50,
// 	}, {
// 		autoAlpha: 1,
// 		y: 0
// 	}, '-=30');
// gsap.fromTo(".coverTitle", {
// 	autoAlpha: 0,
// 	y: 20
// }, {
// 	autoAlpha: 1,
// 	y: 0
// }, '-=3');

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
	y: 0,
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
	y: 0,
	ease: "none",
	scrollTrigger: {
		trigger: ".p4-txt",
		containerAnimation: scrollTween,
		start: "center 50%",
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
		onEnter: function () {
			startplay2020()
		}

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
		onEnter: function () {
			startplay2021()
		}


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
		onEnter: function () {
			startplay2022()
		}


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
		onEnter: function () {
			startplay2023()
		}


	}
});
gsap.fromTo(".p5-txt", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	scrollTrigger: {
		trigger: ".panel-strat-item0",
		containerAnimation: scrollTween,
		start: "center 50%",
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
		trigger: ".panel-strat-item0",
		containerAnimation: scrollTween,
		start: "center 80%",
		end: "center 20%",
		id: "1",


	}
});
gsap.fromTo(".panel-strat-item0", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	delay: 0,
	scrollTrigger: {
		trigger: ".panel-strat-item0",
		containerAnimation: scrollTween,
		start: "center 50%",
		end: "center 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-strat-item1", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	delay: .2,
	scrollTrigger: {
		trigger: ".panel-strat-item0",
		containerAnimation: scrollTween,
		start: "center 50%",
		end: "center 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-strat-item2", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	delay: .4,
	scrollTrigger: {
		trigger: ".panel-strat-item0",
		containerAnimation: scrollTween,
		start: "center 50%",
		end: "center 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-strat-item3", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	delay: .6,
	scrollTrigger: {
		trigger: ".panel-strat-item0",
		containerAnimation: scrollTween,
		start: "center 50%",
		end: "center 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-strat-item4", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	delay: .8,
	scrollTrigger: {
		trigger: ".panel-strat-item0",
		containerAnimation: scrollTween,
		start: "center 50%",
		end: "center 80%",
		id: "1",


	}
});
gsap.fromTo(".p6-txt", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	scrollTrigger: {
		trigger: ".p6-txt",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});
gsap.fromTo(".p7-txt", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	scrollTrigger: {
		trigger: ".p7-txt",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});

gsap.fromTo(".p8-txt", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	scrollTrigger: {
		trigger: ".p8-txt",
		containerAnimation: scrollTween,
		start: "center 50%",
		end: "center 80%",
		id: "1",


	}
});
gsap.fromTo(".p8-img", {
	x: 50,
}, {
	x: -50,
	ease: "none",
	scrollTrigger: {
		trigger: ".p8-img",
		containerAnimation: scrollTween,
		start: "center 80%",
		end: "center 20%",
		scrub: 1,
		id: "1",


	}
});

gsap.fromTo(".panel-txt-9-wrap", {
	autoAlpha: 0,
	y: 40,
}, {
	autoAlpha: 1,
	y: 0,
	ease: "none",
	scrollTrigger: {
		trigger: ".panel-txt-9-wrap",
		containerAnimation: scrollTween,
		start: "center 50%",
		end: "center 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-eco-item1", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	scrollTrigger: {
		trigger: ".panel-eco-item",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-eco-item2", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	delay: .5,
	scrollTrigger: {
		trigger: ".panel-eco-item",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-eco-item3", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	delay: 1,
	scrollTrigger: {
		trigger: ".panel-eco-item",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-eco-item4", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	delay: 1.5,
	scrollTrigger: {
		trigger: ".panel-eco-item",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});
gsap.fromTo(".panel-eco-item5", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	delay: 2,
	scrollTrigger: {
		trigger: ".panel-eco-item",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});
gsap.fromTo(".creditTitle", {
	autoAlpha: 0,
	x: -80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	duration: .3,
	scrollTrigger: {
		trigger: ".credit",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});
gsap.fromTo(".creditName", {
	autoAlpha: 0,
	x: 80,
}, {
	autoAlpha: 1,
	x: 0,
	ease: "none",
	duration: .3,
	scrollTrigger: {
		trigger: ".credit",
		containerAnimation: scrollTween,
		start: "left 50%",
		end: "left 80%",
		id: "1",


	}
});

gsap.to(".scroll-guide", {
	scrollTrigger: {
		trigger: ".panel-credit",
		containerAnimation: scrollTween,
	},
	opacity: 0
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
	// .fromTo("#beginHorizonScroll", {
	// 	autoAlpha: 0,
	// }, {
	// 	autoAlpha: 1,
	// }, "-=2");
	.fromTo("#beginHorizonScroll", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
	}, "-=8")
	.fromTo(".introImg", {
		autoAlpha: 0,
	}, {
		autoAlpha: 1,
		delay: .5
	}, "-=8");
// });