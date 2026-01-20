const a = prompt("Nhập chuỗi bất kỳ:");
let chuthuong = 0;
let chuhoa = 0;
let so = 0;
let khoaoangtrang = 0;

for (let i = 0; i < a.length; i++) {
  let chart = a.charAt(i);
  if (chart >= "a" && chart <= "z") {
    chuthuong++;
  } else if (chart >= "A" && chart <= "Z") {
    chuhoa++;
  } else if (chart >= "0" && chart <= "9") {
    so++;
  } else if (chart === " ") {
    khoaoangtrang++;
  }
}
console.log(`Số chữ thường: ${chuthuong}`);
console.log(`Số chữ hoa: ${chuhoa}`);
console.log(`Số chữ số: ${so}`);
console.log(`Số khoảng trắng: ${khoaoangtrang}`);
