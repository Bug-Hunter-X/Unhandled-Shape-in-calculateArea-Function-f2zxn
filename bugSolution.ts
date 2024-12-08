function calculateArea(shape: string, width: number, height?: number, radius?: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return width * height / 2;
    case "circle":
      return Math.PI * radius * radius;
    default:
      throw new Error("Invalid shape");
  }
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5)); // 25
console.log(calculateArea("circle", 0, 0, 5));//78.53981633974483