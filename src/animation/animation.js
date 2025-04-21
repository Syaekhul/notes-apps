import { animate } from "animejs";

animate(".square-right", {
  y: "17rem",
  rotate: {
    to: 360,
    delay: 1000,
  },
  delay: 500,
  loop: true,
  alternate: true,
});

animate(".square-left", {
  y: "-17rem",
  rotate: {
    to: 360,
    delay: 1000,
  },
  delay: 500,
  loop: true,
  alternate: true,
});
