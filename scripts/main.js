// register plugins
gsap.registerPlugin(ScrollTrigger);

// theme toggle with localStorage
const themeToggle = document.querySelector("#theme-toggle");
const iconSun = document.querySelector("#icon-sun");
const iconMoon = document.querySelector("#icon-moon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (savedTheme === "light") {
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
  }
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  if (next === "light") {
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
  } else {
    iconSun.style.display = "block";
    iconMoon.style.display = "none";
  }
});

// =====================
// REDUCED MOTION CHECK
// =====================
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// =====================
// HERO INTRO
// =====================
const heroTL = gsap.timeline();
heroTL
  .fromTo(".hero__content", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 2.0, ease: "power1.out" })
  .fromTo(".hero__content h1", { opacity: 0, y: 60, letterSpacing: "0.3em" }, { opacity: 1, y: 0, letterSpacing: "0em", duration: 1.4, ease: "power3.out" }, "-=1.4")
  .fromTo(".hero__content p", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" }, "-=0.6")
  .fromTo(".hero__scroll-cue", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4");

if (!prefersReducedMotion) {

gsap.to(".hero__content", {
  scale: 0.88,
  y: 60,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  }
});

  // =====================
  // CHAPTER 1 
  // =====================
const kickoffTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#kickoff",
    start: "top top",
    end: "+=80%",
    pin: true,
    scrub: false,
  }
});

