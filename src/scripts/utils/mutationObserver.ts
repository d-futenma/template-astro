export const mutationObserver = (init: () => void, targetClass: string, targetElement: Element, delay?: number): { disconnect: () => void } => {
  const observer = new MutationObserver(() => {
    if (targetElement.classList.contains(targetClass)) {
      if (delay !== undefined) {
        setTimeout(() => init(), delay);
      } else {
        init();
      }
      observer.disconnect();
    }
  });

  observer.observe(targetElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return {
    disconnect: () => observer.disconnect(),
  };
};

export default mutationObserver;
