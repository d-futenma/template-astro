const encode = (input: string): string => {
  return encodeURIComponent(input).replace(/[!'()*]/g, (char: string): string => {
    return '%' + char.charCodeAt(0).toString(16);
  });
};

export default encode;