kickoffTL
  .fromTo("#kickoff", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.out" }, "-=0.3")
  .fromTo("#kickoff h2", { opacity: 0, x: -80, rotation: -2 }, { opacity: 1, x: 0, rotation: 0, duration: 0.9, ease: "power3.out" }, "-=0.5")
  .fromTo("#kickoff .section__metaphor", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
  .fromTo("#kickoff .section__content > p", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: "power2.out" }, "-=0.3")
  .fromTo("#kickoff .chapter__concept", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.1")
  .fromTo("#kickoff .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4")
  .to("#soccer-ball", { y: -40, duration: 0.2, ease: "power2.out" })
  .to("#soccer-ball", { y: 0, duration: 0.3, ease: "bounce.out" })
  .to("#soccer-ball", { y: -20, duration: 0.15, ease: "power2.out" })
  .to("#soccer-ball", { y: 0, duration: 0.2, ease: "bounce.out" });

gsap.fromTo("#soccer-ball",
  { x: 0, rotation: 0 },
  {
    x: -800,
    rotation: -720,
    ease: "none",
    scrollTrigger: {
      trigger: "#kickoff",
      start: "center bottom",
      end: "bottom top",
      scrub: true,
    }
  }
);

  // =====================
  // CHAPTER 2 — scroll reveal
  // =====================
  const chapter2TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#first-contact",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  chapter2TL
    .fromTo("#first-contact", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power4.out" })
    .fromTo("#first-contact h2", { opacity: 0, x: -100, skewX: 8 }, { opacity: 1, x: 0, skewX: 0, duration: 0.5, ease: "back.out(2.5)" }, "-=0.2")
    .fromTo("#first-contact .section__metaphor", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" }, "-=0.2")
    .fromTo("#first-contact .section__content > p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.1, ease: "power3.out" }, "-=0.2")
    .fromTo("#first-contact .chapter__concept", { opacity: 0, scale: 0.88, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "elastic.out(1, 0.6)" }, "-=0.1")
    .fromTo("#first-contact .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4");


    const lightsOnTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#first-contact",
    start: "top 80%",
    toggleActions: "play none none reset",
  }
});

lightsOnTL
lightsOnTL
  .fromTo("#chapter2-lights", { opacity: 0 }, { opacity: 0, duration: 0.1 })
  .fromTo("#chapter2-lights", { opacity: 0 }, { opacity: 0.1, duration: 0.05, ease: "none" })
  .to("#chapter2-lights", { opacity: 0, duration: 0.05, ease: "none" })
  .to("#chapter2-lights", { opacity: 0.1, duration: 0.05, ease: "none" })
  .to("#chapter2-lights", { opacity: 0, duration: 0.05, ease: "none" })
  .to("#chapter2-lights", { opacity: 0.2, duration: 0.1, ease: "none" })
  .to("#chapter2-lights", { opacity: 0, duration: 0.05, ease: "none" })
  .to("#chapter2-lights", { opacity: 0.15, duration: 0.3, ease: "power2.out" })
  .fromTo("#kick-player", { opacity: 0 }, { opacity: 0.15, duration: 0.6, ease: "power2.out" }, "-=0.2");

  // =====================
  // CHAPTER 3 — scroll reveal
  // =====================
const chapter3TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#jersey-numbers",
      start: "top 80%",
      toggleActions: "play none none reset",
    }
  });

  chapter3TL
    .fromTo("#jersey-numbers", { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" })
    .fromTo("#jersey-numbers h2", { opacity: 0, y: -60, scale: 1.1 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(2)" }, "-=0.3")
    .fromTo("#jersey-numbers .section__metaphor", { opacity: 0, x: -50, rotation: -1 }, { opacity: 1, x: 0, rotation: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
    .fromTo("#jersey-numbers .section__image img", { opacity: 0, scale: 1.08, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "power2.out" }, "-=0.2")
    .fromTo("#jersey-numbers .section__content > p", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.15, ease: "power3.out" }, "-=0.4")
    .fromTo("#jersey-numbers .chapter__concept", { opacity: 0, scale: 0.9, y: 15 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" }, "+=0.1")
    .fromTo("#jersey-numbers .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4")
    .fromTo("#jersey-number", { opacity: 0, y: 5 }, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(2)" }, "-=0.2")
    .fromTo("#jersey-name", { opacity: 0, y: 3 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.3");
  // =====================
  // CHAPTER 4 — scroll reveal
  // =====================
  const chapter4TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#reading-the-play",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  chapter4TL
    .fromTo("#reading-the-play", { opacity: 0 }, { opacity: 1, duration: 1.0, ease: "power2.out" })
    .fromTo("#reading-the-play h2", { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.6")
    .fromTo("#reading-the-play .section__metaphor", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.55, ease: "power2.out" }, "-=0.3")
    .fromTo("#reading-the-play .section__content > p", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.14, ease: "power2.out" }, "-=0.2")
    .fromTo("#reading-the-play .chapter__concept", { opacity: 0, x: 30, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.6)" }, "-=0.1")
    .fromTo("#reading-the-play .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, "-=0.4");

    const tacticsTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#reading-the-play",
    start: "top 80%",
    toggleActions: "play none none reset",
  }
});

const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const arrow3 = document.querySelector("#arrow3");
const arrow1head = document.querySelector("#arrow1head");
const arrow2head = document.querySelector("#arrow2head");
const arrow3head = document.querySelector("#arrow3head");

if (arrow1 && arrow2 && arrow3) {
  const len1 = arrow1.getTotalLength();
  const len2 = arrow2.getTotalLength();
  const len3 = arrow3.getTotalLength();
  const headLen = arrow1head.getTotalLength();

  gsap.set("#arrow1", { strokeDasharray: len1, strokeDashoffset: len1 });
  gsap.set("#arrow2", { strokeDasharray: len2, strokeDashoffset: len2 });
  gsap.set("#arrow3", { strokeDasharray: len3, strokeDashoffset: len3 });
  gsap.set("#arrow1head, #arrow2head, #arrow3head", { strokeDasharray: headLen, strokeDashoffset: headLen });

  tacticsTL
    .fromTo("#tactics-svg", { opacity: 0 }, { opacity: 0.15, duration: 0.5, ease: "power2.out" })
    .to("#arrow1", { strokeDashoffset: 0, duration: 0.8, ease: "power2.out", filter: "drop-shadow(0 0 6px white)" }, "-=0.2")
    .to("#arrow1head", { strokeDashoffset: 0, duration: 0.3, ease: "power2.out" }, "-=0.1")
    .to("#arrow2", { strokeDashoffset: 0, duration: 0.8, ease: "power2.out", filter: "drop-shadow(0 0 6px white)" }, "-=0.3")
    .to("#arrow2head", { strokeDashoffset: 0, duration: 0.3, ease: "power2.out" }, "-=0.1")
    .to("#arrow3", { strokeDashoffset: 0, duration: 0.8, ease: "power2.out", filter: "drop-shadow(0 0 6px white)" }, "-=0.3")
    .to("#arrow3head", { strokeDashoffset: 0, duration: 0.3, ease: "power2.out" }, "-=0.1");

    gsap.to("#arrow1, #arrow2, #arrow3, #arrow1head, #arrow2head, #arrow3head", {
  opacity: 0.3,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  delay: 1.5
});
}
  // =====================
  // CHAPTER 5 — scroll reveal
  // =====================
  const chapter5TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#final-whistle",
      start: "top 80%",
      toggleActions: "play none none none",
    }
  });

  chapter5TL
    .fromTo("#final-whistle", { opacity: 0 }, { opacity: 1, duration: 2.0, ease: "power1.inOut" })
    .fromTo("#final-whistle h2", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.4, ease: "power1.out" }, "-=1.2")
    .fromTo("#final-whistle .section__metaphor", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power1.out" }, "-=0.6")
    .fromTo("#final-whistle .section__image img", { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 1.4, ease: "power1.out" }, "-=0.6")
    .fromTo("#final-whistle .section__content > p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.0, stagger: 0.25, ease: "power1.out" }, "-=0.8")
    .fromTo("#final-whistle .chapter__concept", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1.0, ease: "power1.out" }, "-=0.4")
    .fromTo("#final-whistle .chapter__concept p", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power1.out" }, "-=0.6");

}

gsap.fromTo("#whistle-svg",
  { opacity: 0, rotation: -30 },
  { opacity: 1, rotation: 0, duration: 0.6, ease: "back.out(2)",
    scrollTrigger: {
      trigger: "#final-whistle",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    onComplete: () => {
      gsap.to("#whistle-top, #whistle-left, #whistle-right", {
        x: -3,
        duration: 0.06,
        repeat: 8,
        yoyo: true,
        ease: "none",
        transformOrigin: "center center"
      });
    }
  }
);