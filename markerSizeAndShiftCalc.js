// this function computes the mark size and shift needed for diy sundial
function computeMarkSizeAndShift(data) {
  function toMinutes(str) {
    const [h, m] = str.split(":").map(Number);
    return h * 60 + m;
  }

  return data.map(({ date, sunrise, sunset }) => {
    const s1 = toMinutes(sunrise);
    const s2 = toMinutes(sunset);
    const dayLength = s2 - s1;
    const ratio = dayLength / 720;
    const markSize = Math.round(ratio * 60);
    const mid = (s1 + s2) / 2;
    const shift = Math.round(mid - 720);
    return { date, markSize, shift };
  });
}

// change the input data according to your location and prefrences (add sunrise and sunset times in 24 hours format)
let inputData = [
  { date: "yyyy-mm-dd", sunrise: "6:44", sunset: "17:07" },
  // { date: "yyyy-mm-dd", sunrise: "hh:mm", sunset: "hh:mm" },
  // { date: "yyyy-mm-dd", sunrise: "hh:mm", sunset: "hh:mm" },
];

console.log(computeMarkSizeAndShift(inputData));
