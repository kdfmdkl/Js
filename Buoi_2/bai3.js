let a = Number(prompt("Nhập A: "));
let b = Number(prompt("Nhập B: "));
let c = Number(prompt("Nhập C: "));
if (a > b && a > c) {
  if (b > a && b > c) {
    if (c > a && c > b) {
      console.log("Số lớn nhất là: ");
    } else {
      console.log("Số nhỏ nhất");
    }
  }
}
