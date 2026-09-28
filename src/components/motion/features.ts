// Loaded on demand by MotionProvider so Motion's animation features stay out of the
// initial bundle. Nothing above the fold needs them: the hero headline is CSS and the
// hero stack diagram uses the standalone animate() function.
import { domAnimation } from "motion/react";

export default domAnimation;
