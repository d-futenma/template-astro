declare global {
  interface Window {
    chrome?: any;
  }
}

const ua = navigator.userAgent;
const platform = navigator.platform;
const iPad = /iPad/i.test(ua) || /iPad/.test(platform);
const iPod = /iPod/i.test(ua) || /iPod/.test(platform);
const iPhone = (/iPhone/i.test(ua) && !iPad) || /iPhone/.test(platform);
const android = /Android/i.test(ua);
const mobile = /Mobile/.test(ua);
const safari = !!ua.match(/safari/i) && !ua.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome;

let supportsPassive = false;
const options = Object.defineProperty({}, "passive", {
  get() {
    return (supportsPassive = true);
  },
});
const noop = () => {};
window.addEventListener("testPassiveEventSupport", noop, options);
window.removeEventListener("testPassiveEventSupport", noop, options);

const detect = {
  hasPassive: supportsPassive,
  isSafari: safari,
  isMac: /Mac OS/.test(ua),
  isWindows: /Windows NT/.test(ua),
  isiPad: iPad,
  isiPod: iPod,
  isiPhone: iPhone,
  isIOS: iPad || iPod || iPhone,
  isAndroidPhone: android && mobile,
  isAndroidTablet: android && !mobile,
  isAndroid: () => {
    const check = /^Google/.test(navigator.vendor) && /Linux |Android/.test(platform) && "ontouchstart" in document.documentElement;
    return android || check;
  },
  isMobileTablet: () => detect.isiPad || detect.isAndroidTablet,
  isMobilePhone: () => detect.isiPhone || detect.isiPod || detect.isAndroidPhone,
  isMobile: () => detect.isAndroid() || detect.isIOS || /BlackBerry/.test(ua),
  getIEVersion: () => {
    const msie = ua.indexOf("MSIE");
    const trident = ua.indexOf("Trident/");
    const edge = ua.indexOf("Edge/");

    if (msie > 0) {
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    if (trident > 0) {
      const rv = ua.indexOf("rv:");
      return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    if (edge > 0) {
      return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
    }

    return false;
  },
  getAndroidVersion: () => {
    if (android) {
      return parseFloat(ua.slice(ua.indexOf("Android") + 8));
    }
    return false;
  },
};

export default detect;
