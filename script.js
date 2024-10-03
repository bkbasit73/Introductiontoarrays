const colors = ["Red", "Green", "Blue", 1, "Yellow"];
console.log("Initial Array:", colors);
const firstElement = colors[0];
const lastElement = colors[colors.length - 1];
const middleIndex = Math.floor(colors.length / 2);
const middleElement = colors[middleIndex];
console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
console.log("Middle Element:", middleElement);
console.log("Array Length:", colors.length);
colors.push("Orange");
console.log("After Push:", colors);
colors.shift();
console.log("After Shift:", colors);
colors[1] = "Purple";
console.log("After Modify:", colors);
console.log("Using For Loop:");
for (let i = 0; i < colors.length; i++) {
 console.log(colors[i]);
}
console.log("Using ForEach:");
colors.forEach((color) => {
  console.log(color);
});
const [first, second, ...rest] = colors;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);
console.log("Final Array:", colors);
