import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssFunctions from 'postcss-functions';
import postcssMixins from 'postcss-mixins';
import postcssDiscardComments from 'postcss-discard-comments';

/**
 * Utilities
 */
const isMissing = (value) => value == null || value === 'null' || value === '';

/**
 * PostCSS Functions
 */
const functions = {
  percentage: (value, base) => {
    if (isMissing(value) || isMissing(base)) {
      console.error('\x1b[31m[postcss-functions] percentage: value or base is null\x1b[0m');
      return '0%';
    }
    return `${(parseFloat(value) / parseFloat(base)) * 100}%`;
  },

  vw: (value, viewport) => {
    if (isMissing(value) || isMissing(viewport)) {
      console.error('\x1b[31m[vw] vw: value or viewport is null\x1b[0m');
      return '0vw';
    }
    return `calc(${value} / ${viewport} * 100vw)`;
  },
};

/**
 * PostCSS Mixins Utilities
 */
const addPixel = (value) => {
  if (isMissing(value) || value === 'auto') {
    return value;
  }
  if (typeof value === 'number' || /^-?\d+(\.\d+)?$/.test(value)) {
    return `${value}px`;
  }
  return value;
};

const applyPosition = (atRule, type, ...args) => {
  const decls = [postcss.decl({ prop: 'position', value: type })];
  args.forEach(arg => {
    const parts = String(arg).trim().split(/\s+/);
    const prop = parts[0];
    if (!prop) return;
    const rawValue = parts.slice(1).join(' ');
    let value;
    if (rawValue === '') {
      value = '0';
    } else if (/^-?\d+(\.\d+)?$/.test(rawValue)) {
      value = addPixel(rawValue);
    } else {
      value = rawValue;
    }
    decls.push(postcss.decl({ prop, value }));
  });
  atRule.replaceWith(decls);
};

const createLineHeight = (fontSize, lineHeight) => {
  if (isMissing(fontSize) || isMissing(lineHeight)) {
    console.error('\x1b[31m[postcss-mixins] createLineHeight: fontSize or lineHeight is null\x1b[0m');
    return;
  }
  return postcss.decl({ prop: 'line-height', value: `calc(${lineHeight} / ${fontSize})` });
};

const createLetterSpacing = (letterSpacing) => {
  if (isMissing(letterSpacing)) {
    console.error('\x1b[31m[postcss-mixins] createLetterSpacing: letterSpacing is null\x1b[0m');
    return;
  }
  return postcss.decl({ prop: 'letter-spacing', value: `calc(${letterSpacing} / 1000 * 1em)` });
};

const applyFontProperties = (decls, fontSize, lineHeight, letterSpacing) => {
  if (!isMissing(lineHeight)) {
    decls.push(createLineHeight(fontSize, lineHeight));
  }
  if (!isMissing(letterSpacing)) {
    decls.push(createLetterSpacing(letterSpacing));
  }
};

/**
 * Position Mixins
 */
const mixins = {
  relative: (atRule, ...args) => {
    applyPosition(atRule, 'relative', ...args);
  },
  absolute: (atRule, ...args) => {
    applyPosition(atRule, 'absolute', ...args);
  },
  fixed: (atRule, ...args) => {
    applyPosition(atRule, 'fixed', ...args);
  },
  sticky: (atRule, ...args) => {
    applyPosition(atRule, 'sticky', ...args)
  },
  size: (atRule, width, height = width) => {
    atRule.replaceWith(postcss.decl({ prop: 'height', value: addPixel(height) }), postcss.decl({ prop: 'width', value: addPixel(width) }));
  },
  'calc-line-height': (atRule, fontSize, lineHeight) => {
    atRule.replaceWith(createLineHeight(fontSize, lineHeight));
  },
  'calc-letter-spacing': (atRule, letterSpacing) => {
    atRule.replaceWith(createLetterSpacing(letterSpacing));
  },
  'font-px': (atRule, fontSize, lineHeight, letterSpacing) => {
    if (isMissing(fontSize)) {
      console.error('\x1b[31m[postcss-mixins] font-px: fontSize is null\x1b[0m');
      return;
    }
    const decls = [postcss.decl({ prop: 'font-size', value: `${fontSize}px` })];
    applyFontProperties(decls, fontSize, lineHeight, letterSpacing);
    atRule.replaceWith(decls);
  },
  'font-rem': (atRule, fontSize, lineHeight, letterSpacing) => {
    if (isMissing(fontSize)) {
      console.error('\x1b[31m[postcss-mixins] font-rem: fontSize is null\x1b[0m');
      return;
    }
    const decls = [postcss.decl({ prop: 'font-size', value: `calc(${fontSize} / 10 * 1rem)` })];
    applyFontProperties(decls, fontSize, lineHeight, letterSpacing);
    atRule.replaceWith(decls);
  },
  'font-vw': (atRule, viewport, fontSize, lineHeight, letterSpacing) => {
    if (isMissing(fontSize)) {
      console.error('\x1b[31m[postcss-mixins] font-vw: fontSize is null\x1b[0m');
      return;
    }
    const decls = [postcss.decl({ prop: 'font-size', value: `calc(${fontSize} / ${viewport} * 100vw)` })];
    applyFontProperties(decls, fontSize, lineHeight, letterSpacing);
    atRule.replaceWith(decls);
  },
};

export default {
  plugins: [
    autoprefixer(),
    postcssPresetEnv({
      features: {
        'custom-media-queries': true,
        'custom-properties': false
      }
    }),
    postcssDiscardComments({
      removeAll: false,
      remove: (comment) => !comment.startsWith('!')
    }),
    postcssFunctions({ functions }),
    postcssMixins({ mixins })
  ],
};
