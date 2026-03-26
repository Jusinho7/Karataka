export function animStyle(visible, options = {}) {
  const {
    direction = "up",  // up | down | left | right | fade
    delay = 0,
    duration = 0.7,
  } = options;

  const transforms = {
    up: `translateY(${visible ? 0 : 40}px)`,
    down: `translateY(${visible ? 0 : -40}px)`,
    left: `translateX(${visible ? 0 : 60}px)`,
    right: `translateX(${visible ? 0 : -60}px)`,
    fade: "none",
  };

  return {
    opacity: visible ? 1 : 0,
    transform: transforms[direction],
    transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
  };
}