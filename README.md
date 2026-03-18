# Lost in the Scroll — Learning JavaScript Through Football

## Description

Lost in the Scroll is a scrollytelling site that follows my JavaScript learning journey through the metaphor of walking onto a soccer field for the first time. Each chapter of the site takes a JavaScript concept and maps it to a moment in a match, starting from the kickoff and ending at the final whistle.

The site is built with HTML, CSS, and JavaScript. All the animations are done with GSAP and ScrollTrigger. As you scroll through each section the content reveals itself through scroll triggered animations, SVG drawings, and a couple of scrubbed interactions. Chapter 1 is pinned so the ball bounces  in, the text animates, and the ball rolls while the page lets you keep scrolling. The hero text also slowly drifts as you scroll away from it.

Most of the design choices came from the metaphor itself , the dark navy color palette felt like a stadium at night, the yellow accent is a nod to the yellow card, and each SVG shows up in a sections that it matches.

## Links

- Live site: https://landoncoddington.github.io/scrollytelling-landonc-project-2/
- Repository: https://github.com/landoncoddington/scrollytelling-landonc-project-2

## Tech Stack

- HTML
- CSS 
- JavaScript
- GSAP
- ScrollTrigger
- ScrollSmoother
- Google Fonts (Bebas Neue, Inter)

## Reflection

**Metaphor summary**

Learning JavaScript felt exactly like walking onto a soccer field when you have no idea what you're doing. You don't know the rules, you don't know where to stand, and everything around you is moving faster than you can process. Each chapter maps a JS concept to a moment in the match , the browser is the stadium, console.log is your first touch of the ball, variables are jersey numbers, conditionals are reading the play, and the final whistle is walking off the pitch knowing more than when you walked on.

**One section I'm most proud of**

Chapter 4 - Reading the Play. The tactics board SVG has arrows that draw themselves onto the field one by one with a glow effect as they come in. It was the hardest thing to build on the whole site and I really enjoy the way it came out. It also just makes sense for that chapter since it's about conditionals and decision making, which is exactly what a tactics board is for.

**One bug I solved**

The biggest one was when I added a pinned section to Chapter 1 and it completely broke the layout. All my sections started laying out side by side instead of stacking. I spent a while on it before figuring out it was a `position: relative !important` rule I had added earlier to fix a different problem. Removing it fixed everything.

**One accessibility decision**

I wrapped all the GSAP animations in a prefers-reduced-motion check so if someone has that setting on they still get the full content, just without any of the motion. The CSS also makes sure everything is visible by default, so nothing is hidden if JavaScript doesn't run. The theme toggle has an aria label too, so screen readers know what it does.

**What I would improve with more time**

If I had more time I would love to make each section similar to my pinned section. In my pinned section the ball bounces into the screen once the pin starts, then once all the animations of text elements come into the screen the ball rolls across the screen as you scroll away. It’s nothing insane but it’s a clean touch that I’d like to do more of.
