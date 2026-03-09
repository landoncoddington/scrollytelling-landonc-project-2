const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {

  const heroTL = gsap.timeline();
  heroTL
    .fromTo(".hero__content", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 2.0, ease: "power1.out" })
    .fromTo(".hero__content h1", { opacity: 0, y: 60, letterSpacing: "0.3em" }, { opacity: 1, y: 0, letterSpacing: "0em", duration: 1.4, ease: "power3.out" }, "-=1.4")
    .fromTo(".hero__content p", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" }, "-=0.6")
    .fromTo(".hero__scroll-cue", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

  const chapter1TL = gsap.timeline({ delay: 3 });
  chapter1TL
    .fromTo("#kickoff", { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power1.out" })
    .fromTo("#kickoff h2", { opacity: 0, x: -80, rotation: -2 }, { opacity: 1, x: 0, rotation: 0, duration: 0.9, ease: "power3.out" }, "-=0.8")
    .fromTo("#kickoff .section__metaphor", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
    .fromTo("#kickoff .section__content > p", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }, "-=0.3")
    .fromTo("#kickoff .chapter__concept", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.1")
    .fromTo("#kickoff .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4");

  const chapter2TL = gsap.timeline({ delay: 6 });
  chapter2TL
    .fromTo("#first-contact", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power4.out" })
    .fromTo("#first-contact h2", { opacity: 0, x: -100, skewX: 8 }, { opacity: 1, x: 0, skewX: 0, duration: 0.5, ease: "back.out(2.5)" }, "-=0.2")
    .fromTo("#first-contact .section__metaphor", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }, "-=0.2")
    .fromTo("#first-contact .section__content > p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.1, ease: "power3.out" }, "-=0.2")
    .fromTo("#first-contact .chapter__concept", { opacity: 0, scale: 0.88, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "elastic.out(1, 0.6)" }, "-=0.1")
    .fromTo("#first-contact .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4");

  const chapter3TL = gsap.timeline({ delay: 9 });
  chapter3TL
    .fromTo("#jersey-numbers", { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" })
    .fromTo("#jersey-numbers h2", { opacity: 0, y: -60, scale: 1.1 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(2)" }, "-=0.3")
    .fromTo("#jersey-numbers .section__metaphor", { opacity: 0, x: -50, rotation: -1 }, { opacity: 1, x: 0, rotation: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
    .fromTo("#jersey-numbers .section__image img", { opacity: 0, scale: 1.08, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power2.out" }, "-=0.2")
    .fromTo("#jersey-numbers .section__content > p", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.15, ease: "power3.out" }, "-=0.4")
    .fromTo("#jersey-numbers .chapter__concept", { opacity: 0, scale: 0.9, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }, "+=0.1")
    .fromTo("#jersey-numbers .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4");

  const chapter4TL = gsap.timeline({ delay: 12 });
  chapter4TL
    .fromTo("#reading-the-play", { opacity: 0 }, { opacity: 1, duration: 1.0, ease: "power2.out" })
    .fromTo("#reading-the-play h2", { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.6")
    .fromTo("#reading-the-play .section__metaphor", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.55, ease: "power2.out" }, "-=0.3")
    .fromTo("#reading-the-play .section__content > p", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.14, ease: "power2.out" }, "-=0.2")
    .fromTo("#reading-the-play .chapter__concept", { opacity: 0, x: 30, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.6)" }, "-=0.1")
    .fromTo("#reading-the-play .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4");

  const chapter5TL = gsap.timeline({ delay: 15 });
  chapter5TL
    .fromTo("#final-whistle", { opacity: 0 }, { opacity: 1, duration: 2.0, ease: "power1.inOut" })
    .fromTo("#final-whistle h2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.4, ease: "power1.out" }, "-=1.2")
    .fromTo("#final-whistle .section__metaphor", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power1.out" }, "-=0.6")
    .fromTo("#final-whistle .section__image img", { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 1.4, ease: "power1.out" }, "-=0.6")
    .fromTo("#final-whistle .section__content > p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.0, stagger: 0.25, ease: "power1.out" }, "-=0.8")
    .fromTo("#final-whistle .chapter__concept", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1.0, ease: "power1.out" }, "-=0.4")
    .fromTo("#final-whistle .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.out" }, "-=0.6");

}