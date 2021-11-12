const rgbaToHex = (rgba: string) => {
  const [r, g, b, a] = rgba
    .substring(rgba.indexOf("(") + 1, rgba.indexOf(")"))
    .split(", ")
    .map((x) => parseInt(x).toString(16).padStart(2, "0"));

  return "#" + r + g + b;
};

export default rgbaToHex;
