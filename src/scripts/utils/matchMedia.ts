const matchMedia = (queryStr: string, fn: (matches: boolean) => void): { destroy: () => void } => {
  const mq = window.matchMedia(queryStr);
  const listener = (event: MediaQueryListEvent) => fn(event.matches);

  mq.addEventListener("change", listener);
  fn(mq.matches);

  return {
    destroy: () => mq.removeEventListener("change", listener),
  };
};

export default matchMedia;
