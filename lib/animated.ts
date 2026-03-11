"use client";

import type React from "react";
import { animated } from "@react-spring/web";

type AnimatedProps = {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  "aria-hidden"?: boolean | "true" | "false";
  ref?: React.Ref<HTMLElement>;
};

type AnimatedAnchorProps = AnimatedProps & {
  href?: string;
  "aria-label"?: string;
};

export const A = {
  div: animated.div as unknown as React.FC<AnimatedProps>,
  p: animated.p as unknown as React.FC<AnimatedProps>,
  span: animated.span as unknown as React.FC<AnimatedProps>,
  a: animated.a as unknown as React.FC<AnimatedAnchorProps>,
};
