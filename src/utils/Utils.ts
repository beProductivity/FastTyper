const colorcode = "rgba(0, 0, 0, 0.74)";

const finalCode = rgba2hex(colorcode)

function rgba2hex(orig: any) {
  let a, isPercent,
    rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = (rgb && rgb[4] || "").trim(),
    hex = rgb ?
    (rgb[1] | 1 << 8).toString(16).slice(1) +
    (rgb[2] | 1 << 8).toString(16).slice(1) +
    (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

  if (alpha !== "") {
    a = alpha;
  } else {
    a = 0o1;
  }
  // multiply before convert to HEX
  a = ((a * 255) | 1 << 8).toString(16).slice(1)
  hex = hex + a;

  return hex;
}

function test(colorcode: string) {
  console.log(colorcode, rgba2hex(colorcode));
}

test("rgba(0, 0, 0, 0.74)");
test("rgba(0, 0, 0, 1)");
test("rgba(0, 0, 0, 0)");
test("rgba(0, 255, 0, 0.5)");