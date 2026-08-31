"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type ChildrenProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  "aria-labelledby"?: string;
};

export function Reveal({ children, className, ...props }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      {...props}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, className, delay = 0 }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function VisualReveal({ children, className, delay = 0 }: ChildrenProps) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, x: 18, scale: 0.985 }} animate={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function MotionCard({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }} whileTap={reduceMotion ? undefined : { scale: 0.99 }} transition={{ type: "spring", stiffness: 360, damping: 27 }}>{children}</motion.div>;
}

export function Stagger({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Interactive({ children, className }: ChildrenProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={className}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
    >
      {children}
    </motion.span>
  );
}
