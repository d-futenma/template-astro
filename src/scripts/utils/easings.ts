export const baseEasings: { [key: string]: (t: number) => number } = {
  linear: (t: number): number => {
    return t;
  },

  easeInSine: (t: number): number => {
    return 1 - Math.cos((t * Math.PI) / 2);
  },

  easeOutSine: (t: number): number => {
    return Math.sin((t * Math.PI) / 2);
  },

  easeInOutSine: (t: number): number => {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  },

  easeInQuad: (t: number): number => {
    return t * t;
  },

  easeOutQuad: (t: number): number => {
    return 1 - (1 - t) * (1 - t);
  },

  easeInOutQuad: (t: number): number => {
    if (t < 0.5) {
      return 2 * t * t;
    } else {
      return 1 - Math.pow(-2 * t + 2, 2) / 2;
    }
  },

  easeInCubic: (t: number): number => {
    return t ** 3;
  },

  easeOutCubic: (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  },

  easeInOutCubic: (t: number): number => {
    if (t < 0.5) {
      return 4 * t ** 3;
    } else {
      return 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
  },

  easeInQuart: (t: number): number => {
    return t ** 4;
  },

  easeOutQuart: (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  },

  easeInOutQuart: (t: number): number => {
    if (t < 0.5) {
      return 8 * t ** 4;
    } else {
      return 1 - Math.pow(-2 * t + 2, 4) / 2;
    }
  },

  easeInQuint: (t: number): number => {
    return t ** 5;
  },

  easeOutQuint: (t: number): number => {
    return 1 - Math.pow(1 - t, 5);
  },

  easeInOutQuint: (t: number): number => {
    if (t < 0.5) {
      return 16 * t ** 5;
    } else {
      return 1 - Math.pow(-2 * t + 2, 5) / 2;
    }
  },

  easeInExpo: (t: number): number => {
    if (t === 0) {
      return 0;
    } else {
      return Math.pow(2, 10 * t - 10);
    }
  },

  easeOutExpo: (t: number): number => {
    if (t === 1) {
      return 1;
    } else {
      return 1 - Math.pow(2, -10 * t);
    }
  },

  easeInOutExpo: (t: number): number => {
    if (t === 0) {
      return 0;
    } else if (t === 1) {
      return 1;
    } else if (t < 0.5) {
      return Math.pow(2, 20 * t - 10) / 2;
    } else {
      return (2 - Math.pow(2, -20 * t + 10)) / 2;
    }
  },

  easeInCirc: (t: number): number => {
    return 1 - Math.sqrt(1 - Math.pow(t, 2));
  },

  easeOutCirc: (t: number): number => {
    return Math.sqrt(1 - Math.pow(t - 1, 2));
  },

  easeInOutCirc: (t: number): number => {
    if (t < 0.5) {
      return (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2;
    } else {
      return (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
    }
  },

  easeInBack: (t: number): number => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },

  easeOutBack: (t: number): number => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },

  easeInOutBack: (t: number): number => {
    const c2 = 1.70158 * 1.525;
    if (t < 0.5) {
      return (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2;
    } else {
      return (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (2 * t - 2) + c2) + 2) / 2;
    }
  },

  easeInElastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    if (t === 0) {
      return 0;
    } else if (t === 1) {
      return 1;
    } else {
      return -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
    }
  },

  easeOutElastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    if (t === 0) {
      return 0;
    } else if (t === 1) {
      return 1;
    } else {
      return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    }
  },

  easeInOutElastic: (t: number): number => {
    const c5 = (2 * Math.PI) / 4.5;
    if (t === 0) {
      return 0;
    } else if (t === 1) {
      return 1;
    } else if (t < 0.5) {
      return -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2;
    } else {
      return (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 + 1;
    }
  },

  easeOutBounce: (t: number): number => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      t -= 1.5 / d1;
      return n1 * t * t + 0.75;
    } else if (t < 2.5 / d1) {
      t -= 2.25 / d1;
      return n1 * t * t + 0.9375;
    } else {
      t -= 2.625 / d1;
      return n1 * t * t + 0.984375;
    }
  },

  easeInBounce: (t: number): number => {
    return 1 - baseEasings.easeOutBounce(1 - t);
  },

  easeInOutBounce: (t: number): number => {
    if (t < 0.5) {
      return (1 - baseEasings.easeOutBounce(1 - 2 * t)) / 2;
    } else {
      return (1 + baseEasings.easeOutBounce(2 * t - 1)) / 2;
    }
  },
};

function clamp(value: number, min = 0, max = 1): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export type ParametricEasing = (t: number, duration?: number, delay?: number) => number;

export const easings: Record<string, ParametricEasing> = {};

for (const key in baseEasings) {
  const coreEasing = baseEasings[key];
  easings[key] = (t: number, duration = 1, delay = 0): number => {
    const normalized = clamp((t - delay) / duration);
    return coreEasing(normalized);
  };
}
